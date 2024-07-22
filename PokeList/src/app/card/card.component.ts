import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
 @Input()
 pokemon: string;

 @Input()
 numero: number;

 pegarImagemPokemon(){
  const numeroFormatado = this.leadingZero(this.numero);

  return `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${numeroFormatado}.png`;
 }

 leadingZero(str: string | number, size = 3): any{
  let s = String(str);

  while (s.length < (size || 2)) {
    s = '00' + s;

    return s;
  }
 }
}
