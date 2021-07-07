//                                                         BINDINGS

// BINDINGS EVENT = Criei uma function em product-create.component.ts = fazerAlgo()  
// Agora dentro de product-create.component.html = <button (click)="fazerAlgo()">Fazer Algo!</button>   
// Coloco o event em parenteses que no caso é (click), quando acontecer o click vai chamar a function que criei fazerAlgo()

// BINDINGS PROPERTY = Criei uma variavel em product-create.component.ts = propLegal = 'Qualquer'
// Agora dentro de product-create.component.html = <p [id]="propLegal">product-create works!</p>
// Coloco o [id] entre cochetes para dizer que ele vai pegar o valor da variavel dentro de product-create.component.ts = propLegal = 'Qualquer'
// O valor do ID sera 'Qualquer' e nao propLegal