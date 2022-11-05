import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Page404Component } from './components/page404/page404.component';
import { IndevelopmentComponent } from './routes/indevelopment/indevelopment.component';
import { MainComponent } from './routes/main/main.component';
import { QueEsNetComponent } from './routes/que-es-net/que-es-net.component';

const routes: Routes = [
  {path: "", pathMatch: "full", redirectTo: "main"},
  {path: "main", component: MainComponent},
  {path: "que-es-net", component: QueEsNetComponent},
  {path: "indevelopment", component: IndevelopmentComponent},
  {path: "**", component: Page404Component}, //Siempre este debe ir de ultimo

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
