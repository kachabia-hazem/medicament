import { Injectable } from '@angular/core';
import { Classification, Medicament } from '../medicaments/medicaments.component';

@Injectable({
  providedIn: 'root'
})
export class MedicamentService {
  medicament!: Medicament;
  classifications: Classification[] = [ // Utilisation correcte sans duplication
    { idclass: 1, nomclass: 'Analgésique' },
    { idclass: 2, nomclass: 'Antibiotique' },
    { idclass: 3, nomclass: 'Antiviraux' },
    { idclass: 4, nomclass: 'Anti-inflammatoires' }
  ];

  private medicaments: Medicament[] = [
    {
      name: 'Paracétamol',
      description: 'Un médicament pour soulager la douleur.',
      prix: 3.50,
      marque: 'Doliprane',
      url: './parace.jpg',
      categorie: 'Analgésique',
      code: 101,
      creationDate: new Date('2023-01-01'),
      expirationDate: new Date('2025-12-31'),
      classification: { idclass: 1, nomclass: 'Analgésique' }
    },
    {
      name: 'Ibuprofène',
      description: 'Un anti-inflammatoire non stéroïdien.',
      prix: 4.00,
      marque: 'Nurofen',
      url: './ibuprofene.webp',
      categorie: 'Analgésique',
      code: 102,
      creationDate: new Date('2023-01-01'),
      expirationDate: new Date('2025-12-31'),
      classification: { idclass: 2, nomclass: 'Antibiotique' }
    }
  ];

  constructor() {}

  getMedicaments(): Medicament[] {
    return this.medicaments;
  }

  addMedicament(medicament: Medicament): void {
    this.medicaments.push(medicament);
  }

  updateMedicamentByName(name: string, updatedMedicament: Medicament): void {
    const index = this.medicaments.findIndex(m => m.name === name);
    if (index !== -1) {
      this.medicaments[index] = { ...updatedMedicament };
    }
  }

  getMedicamentByName(name: string): Medicament | undefined {
    return this.medicaments.find(m => m.name === name);
  }
  ListeClassification():Classification[]{
    return this.classifications;
  }
  consulterClassification(id:number):Classification{
    return this.classifications.find(cat => cat.idclass == id)!;
  }
  supprimerMedicament(med: Medicament){
    const index=this.medicaments.indexOf(med,0);
    if(index> -1){
      this.medicaments.splice(index,1);
    }

    console.log(med);

  }
  
  

}
