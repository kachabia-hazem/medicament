import { Component } from '@angular/core';
import { MedicamentService } from '../services/medicament.service';
import { Medicament } from '../medicaments/medicaments.component';

@Component({
  selector: 'app-richerche-par-nom',
  templateUrl: './richerche-par-nom.component.html',
  styleUrl: './richerche-par-nom.component.css'
})
export class RichercheParNomComponent {
  nomMedicament!: string; 
  medicaments: Medicament[] = []; 
  constructor(private ms:MedicamentService) { } 
  rechercherMedicament() {
    this.ms.rechercherParNom(this.nomMedicament)
      .subscribe(medicaments => {
        this.medicaments = medicaments;
        console.log(medicaments);
      });
    }
    

  


}
