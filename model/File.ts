// models/File.ts

import { Model, DataTypes } from 'sequelize';
import { sequelize } from './Sequalize'; // Adjust the path to your Sequelize instance file

class File extends Model {}

File.init(
  {
    id: {
      type: DataTypes.STRING,
      primaryKey: true
    },
    filename: {
      type: DataTypes.STRING,
    },
    url: {
      type: DataTypes.STRING,
    },
    length: {
      type: DataTypes.INTEGER,
    },
    encoder: {
      type: DataTypes.STRING,
    },
    uploaddate: {
      type: DataTypes.DATE,
    },
    filesize: {
      type: DataTypes.INTEGER,
    },
    audio: {
      type: DataTypes.STRING,
    },
  },
  {
    sequelize,
    modelName: 'files',
    timestamps: false
  }
);

export default File;
