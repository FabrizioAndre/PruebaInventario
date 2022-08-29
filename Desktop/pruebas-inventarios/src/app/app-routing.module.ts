import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IniciosesionComponent } from './pages/operaciones/iniciosesion/iniciosesion.component';
import { RegistrarSolicitudComponent } from './pages/operaciones/registrar-solicitud/registrar-solicitud.component';
import { ListarSolicitudComponent } from './pages/operaciones/listar-solicitud/listar-solicitud.component';
import { ListarUsuariosComponent } from './pages/operaciones/listar-usuarios/listar-usuarios.component';
import { ListarperiodoComponent } from './pages/operaciones/listar-periodo/listar-periodo.component';
import { RegistrarperiodoComponent } from './pages/operaciones/registrar-periodo/registrar-periodo.component';
import { ListarDatosComponent } from './pages/operaciones/listar-datos/listar-datos.component';
import { ResultadoGeiComponent } from './pages/operaciones/resultado-gei/resultado-gei.component';
import { EvaluarInventariosComponent } from './pages/operaciones/evaluar-inventarios/evaluar-inventarios.component';
import { HistorialPeriodosComponent } from './pages/operaciones/historial-periodos/historial-periodos.component';
import { BandejaNotificacionesComponent } from './pages/operaciones/bandeja-notificaciones/bandeja-notificaciones.component';
import { FactoresEmisionComponent } from './pages/operaciones/factores-emision/factores-emision.component';


const routes: Routes = [
  { path: '', component: IniciosesionComponent },
  { path: 'registrar-solicitud', component: RegistrarSolicitudComponent },
  { path: 'registrar-periodo', component: RegistrarperiodoComponent },
  { path: 'listar-solicitud', component: ListarSolicitudComponent },
  { path: 'listar-periodo', component: ListarperiodoComponent },
  { path: 'listar-usuarios', component: ListarUsuariosComponent },
  { path: 'listar-datos', component: ListarDatosComponent },
  { path: 'resultado-gei', component: ResultadoGeiComponent },
  { path: 'evaluar-inventarios', component: EvaluarInventariosComponent },
  { path: 'historial-periodos', component: HistorialPeriodosComponent },
  { path: 'bandeja-notificaciones', component: BandejaNotificacionesComponent },
  { path: 'factor-emision', component: FactoresEmisionComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true, relativeLinkResolution: 'legacy' })],
  exports: [RouterModule],
})
export class AppRoutingModule { }
