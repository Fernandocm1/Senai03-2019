import {prompt} from 'inquirer';
import { VpHttp } from "./http/vphttp";

export class Delivery {
    private dadosPedido : any = null;
    private dadosEntrega : any = null;
    private Sabor : any = [];
    private Sabor2 : string[] = [];
    private Tamanho: string[] = [];
    private Cidades: string[] = [];
    private Bairros: string[] = [];


    public fazerPedido(){
        this.getSabores();
    }

    private perguntarDadosPedido(){
        console.log('1');
        prompt(
            [
                {
                        name: 'name',
                        type: 'input',
                        message: 'Qual o seu nome?',
                    },
                    {
                        name: 'telefone',
                        type: 'input',
                        message: 'Qual é o seu telefone?',
                    },
                    {
                        name: 'tamanho',
                        type: 'list',
                        message: 'Qual é o tamanho da pizza?',
                        choices: this.Tamanho
                    },
                    {
                        name: 'sabor',
                        type: 'list',
                        message: 'Qual é o sabor?',
                        choices: this.Sabor2

                    },
                    {
                        name: 'quantidade',
                        type: 'input',
                        message: 'Qual é a quantidade?',
                    },  
                    {
                        name: 'entrega',
                        type: 'list',
                        message: 'Você gostaria da entrega em casa?',
                        choices: ['Sim', 'Não'],
                    }
            ]
        ).then(
                (answers : any) => {
                    this.dadosPedido = answers;

                    if (answers.entrega === 'Sim'){
                        this.perguntarDadosEntrega();
                    } else {
                        this.imprimirRelatorio();
                    }
                }
            );
    }

    private perguntarDadosEntrega(){
        prompt(
            [
                {
                    name: 'Cidade',
                    type: 'list',
                    message: 'Qual a sua cidade?',
                    choices: this.Cidades
                    },  
                    {
                    name: 'Bairro',
                    type: 'list',
                    message: 'Qual é o seu Bairro?',
                    choices: this.Bairros
                    }, 
                    {
                    name: 'Rua',
                    type: 'input',
                    message: 'Qual é a sua Rua?',
                    }, 
                    {
                    name: 'Numero',
                    type: 'input',
                    message: 'Qual é o número da casa?',
                    }, 
                    {
                    name: 'Complemento',
                    type: 'input',
                    message: 'Qual é o complemento?',
                    }  
            ]
        ).then(
                (answers : any) => {
                    this.dadosEntrega = answers;
                    this.imprimirRelatorio();
                    
                }
            );
    }

    private imprimirRelatorio(){

        if (this.dadosEntrega !== null) {
            console.log('\nDados de Entrega:\n\nCliente: '+this.dadosPedido.name+'\nQuantidade de pizzas: '+this.dadosPedido.quantidade+'\nSabor: '+this.dadosPedido.sabor+'\nTamanho: '+this.dadosPedido.tamanho+'\nCidade: '+this.dadosEntrega.Cidade+'\nBairro: '+this.dadosEntrega.Bairro+'\nRua: '+this.dadosEntrega.Rua)
        }else{
            console.log('\nDados de Entrega:\n\nCliente: '+this.dadosPedido.name+'\nQuantidade de pizzas: '+this.dadosPedido.quantidade+'\nSabor: '+this.dadosPedido.sabor+'\nTamanho: '+this.dadosPedido.tamanho)
        }
    }
    public getSabores(){
        console.log(2);
        new VpHttp('http://5c64a0aec969210014a32ed1.mockapi.io/Sabor').get().subscribe(
            (data : any) => {
                data.forEach((element : any) => {
                    this.Sabor.push(element.Sabor);
                });
                this.Sabor = data;
                for (let i = 0; i < this.Sabor.length;i++) { 
                    if(this.Sabor[i].disponivel == true ){
                        this.Sabor2.push(this.Sabor[i].Sabor);
                    }
                }
                this.getTamanho();
            },
            (error : any) => {
                console.log("Aconteceu um erro na busca dos dados, tente Novamente");
            }
        );
    }
    public getTamanho(){
        new VpHttp('http://5c64a0aec969210014a32ed1.mockapi.io/Tamanho').get().subscribe(
            (data2 : any) => {
                data2.forEach((element2 : any) => {
                    this.Tamanho.push(element2.Tamanho);
                });
                //this.Tamanho = data2;
                this.getCidades();
            },
            (error : any) => {
                console.log("Aconteceu um erro na busca dos dados, tente Novamente");
            }
        );
    }
    public getCidades(){
        new VpHttp('http://5c64a0aec969210014a32ed1.mockapi.io/Cidades').get().subscribe(
            (data3 : any) => {
                data3.forEach((element3 : any) => {
                    this.Cidades.push(element3.Cidades);
                });
                this.getBairros();
            },
            (error : any) => {
                console.log("Aconteceu um erro na busca dos dados, tente Novamente");
            }
        );
    }
    public getBairros(){
        new VpHttp('http://5c64a0aec969210014a32ed1.mockapi.io/Bairros').get().subscribe(
            (data4 : any) => {
                data4.forEach((element2 : any) => {
                    this.Bairros.push(element2.Bairros);
                });
            this.perguntarDadosPedido();
            },
            (error : any) => {
                console.log("Aconteceu um erro na busca dos dados, tente Novamente");
            }
        );  
    }  
}