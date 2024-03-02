const configs = require('./configs')
const HyperExpress = require('hyper-express');
const webserver = new HyperExpress.Server();

const run = () => {
  webserver.use('/example', require('./routes/example'));
  
  webserver.listen(configs.port)
  .then((socket) => console.log(`Webserver started on port ${configs.port}`))
  .catch((error) => console.log(`Failed to start webserver on port ${configs.port}`));
}

run()