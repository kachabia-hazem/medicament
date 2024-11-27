import { Injectable } from '@angular/core';
import { Classification, Medicament } from '../medicaments/medicaments.component';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { apiURL } from '../config';
const httpOptions = {headers: new HttpHeaders( {'Content-Type': 'application/json'} )};


@Injectable({
  providedIn: 'root'
})
export class MedicamentService {
  
  apiURLClass:string="'http://localhost:8091/medicaments/class'";
  /* medicament!: Medicament;
  medicamentsRecherche: Medicament[] = [];   */

  /* classifications: Classification[] = [
    { idClass: 1, nomClass: 'Analgésique' },
    { idClass: 2, nomClass: 'Antibiotique' },
    { idClass: 3, nomClass: 'Antiviraux' },
    { idClass: 4, nomClass: 'Anti-inflammatoires' }
  ]; */

 /*  private medicaments: Medicament[] = [
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
      classification: { idClass: 1, nomClass: 'Analgésique' }
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
      classification: { idClass: 2, nomClass: 'Antibiotique' }
    }
  ]; */

  constructor(private http : HttpClient) {}

 /*  getMedicaments(): Medicament[] {
    return this.medicaments;
  }
 */
  /* addMedicament(medicament: Medicament): void {
    this.medicaments.push(medicament);
  } */
    ajouterMedicament( med: Medicament):Observable<Medicament>{
      return this.http.post<Medicament>(apiURL, med, httpOptions);
      }
    ajouterClassification(classification: Classification): Observable<Classification> {
        return this.http.post<Classification>(`${apiURL}/class`, classification, httpOptions);
    }
    updateClassification(classification: Classification): Observable<Classification> {
      return this.http.put<Classification>(`${apiURL}/class`, classification, httpOptions);
  }
 /*  updateMedicamentByName(name: string, updatedMedicament: Medicament): void {
    const index = this.medicaments.findIndex(m => m.name === name);
    if (index !== -1) {
      this.medicaments[index] = { ...updatedMedicament };
    }
  } */
    updateMedicament(med:Medicament) : Observable<Medicament>
    {
    return this.http.put<Medicament>(apiURL, med, httpOptions);
    }

  /* getMedicamentByName(name: string): Medicament | undefined {
    return this.medicaments.find(m => m.name === name);
  }
 */
  /* ListeClassification(): Classification[] {
    return this.classifications;
  } */
    listeClassifications():Observable<Classification[]>{
      return this.http.get<Classification[]>(apiURL+"/class");
      }
      

 /*  consulterClassification(id: number): Classification {
    return this.classifications.find(cat => cat.idClass === id)!;
  } */
    consulterMedicament(nom: String): Observable<Medicament> {
      const url = `${apiURL}/${nom}`;
      return this.http.get<Medicament>(url);
      }


 /*  supprimerMedicament(med: Medicament) {
    const index = this.medicaments.indexOf(med, 0);
    if (index > -1) {
      this.medicaments.splice(index, 1);
    }
    console.log(med);
  } */
    supprimerMedicament(med :number) {
      const url = `${apiURL}/${med}`;
      return this.http.delete(url, httpOptions);
      }

 /*  listerMedicaments(): Medicament[] {
    return this.medicaments;
  } */
    listeMedicaments(): Observable<Medicament[]>{
      return this.http.get<Medicament[]>(apiURL);
      }
    
      


      rechercherParClassification(idClass: number): Observable<Medicament[]> {
        console.log(idClass);
        return this.http.get<Medicament[]>(`${apiURL}/medscat/${idClass}`);
      }
      
 

   rechercherParNom(nom: string): Observable<Medicament[]> {
    return this.http.get<Medicament[]>(`${apiURL}/medsnom/${nom}`);
  }  
 /*  ajouterClassificaton(clas: Classification): Observable<Classification> {
    this.classifications.push(clas);
    return of(clas);
  } */
}
