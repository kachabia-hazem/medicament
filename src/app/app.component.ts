import { Component, OnInit } from '@angular/core';
import { AuthService } from './services/auth.service';
import { Router } from '@angular/router'; // Importer Router pour la navigation

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'] // Correction de "styleUrl" en "styleUrls"
})
export class AppComponent implements OnInit { // Implémentation de l'interface OnInit
  title = 'Medicament';

  constructor(public authService: AuthService, private router: Router) {} // Injection de Router

  ngOnInit() {
    const isloggedin = localStorage.getItem('isloggedIn') === 'true'; // Vérification du booléen
    const loggedUser = localStorage.getItem('loggedUser');

    if (!isloggedin || !loggedUser) {
      this.router.navigate(['/login']); // Redirection vers la page de connexion
    } else {
      this.authService.setLoggedUserFromLocalStorage(loggedUser); // Appel de la méthode pour définir l'utilisateur connecté
    }
  }
}
