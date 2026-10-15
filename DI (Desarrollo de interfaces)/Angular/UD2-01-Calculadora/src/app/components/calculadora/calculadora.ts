import { Component } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculadora.html',
  styleUrl: './calculadora.css',
  imports: []
})
export class Calculator {
  screen = '0';
  operando1 = 0;
  operando2 = 0;

  escribirNumero(num: string) {
    if (this.screen === '0') {
      this.screen = num;
    } else {
      this.screen += num;
    }
  }

  sumar() {
    this.screen += '+';
  }

  restar() {
    this.screen += '-';
  }

  resultado() {
    const partes = this.screen.split('+');
    this.operando1 = Number(partes[0]);
    this.operando2 = Number(partes[1]);
    let resultadoSuma = this.operando1 + this.operando2;
    let resultadoResta = this.operando1 - this.operando2;
    this.screen = resultadoSuma.toString();
    this.screen = resultadoResta.toString();
  }

  clear() {
    this.screen = '0';
    this.operando1 = 0;
    this.operando2 = 0;
  }


}
