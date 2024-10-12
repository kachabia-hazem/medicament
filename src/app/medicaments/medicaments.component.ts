import { Component, OnInit } from '@angular/core';
import { MedicamentService } from '../services/medicament.service';
import Swal from 'sweetalert2';




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
  classification:Classification;  
}
export class Classification{
  idclass!:number;
  nomclass!:string;
}

@Component({
  selector: 'app-medicaments',
  templateUrl: './medicaments.component.html',
  styleUrls: ['./medicaments.component.css']  
})
export class MedicamentsComponent implements OnInit  {

  medicaments: Medicament[] = [];

  constructor(private medicamentService: MedicamentService) {}

  ngOnInit() {
    this.medicaments = this.medicamentService.getMedicaments();
  }
  supprimerMedicament(med: Medicament) {
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
        Swal.fire({
          title: "Supprimé !",
          text: "Votre médicament a été supprimé.",
          icon: "success"
        });
      }
    });
  }
  
  editMedicament(med: Medicament) {
    
    this.medicamentService.medicament = med;
    
  }
  
  
}
