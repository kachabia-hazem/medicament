import { Component } from '@angular/core';
import { MedicamentService } from '../services/medicament.service';


export interface Medicament {
  name: string;
  description: string;
  prix: number;
  marque: string;
  url: string;
  categorie: string;
  code: number;
  creationDate: Date;
  expirationDate: Date;
}

@Component({
  selector: 'app-add-medicament',
  templateUrl: './add-medicament.component.html',
  styleUrls: ['./add-medicament.component.css']
})
export class AddMedicamentComponent {
  newMedicament: Medicament = {
    name: '',
    description: '',
    prix: 0,
    marque: '',
    url: '',
    categorie: '',
    code: 0,
    creationDate: new Date(),
    expirationDate: new Date()
  };
  constructor(private medicamentService: MedicamentService){}

  addMedicament() {
    this.medicamentService.addMedicament(this.newMedicament);
    console.log(this.newMedicament);
  
  }
}
