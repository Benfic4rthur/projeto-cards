import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss'
})
export class ButtonComponent {
  @Input({required: true, alias: 'buttonText'}) buttonText : string = '';
  @Input({required: true, alias: 'buttonStyle'}) buttonStyle : 'white' | 'purple' = 'white';
  @Output('buttonClickedEmitt') buttonClickedEmitt = new EventEmitter<void>();
  onButtonClick(){
    this.buttonClickedEmitt.emit();
  }
}
