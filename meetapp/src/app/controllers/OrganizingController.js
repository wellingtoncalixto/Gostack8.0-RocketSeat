import Meetup from '../models/Meetup';

class OrganizingController {
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
}
export default new OrganizingController();
