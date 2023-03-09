const express = require('express');
const router = express.Router();
const mysql = require('../connect/mysql').pool;

/* POST ADD UM PRODUTO */
router.post('/', (req, res)=> {
    mysql.getConnection((error, conn) => {

        if(error) {
            console.log(error)
            return res.status(500).send({error: error})
        }

        conn.query(
            process.env.QUERY_POST,
            [
                req.body.nomeCompleto, req.body.CPF, req.body.telefoneContato, 
                req.body.email, req.body.CEP, req.body.estado, 
                req.body.bairro, req.body.rua, req.body.numeroCasa, 
                req.body.complemento, req.body.nomeEmpresa1, req.body.cargoEmpresa1,
                req.body.dataInicioEmpresa1, req.body.dataFinalEmpresa1, req.body.EmpregoAtualEmpresa1,
                req.body.semExperienciaEmpresa1, req.body.exercicioCargoAntigoEmpresa1, req.body.nomeEmpresa2,
                req.body.cargoEmpresa2, req.body.dataInicioEmpresa2, req.body.dataFinalEmpresa2,
                req.body.exercicioCargoAntigoEmpresa2, req.body.vagaPretendida, req.body.aceitoTermo,
                req.body.status, req.body.dataEnvioCurriculo
            ],
            (error, result, fields) => {
                conn.release();

                if(error) {
                    console.log(error)
                    return res.status(500).send({error: error})
                }

                const response = {
                    mensagem: 'Dados registrados com sucesso',
                    produtoCriado: {

                        id: `${result.id} criada com sucesso!`,
                        request: {
                            tipo: 'POST',
                            descricao: 'Adicionar um novo registro',
                        }
                    }
                }
                return res.status(201).send({response});
            }
        )
    })
});

module.exports = router;