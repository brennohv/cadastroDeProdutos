//                                               ELEMENTOS DO ANGULAR 1

// DIRECTIVES = existem 2 tipos de diretivas ( atributo, estrutural )
// DIRECTIVES ATTRIBUTS = foca em alterar STYLE e comportamento de um elemento de um componente ou de outra diretiva 
// DIRECTIVES ESTRUTURAL USAMOS * = Altera o layout adicionando e removendo elementos da DOM
// PROPERTY BINDING =  HTML => [nomedeumapropriedade]="mesmoNomeNoComponent"        COMPONENT => mesmoNomeNoComponent: Product[];      Estou refenciando a prop dentro de component e nao HTML.
// PROPERTY EVENT =  HTML =>   (event)="mesmoNomeNoComponent()"                COMPONENT => mesmoNomeNoComponent(): void { ... };
// ONE WAY DATA BINDING = HTML =>  <input [value]="nome">                 COMPONENT => nome: string;           [ ] Ele sempre vai buscar em COMPONENT, e caso altere lá, altera no HTML tbm.
// TWO WAY DATA BINDING =  HTML =>  <input [(ngModel)]="nome">            COMPONENT =>  nome: string;          [( )] Quando alterar tanto no HTML como COMPONENT vai ser alterado em ambas.
// PIPES = Sao processamentos que voce faz em cima de variaveis, exemplo;  
/* <p> 
        O vencimento é 
        {{ produto.vencimento | date }}          | isso significa pipe, quando nao quer exibir o formato que voce recebeu de um banco de dados, nao é o formato que quero exibir
    <p>                                            para isso voce pode usar um pipe para fazer uma formatação de um dado; quero passar formato numero para moeda, */
