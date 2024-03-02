const HyperExpress = require('hyper-express');
const controller = require('../controllers/example');

const exampleRouter = new HyperExpress.Router();

exampleRouter.get('/', controller.getExampleController)
exampleRouter.post('/', controller.createExampleController)
exampleRouter.get('/:id', controller.getExampleByIdController)
exampleRouter.patch('/:id', controller.updateExampleController)
exampleRouter.delete('/:id', controller.deleteExampleController)

module.exports = exampleRouter