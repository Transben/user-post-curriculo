require('dotenv').config();
const chalk = require('chalk')
const mysql = require('mysql2');

const pool = mysql.createPool({
    host: process.env.MYSQLHOST,
    port: process.env.MYSQLPORT,
    user: process.env.MYSQLUSER,
    password: process.env.MYSQLPASSWORD,
    database: process.env.MYSQLDATABASE
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