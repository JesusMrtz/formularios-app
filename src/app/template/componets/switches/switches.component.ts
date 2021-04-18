import { Component } from '@angular/core';

@Component({
  selector: 'app-switches',
  templateUrl: './switches.component.html',
  styles: [
  ]
})
export class SwitchesComponent {
  people = {
    gender: '',
    notifications: false,
  };
  terms = false;
}
