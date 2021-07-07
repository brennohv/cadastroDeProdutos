//                                                       DIRETIVAS NA PRATICA 01 DIRECTIVES ATTRIBUTS

// ng g d directives/red
// So uma observação: Dentro de app.module.ts, em declarations: [ colocamos DIRETIVAS, COMPONENTES, PIPES ], esse processo ja foi feito automatico no codigo acima.
// dentro da pasta que criei em directives/red , vamos informar oq a directive faz;
// constructor(private el: ElementRef) { el.nativeElement.style.color = '#e35e6b' }
// criei um atibuto el do tipo privado e vamos tipar ele, recebe um ElementRef 
// Um ElementRef é apoiado por um elemento específico de renderização. No navegador, geralmente é um elemento DOM.
// nativeElement para obter o HTMLElement para acessar o DOM

//                                                       DIRETIVAS NA PRATICA 02 DIRECTIVES ESTRUTURAL

// ng g d directives/for
// dentro da pasta posso mudar o selector com nome que eu desejar 
// Preciso implementar o OnInit
// OnInit = inicialização 
// preciso criar o metodo para ele iniciar 
// Depois das chaves de constructor  =   ngOnInit(): void { }
// @Input('myForEm')    O nome da propriedade DOM à qual a propriedade de entrada está associada.   Vai interpretar o que esta depois de 'EM'
// Em footer.component.html = <li *myFor ="let n em [1, 2, 3]"></li> 
// ele vai interpretar esse Arry [1, 2, 3]
// Plugin Auto Import, instalar
//  ViewContainerRef = Representa um contêiner onde uma ou mais vistas podem ser anexadas a um componente.
/* TemplateRef<any> = Representa um modelo incorporado que pode ser usado para instanciar visualizações incorporadas. 
Para instanciar visualizações incorporadas com base em um modelo, use o ViewContainerRef método createEmbeddedView(). */