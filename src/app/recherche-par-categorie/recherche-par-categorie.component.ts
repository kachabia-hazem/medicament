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
  IdClassification!: number;

  constructor(private medicamentService: MedicamentService) {}

  ngOnInit(): void {
    this.classifications = this.medicamentService.ListeClassification();
  }

  OnChange(): void {
    console.log("Classification sélectionnée :", this.IdClassification);
    this.medicaments = this.medicamentService.rechercherParClassification(this.IdClassification);
    console.log("Médicaments trouvés :", this.medicaments);
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
        this.medicamentService.supprimerMedicament(med);
        this.medicaments = this.medicamentService.rechercherParClassification(this.IdClassification);
        Swal.fire({
          title: "Supprimé !",
          text: "Votre médicament a été supprimé.",
          icon: "success"
        });
        
        this.OnChange(); 
      }
    });
  }
}
