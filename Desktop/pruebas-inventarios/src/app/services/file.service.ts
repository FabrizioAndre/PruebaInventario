

import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IDataResponse } from '../models/IDataResponse';

@Injectable({
  providedIn: 'root'
})
export class FileService {

  urlCargarArchivo = '/rest/archivo/cargar';
  urlDownloadFile = '/rest/archivo/descargar?codigo=';

  constructor(private http: HttpClient) { }

  uploadFile(file: File) {
    const formData = new FormData;
    formData.append('archivo', file);
    return this.http.post<IDataResponse>(this.urlCargarArchivo, formData);
  }

  downloadFile(param: string) {

    window.open(this.urlDownloadFile + param);
  }



}
