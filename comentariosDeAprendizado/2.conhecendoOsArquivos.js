//                                             CONHECENDO OS ARQUIVOS DO PROJETO

// Por padrão o angula usa o typeScript

// Dentro do arquivo angular.json  =   @schematics/angular:component": {
//        "inlineTemplate": true,    // COLOCAR FALSE
//        "inlineStyle": true,       // COLOCAR FALSE
//          "skipTests": true 
//                                 ISSO QUER DIZER QUE OS ARQUIVOS DE HTML E CSS VAO ESTAR JUNTOS E O PROFESSOR FALOU QUE NAO QUER ISSO, 
//                                 ENTAO VOU COLOCAR FALSE PARA TER OS ARQUIVOS SEPARADOS

// arquivo SRC                     E AONDE TEMOS O NOSSO CODIGO FONT
// dentro do SRC temos nosso arquivo que é a porta de entrada MAIN.TS ele vai importar algumas coisas, e carregar por padrão APPMODULE
// APPMODULE temos a definição do BOOTSTRAP que aponta para o componente que vai carregar nossa aplicação, que no caso é APPCOMPONENT
// APPCOMPONENT temos selector: 'app-root' que é a TAG PERSONALIZADA da nossa aplicação 
// ARQUIVO APP =  main.ts => appModule => AppComponent
// ARQUIVO ASSTS = Aonde colocamos nossas imagens e fonts
// ARQUIVO ENVIRONMENTS = Variaveis de ambientes