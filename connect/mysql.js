require('dotenv').config();
const chalk = require('chalk')
const mysql = require('mysql2');

const pool = mysql.createPool({
    host: process.env.HOST_DB,
    port: process.env.PORT_DB,
    user: process.env.USER_DB,
    password: process.env.PASSWORD_DB,
    database: process.env.DATABASE_DB
})

try {
    pool.getConnection((err, connection) => {
        if (err) {
            console.log(chalk.red('ERRO AO SE CONEXÃO COM O BANCO DE DADOS!'));
        }
        if (connection) {
            console.log(chalk.green('SUCESSO AO SE CONEXÃO COM O BANCO DE DADOS!'));
            connection.release();
        }
    });
} catch {
    console.error(`Erro: ${err}`);
}

exports.pool = pool;