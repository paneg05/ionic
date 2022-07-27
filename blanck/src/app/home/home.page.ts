import { Component,OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{
  public pesquisa = '';
  public resultado = '';
  public titulo ='meu primeiro app';
  public imagemRandomica='https://source.unsplash.com/random/200x200';
  public imagemCelular='../assets/icone-celular.png';

  constructor(private navegacao: NavController) {

  }

  ngOnInit(): void {

  }

  public atualiza(): void{

    this.titulo='texto alterado';

  };

  public acao(): void{

    this.titulo='botão clicado';
  };

  public acao1(): void{
    this.navegacao.navigateForward('botoes');
  };

  public acao2(): void{
    this.navegacao.navigateForward('lista');
  };

  public recuperar(){
    this.resultado= this.pesquisa;
  };

}
