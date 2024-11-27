import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MedicamentsComponent } from './medicaments/medicaments.component';
import { AddMedicamentComponent } from './add-medicament/add-medicament.component';
import { UpdateMedicamentComponent } from './update-medicament/update-medicament.component';
import { RechercheParCategorieComponent } from './recherche-par-categorie/recherche-par-categorie.component';
import { RichercheParNomComponent } from './richerche-par-nom/richerche-par-nom.component';
import { LoginComponent } from './login/login.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { medGuard } from './med.guard';
import { register } from 'module';
import { RegisterComponent } from './register/register.component';
import { ListeCategoriesComponent } from './liste-categories/liste-categories.component';


const routes: Routes = [

  {path: 'login',component:LoginComponent },
  {path:"medicaments", component:MedicamentsComponent },
  {path:"add-medicament",component:AddMedicamentComponent,canActivate:[medGuard]},
  {path:"updateMedicament/:name",component:UpdateMedicamentComponent},
  {path:"rechercheParCategorie",component:RechercheParCategorieComponent,canActivate:[medGuard]},
  {path:"richercheParnom",component:RichercheParNomComponent,canActivate:[medGuard]},
  {path: 'app-forbidden', component: ForbiddenComponent},
  {path:'register',component:RegisterComponent},
  {path: "listeCategories", component : ListeCategoriesComponent}


  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
