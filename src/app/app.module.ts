import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';  
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddMedicamentComponent } from './add-medicament/add-medicament.component';
import { MedicamentsComponent } from './medicaments/medicaments.component';
import { UpdateMedicamentComponent } from './update-medicament/update-medicament.component';

@NgModule({
  declarations: [
    AppComponent,
    AddMedicamentComponent,
    MedicamentsComponent,
    UpdateMedicamentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
