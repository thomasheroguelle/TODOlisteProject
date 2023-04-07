import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  constructor(private router: Router) { }

  isOnHomePage: boolean = false;
  isOnCreateTask: boolean = false;
  isOnHistoriquePage: boolean = false;

  ngOnInit() {
    this.setPageStatus();
  }

  setPageStatus() {
    // vérifie la page actuelle et détermine si l'utilisateur est sur la page d'accueil ou sur la page de création de taches 
    const currentUrl = this.router.url;
    // la variable currentUrl stocke l'URL pour vérifier si l'URL correspond a la page d'accueil ou a la page de creation de taches. 
    this.isOnHomePage = currentUrl === "/";
    this.isOnCreateTask = currentUrl === "/createTask";
    this.isOnHistoriquePage = currentUrl === "/historique";
    // les résultats de ces vérifications sont stockées dans les deux variables
    this.router.events.subscribe(event => {
      // la fonction s'abonne a des evennements de navigation et appelle 'setPageStatus()' lorsqu'un evenement de fin de navigation est détectée pour mettre a jour le statut de la page en temps réel
      // en gros, la methode subscribe est utilisée pour écouter les evenements de navigation emis par l'objet router. Lorsqu'un evenement de fin de navigation est détecté ('navigationEnd'), la fonction est appelé pour mettre a jour le statut de la page. subscribe permet de suivre en temps réel les changements d'état d'un objet observé, et de prendre des actions en réponse à ces changements. 
      if (event instanceof NavigationEnd) {
        this.setPageStatus();
      }
    })
  }

}
