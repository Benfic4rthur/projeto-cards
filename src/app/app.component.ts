import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  // buttonClicked(){
  //   console.log('botão clicado');
  // }
  onCardbuttonClicked(){
    console.log('botão do card clicado');
  }
}
