import { Medicament } from './../add-medicament/add-medicament.component';
import { Component, OnInit } from '@angular/core';
import { MedicamentService } from '../services/medicament.service';
import { Classification,  } from '../medicaments/medicaments.component';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update-medicament',
  templateUrl: './update-medicament.component.html',
  styleUrls: ['./update-medicament.component.css']
})
export class UpdateMedicamentComponent implements OnInit {
  
  currentMedicament: any = {}; // Ensure it initializes properly
  classifications!: Classification[];
  updatedClassId: number | undefined; // Déclarez la propriété avec un type approprié


  constructor(
    private medicamentService: MedicamentService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    // Charger les classifications depuis le service
    /* this.classifications = this.medicamentService.ListeClassification(); */

    /* const medicamentName = this.route.snapshot.paramMap.get('name');

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
    } */
      const nomMed = this.route.snapshot.paramMap.get('name');

      if (nomMed) {
        // Fetch the medicament by name
        this.medicamentService.rechercherParNom(nomMed).subscribe(
          (medicaments) => {
            console.log(medicaments);
            if (medicaments.length > 0) {
              this.currentMedicament = medicaments[0]; // Assuming only one medicament is returned
              this.updatedClassId = this.currentMedicament.classification.idClass; 
              this.currentMedicament.dateCreation = this.formatDate(
                this.currentMedicament.dateCreation
              );
              this.currentMedicament.dateExpiration = this.formatDate(
                this.currentMedicament.dateExpiration
              );
              console.log('Médicament chargé :', this.currentMedicament);
            } else {
              console.error('Aucun médicament trouvé avec ce nom.');
            }
          },
          (error) => {
            console.error('Erreur lors de la récupération du médicament :', error);
          }
        );
      } else {
        console.error('Nom du médicament non fourni.');
      }
      this.medicamentService.listeClassifications().subscribe(med => {
        this.classifications = med ; // Valeur par défaut
        this.updatedClassId = this.currentMedicament.classification.idClass;
        console.log(this.updatedClassId);
      });
      
  }

  /* updateMedicament(name: string): void {
    console.log(name);
    const updatedClass = this.classifications.find(classItem => classItem.idClass === this.currentMedicament.classification.idClass) 
                          ?? { idClass: 0, nomClass: 'Non classifié' };  // Classification par défaut
  
    this.currentMedicament.classification = updatedClass;
    this.medicamentService.updateMedicamentByName(name, this.currentMedicament);
    this.router.navigate(['/medicaments']);
  } */
    formatDate(dateString: string): string {
      const date = new Date(dateString);
      return date.toISOString().split('T')[0]; // Returns 'yyyy-MM-dd'
    }
  
    // Convert 'yyyy-MM-dd' string back to Date object
    parseDateFromInput(dateString: string): Date {
      return new Date(dateString);
    }
    updateMedicament(): void {
      // Find the selected classification from updatedClassId
      console.log(this.updatedClassId);
      const selectedClassification = this.classifications.find(
          (classItem) => classItem.idClass == this.updatedClassId
      );
      if (selectedClassification) {
          this.currentMedicament.classification = selectedClassification;
      } else {
          console.error('Classification non valide sélectionnée.');
      }
  
      // Format dates back to ISO format before submitting
      this.currentMedicament.dateCreation = new Date(
          this.currentMedicament.dateCreation
      ).toISOString();
      this.currentMedicament.dateExpiration = new Date(
          this.currentMedicament.dateExpiration
      ).toISOString();
  
      this.medicamentService.updateMedicament(this.currentMedicament).subscribe(
          () => {
              console.log('Médicament mis à jour avec succès');
              this.router.navigate(['/medicaments']); // Navigate back to the medicament list
          },
          (error) => {
              console.error('Erreur lors de la mise à jour du médicament:', error);
          }
      );
  }
  
  
    
}
