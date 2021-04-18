import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BasicsComponent } from './componets/basics/basics.component';
import { DynamicsComponent } from './componets/dynamics/dynamics.component';
import { SwitchesComponent } from './componets/switches/switches.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'basicos',
        component: BasicsComponent
      },
      {
        path: 'dinamicos',
        component: DynamicsComponent
      },
      {
        path: 'switches',
        component: SwitchesComponent
      },
      {
        path: '**',
        redirectTo: 'basicos'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TemplateRoutingModule { }
