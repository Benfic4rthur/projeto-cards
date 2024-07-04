import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss'
})
export class ButtonComponent {
  @Input({required: true, alias: 'buttonText'}) buttonText : string = ''; // recebe o texto do componente pai
  @Input({required: true, alias: 'buttonStyle'}) buttonStyle : 'white' | 'purple' = 'white';
  @Output('buttonClickedEmitt') buttonClickedEmitt = new EventEmitter<void>(); // envia o evento para o componente pai
  onButtonClick(){
    this.buttonClickedEmitt.emit();
  }
}
