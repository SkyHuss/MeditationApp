import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginScreenComponent } from './login-screen/login-screen.component';
import { RegisterScreenComponent } from './register-screen/register-screen.component';
import { SplachScreenComponent } from './splach-screen/splach-screen.component';

const routes: Routes = [
  { path: 'login', component: LoginScreenComponent, data: {animation: 'Login'} },
  { path: 'register', component: RegisterScreenComponent, data: {animation: 'Register'} },
  { path: '', component: SplachScreenComponent, data: {animation: 'Splach'} }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [LoginScreenComponent, RegisterScreenComponent, SplachScreenComponent]