// primeiro vou em style.css 

/* .msg-success {
    background-color: #28a745;
    color: #fff;
} */

// agora vou em product.service.ts e dentro de showMessage, vou colocar essa class que criei, para a msg ficar verde success
// panelClass: ['msg-success']          coloco a class que criei dentro desse panelClass, dentro do metodo showMessage

// vou voltar em style.css
// vou criar uma class para erro 

/* .msg-error {
    background-color: #e35e6b;
    color: #fff;
} */

// voltar em product.service.ts e dentro de showMessage vou adicionar mais um parametro isError: boolean = false
// entao vou receber um parametro do tipo boolean que tem por padrao false

// agora na parte de classes vou usar um operador ternario 
// panelClass: isErro ? ['msg-error'] : ['msg-success']  
// se for isErro for verdadeiro vai ser ['msg-error'], se for false ['msg-success']

// criar um metodo para aparecer a msg de error

/* erroHandler(e: any): Observable<any> {
    this.showMessage('Ocorreu um erro!', true)
    return EMPTY
  } */

// colocar um .pipe nos metodos = create, read, readById, update, delete

/* .pipe(
    map(obj => obj),
    catchError(e => this.erroHandler(e))
  ); */ 

// esse map é so para poder chamar o catchError 
// e vou retornar o metodo de erro que criei para imprimir a mensagem e retornar um observable vazio 

 



