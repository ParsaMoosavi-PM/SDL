import { RouterModule, Routes } from '@angular/router';
import { Component, NgModule } from '@angular/core';
import { DoorCardComponent } from './door-card/door-card.component';

export const routes: Routes = [
  {
    path: 'aaaa',
    loadChildren: () => import('./tabs/tabs.routes').then((m) => m.routes),
  },
  {
    path: 'DoorCard', component:DoorCardComponent, pathMatch:'full',
  },
  {
    path: '', component:DoorCardComponent, pathMatch:'full',
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
