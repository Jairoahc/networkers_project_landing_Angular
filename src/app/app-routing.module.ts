import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './routes/home/home.component';
import { HomecComponent } from './components/homec/homec.component';
import { Page404Component } from './components/page404/page404.component';
import { IndevelopmentComponent } from './routes/indevelopment/indevelopment.component';
import { LoginComponent } from './routes/login/login.component';
import { MainComponent } from './routes/main/main.component';
import { QueEsNetComponent } from './routes/que-es-net/que-es-net.component';
import { SignupComponent } from './routes/signup/signup.component';

const routes: Routes = [
  {path: "", pathMatch: "full", redirectTo: "main"},
  {path: "main", component: MainComponent},
  {path: "que-es-net", component: QueEsNetComponent},
  {path: "indevelopment", component: IndevelopmentComponent},
  {path: "home", component: HomeComponent},
  {path: "signup", component: SignupComponent},
  {path: "login", component: LoginComponent},
  {path: "**", component: Page404Component}, //Siempre este debe ir de ultimo

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
