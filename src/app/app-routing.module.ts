import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegistreerComponent } from './registreer/registreer.component';
import { WachtwoordvergetenComponent } from './wachtwoordvergeten/wachtwoordvergeten.component';


const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'wachtwoordvergeten',
    component: WachtwoordvergetenComponent,
  },
  {
    path: 'register',
    component: RegistreerComponent,
  },
  {
    path: '',
    component: LoginComponent,
  },

  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
