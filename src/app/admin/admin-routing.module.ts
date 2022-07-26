import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommandeDetailComponent } from './commande-detail/commande-detail.component';
import { AdminComponent } from './admin.component';
import { MaLivraisonComponent } from './livraisons/ma-livraison/ma-livraison.component';
import { LivreurDetailComponent } from './mes-livreurs/livreur-detail/livreur-detail.component';
import { MesLivraisonsComponent } from './mes-zones/mes-livraisons.component';
import { NouveauProduitComponent } from './nouveau-produit/nouveau-produit.component';
import { MesProduitsComponent } from './mes-produits/mes-produits.component';
import { ZoneComponent } from './mes-zones/zone/zone.component';
import { ZoneDetailComponent } from './mes-zones/zone/zone-detail/zone-detail.component';
import { LivraisonsComponent } from './livraisons/livraisons.component';
import { MesLivreursComponent } from './mes-livreurs/mes-livreurs.component';

const routes: Routes =
[
      {
        path: 'admin', redirectTo: 'commandes', pathMatch:'full'
      },
      {
        path: 'commandes',
        children:
        [
          {
            path:'zone',
            children:
            [
              {path:':id', component: ZoneDetailComponent},
              {path:'', component: MesLivraisonsComponent}
            ]
          },
          {
            path: '',
            children:
            [
              {path:':id', component: CommandeDetailComponent},
              {path: '', component : AdminComponent}
            ]
          }
        ]
      },
      {
        path: 'livraisons',
        children:
        [
          {
            path: '',
            children :
            [
              {
                path:'livreur',
                children:
                  [
                    {
                      path: '',
                      children:
                        [
                          {path: ':id', component: LivreurDetailComponent},
                          {path: '', component: MesLivreursComponent},
                        ]
                    }
                  ]
              },
              {path:':id', component: MaLivraisonComponent},
              {path:'', component: LivraisonsComponent},
            ]
          },
        ]
      },
      {
        path: 'produits',
        children:
        [
          {
            path: '',
            children:
              [
                {path: ':new', component: NouveauProduitComponent},
                {path: '', component: MesProduitsComponent}
              ]
          }
        ]
      }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
