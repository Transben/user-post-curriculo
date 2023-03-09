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
            'INSERT INTO tabelaMotorista (nomeCompleto,CPF,telefoneContato,email,CEP,estado,bairro,rua,numeroCasa,complemento,nomeEmpresa1,cargoEmpresa1,dataInicioEmpresa1,dataFinalEmpresa1,EmpregoAtualEmpresa1,semExperienciaEmpresa1,exercicioCargoAntigoEmpresa1,nomeEmpresa2,cargoEmpresa2,dataInicioEmpresa2,dataFinalEmpresa2,exercicioCargoAntigoEmpresa2,nomeEmpresa3,cargoEmpresa3,dataInicioEmpresa3,dataFinalEmpresa3,exercicioCargoAntigoEmpresa3,vagaPretendida,aceitoTermo,numeroCNH,categoriaCNH,validadeCNH,status,dataEnvioCurriculo) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)',
            [
                req.body.nomeCompleto,
                req.body.CPF, 
                req.body.telefoneContato, 
                req.body.email, 
                req.body.CEP, 
                req.body.estado, 
                req.body.bairro, 
                req.body.rua, 
                req.body.numeroCasa, 
                req.body.complemento,
                req.body.nomeEmpresa1, 
                req.body.cargoEmpresa1,
                req.body.dataInicioEmpresa1, 
                req.body.dataFinalEmpresa1, 
                req.body.EmpregoAtualEmpresa1,
                req.body.semExperienciaEmpresa1, 
                req.body.exercicioCargoAntigoEmpresa1, 
                req.body.nomeEmpresa2,
                req.body.cargoEmpresa2, 
                req.body.dataInicioEmpresa2, 
                req.body.dataFinalEmpresa2,
                req.body.exercicioCargoAntigoEmpresa2, 
                req.body.nomeEmpresa3,
                req.body.cargoEmpresa3, 
                req.body.dataInicioEmpresa3, 
                req.body.dataFinalEmpresa3,
                req.body.exercicioCargoAntigoEmpresa3, 
                req.body.vagaPretendida, 
                req.body.aceitoTermo,
                req.body.numeroCNH,
                req.body.categoriaCNH,
                req.body.validadeCNH,
                req.body.status, 
                req.body.dataEnvioCurriculo
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