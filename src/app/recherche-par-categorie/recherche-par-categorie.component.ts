import { Component } from '@angular/core';
import { Classification, Medicament } from '../medicaments/medicaments.component';
import { MedicamentService } from '../services/medicament.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-recherche-par-categorie',
  templateUrl: './recherche-par-categorie.component.html',
  styleUrls: ['./recherche-par-categorie.component.css']
})
export class RechercheParCategorieComponent {
  medicaments: Medicament[] = [];
  classifications: Classification[] = [];
  idClassification!: number;

  constructor(private medicamentService: MedicamentService) {}
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
      this.medicamentService.listeClassifications().subscribe(med => {
        this.classifications = med ; // Valeur par défaut
      });
      
  }
  OnChange(): void {
    console.log("Classification sélectionnée :", this.idClassification);
    // Souscription à l'Observable pour récupérer les médicaments
    this.medicamentService.rechercherParClassification(this.idClassification).subscribe(medicaments => {
      this.medicaments = medicaments;
      console.log("Médicaments trouvés :", this.medicaments);
    });
  }

  supprimerMedicament(med: Medicament): void {
    Swal.fire({
      title: "Êtes-vous sûr ?",
      text: "Vous ne pourrez pas revenir en arrière !",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Oui, supprimer !"
    }).then((result) => {
      if (result.isConfirmed) {
        this.medicamentService.supprimerMedicament(med.idMed);
        // Recharger les médicaments après la suppression
        this.medicamentService.rechercherParClassification(this.idClassification).subscribe(medicaments => {
          this.medicaments = medicaments;
          Swal.fire({
            title: "Supprimé !",
            text: "Votre médicament a été supprimé.",
            icon: "success"
          });
        });

        // Recharger les médicaments après suppression (si nécessaire)
        this.OnChange();
      }
    });
  }
}
