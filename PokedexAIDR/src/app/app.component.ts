import { Component } from '@angular/core';
import { Pokemon } from 'src/modules/pokemon';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'PokedexAIDR';
  logo = "../assets/logoPokemon.png";
  imgProfile: string = "../assets/pokebola.png";
  links: string[] = ['Home', 'Pokedex', 'Video Game', 'Card Games', 'Eventos'];

}
