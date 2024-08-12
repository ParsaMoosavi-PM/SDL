import { RouterModule, Routes } from '@angular/router';
import { Component, NgModule } from '@angular/core';
import { DoorCardComponent } from './door-card/door-card.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { SignUpPageComponent } from './sign-up-page/sign-up-page.component';

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
  },
  {
    path: 'Login', component:LoginPageComponent, pathMatch:'full'
  },
  {
    path: 'Signup', component:SignUpPageComponent, pathMatch:'full'
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
