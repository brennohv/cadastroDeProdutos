//                                                            MÉTODO CRIAR PRODUTO 

// Dentro de app.module vou fazer o import de Http/
// import { HttpClientModule} from '@angular/common/http';
// imports: [ HttpClientModule ]
// agora vamos em product.service.ts e vou fazer injeção de dependencia do http
// private http: HttpClient
// agora vou criar um function create() que vai ser responsavel por inserir um product no nosso backend

/* create(product: Product): Observable<Product> {
    return this.http.post<Product>(this.baseUrl, product)
  }
} */

// o primerio parametro é um product: do tipo Product que criei um modelo em product.model.ts
// return this.http.post()      post = quero inserir       Primeiro parametro é a url 
// criei uma variavel     baseUrl = "http://localhost:3001/products"   Que é a url do meu backend com os products
// e o segundo parametro é product do tipo Product do modelo que criei em product.model.ts
// create(product: Product): Observable<Product> 
// vai retornar um Observable<do tipo Product>    Entao nao é qualquer tipo de Observable 
// a mesma coisa em return this.http.post<Product> 
// product-create.componet.ts no vamos ter o metodo createProduct()

 /* createProduct(): void{
    this.productService.create(this.product).subscribe(() => {
    this.productService.showMessage('Produto criado!')
    this.router.navigate(['/products'])
    })
  } */

// this.productService.create(this.product).subscribe(() => { 
// espera receber um product, entao vamos criar um product de teste, que vou colocar ele no primeiro parametro

/* product: Product = {
    name: '',
    price: null
  } */

// no metodo subscribe eu vou ser notificado quando a reposta chegar do observable
// Quando a reposta chegar eu vou chamar =  this.productService.showMessage('Produto criado!')
// e depois quero voltar para a tela /products  =  this.router.navigate(['/products'])
