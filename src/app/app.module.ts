import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';  
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddMedicamentComponent } from './add-medicament/add-medicament.component';
import { MedicamentsComponent } from './medicaments/medicaments.component';
import { UpdateMedicamentComponent } from './update-medicament/update-medicament.component';
import { RechercheParCategorieComponent } from './recherche-par-categorie/recherche-par-categorie.component';
import { RichercheParNomComponent } from './richerche-par-nom/richerche-par-nom.component';
import { LoginComponent } from './login/login.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { RegisterComponent } from './register/register.component';


@NgModule({
  declarations: [
    AppComponent,
    AddMedicamentComponent,
    MedicamentsComponent,
    UpdateMedicamentComponent,
    RechercheParCategorieComponent,
    RichercheParNomComponent,
    LoginComponent,
    ForbiddenComponent,
    RegisterComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule  ,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
