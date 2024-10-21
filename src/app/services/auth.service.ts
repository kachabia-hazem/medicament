import { Injectable } from '@angular/core';
import { User } from '../models/user'; // Modèle d'utilisateur
import { Router } from '@angular/router'; // Corrigé : import correct de Router depuis Angular

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  // Liste d'utilisateurs fictifs avec rôles
  users: User[] = [
    { "username": "admin", "password": "123", "roles": ['ADMIN'], "email": "username@gmail.com", "enabled": true },
    { "username": "nadhem", "password": "123", "roles": ['USER'], "email": "ndhem@gmail.com", "enabled": true }
  ];

  public loggedUser!: string; // Utilisateur connecté
  public isloggedIn: boolean = false; // Etat de connexion
  public roles!: string[]; // Rôles de l'utilisateur connecté

  constructor(private router: Router) { }

  // Déconnexion de l'utilisateur
  logout() {
    this.isloggedIn = false;
    this.loggedUser = ''; // Remis à une chaîne vide
    this.roles = [];
    localStorage.removeItem('loggedUser'); // Suppression des infos du localStorage
    localStorage.setItem('isloggedIn', String(this.isloggedIn));
    this.router.navigate(['/login']); // Redirection vers la page de login
  }

  // Connexion de l'utilisateur
  SignIn(user: User): boolean {
    let validUser: boolean = false; // Variable pour vérifier si l'utilisateur est valide

    this.users.forEach((curUser) => {
      if (user.username === curUser.username && user.password === curUser.password) {
        validUser = true;
        this.loggedUser = curUser.username;
        this.isloggedIn = true;
        this.roles = curUser.roles;
        localStorage.setItem('loggedUser', this.loggedUser); // Sauvegarde dans localStorage
        localStorage.setItem('isloggedIn', String(this.isloggedIn));
      }
    });

    return validUser;
  }

  // Vérifie si l'utilisateur connecté est un administrateur
  isAdmin(): boolean {
    if (!this.roles) {
      return false; // Si pas de rôles, retourne faux
    }
    return this.roles.includes('ADMIN'); // Vérifie si le rôle ADMIN est présent
  }

  // Récupération de l'utilisateur connecté depuis le localStorage
  getLoggedUser(): string {
    return localStorage.getItem('loggedUser') || ''; // Retourne une chaîne vide si non trouvé
  }

  // Vérifie si l'utilisateur est connecté
  isUserLoggedIn(): boolean {
    return localStorage.getItem('isloggedIn') === 'true'; // Vérifie l'état de connexion dans localStorage
  }

  setLoggedUserFromLocalStorage(login: string) {
    this.loggedUser = login;
    this.isloggedIn = true;
    this.getUserRoles(login);
  }

  getUserRoles(username: string) {
    this.users.forEach((curUser) => {
      if (curUser.username === username) {
        this.roles = curUser.roles;
      }
    });
  }
}
