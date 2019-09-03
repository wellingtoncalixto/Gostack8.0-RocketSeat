import * as yup from 'yup';
import { startOfHour, parseISO, isBefore, format } from 'date-fns';
import
import Appointmente from '../models/Appointments';
import User from '../models/User';
import File from '../models/File';
import Notification from '../schemas/Notification'

class AppointmentController {
  async index(req, res) {
    const { page = 1 } = req.query;
    const appointments = await Appointmente.findAll({
      where: {
        user_id: req.userId,
        canceled_at: null,
      },
      order: ['date'],
      attributes: ['id', 'date'],
      limit: 20,
      offset: (page - 1) * 20,
      include: [
        {
          model: User,
          as: 'provider',
          attributes: ['id', 'name'],
          include: [
            {
              model: File,
              as: 'avatar',
              attributes: ['id', 'path', 'url'],
            },
          ],
        },
      ],
    });

    return res.json(appointments);
  }

  async store(req, res) {
    const schema = yup.object().shape({
      provider_id: yup.number().required(),
      date: yup.date().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails' });
    }

    const { provider_id, date } = req.body;

    // verifica se é provedor

    const isProvader = await User.findOne({
      where: { id: provider_id, provider: true },
    });

    if (!isProvader) {
      return res
        .status(401)
        .json({ error: 'You can only create appointments with providers' });
    }

    const hourStart = startOfHour(parseISO(date));

    // verifica se o dia já nao passou
    if (isBefore(hourStart, new Date())) {
      return res.status(400).json({ error: 'past date is not permit' });
    }

    // verifica se a data é valida
    const checkDate = await Appointmente.findOne({
      where: {
        provider_id,
        canceled_at: null,
        date: hourStart,
      },
    });

    if (checkDate) {
      return res
        .status(400)
        .json({ error: 'Appointment date is not available' });
    }

    const appointment = await Appointmente.create({
      user_id: req.userId,
      provider_id,
      date,
    });
    
    // Notyfy appointment provider
    //
    //

    const user = await User.findByPk(req.userId)
    const formattedDate = format(
      hourStart,
      "'dia' d 'de' MMMM', às' H:mm'h'"
    )
    await Notification.create({
      content: `Novo agendamento de ${user.name} para o ${formattedDate }`,
      user: provider_id,
    })

    return res.json(appointment);
  }
}

export default new AppointmentController();
