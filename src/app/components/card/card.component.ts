import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'] // Certifique-se de que o caminho está correto
})

export class CardComponent {
  @Input({required: true, alias: 'cardText'}) cardText: string = ''; // recebe o texto do componente pai
  @Input({required: true, alias: 'cardPrice'}) cardPrice: number = 0; // recebe o preço do componente pai
  @Input({required: true, alias: 'cardStyle'}) cardStyle: 'orange' | 'green' = 'orange';
  @Output('buttonClicked') buttonClickedEmitt = new EventEmitter<void>();

  onButtonClicked(){
    this.buttonClickedEmitt.emit();
  }
}
