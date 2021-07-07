//                                                    EXIBINDO PRODUTOS COM *ngFor

// Dentro de product-read.component.html 

/* <ul>
    <li *ngFor="let product of products">{{product.id}} => {{product.name}} R${{product.price}}</li>
</ul>
*/

// dentro de li coloquei um diretiva estrutural *ngFor que faz um laço como se fosse um for JavaScript
// let a variavel = estou gravando o laço que fiz em products nessa variavel product
// of products defini ele em product-read.component.ts     products!: Product[]
// {{product.id}} Consigo ter acesso ao ID do product e por ai vai 
