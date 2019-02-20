import {prompt} from 'inquirer';

export class Perguntas{
    public facaUmaPergunta(){
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
                    choices: ['Pequena', 'Média', 'Grande']
                },
                {
                    name: 'sabor',
                    type: 'input',
                    message: 'Qual é o sabor?',
                },
                {
                    name: 'quantidade',
                    type: 'input',
                    message: 'Qual é o quantidade?',
                },  
                {
                    name: 'entrega',
                    type: 'list',
                    message: 'Você gostaria da entrega em casa?',
                    choices: ['Sim', 'Não'],
                },                    
            ]
        ).then(
            (answers : any)=>{
                if(answers.entrega == 'Sim'){
                    prompt(
                        [
                            {
                            name: 'Cidade',
                            type: 'input',
                            message: 'Qual a sua cidade?',
                            },  
                            {
                            name: 'Bairro',
                            type: 'input',
                            message: 'Qual é o seu Bairro?',
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
                            message: 'Qual é o complemento',
                            },                      
                        ]

                    ).then((answers2 : any) =>{
                        console.log('O cliente '+answers.name+' pediu uma pizza de '+answers.sabor+' que mora na cidade '+answers2.Cidade+' no bairro '+answers2.Bairro+' na rua '+answers2.Rua+".")
                    }
                )
                }
            }
        )

        

    }
}