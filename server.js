const chalk = require('chalk');
const http = require('http');
const app = require('./app');
const port = process.env.PORT || 3200;
const server = http.createServer(app);
require('dotenv').config()

server.listen(port, () => {
    console.log(chalk.green(`SERVIDOR LOCAL RODANDO EM http://localhost:${port}`))
});