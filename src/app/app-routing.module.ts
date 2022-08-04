import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ParentListComponent } from './parent-list/parent-list.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { BurgerDetailComponent } from './burger-detail/burger-detail.component';
import { MenuDetailComponent } from './menu-detail/menu-detail.component';
import { MonPanierComponent } from './mon-panier/mon-panier.component';
import { MesCommandesComponent } from './mes-commandes/mes-commandes.component';
import { CommandeDetailComponent } from './commande-detail/commande-detail.component';

const routes : Routes =
[
  {path: '', component: LandingPageComponent},
  {path: 'catalogue' , component: ParentListComponent},
  {path: 'panier' , component: MonPanierComponent},
  {path: 'commandes' , component: MesCommandesComponent},
  {path: 'commandes/:id' , component: CommandeDetailComponent},
  {path: 'burger/:id' , component: BurgerDetailComponent},
  {path: 'menu/:id' , component: MenuDetailComponent},
  {path: '**' , redirectTo: 'catalogue'}
];

@NgModule(
  {
    imports : [RouterModule.forRoot(routes)],
    exports : [RouterModule]
  }
)
export class AppRoutingModule { }
