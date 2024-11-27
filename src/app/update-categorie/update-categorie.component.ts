import { MedicamentService } from '../services/medicament.service';
import { Classification } from './../medicaments/medicaments.component';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-update-categorie',
  templateUrl: './update-categorie.component.html',
  styleUrls: ['./update-categorie.component.css'] // Fixed typo in `styleUrls`
})
export class UpdateCategorieComponent {
  @Input()
  classification!: Classification;
  
  @Input()
  ajout!: boolean;
  
  @Output()
  classificationUpdated = new EventEmitter<Classification>();

  constructor(private medicamentService: MedicamentService) {}

  ngOnInit(): void {
    console.log('ngOnInit du composant UpdateCategorie', this.classification);
  }

  saveCategorie(ajout: boolean): void {
    if (ajout) {
      this.medicamentService.ajouterClassification(this.classification).subscribe(
        (response) => {
          console.log('Classification added:', response);
          this.classificationUpdated.emit(response); // Emit updated classification
        },
        (error) => {
          console.error('Error adding classification:', error);
        }
      );
    } else {
      this.medicamentService.updateClassification(this.classification).subscribe(
        (response) => {
          console.log('Classification updated:', response);
          this.classificationUpdated.emit(response); // Emit updated classification
        },
        (error) => {
          console.error('Error updating classification:', error);
        }
      );
    }
  }
}
