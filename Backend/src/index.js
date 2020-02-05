const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const routes = require('./routes');

const app = express();

mongoose.connect('mongodb+srv://phvds:phvds@cluster0-vzapq.mongodb.net/phvdstest?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3333);


/* Métodos HTTP: GET, POST, PUT, DELETE */

/* 
Tipos de parâmetros: 
    Query Params : request.query(Filtros, ordenação, paginação, ...)
    Route Params: request.params(Identificar um recurso na alteracao ou remocao)
    Body: request.body (Dados para criacao ou alteracao de um registro)
*/

// MongoDB (Banco não-relacional)