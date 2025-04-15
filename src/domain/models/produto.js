// src/domain/models/produto.js

const { DataTypes } = require('sequelize');
const sequelize = require('../../config/database'); // adaptado ao seu projeto

const Produto = sequelize.define('Produto', {
  id_produto: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  nome: {
    type: DataTypes.STRING,
    allowNull: false
  },
  descricao: {
    type: DataTypes.TEXT,
    allowNull: true
  },
  preco: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false
  },
  id_categoria: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'Categorias', // Nome da tabela de destino
      key: 'id_categoria'
    }
  },
  id_cafeteria: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'Cafeterias',
      key: 'id_cafeteria'
    }
  }
}, {
  tableName: 'produtos',
  timestamps: false
});

module.exports = Produto;
