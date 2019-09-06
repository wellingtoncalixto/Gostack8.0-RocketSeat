/* eslint-disable consistent-return */
import Subscript from '../models/Subscript';
import Meetup from '../models/Meetup';
import User from '../models/User';

class SubscriptController {
  async store(req, res) {
    const user = await User.findByPk(req.userId);
    const subscripts = await Subscript.findAll({ where: { user_id: user.id } });

    const meetup = await Meetup.findByPk(req.body.meetup_id, {
      include: [
        {
          model: User,
          attributes: ['name', 'email'],
        },
      ],
      attributes: ['id', 'title', 'description', 'location', 'date'],
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

    return res.json({
      sub: subscript,
      meet: meetup,
    });
  }
}
export default new SubscriptController();
