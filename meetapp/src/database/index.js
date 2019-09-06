import Sequelize from 'sequelize';

import User from '../app/models/User';
import File from '../app/models/File';
import Meetup from '../app/models/Meetup';
import Subscript from '../app/models/Subscript';

import databaseConfig from '../config/database';

const models = [User, File, Meetup, Subscript];

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.conection = new Sequelize(databaseConfig);

    models.map(model => model.init(this.conection));
    models.map(
      model => model.associate && model.associate(this.conection.models)
    );
  }
}

export default new Database();
