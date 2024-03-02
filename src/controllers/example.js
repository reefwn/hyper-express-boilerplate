const exampleSvc = require('../services/example')

const getExampleController = async (req, res) => {
  const example = await exampleSvc.getExample()
  res.json({ example })
}

const createExampleController = async (req, res) => {
  const body = await req.json()
  const example = await exampleSvc.createExample(body)
  res.status(201).json({ example })
}

const getExampleByIdController = async (req, res) => {
  const params = await req.path_parameters
  const example = await exampleSvc.getExampleById(params.id)
  res.json({ example })
}

const updateExampleController = async (req, res) => {
  const params = await req.path_parameters
  const body = await req.json()
  const example = await exampleSvc.updateExample(params.id, body)
  res.json({ example })
}

const deleteExampleController = async (req, res) => {
  const params = await req.path_parameters
  await exampleSvc.deleteExample(params.id)
  res.status(204).send()
}

module.exports = {
  getExampleController,
  createExampleController,
  getExampleByIdController,
  updateExampleController,
  deleteExampleController
}