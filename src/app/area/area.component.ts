import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-area',
  templateUrl: './area.component.html',
  styleUrls: ['./area.component.css']
})
export class AreaComponent implements OnInit {
  res: number;
  compteur = 0;
  propertybinding: string = 'TWINesprit';
  Message:string='vous n avez pas des reservation';
  isEnabled: boolean=false;
nomClient:string='';
  constructor() {
  }

  ngOnInit() {
  }

  calculateCercle(val) {
    this.res = val * val * 3.14;

  }

  calculateSquare(val) {
    this.res = val * val;
  }

  onClick() {
    this.compteur++;
  }
onReserve(){
    this.isEnabled=true;
    this.Message='vous  avez  des reservation';
}
writeNameOfClient(evt: Event){
    this.nomClient=(<HTMLInputElement>evt.target).value;
  }

}
