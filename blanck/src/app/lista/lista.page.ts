import { Component, OnInit } from '@angular/core';
import {NavController} from '@ionic/angular';
@Component({
  selector: 'app-lista',
  templateUrl: './lista.page.html',
  styleUrls: ['./lista.page.scss'],
})
export class ListaPage implements OnInit {

  constructor(private nav: NavController) { }

  ngOnInit() {
  };

  public avancar(): void{
    this.nav.navigateBack('home');
  };

}
