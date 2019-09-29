import {Component, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-user-component',
  templateUrl: './user-component.component.html',
  styleUrls: ['./user-component.component.css']
})
export class UserComponentComponent implements OnInit {
  test: boolean = false;
  content: String = 'Cache les hobbies';
  name: String;
  email: String;
  address: String;
  hobbies: Array<string>;
  nameofuser = '';
  emailofuser='';
  adresee='';

  constructor() {
  }

  ngOnInit() {

    this.name = 'toto';
    this.email = 'toto@esprit.tn';
    this.address = 'rue d\'usine Chotrana  Ariana';
    this.hobbies = ['Music', 'Movies', 'Sports'];

  }

  toggoleEnabled() {
    this.test = true;
    this.content = this.test ? 'Cache les hobbies' : 'Afficher hobbies';
  }

  toggoledisEnabled() {
    this.test = false;
    this.content = this.test ? 'Cache les hobbies' : 'Afficher hobbies';
  }

  deleteHobby(index) {
    this.hobbies.splice(index, 1);
    console.log(this.hobbies);
  }
}

