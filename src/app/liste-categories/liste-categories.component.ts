import { Classification } from './../medicaments/medicaments.component';
import { Component } from '@angular/core';
import { MedicamentService } from '../services/medicament.service';

@Component({
  selector: 'app-liste-categories',
  templateUrl: './liste-categories.component.html',
  styleUrls: ['./liste-categories.component.css'],
})
export class ListeCategoriesComponent {
  classifications: Classification[] = []; // Initialize to avoid undefined errors
  ajout: boolean = true;
  updatedClass: Classification = { idClass: 0, nomClass: '', descriptionClass: '' };

  constructor(private medicamentService: MedicamentService) {}

  ngOnInit(): void {
    this.loadClassifications();
  }

  // Method to fetch classifications from the backend
  loadClassifications(): void {
    this.medicamentService.listeClassifications().subscribe(
      (data) => {
        this.classifications = data;
      },
      (error) => {
        console.error('Error loading classifications:', error);
      }
    );
  }

  // Handle classification updates or additions
  classificationUpdated(classification: Classification): void {
    console.log('Classification received from UpdateCategorieComponent:', classification);
    this.loadClassifications(); // Refresh the list of classifications after the operation
    this.resetForm();
  }

  // Set the selected classification for editing
  updateClassification(clas: Classification): void {
    this.updatedClass = { ...clas }; // Clone the object to avoid direct mutation
    this.ajout = false; // Switch to update mode
  }

  // Reset the form to add mode
  resetForm(): void {
    this.updatedClass = { idClass: 0, nomClass: '', descriptionClass: '' };
    this.ajout = true;
  }
}
