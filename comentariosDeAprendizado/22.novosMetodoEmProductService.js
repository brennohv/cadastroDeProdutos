//                                                NOVOS METODOS EM PRODUCT SERVICE 

// Para atualizar precisamos obter um produto por id e usar um metodo do tipo PUT
// PUT quando vc quer atualizar o objeto inteiro
// em product.service vamos criar o metodo readById()

/*  readById(id: string): Observable<Product> {
    const url = `${this.baseUrl}/${id}`
    return this.http.get<Product>(url)
  } */

//readById(id: string): Observable<Product> =  receber um id: do tipo string e vou ter um observable do tipo Product
// const url = `${this.baseUrl}/${id}`  = preciso ter url com base em id entao uso a baseUrl interpolado com parametro que vou receber que é um ID
// return this.http.get<Product>(url)  = vou fazer uma requisição Get que recebo um modelo de product e o primeiro parametro é a url com id que fiz acima

// vou criar outro metodo para update

/* update(product: Product): Observable<Product> {
    const url = `${this.baseUrl}/${product.id}`
    return this.http.put<Product>(url, product)
  } */

// return this.http.put<Product>(url, product) = vou alterar o product no backend com base na url e product que
// recebi no parametro 