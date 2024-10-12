import { Component, OnInit } from '@angular/core';
import { MedicamentService } from '../services/medicament.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Classification } from '../medicaments/medicaments.component';

export interface Medicament {
  name: string;
  description: string;
  prix: number;
  marque: string;
  url: string;
  code: number;
  categorie:string;
  creationDate: Date;
  expirationDate: Date;
  classification: Classification;  // Ajout de la classification ici
}

@Component({
  selector: 'app-add-medicament',
  templateUrl: './add-medicament.component.html',
  styleUrls: ['./add-medicament.component.css']
})
export class AddMedicamentComponent implements OnInit {

  newMedicament: Medicament = {
    name: '',
    description: '',
    prix: 0,
    marque: '',
    url: '',
    code: 0,
    categorie:'',
    creationDate: new Date(),
    expirationDate: new Date(),
    classification: { idclass: 0, nomclass: '' }  // Initialisation de la classification
  };
  classification!: Classification[];
  newIdclass!: number;

  constructor(private medicamentService: MedicamentService,
    private route: ActivatedRoute,
    private router: Router) {}

  ngOnInit(): void {
    this.classification = this.medicamentService.ListeClassification();
  }

  addMedicament() {
    this.newMedicament.classification = this.classification.find(c => c.idclass === this.newIdclass)!;
    this.medicamentService.addMedicament(this.newMedicament);
    console.log(this.newMedicament);
    this.router.navigate(['/medicaments']);
  }
}
