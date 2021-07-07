//                                                        COMPONENT ATUALIZAR PRODUCT 01

// criando um component 
// ng g c components/product/product-update
// preciso colocar em rotas app-routing.module.ts

/* {
  path: "products/update/:id",
  component: ProductUpdateComponent
  } */

// path: "products/update/:id",      colocando : ele sabe que é um parametro 
// agora vou em product-read.component.html e tenho que colocar no routerLink a rota que acabei de criar 
// <a class="edit" routerLink="products/update/{{ row.id }}">   {{ ele interpreta row.id e pega o id  product.id  }}

//                                                        COMPONENT ATUALIZAR PRODUCT 02

// Vou entrar em product-create.component.html
// vou copiar o html que vai ser bem parecido 
// vou colar no html de update
// alterar o titulo para Alterar Produto
// Alterar os metodos, com os que vou criar no update.ts

/* updateProduct(): void{

  }

  cancel(): void{
    this.router.navigate(['/products'])
  } */

// vou criar um product!: Product
// fazer as injeções de dependecia

/* constructor(
    private productService: ProductService,
    private router: Router,
    private route: ActivatedRoute
    ) { } */

// quando iniciar o component, tenho que deixar o input de alterar produto ja preenchido, com isso tenho que fazer uma requisição do tipo get por id, por isso fiz injeção de 
// dependecia do =    private route: ActivatedRoute

/* ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
    this.productService.readById(id!).subscribe(product => {
      this.product = product
    })
  } */

// const id = this.route.snapshot.paramMap.get('id')    =       fazendo o map dos parametros e pegando o id, que esta em routing  =   path: "products/update/:id"
/* this.productService.readById(id!).subscribe(product => {     basicamente estou pegando o produto por id e ja colocando ele no input 
      this.product = product */

/* updateProduct(): void {
    this.productService.update(this.product).subscribe(() => {
      this.productService.showMessage("Produto atualizado com sucesso!");
      this.router.navigate(["/products"]);
    });
  } */

// 