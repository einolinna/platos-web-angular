import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { BuscadorComponent } from './components/buscador/buscador.component';
import { DetallePlatoComponent } from './components/detalle-plato/detalle-plato.component';
import { HomeComponent } from './components/home/home.component';
import { PlatosComponent } from './components/platos/platos.component';

const routes: Routes = [
  {path:"home", component: HomeComponent},
  {path:"platos", component: PlatosComponent},
  {path:"about", component: AboutComponent},
  {path:"detallePlato/:id", component: DetallePlatoComponent},
  {path:"buscar/:termino", component: BuscadorComponent},
  {path:"**", redirectTo:"home"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
