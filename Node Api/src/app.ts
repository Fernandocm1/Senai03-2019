import {MySQLFactory} from './mysql_factory';
const express = require('express'); //importacao do pacote
const app = express(); //instanciando express
var cors = require('cors');
var bodyParser = require('body-parser');

//const app : express.Application = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extend: false }));

app.get('/tamanho', function (req, res, next) {
  let tamanhos : any = [];
  let tamanhosSelecionados : string = 'select * from tamanho'
  console.log(tamanhosSelecionados);
  new MySQLFactory().getConnection().select(tamanhosSelecionados).subscribe(
    (data : any) => {
        data.forEach((element : any) => {
        tamanhos.push({
          id : element.idTamanho,
          name : element.tamanho,
        })
        });
        res.send(tamanhos)
        //console.log("Deu MUITO Certo mesmo1!!!")
    },
    (error : any) => {
        //res.send("Deu errado!!!")
        console.log(error)
        
    }
  );
})
app.get('/sabor/:idsabor', function (req, res, next) {
  let sabor : any = [];
  let saborSelecionados : string = 'select * from sabores where sabores.Tamanho_idTamanho = \''+ req.params.idsabor+'\''
  console.log(saborSelecionados);
  new MySQLFactory().getConnection().select(saborSelecionados).subscribe(
    (data : any) => {
        data.forEach((element : any) => {
        sabor.push({
          name : element.sabores,
          preco : element.preco,
        })
        });
        res.send(sabor)
        //console.log("Deu MUITO Certo mesmo1!!!")
    },
    (error : any) => {
        //res.send("Deu errado!!!")
        console.log(error)
        
    }
  );
})

app.get('/cidades', function (req, res, next) {
  let cidades : any = [];
  let cidadesSelecionados : string = 'select * from cidades'
  console.log(cidadesSelecionados);
  new MySQLFactory().getConnection().select(cidadesSelecionados).subscribe(
    (data : any) => {
        data.forEach((element : any) => {
          cidades.push({
          id : element.idCidades,
          name : element.nome,
        })
        });
        res.send(cidades)
        //console.log("Deu MUITO Certo mesmo1!!!")
    },
    (error : any) => {
        //res.send("Deu errado!!!")
        console.log(error)
        
    }
  );
})
app.get('/bairros/:idbairro', function (req, res, next) {
  let bairros : any = [];
  let bairrosSelecionados : string = 'select * from bairros where bairros.Cidades_idCidades = \''+ req.params.idbairro+'\''
  console.log(bairrosSelecionados);
  new MySQLFactory().getConnection().select(bairrosSelecionados).subscribe(
    (data : any) => {
        data.forEach((element : any) => {
          bairros.push({
            name : element.nome,
          })
        });
        res.send(bairros)
        //console.log("Deu MUITO Certo mesmo1!!!")
    },
    (error : any) => {
        //res.send("Deu errado!!!")
        console.log(error)
        
    }
  );
})
app.post('/logando', function (req, res, next) {
  let sql = 'select * from usuario where usuario.userName = \'' + req.body.userName + '\' and usuario.senha = \'' + req.body.password + '\''
  console.log(sql);
  //res.send(sql);
  new MySQLFactory().getConnection().select(sql).subscribe(
    (data : any) => {
        if (!data.length || data.length != 1){
          res.status(401).send('Conta inválida!')
          console.log("Deu muito ERRADO!");
          return;
        }
        res.send({
           userName: req.body.userName,
           password:  req.body.password
        })
        console.log("Deu MUITO Certo!!!")
    },
    (error : any) => {
        console.log(error)
    }
  );
})
app.post('/verifica', function (req, res, next) {
  let sql = 'select * from usuario where usuario.userName = \'' + req.body.userName + '\''
  console.log(sql);
  //res.send(sql);
  new MySQLFactory().getConnection().select(sql).subscribe(
    (data : any) => {
        if (data.length > 0){
        console.log(data.length);
        return;
        }
        console.log("Passou daqui!");
        console.log(data.length);
        console.log("Deu muito certo, conta validada!");
        res.send({
            userName: req.body.userName
        })
    },
    (error : any) => {
        console.log(error)
    }
  );
})
app.post('/novo', function (req, res, next) {
  let insertUsuario = 'insert into usuario(userName,senha) values(\'' + req.body.userName + '\',\'' + req.body.password + '\')'
  console.log(insertUsuario);
  //res.send(sql);
  new MySQLFactory().getConnection().select(insertUsuario).subscribe(
    (data : any) => {
      res.send({
        userName: req.body.userName
     })
    },
    (error : any) => {
        console.log(error)
    }
  );
})
app.post('/cadastroSabores', function (req, res, next) {
  let insertSabor = 'insert into Sabores(sabores,preco,Tamanho_idTamanho) values(\'' + req.body.sabores + '\',\'' + req.body.preco + '\',\'' +  req.body.tamanhoSelecionado + '\')'
  console.log(insertSabor);
  //res.send(sql);
  new MySQLFactory().getConnection().select(insertSabor).subscribe(
    (data : any) => {
      res.send({
        sabor: req.body.sabores
     })
    },
    (error : any) => {
        console.log(error)
    }
  );
})

const port: number = 3000;
//execucao do servidor
app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}/`);
});
