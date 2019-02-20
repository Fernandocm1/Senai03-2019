import {prompt} from 'inquirer';
import { VpHttp } from "./http/vphttp";

export class AtividadeAvaliativa {
    private dadosCategoria : any = null;
    private Produtos : string[] = [];
    private ProdutosVerificado : string[] = [];
    private ProdutosVerificadoSaldo : string[] = [];
    private ProdutosCategoria : string[] = [];
    private ProdutosSaldo : string[] = [];
    private Categoria: string[] = [];


    public Busca(){
        this.getCategorias();
    }

    private perguntarCategoria(){
        prompt(
            [
                {
                    name: 'Categoria',
                    type: 'list',
                    message: 'Escolha Alguma Categoria?',
                    choices: this.Categoria
                    }
            ]
        ).then(
                (answers : any) => {
                    this.dadosCategoria = answers;
                    //console.log(this.dadosCategoria);
                    this.Verificacao();
                    
                }
            );
    }

    private Verificacao(){
        for(let i=0;i<this.Produtos.length;i++){
            if(this.dadosCategoria.Categoria==this.ProdutosCategoria[i]){
                console.log(this.Produtos[i]+"| Saldo: "+this.ProdutosSaldo[i]);
            }
        }

    }
    public getCategorias(){
        new VpHttp('http://5c6c7f74d51de300146f5ba3.mockapi.io/Categoria').get().subscribe(
            (data : any) => {
                data.forEach((element : any) => {
                    this.Categoria.push(element.Nome);
                });
                //console.log(this.Categoria);
                this.getProdutos();
            },
            (error : any) => {
                console.log("Não foi possível buscar dados na inicialização do programa");
            }
        );
    }
    public getProdutos(){
        new VpHttp('http://5c6c7f74d51de300146f5ba3.mockapi.io/Produto').get().subscribe(
            (data2 : any) => {
                data2.forEach((element2 : any) => {
                    this.Produtos.push(element2.Nome);
                    this.ProdutosCategoria.push(element2.Categoria);
                    this.ProdutosSaldo.push(element2.Saldo);
                });
                this.perguntarCategoria();
            },
            (error : any) => {
                console.log("Não foi possível buscar dados na inicialização do programa");
            }
        );
    }
}