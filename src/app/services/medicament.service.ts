import { Injectable } from '@angular/core';
import { Medicament } from '../medicaments/medicaments.component';

@Injectable({
  providedIn: 'root'
})
export class MedicamentService {
  medicament!: Medicament;
  
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
      expirationDate: new Date('2025-12-31')
    },
    {
      name: 'Ibuprofène',
      description: 'Un anti-inflammatoire non stéroïdien.',
      prix: 4.00,
      marque: 'Nurofen',
      url: "./ibuprofene.webp",
      categorie: 'Analgésique',
      code: 102,
      creationDate: new Date('2023-01-01'),
      expirationDate: new Date('2025-12-31')
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
      this.medicaments[index] = updatedMedicament;
    }
  }
  getMedicamentByName(name: string): Medicament | undefined {
    return this.medicaments.find(m => m.name === name);
  }
}
