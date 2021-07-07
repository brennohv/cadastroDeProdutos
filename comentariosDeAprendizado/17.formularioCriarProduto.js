//                                                         FORMULARIO CRIAR PRODUTO 

// app.module.ts vou importar as bibliotecas do material que são

/* import { FormsModule } from "@angular/forms";
   import { MatFormFieldModule } from "@angular/material/form-field";
   import { MatInputModule } from "@angular/material/input"; */

/* imports: [ FormsModule,
    MatFormFieldModule,
    MatInputModule,
  ], */

// Agora vamos criar o formulario dentro de product-create.component.html

/* 
<mat-card>
    <mat-card-title>Novo Produto</mat-card-title>
    <form>
        <mat-form-field>
            <input matInput placeholder="Nome" 
                [(ngModel)]="product.name" name="name">
        </mat-form-field>
        <mat-form-field>
            <input matInput placeholder="Preço (R$)" 
                [(ngModel)]="product.price" name="price">
        </mat-form-field>
    </form>
    <button mat-raised-button (click)="createProduct()" color="primary">
        Salvar
    </button>

    <button mat-raised-button (click)="cancel()">
        Cancelar
    </button>
</mat-card>
*/

// <mat-card>  é um contêiner de conteúdo para texto, fotos e ações no contexto de um único assunto.
// <mat-card-title> é o titulo
// <form> formulario
// <mat-form-field> é um componente usado para envolver vários componentes e aplicar estilos de campo de texto comuns
// <input matInput placeholder>   input = entrada  matInput = input do material, uma diretiva  placeholder = exemplo no input 
// [(ngModel)]="product.name"  
//TWO WAY DATA BINDING =  [(ngModel)]="o product que criei em product-create.comp...ts"  [( )] Quando alterar tanto no HTML como COMPONENT vai ser alterado em ambas.
// no caso quero alterar product.name 