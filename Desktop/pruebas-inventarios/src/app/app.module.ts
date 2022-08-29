import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IniciosesionComponent } from './pages/operaciones/iniciosesion/iniciosesion.component';
import { RegistrarSolicitudComponent } from './pages/operaciones/registrar-solicitud/registrar-solicitud.component';
import { ListarSolicitudComponent } from './pages/operaciones/listar-solicitud/listar-solicitud.component';
import { ListarUsuariosComponent } from './pages/operaciones/listar-usuarios/listar-usuarios.component';
import { HeaderComponent } from './shared/header/header.component';
import { MenuComponent } from './shared/menu/menu.component';
import { ListarperiodoComponent } from './pages/operaciones/listar-periodo/listar-periodo.component';
import { RegistrarperiodoComponent } from './pages/operaciones/registrar-periodo/registrar-periodo.component';
import { ListarDatosComponent } from './pages/operaciones/listar-datos/listar-datos.component';
import { ResultadoGeiComponent } from './pages/operaciones/resultado-gei/resultado-gei.component';
import { EvaluarInventariosComponent } from './pages/operaciones/evaluar-inventarios/evaluar-inventarios.component';
import { HistorialPeriodosComponent } from './pages/operaciones/historial-periodos/historial-periodos.component';
import { BandejaNotificacionesComponent } from './pages/operaciones/bandeja-notificaciones/bandeja-notificaciones.component';
import { FactoresEmisionComponent } from './pages/operaciones/factores-emision/factores-emision.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { AlertComponent } from './utils/alert/alert.component';
import { BusquedaPipe } from './utils/alert/search.pipe';

@NgModule({
  declarations: [
    AlertComponent, AppComponent, IniciosesionComponent, RegistrarperiodoComponent, RegistrarSolicitudComponent, ListarSolicitudComponent, ListarUsuariosComponent, HeaderComponent, MenuComponent, ListarperiodoComponent, ListarDatosComponent, ResultadoGeiComponent, EvaluarInventariosComponent, HistorialPeriodosComponent, BandejaNotificacionesComponent, FactoresEmisionComponent, FooterComponent, BusquedaPipe],
  imports: [FormsModule, ReactiveFormsModule, BrowserModule, HttpClientModule, NgbModule, RouterModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
