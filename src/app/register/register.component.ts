import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'] // Correction: 'styleUrl' -> 'styleUrls'
})
export class RegisterComponent implements OnInit {
  public user = new User();
  confirmPassword?: string;
  myForm!: FormGroup;
  err!:any;
  loading: boolean = false; // Ajout de la propriété loading

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.myForm = this.formBuilder.group({
      username: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', [Validators.required]]
    });
  }

  onRegister() {
    if (this.myForm.invalid) {
      return; // Ne pas soumettre si le formulaire est invalide
    }

    this.loading = true; // Activation du spinner de chargement

    // Simulez une requête ou traitement (peut être remplacé par un appel API réel)
    setTimeout(() => {
      console.log(this.user);
      this.loading = false; // Désactivation du spinner après traitement
    }, 2000); // Simulation d'une requête de 2 secondes
  }
}
