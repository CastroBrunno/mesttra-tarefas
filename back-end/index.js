//importamos o express
//API (Application Program Interface)
const express = require('express');
const crypto = require('crypto');
const cors = require('cors');
const app = express();//inicializa um servidor web com express

//fala pro express ultilizar middleware para trabalharmos com JSON
app.use(express.json());

//uso do middlaware para resolver problemas de cors
app.use(cors());

//fala pro express ultilizar o middleware para trabalharmos com json
app.use(express.json());

//criar uma lista de tarefas pre cadastrada
const tarefas = [
    {
        id: crypto.randomUUID(),
        text: 'Ir ao mercado',
        prazo: '2 Dias'
    },
    {
        id: crypto.randomUUID(),
        text: 'estudar sobre git',
        prazo: '3 dias'
    },
    {
        id: crypto.randomUUID(),
        text: 'estudar sobre git',
        prazo: '3 dias'
    }
]

//rest - get/post/put/delete
//crud - Create/ read / update / delete
app.get('/', (req, res)=> {
    res.send('Ola galera!')
});

//rota que lista as tarefas cadastradas
app.get('/tarefas', (req, res)=>{
    res.send(tarefas);
});

// Rota que busca uma tarefa especifica
app.get('/tarefas/:id', (req, res) => {
    //acessar o parametro da URl
    const idParam = req.params.id;
    
    //buscar a tarefa unica na lista de acordo com o seu id
    const tarefa = tarefas.find((tarefa) => tarefa.id == idParam);
    res.send(tarefa)
})


//defino uma porta de rede para rodar o meu servidor web
const port = 3000;
app.listen(port, () => {
    console.log('O app esta na porta 3000')
});
