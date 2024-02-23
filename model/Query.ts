import { Model, DataTypes } from 'sequelize';
import { sequelize } from './Sequalize2'; // Adjust the path to your Sequelize instance file

class Query extends Model {
	id: any;
}

Query.init(
  {
    id: {
      type: DataTypes.STRING,
      primaryKey: true,
    },
    query: {
      type: DataTypes.STRING,
    },
  },
  {
    sequelize,
    modelName: 'queries',
    timestamps: false
  }
);

export default Query;