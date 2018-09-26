import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the CalculatorPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-calculator',
  templateUrl: 'calculator.html',
})
export class CalculatorPage {

  public nome_usuario = "Lucas";

  public numero_1:number = 0;
  public numero_2:number = 0;

  public resultado:number = 0;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CalculatorPage');
  }

  public somarDoisNumeros() {
    this.resultado = parseInt(this.numero_1)+parseInt(this.numero_2);
  }

  public subtrair(){
    this.resultado = parseInt(this.numero_1)-parseInt(this.numero_2);
  }

  public multiplicar(){
    this.resultado = parseInt(this.numero_1)*parseInt(this.numero_2);
  }

  public dividir(){
    this.resultado = parseInt(this.numero_1)/parseInt(this.numero_2);
  }
}
