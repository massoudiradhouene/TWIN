import {Component, OnInit} from '@angular/core';
import {Film} from '../model/Film';

@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.css']
})
export class FilmsComponent implements OnInit {
  typeoffilm: string = 'drama';
  resShow: boolean = false;
  nbActions: number = 0;
  totalFilms: number;
  listefilms: Film[] = [
    {nom: 'MANDY', duree: '2 heures', categorie: 'action'},
    {nom: 'LOVE AFTER LOVE', duree: '3 heures', categorie: 'drama'},
    {nom: 'YOU WERE NEVER REALLY HERE', duree: '2 heures', categorie: 'drama'},
    {nom: 'THE RIDER', duree: '3 heures', categorie: 'drama'},
    {nom: 'FIRST REFORMED', duree: '6 heures', categorie: 'action'}];

  constructor() {
  }

  ngOnInit() {
  }

  getNbFilms(typeoffilm) {
    this.resShow = true;
    this.nbActions = 0;
    this.totalFilms = this.listefilms.length;
    for (let film of this.listefilms) {

      if (film.categorie === typeoffilm) {
        this.nbActions++;
      }
    }
  }
}
