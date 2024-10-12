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
  classifications!:Classification[];
  updateClassId!:number;


  constructor(
    private medicamentService: MedicamentService,
    private route: ActivatedRoute ,
    private router: Router  
  ) {}

  ngOnInit(): void {
    this.classifications=this.medicamentService.ListeClassification();

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
    this.updateClassId=this.currentMedicament.classification.idclass;
  }

  updateMedicament(name: string): void {
    this.currentMedicament.classification=this.medicamentService.consulterClassification(this.updateClassId);
    this.medicamentService.updateMedicamentByName(this.currentMedicament.name,this.currentMedicament);
  

    this.medicamentService.updateMedicamentByName(name, this.currentMedicament);
    console.log(`Médicament ${name} mis à jour : `, this.currentMedicament);
    this.router.navigate(['/medicaments']);

  }
}
