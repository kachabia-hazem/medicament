import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MedicamentsComponent } from './medicaments/medicaments.component';
import { AddMedicamentComponent } from './add-medicament/add-medicament.component';
import { UpdateMedicamentComponent } from './update-medicament/update-medicament.component';
import { RechercheParCategorieComponent } from './recherche-par-categorie/recherche-par-categorie.component';
import { RichercheParNomComponent } from './richerche-par-nom/richerche-par-nom.component';


const routes: Routes = [
  {path:"medicaments", component:MedicamentsComponent },
  {path:"add-medicament",component:AddMedicamentComponent},
  {path:"updateMedicament/:name",component:UpdateMedicamentComponent},
  {path:"rechercheParCategorie",component:RechercheParCategorieComponent},
  {path:"richercheParnom",component:RichercheParNomComponent}

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
