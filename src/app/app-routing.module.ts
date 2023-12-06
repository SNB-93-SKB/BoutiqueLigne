import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProduitsComponent } from './produits/produits.component';
import { NewproduitComponent } from './newproduit/newproduit.component';

const routes: Routes = [
  {path:"home", component: HomeComponent},
  {path:"produits", component: ProduitsComponent},
  {path:"newproduit", component:NewproduitComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
