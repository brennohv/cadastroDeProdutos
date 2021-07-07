//                                                         NAVEGAR PARA TELA DE CRIAR PRODUTOS

// Vou precisar importar o buttom do material, vou em app.module.ts 
// import { MatButtonModule } from '@angular/material/button';
// imports: [ MatButtonModule ]
// Importando o route = product-crud.component.ts = import { Router } from '@angular/router';
// No contructor vou esperar essa rota ser injetada pelo angular 
// constructor(private router: Router) { }
// Criar um butoon em product-crud-component.html 
/* <button mat-raised-button (click)="navigateToProductCreate()">
Novo Produto
</button> */
/* Cria uma function dentro de product-crud.component.ts
navigateToProductCreate(): void {
    this.router.navigate(['products/create'])
  } */
// Usando a route.navigate(['passando a url que eu quero'])       Usando o router que importei        
// products/create = essa foi criada em app-routing.module.ts
