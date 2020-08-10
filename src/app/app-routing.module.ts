import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/*RUTEO - NAVEGACION*/
import {TestComponent} from './documentacion/test/test.component';
import {HomeComponent} from './pages/home/home.component';
import {NotFoundComponent} from './pages/not-found/not-found.component';
import {ContactoComponent} from './pages/contacto/contacto.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'home',component:HomeComponent},
  {path:'test',component:TestComponent},
  {path:'contacto',component:ContactoComponent},
  //URL que recibe un parametro
  {path:'contacto/:page',component:ContactoComponent},
  {path: '**', component: NotFoundComponent },  // Wildcard route for a 404 page
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
