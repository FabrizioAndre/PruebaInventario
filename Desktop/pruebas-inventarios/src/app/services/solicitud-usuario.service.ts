

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { IDataResponse } from '../models/IDataResponse';
import { SolicitudUsuario } from '../models/solicitud';

@Injectable({
  providedIn: 'root'
})
export class SolicitudUsuarioService {

  options = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }
    )
  };

  urlVerificarRuc = '/rest/solicitud-usuario/verificar-ruc';
  urlRegistrarSolicitud = '/rest/solicitud-usuario/insertar';
  urlListarSolicitudUsuario = '/rest/solicitud-usuario/pendiente';
  urlListarHistorialUsuario = '/rest/solicitud-usuario/historial';

  constructor(private http: HttpClient) { }

  //Verificar Ruc
  verificarRuc(sRuc: String) {
    let filtro = {
      ruc: sRuc
    };
    return this.http.post<IDataResponse>(this.urlVerificarRuc, JSON.stringify(filtro), this.options);
  }

  registrar(oSolicitud: SolicitudUsuario) {
    return this.http.post<IDataResponse>(this.urlRegistrarSolicitud, JSON.stringify(oSolicitud), this.options);
  }

  //Listar Solicitud de Usuario
  listarPendientes() {
    return this.http.get<IDataResponse>(this.urlListarSolicitudUsuario);
  }

  //Listar Historial Usuario
  listarHistorial() {
    return this.http.get<IDataResponse>(this.urlListarHistorialUsuario);
  }

}



