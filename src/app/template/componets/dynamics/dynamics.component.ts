import { Component } from '@angular/core';

interface Person {
  name: string;
  favorite: Favorite[];
}

interface Favorite {
  id: number;
  name: string
}

@Component({
  selector: 'app-dynamics',
  templateUrl: './dynamics.component.html',
  styles: [
  ]
})
export class DynamicsComponent {
  newGame = '';
  person: Person = {
    name: 'Jesús Martínez',
    favorite: [
      {
        id: 1,
        name: 'Ver anime'
      },
      {
        id: 2,
        name: 'Estudiar Angular'
      }
    ]
  };

  save(): void {
    console.log('Form post');
  }

  addGame(): void {
    const countFavorite = this.person.favorite.length;
    const objFavorite = {
      id: countFavorite + 1,
      name: this.newGame.trim()
    };

    this.person.favorite.push(objFavorite);
    this.newGame = '';
  }

  delete(i: number): void {
    this.person.favorite.splice(i, 1);
  }

}
