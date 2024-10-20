import { Component, OnInit } from '@angular/core';
import { MedicamentService } from '../services/medicament.service';
import { Classification, Medicament } from '../medicaments/medicaments.component';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update-medicament',
  templateUrl: './update-medicament.component.html',
  styleUrls: ['./update-medicament.component.css']
})
export class UpdateMedicamentComponent implements OnInit {
  currentMedicament!: Medicament;
  classifications!: Classification[];

  constructor(
    private medicamentService: MedicamentService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    // Charger les classifications depuis le service
    this.classifications = this.medicamentService.ListeClassification();

    const medicamentName = this.route.snapshot.paramMap.get('name');

    if (medicamentName) {
      const medicament = this.medicamentService.getMedicamentByName(medicamentName);
      if (medicament) {
        this.currentMedicament = { ...medicament };
        console.log('Médicament chargé :', this.currentMedicament);
      } else {
        console.log('Aucun médicament trouvé avec ce nom.');
      }
    } else {
      console.log('Nom de médicament non fourni.');
    }
  }

  updateMedicament(name: string): void {
    console.log(name);
    const updatedClass = this.classifications.find(classItem => classItem.idclass === this.currentMedicament.classification.idclass) 
                          ?? { idclass: 0, nomclass: 'Non classifié' };  // Classification par défaut
  
    this.currentMedicament.classification = updatedClass;
    this.medicamentService.updateMedicamentByName(name, this.currentMedicament);
    this.router.navigate(['/medicaments']);
  }
}
