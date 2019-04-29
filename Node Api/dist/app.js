"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mysql_factory_1 = require("./mysql_factory");
var express = require('express'); //importacao do pacote
var app = express(); //instanciando express
var cors = require('cors');
var bodyParser = require('body-parser');
//const app : express.Application = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extend: false }));
app.get('/tamanho', function (req, res, next) {
    var tamanhos = [];
    var tamanhosSelecionados = 'select * from tamanho';
    console.log(tamanhosSelecionados);
    new mysql_factory_1.MySQLFactory().getConnection().select(tamanhosSelecionados).subscribe(function (data) {
        data.forEach(function (element) {
            tamanhos.push({
                id: element.idTamanho,
                name: element.tamanho,
            });
        });
        res.send(tamanhos);
        //console.log("Deu MUITO Certo mesmo1!!!")
    }, function (error) {
        //res.send("Deu errado!!!")
        console.log(error);
    });
});
app.get('/sabor/:idsabor', function (req, res, next) {
    var sabor = [];
    var saborSelecionados = 'select * from sabores where sabores.Tamanho_idTamanho = \'' + req.params.idsabor + '\'';
    console.log(saborSelecionados);
    new mysql_factory_1.MySQLFactory().getConnection().select(saborSelecionados).subscribe(function (data) {
        data.forEach(function (element) {
            sabor.push({
                name: element.sabores,
                preco: element.preco,
            });
        });
        res.send(sabor);
        //console.log("Deu MUITO Certo mesmo1!!!")
    }, function (error) {
        //res.send("Deu errado!!!")
        console.log(error);
    });
});
app.get('/cidades', function (req, res, next) {
    var cidades = [];
    var cidadesSelecionados = 'select * from cidades';
    console.log(cidadesSelecionados);
    new mysql_factory_1.MySQLFactory().getConnection().select(cidadesSelecionados).subscribe(function (data) {
        data.forEach(function (element) {
            cidades.push({
                id: element.idCidades,
                name: element.nome,
            });
        });
        res.send(cidades);
        //console.log("Deu MUITO Certo mesmo1!!!")
    }, function (error) {
        //res.send("Deu errado!!!")
        console.log(error);
    });
});
app.get('/bairros/:idbairro', function (req, res, next) {
    var bairros = [];
    var bairrosSelecionados = 'select * from bairros where bairros.Cidades_idCidades = \'' + req.params.idbairro + '\'';
    console.log(bairrosSelecionados);
    new mysql_factory_1.MySQLFactory().getConnection().select(bairrosSelecionados).subscribe(function (data) {
        data.forEach(function (element) {
            bairros.push({
                name: element.nome,
            });
        });
        res.send(bairros);
        //console.log("Deu MUITO Certo mesmo1!!!")
    }, function (error) {
        //res.send("Deu errado!!!")
        console.log(error);
    });
});
app.post('/logando', function (req, res, next) {
    var sql = 'select * from usuario where usuario.userName = \'' + req.body.userName + '\' and usuario.senha = \'' + req.body.password + '\'';
    console.log(sql);
    //res.send(sql);
    new mysql_factory_1.MySQLFactory().getConnection().select(sql).subscribe(function (data) {
        if (!data.length || data.length != 1) {
            res.status(401).send('Conta inválida!');
            console.log("Deu muito ERRADO!");
            return;
        }
        res.send({
            userName: req.body.userName,
            password: req.body.password
        });
        console.log("Deu MUITO Certo!!!");
    }, function (error) {
        console.log(error);
    });
});
app.post('/verifica', function (req, res, next) {
    var sql = 'select * from usuario where usuario.userName = \'' + req.body.userName + '\'';
    console.log(sql);
    //res.send(sql);
    new mysql_factory_1.MySQLFactory().getConnection().select(sql).subscribe(function (data) {
        if (data.length > 0) {
            console.log(data.length);
            return;
        }
        console.log("Passou daqui!");
        console.log(data.length);
        console.log("Deu muito certo, conta validada!");
        res.send({
            userName: req.body.userName
        });
    }, function (error) {
        console.log(error);
    });
});
app.post('/novo', function (req, res, next) {
    var insertUsuario = 'insert into usuario(userName,senha) values(\'' + req.body.userName + '\',\'' + req.body.password + '\')';
    console.log(insertUsuario);
    //res.send(sql);
    new mysql_factory_1.MySQLFactory().getConnection().select(insertUsuario).subscribe(function (data) {
        res.send({
            userName: req.body.userName
        });
    }, function (error) {
        console.log(error);
    });
});
var port = 3000;
//execucao do servidor
app.listen(port, function () {
    console.log("Listening at http://localhost:" + port + "/");
});
