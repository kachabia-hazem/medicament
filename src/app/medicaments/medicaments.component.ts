import { Component, OnInit } from '@angular/core';
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
  supprimerMedicament(med: Medicament){
    const index=this.medicaments.indexOf(med,0);
    if(index> -1){
      this.medicaments.splice(index,1);
    }

    console.log(med);

  }
  editMedicament(med: Medicament) {
    
    this.medicamentService.medicament = med;
    
  }
  
  
}
