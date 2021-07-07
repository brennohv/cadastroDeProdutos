//                                                  TABELA DE PRODUTOS

// Olhar uma aula anterior a essa, que usamos a base do SCHEMATICS.
// dentro de product-read.component.html estamos apontando o conteudo em 
// <table mat-table [dataSource]="products">
// "products"  está dentro de product-read.component.ts que é um modelo de product

/* <ng-container matColumnDef="id">  
        <th mat-header-cell *matHeaderCellDef>Id</th>
        <td mat-cell *matCellDef="let row">{{row.id}}</td>
      </ng-container> */

// <ng-container matColumnDef="id"> precisa ser o mesmo nome em displayedColumns
//<th mat-header-cell *matHeaderCellDef>Id</th> =  O titulo da minha coluna, 
// <td mat-cell *matCellDef="let row">{{row.id}}</td> = Aqui defino como vai ser o conteudo da minha coluna 
// 
 
// <tr mat-header-row *matHeaderRowDef="displayedColumns"></tr>  Essa é reponsavel pelo head da tabela
// <tr mat-row *matRowDef="let row; columns: displayedColumns;"></tr>  Esse pelas linhas  

// so vai funcionar se eu colocar em product-read.components.ts o valor de displayedColumns
// displayedColumns = ['id', 'name', 'price', 'action']
