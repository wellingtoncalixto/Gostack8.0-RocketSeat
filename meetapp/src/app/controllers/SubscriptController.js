/* eslint-disable consistent-return */
import { Op } from 'sequelize';
import Subscript from '../models/Subscript';
import Meetup from '../models/Meetup';
import User from '../models/User';
import Mail from '../../lib/Mail';

import Notification from '../schemas/Notification';

class SubscriptController {
  async index(req, res) {
    const subscriptions = await Subscript.findAll({
      where: { user_id: req.userId },
      include: [
        {
          model: Meetup,
          where: {
            date: {
              [Op.gt]: new Date(),
            },
          },
          required: true,
        },
      ],
      order: [[Meetup, 'date']],
    });

    return res.json(subscriptions);
  }

  async store(req, res) {
    const user = await User.findByPk(req.userId);

    const meetup = await Meetup.findByPk(req.body.meetup_id, {
      include: [
        {
          model: User,
          as: 'user',
          attributes: ['name', 'email'],
        },
      ],
    });

    if (meetup.user_id === user.id) {
      return res
        .status(401)
        .json({ error: "You can't subscript in your meetup" });
    }

    if (meetup.past) {
      return res
        .status(401)
        .json({ error: "You can't subscript in a past meetup" });
    }

    const checkDate = await Subscript.findOne({
      where: {
        user_id: user.id,
      },
      include: [
        {
          model: Meetup,
          as: 'meetup',
          required: true,
          where: {
            date: meetup.date,
          },
        },
      ],
    });

    if (checkDate) {
      return res
        .status(400)
        .json({ error: "Can't subscribe to two meetups at the same time" });
    }
    const subscript = await Subscript.create({
      meetup_id: meetup.id,
      user_id: user.id,
    });

    // Notification to new subscript

    await Notification.create({
      content: `Nava inscrição no meetup de ${meetup.title}`,
      user: meetup.user_id,
    });

    await Mail.sendMail({
      to: `${meetup.user.name} <${meetup.user.email}>`,
      subject: 'Agendamento Confirmado',
      text: 'Houve uma nova inscrição no meetup',
    });
    return res.json({
      sub: subscript,
      meet: meetup,
    });
  }
}
export default new SubscriptController();
