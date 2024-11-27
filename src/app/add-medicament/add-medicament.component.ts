import { Component, OnInit } from '@angular/core';
import { MedicamentService } from '../services/medicament.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Classification } from '../medicaments/medicaments.component';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';

export interface Medicament {
  idMed: number;
  nomMed: string;
  descMed: string;
  prixMed: number;
  marqueMed: string;
  url: string;
  code: number;
  categorie: string;
  dateCreation: Date;
  dateExpiration: Date;
  classification: Classification;
}

@Component({
  selector: 'app-add-medicament',
  templateUrl: './add-medicament.component.html',
  styleUrls: ['./add-medicament.component.css']
})
export class AddMedicamentComponent implements OnInit {
  myForm!: FormGroup;
  classifications!: Classification[]; // List of classifications

  constructor(
    private medicamentService: MedicamentService,
    private router: Router,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    // Fetch classifications from the service
    this.medicamentService.listeClassifications().subscribe((cats) => {
      this.classifications = cats;
      console.log('Classifications:', this.classifications);
    });

    // Initialize the form
    this.myForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(5)]],
      description: ['', [Validators.required]],
      prix: ['', [Validators.required, this.prixPositifValidator]],
      marque: ['', [Validators.required, Validators.minLength(3)]],
      url: ['', [Validators.required, Validators.minLength(2)]],
      code: ['', [Validators.required, Validators.minLength(2)]],
      creationDate: ['', [Validators.required]],
      expirationDate: ['', [Validators.required]],
      classification: ['', [Validators.required]], // Binding classification selection
    });
  }

  // Validator for positive price
  prixPositifValidator(control: AbstractControl) {
    const value = control.value;
    return value > 0 ? null : { prixNegatifOuZero: true };
  }

  // Add Medicament
  addMedicament() {
    if (this.myForm.invalid) {
      console.error('Form is invalid:', this.myForm.errors);
      return;
    }

    const formData = this.myForm.value;

    const selectedClassification = this.classifications.find(
      (clas) => clas.idClass === +formData.classification
    );

    if (!selectedClassification) {
      console.error('Selected classification not found');
      return;
    }

    const newMedicament: Medicament = {
      idMed: 0, // Default ID
      nomMed: formData.name,
      descMed: formData.description,
      prixMed: formData.prix,
      marqueMed: formData.marque,
      url: formData.url,
      code: formData.code,
      categorie: '', // Default category
      dateCreation: new Date(formData.creationDate),
      dateExpiration: new Date(formData.expirationDate),
      classification: selectedClassification,
    };
    console.log(newMedicament);
    this.medicamentService.ajouterMedicament(newMedicament).subscribe(
      (med) => {
        console.log('Medicament added:', med);
        this.router.navigate(['/medicaments']);
      },
      (error) => {
        console.error('Error adding medicament:', error);
      }
    );
  }
}
