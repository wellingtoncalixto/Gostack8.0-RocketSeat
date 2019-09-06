import { isBefore, parseISO } from 'date-fns';
import Meetup from '../models/Meetup';

class MeetupController {
  async index(req, res) {
    const { page = 1 } = req.query;

    const user_id = req.userId;

    const meetup = await Meetup.findAll({
      where: {
        user_id,
      },
      order: ['date'],
      attributes: ['title', 'date'],
      limit: 20,
      offset: (page - 1) * 20,
    });

    return res.json(meetup);
  }

  async store(req, res) {
    const { title, description, location, date, file_id } = req.body;

    const user_id = req.userId;

    if (isBefore(parseISO(date), new Date())) {
      return res.status(401).json({ error: 'date is not valid' });
    }

    const meetup = await Meetup.create({
      title,
      description,
      location,
      date,
      user_id,
      file_id,
    });

    return res.json(meetup);
  }

  async update(req, res) {
    const meetup = await Meetup.findByPk(req.params.id);

    const user_id = req.userId;

    if (!meetup) {
      return res.status(401).json({ error: 'Meetup dont not exit' });
    }

    if (meetup.user_id !== user_id) {
      return res.status(401).json({ error: 'Not authorized' });
    }

    if (isBefore(parseISO(req.body.date), new Date())) {
      return res.status(401).json({ error: 'Date is not valid' });
    }

    if (meetup.past) {
      return res.status(400).json({ error: "Can't update past meetups." });
    }
    await meetup.update(req.body);

    return res.json(meetup);
  }

  async delete(req, res) {
    const meetup = await Meetup.findByPk(req.params.id);

    const user_id = req.userId;

    if (meetup.user_id !== user_id) {
      return res.status(401).json({ error: 'You not have permision' });
    }

    if (meetup.past) {
      return res.status(401).json({ error: "You can't delete a past meetups" });
    }

    await meetup.destroy();

    return res.send();
  }
}

export default new MeetupController();
