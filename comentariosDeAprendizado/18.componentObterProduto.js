//                                                            COMPONENTE OBTER PRODUTO

// Criando um novo componente ng g c components/product/product-read
// dentro de product-crud.component.html vou colocar a tag <app-product-read>
// dentro de product.service.ts preciso interagir com meu backend para ler os dados de produtos.
// criando um metodo read(): sera responsavel para ler os dados no backend
// no metodo creat eu recebia so um product e agora no novo metodo vou receber um array de product
// read(): Observable<Product[]>    Product[]     recebe um array de product

/*read(): Observable<Product[]> {
    return this.http.get<Product[]>(this.baseUrl)
  } */

// Agora em product-read.component.ts preciso fazer a injeção de dependencia do product.service.ts
// constructor(private productService: ProductService) { }
// criar uma variavel =  products!: Product[]        que recebe um array de Product(criando em product.model)
// Agora o momento certo para renderizar esse produtos obtidos do backend, é quando inicia o component
// ngOnInit(): void { que no caso é aqui }

/* ngOnInit(): void {
    this.productService.read().subscribe(products => {
      this.products = products
      console.log(products)
    })
  } */