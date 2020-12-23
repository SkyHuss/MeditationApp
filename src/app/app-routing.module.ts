import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginScreenComponent } from './login-screen/login-screen.component';
import { RegisterScreenComponent } from './register-screen/register-screen.component';
import { SplachScreenComponent } from './splach-screen/splach-screen.component';

const routes: Routes = [
  { path: 'login', component: LoginScreenComponent },
  { path: 'register', component: RegisterScreenComponent },
  { path: '', component: SplachScreenComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [LoginScreenComponent, RegisterScreenComponent, SplachScreenComponent]