// vou criar um modelo header-data.model.ts

/* export interface HeaderData {
    title: string;
    icon: string;
    routeUrl: string;
  } */

// depois criar um service 
// ng g s components/template/header/header 

// em service vou ter uma instancia de headerData 

/* private _headerData = new BehaviorSubject<HeaderData>({
    title: 'Início',
    icon: 'home',
    routeUrl: ''
  }) */

// BehaviorSubject = é uma class que extende Subject, e sempre vai emitir event quando ouver mudança nos dados
// Subject (é exatamente o cara que consegue detectar o event e notificar os interessados (Observable))

// Criar 2 metodos get e set

/* get headerData(): HeaderData {
    return this._headerData.value
  }

  set headerData(headerData: HeaderData) {
    this._headerData.next(headerData)
  } */

// apos vou em header.component.ts e vou fazer a injeção de dependencia do service

//constructor(private headerService: HeaderService) { }

// vou pegar o tile com metodo get

/* get title(): string {
    return this.headerService.headerData.title
  } */

