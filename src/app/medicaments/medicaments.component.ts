import { Component, OnInit } from '@angular/core';
import { MedicamentService } from '../services/medicament.service';
import Swal from 'sweetalert2';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';





export interface Medicament {
  idMed:number;
  nomMed: string;            
  descMed: string;   
  prixMed: number;            
  marqueMed: string;         
  url: string;             
  categorie: string;      
  code: number;            
  dateCreation: Date;     
  dateExpiration: Date;
  classification:Classification;  
}
export class Classification{
  idClass!:number;
  descriptionClass!:string;
  nomClass!:string;
}

@Component({
  selector: 'app-medicaments',
  templateUrl: './medicaments.component.html',
  styleUrls: ['./medicaments.component.css']  
})
export class MedicamentsComponent implements OnInit  {

  medicaments: Medicament[] = [];

  constructor(private medicamentService: MedicamentService,
    public authservice:AuthService,private router: Router
  ) {}

  ngOnInit() {
    /* this.medicaments = this.medicamentService.getMedicaments();
    console.log(this.medicaments); */
    this.chargerMedicaments();
    
      };
      chargerMedicaments(){
        this.medicamentService.listeMedicaments().subscribe(meds => {
          console.log(meds);
          this.medicaments = meds;});}

          supprimerProduit(m: Medicament)
          {
          let conf = confirm("Etes-vous sûr ?");
          if (conf)
          this.medicamentService.supprimerMedicament(m.idMed).subscribe(() => {
          console.log("produit supprimé");
          this.chargerMedicaments();
          });
          }     

          
      

  
  /* supprimerMedicament(med: Medicament) {
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
  } */

  
    Navigate(med: string) {
      
      this.router.navigate(['/updateMedicament'], { queryParams: { nomMed: med } });
    // this.medicamentService.medicament = med;
    
  }
  
  
}
