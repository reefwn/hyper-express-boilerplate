const db = require('../services/db')

const getExample = async () => {
  return db('example').select('*')
}

const createExample = async (data) => {
  return db('example').insert(data, '*')
}

const getExampleById = async (id) => {
  return db('example').where({ id }).first()
}

const updateExample = async (id, body) => {
  body.updated_at = new Date()
  return db('example').where({ id }).update(body, ['*'])
}

const deleteExample = async (id) => {
  return db('example').where({ id }).delete()
}

module.exports = {
  getExample,
  createExample,
  getExampleById,
  updateExample,
  deleteExample
}