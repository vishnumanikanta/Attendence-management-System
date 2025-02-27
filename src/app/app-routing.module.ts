import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FacultyComponent } from './faculty/faculty.component';
import { UsersComponent } from './users/users.component';
import { LoginComponent } from './login/login.component';
import { WelcomeComponent } from './welcome/welcome.component';

const routes: Routes = [
 
  { path: 'login', component: LoginComponent },
  { path: 'welcome', component: WelcomeComponent }, 
  { path: 'faculty', component: FacultyComponent } ,
  { path: '**', component:LoginComponent } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
