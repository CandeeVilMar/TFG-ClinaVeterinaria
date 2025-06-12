import { Routes } from '@angular/router';
import { PrincipalComponent } from './principal/principal.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './registro/register.component';
import { InfoSegurosComponent } from './infoSeguros/infoSeguros.component';
import { InformacionVetComponent } from './informacionVet/informacionVet.component';
import { SugerenciaComponent } from './sugerencia/sugerencia.component';
import { AgregarMascotaComponent } from './agregarMascota/agregarMascota.component';

export const routes: Routes = [
  { path: '', redirectTo: 'inicio', pathMatch: 'full' },
  { path: 'inicio', component: PrincipalComponent },
  { path: 'login', component: LoginComponent },
  { path: 'registro', component: RegisterComponent },
  { path: 'infoSeguros', component: InfoSegurosComponent },
  { path: 'informacionVet', component: InformacionVetComponent },
  { path: 'sugerencia', component: SugerenciaComponent },
  { path: 'agregar-mascota', component: AgregarMascotaComponent }, 
  { path: '**', redirectTo: 'inicio' }
];