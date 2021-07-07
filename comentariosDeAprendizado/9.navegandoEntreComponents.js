//                                                  NAVEGANDO ENTRE COMPONENTES

// ng g c views/product-crud            criando um novo component 
// Dentro de nav component coloco o <router-outlet></router-outlet>
// <router-outlet> </router-outlet> =         Atua como um espaço reservado que o Angular preenche dinamicamente com base no estado atual do roteador. 
// app-routing.module.ts =                Vamos trabalhar as questoes das rotas

/* const routes: Routes = [
  {
  path: "", // path: caminho
  component: HomeComponent
  },
  {
  path: "products",                      Caminho: "products"
  component: ProductCrudComponent
  }
]; */

// Preciso import os componentes em app-routing.module.ts 
//import { HomeComponent } from './views/home/home.component';
//import { ProductCrudComponent } from './views/product-crud/product-crud.component';
// OS 2 QUE COLOQUEI EM ROUTES : HomeComponent , ProductCrudComponent
// Temos as nossas 2 rotas registradas 
// Agora dentro dos links consigo apontar 
// Dentro de nav tenho o <a> com <i>home<i> e quero apontar para HomeComponent
// <a routerLink="/"    "/" Raiz da aplicação 
// Agora outro <a> com <i>Produtos e quero apontar para ProductCrudComponent
// <a routerLink="/products"     Coloco a mesma rota que coloquei em   app-routing.module.ts = const routes: Route
