import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MedicamentsComponent } from './medicaments/medicaments.component';
import { AddMedicamentComponent } from './add-medicament/add-medicament.component';
import { UpdateMedicamentComponent } from './update-medicament/update-medicament.component';

const routes: Routes = [
  {path:"medicaments", component:MedicamentsComponent },
  {path:"add-medicament",component:AddMedicamentComponent},
  {path:"updateMedicament/:name",component:UpdateMedicamentComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
