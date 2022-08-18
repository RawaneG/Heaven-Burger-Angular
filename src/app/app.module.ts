import { NgModule, OnInit, LOCALE_ID } from '@angular/core';
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
import { MonPanierComponent } from './mon-panier/mon-panier.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MesCommandesComponent } from './admin/mes-commandes/mes-commandes.component';
import { CommandeDetailComponent } from './admin/commande-detail/commande-detail.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { BoissonsComponent } from './menu-detail/boissons/boissons.component';
import { BurgersComponent } from './menu-detail/burgers/burgers.component';
import { FritesComponent } from './menu-detail/frites/frites.component';
import { AdminComponent } from './admin/admin.component';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { MesLivraisonsComponent } from './admin/mes-zones/mes-livraisons.component';
import { LivreurDetailComponent } from './admin/mes-livreurs/livreur-detail/livreur-detail.component';
import { NouveauProduitComponent } from './admin/nouveau-produit/nouveau-produit.component';
import { MesProduitsComponent } from './admin/mes-produits/mes-produits.component';
import { MaLivraisonComponent } from './admin/livraisons/ma-livraison/ma-livraison.component';
import { ZoneComponent } from './admin/mes-zones/zone/zone.component';
import { ZoneDetailComponent } from './admin/mes-zones/zone/zone-detail/zone-detail.component';
import { SpinnerComponent } from './Services/spinner/spinner.component';
import { HttpInterceptProvider } from './Services/http-interceptor.service';
import { registerLocaleData, DatePipe } from '@angular/common';
import * as fr from '@angular/common/locales/fr';
import { LivraisonsComponent } from './admin/livraisons/livraisons.component';
import { MesLivreursComponent } from './admin/mes-livreurs/mes-livreurs.component';

@NgModule({
  declarations: [AppComponent, MyFirstComponent, ParentListComponent, HeaderComponent, LandingPageComponent, MySecondComponent, MenuDetailComponent, BurgerDetailComponent, MonPanierComponent, MesCommandesComponent, CommandeDetailComponent, BoissonsComponent, BurgersComponent, FritesComponent, AdminComponent, MesLivraisonsComponent, LivreurDetailComponent, NouveauProduitComponent, MesProduitsComponent, MaLivraisonComponent, ZoneComponent, ZoneDetailComponent, SpinnerComponent, LivraisonsComponent, MesLivreursComponent],
  imports: [MatProgressBarModule,Ng2SearchPipeModule, BrowserModule,ReactiveFormsModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers:
  [
    HttpInterceptProvider,
    { provide: LOCALE_ID, useValue: 'fr-FR'},
    DatePipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule implements OnInit
{
  constructor()
  {
    registerLocaleData(fr.default);
  }
  ngOnInit(): void
  {

  }
}
