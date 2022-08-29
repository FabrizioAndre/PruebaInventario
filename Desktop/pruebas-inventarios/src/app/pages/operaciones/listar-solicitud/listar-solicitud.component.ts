import { Component, OnInit } from '@angular/core';
import { AlertService } from 'src/app/services/alert.service';
import { SolicitudUsuarioService } from 'src/app/services/solicitud-usuario.service';
import { SolicitudUsuario } from 'src/app/models/solicitud';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-listar-solicitud',
  templateUrl: './listar-solicitud.component.html',
  styleUrls: ['./listar-solicitud.component.css']
})
export class ListarSolicitudComponent implements OnInit {

  listarPendiente: SolicitudUsuario[] = [];
  listarHistorial: SolicitudUsuario[] = [];

  pageA = 1;
  pageSizeA = 3;
  totalA = 0;

  pageB = 1;
  pageSizeB = 3;
  totalB = 0;

  modelA: SolicitudUsuario = new SolicitudUsuario();
  modelB: SolicitudUsuario = new SolicitudUsuario();



  Mostrar() {
    this.alertService.success("La solicitud se aprobó satisfactoriamente.");
  }

  constructor(private alertService: AlertService, private modalService: NgbModal, private solicitudUsuarioService: SolicitudUsuarioService) { }

  ngOnInit(): void {

    this.fnListarSolicitud();
    this.fnListarHistorial();
  }

  fnListarSolicitud() {
    this.solicitudUsuarioService.listarPendientes().subscribe(
      {
        next: data => {
          console.log(data);
          if (data.exito) {
            this.listarPendiente = data.datoAdicional;
            this.totalA = this.listarPendiente.length;

          }
        }
      });
  }

  fnListarHistorial() {
    this.solicitudUsuarioService.listarHistorial().subscribe(
      {
        next: data => {
          console.log(data);
          if (data.exito) {
            this.listarHistorial = data.datoAdicional;
            this.totalB = this.listarHistorial.length;
          }
        }
      });

  }

  Aprobar(contentAprobar: any) {
    this.modalService.open(contentAprobar, { centered: true });
  }

  Observar(contentObservar: any) {
    this.modalService.open(contentObservar, { centered: true });
  }

  Rechazar(contentRechazar: any) {
    this.modalService.open(contentRechazar, { centered: true });
  }
}
