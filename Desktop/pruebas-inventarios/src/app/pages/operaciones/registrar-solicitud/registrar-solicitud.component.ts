import { Router } from '@angular/router';
import { FileService } from 'src/app/services/file.service';
import { AlertService } from 'src/app/services/alert.service';
import { SolicitudUsuarioService } from 'src/app/services/solicitud-usuario.service';
import { SolicitudUsuario } from 'src/app/models/solicitud';
import { NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Institucion } from 'src/app/models/Institucion';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-registrar-solicitud',
  templateUrl: './registrar-solicitud.component.html',
  styleUrls: ['./registrar-solicitud.component.css']
})

export class RegistrarSolicitudComponent implements OnInit {

  verificaContrasena: String;
  newContrasena: String;
  disabledForm: Boolean = true;
  loading: Boolean = false;
  loadingVerifica: Boolean = false;
  isValidDoc: Boolean = true;
  fileToUpload: File;

  /* Mostrar contraseña  */
  showPassword: boolean = false;
  showPasswordR: boolean = false;
  /*  */

  solicitud = new SolicitudUsuario;
  institucion = new Institucion;

  constructor(private router: Router, private fileService: FileService, private alertService: AlertService, private modalService: NgbModal,
    private solicitudUsuarioService: SolicitudUsuarioService) {
  }

  ngOnInit() { }

  //Verificar Ruc
  fnVerificarRuc() {
    if (this.solicitud.sRucMunicipalidad == undefined || this.solicitud.sRucMunicipalidad == "") {
      this.alertService.warning("Ingrese un número de RUC válido.");
      return;
    }

    this.loadingVerifica = true;
    this.solicitudUsuarioService.verificarRuc(this.solicitud.sRucMunicipalidad).subscribe(
      {
        next: data => {
          console.log(data);
          if (!data.exito) {
            this.alertService.warning(data.mensajeUsuario);
            this.disabledForm = true;
            this.solicitud.sRazonSocial = "";
            this.institucion = new Institucion;
          } else {
            this.institucion = data.datoAdicional;
            this.solicitud.sRazonSocial = this.institucion.sNombre;
            this.disabledForm = false;
          }
          this.loadingVerifica = false;
        },
        error: err => {
          console.log(err.error.msg);
          this.loadingVerifica = false;
        }
      })
  }

  onFileChange($event: any) {
    this.fileToUpload = $event.target.files[0];
    if (this.fileToUpload != null) {
      this.isValidDoc = true;
    }
  }

  fnRegistrar(form: NgForm, contentModal: any) {
    // Valida documento
    if (this.fileToUpload == undefined) {
      this.isValidDoc = false;
    }

    // Valida formulario
    if (form.invalid) {
      this.alertService.warning("Ingrese los datos obligatorios del formulario.");
      return;
    }

    this.loading = true;
    //Registra documento
    this.fileService.uploadFile(this.fileToUpload).subscribe(
      {
        next: data => {
          console.log(data);
          if (data.exito) {
            this.solicitud.sNombreDocumento = data.datoAdicional.sNombreDocumento;
            this.solicitud.sUidDocumento = data.datoAdicional.sUidDocumento;
            //Registra solicitud
            this.solicitudUsuarioService.registrar(this.solicitud).subscribe({
              next: data => {
                console.log(data);
                if (data.exito) {
                  this.solicitud.nIdSolicitudUsuario = data.datoAdicional;
                  this.modalService.open(contentModal, { centered: true });
                } else {
                  this.alertService.error(data.mensajeUsuario);
                }
                this.loading = false;
              },
              error: err => {
                console.log(err);
                this.loading = false;
              }
            })
          }
        },
        error: err => {
          console.log(err);
          this.loading = false;
        }
      });
  }

  fnDescargarFormato(){
   this.fileService.downloadFile("DJ");
   }

  fnClose(modalSolicitud: any) {
    modalSolicitud.close();
    this.router.navigate(['/']);
  }

}



