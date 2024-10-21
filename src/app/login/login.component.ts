import { Router } from '@angular/router'; // Corrigé: import depuis Angular
import { AuthService } from '../services/auth.service';
import { User } from './../models/user';
import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'] // Corrigé: styleUrls est un tableau
})
export class LoginComponent {
  user: User = new User(); // Corrigé: Initialisation correcte de l'objet User
  erreur=0;

  constructor(private authService: AuthService, private router: Router) {}

  onLoggedin() {
    console.log(this.user);
    let isValidUser: boolean = this.authService.SignIn(this.user); // Type correct pour boolean
    if (isValidUser) {
      this.router.navigate(['/']); // Redirection vers la page d'accueil si succès
    } else {
     // alert('Login ou mot de passe incorrect !'); // Message d'erreur en cas d'échec
      this.erreur=1;
    }
  }
}
