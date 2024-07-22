import { Component } from '@angular/core';
import { PokeServiceService } from '../poke-service/poke-service.service';

@Component({
  selector: 'app-poke-list',
  templateUrl: './poke-list.component.html',
  styleUrl: './poke-list.component.scss'
})
export class PokeListComponent {


constructor(public pokeService: PokeServiceService){}
}
