import { NgModule, OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { MyFirstComponent } from './burger/my-first.component';
import { ParentListComponent } from './parent-list/parent-list.component';
import { HeaderComponent } from './header/header.component';
import { AppRoutingModule } from './app-routing.module';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { MySecondComponent } from './menu/my-second.component';
import { MenuDetailComponent } from './menu-detail/menu-detail.component';
import { BurgerDetailComponent } from './burger-detail/burger-detail.component';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { MonPanierComponent } from './mon-panier/mon-panier.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MesCommandesComponent } from './mes-commandes/mes-commandes.component';
import { CommandeDetailComponent } from './commande-detail/commande-detail.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { BoissonsComponent } from './menu-detail/boissons/boissons.component';
import { BurgersComponent } from './menu-detail/burgers/burgers.component';
import { FritesComponent } from './menu-detail/frites/frites.component';
import { AdminComponent } from './admin/admin.component';
// import {MatProgressBarModule} from '@angular/material/progress-bar';

@NgModule({
  declarations: [AppComponent, MyFirstComponent, ParentListComponent, HeaderComponent, LandingPageComponent, MySecondComponent, MenuDetailComponent, BurgerDetailComponent, MonPanierComponent, MesCommandesComponent, CommandeDetailComponent, BoissonsComponent, BurgersComponent, FritesComponent, AdminComponent],
  imports: [Ng2SearchPipeModule, BrowserModule,ReactiveFormsModule, AppRoutingModule, HttpClientModule, FormsModule, StoreModule.forRoot({}, {})],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule implements OnInit
{
  ngOnInit(): void
  {
  }
}
