//                                                          PRODUTO SERVICE

// Deixar o componente o mais enchuto possivel, pois é um elemento visual, entao logicas colocar em SERVICE, separando as responsabilidades
// Criando um service =   ng g s components/product/product
// em product-create.component.ts vou fazer injeção de dependencia desse serice que acabei de criar.
/* constructor(
   private productService: ProductService,
   private router: Router
   ) { } */
// Automaticamente vai ser importado = import { ProductService } from './../product.service'; import { Router } from '@angular/router';
// Em product.service vou importar snackbar
// import { MatSnackBar } from '@angular/material/snack-bar'   É um tipo de mensagem que aparece rapidinho e apos sai
// Vou fazer uma injeção de dependencia do snackBar
// constructor(private snackBar: MatSnackBar) { }
// Agora apartir do variavel snackBar tenho acesso as funcionalidades
/* showMessage(msg: string): void {
    this.snackBar.open(msg, 'X', {        msg = que recebi como parametro ,  2 parametro é action que coloquei como X(para fechar, se colocar qualque outra letra tbm fecha, 3 atributo são as config na linha de baixo)         
      duration: 3000,          
      horizontalPosition: "right",
      verticalPosition: "top"
    })
  }
}*/

// product-create.component.ts como ja fiz a injeção de dependencia do service, posso utilizar a function showMessage
// Armazenei showMessage dentro de uma function criada em product-creaate.component.ts
/* createProduct(): void{
  this.productService.showMessage('Produto criado!')
} */
// Agora vou associar o createProduct() a um button dentro de product-create.component.html
/* <button mat-raised-button (click)="createProduct()" color="primary">
    Salvar
</button>
*/
// PROPERTY EVENT =  HTML =>   (event que no caso é o click)="mesmoNomeNoComponent()" que no caso é createProduct()    ele vai chamar a function createProduct()