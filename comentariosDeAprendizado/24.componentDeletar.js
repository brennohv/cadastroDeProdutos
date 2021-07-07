// Primeiro tenho que criar uma metodo que deleta por id 
// vou em product.service 

/* delete(id: number): Observable:<Product> {
    const url = `${this.baseUrl}/${id}
    return this.http.delete<product>(url)
} */ 

// Agora vou associar em product-read.component.html ao meu component delete
// <a class="delete" routerLink="/products/delete/{{ row.id }}">          
// consigo acessar o product por Id       routerLink="/products/delete/{{ row.id }}"

// agora vou criar meu component ng g c e passo o caminho e nome da pasta 
// depois de criar meu component preciso colocar a rota dele em app-routing.module.ts
/* path: "products/delete/:id",
  component: ProductDeleteComponent */

// "products/delete/:id"   ele entende que :id é um parametro 

// preciso criar uma variavel do tipo Product
// product!: Product;

// vou fazer as injeções de dependencia dentro do ts

/*constructor(
    private productService: ProductService,     acesso aos serviços 
    private router: Router,                     acesso as rotas 
    private route: ActivatedRoute               acesso a pegar o elemento por ID
  ) {} */

// como eu quero que esse componente ao iniciar ele carregue o input ja preenchido e sem poder alterar
// ngOnInit(): void { vou colocar a estrutura aqui }

/* ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));     
    this.productService.readById(id!).subscribe((product) => {     
      this.product = product;
    });
  } */

// como informei no reandByid que recebo um number, preciso passar esse Number() para tranformar a string em number.
// pegando o product por id e subscribe que recebo um product, vou pegar o this.product e colocar o valor do product que recebi no subscribe
// para isso dar certo preciso colocar no meu html PROPERTY BINDING 

/* <input matInput placeholder="Nome" 
      [value]="product.name" name="name" disabled> */     // Ele vai pegar o product.name que criei no ts 

// vou criar o metodo de deletar e cancelar em meu ts para associar ele a um button no html

/* deleteProduct(): void {
    this.productService.delete(this.product.id!).subscribe(() => {
      this.productService.showMessage("Produto deletado com sucesso!");
      this.router.navigate(["/products"]);
    });
  }*/

/* cancel(): void {
    this.router.navigate(["/products"]); */

// acessando o productSevice.delete 
// delete(this.product.id!) recebendo o product.id que é um number e vai ser deletado de acordo o metodo que criei em product.service
// .subscribe(() => { quando o evento chegar eu mando uma msg e navego para a pagina anterior}
// this.productService.showMessage("Produto deletado com sucesso!");
// this.router.navigate(["/products"]);

// Vou fazer meu Html pegando o mesmo modelo em create.component.html e vou associar ao metodos que criei acima ao click
// <button mat-raised-button (click)="deleteProduct()" color="warn">
// PROPERTY EVENT   quando o usuario clicar no button vai ser acionado a function deleteProduct() 
