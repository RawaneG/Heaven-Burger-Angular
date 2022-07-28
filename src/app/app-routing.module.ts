import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ParentListComponent } from './parent-list/parent-list.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { BurgerDetailComponent } from './burger-detail/burger-detail.component';
import { MenuDetailComponent } from './menu-detail/menu-detail.component';
import { MonPanierComponent } from './mon-panier/mon-panier.component';

const routes : Routes =
[
  {path: '', component: LandingPageComponent},
  {path: 'catalogue' , component: ParentListComponent},
  {path: 'panier' , component: MonPanierComponent},
  {path: 'burger/:id' , component: BurgerDetailComponent},
  {path: 'menu/:id' , component: MenuDetailComponent},
  {path: '**' , redirectTo: ''}
];

@NgModule(
  {
    imports : [RouterModule.forRoot(routes)],
    exports : [RouterModule]
  }
)
export class AppRoutingModule { }
