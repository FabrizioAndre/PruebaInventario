import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Componente } from './models/interfaces';
import { DataService } from './services/data.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  componentes: Observable<Componente[]>;


  constructor(
    private dataService: DataService
  ) {
    this.componentes = this.dataService.getMenuOpts();
  }
  title = 'fe-inventarios-gei';
}
