import { Component } from '@angular/core';

interface MenuItem {
  text: string;
  rute: string;
}

@Component({
  selector: 'app-sidemenu',
  templateUrl: './sidemenu.component.html',
  styles: [
  ]
})
export class SidemenuComponent {
  templateMenu: MenuItem[] = [
    {
      text: 'Básicos',
      rute: '/template/basicos'
    },
    {
      text: 'Dinámicos',
      rute: '/template/dinamicos'
    },
    {
      text: 'Switches',
      rute: '/template/switches'
    },
  ];

  reactiveMenu: MenuItem[] = [
    {
      text: 'Básicos',
      rute: '/reactive/basicos'
    },
    {
      text: 'Dinámicos',
      rute: '/reactive/dinamicos'
    },
    {
      text: 'Switches',
      rute: '/reactive/switches'
    },
  ];

  validationsMenu: MenuItem[] = [
    {
      text: 'Login',
      rute: '/auth/login'
    },
    {
      text: 'Registro',
      rute: '/auth/register'
    }
  ];

  constructor() { }
}
