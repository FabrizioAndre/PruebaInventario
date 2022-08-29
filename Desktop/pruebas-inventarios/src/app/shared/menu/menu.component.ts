import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Componente } from '../../models/interfaces';
import { Observable } from 'rxjs';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  componentes: Observable<Componente[]>;

  isNavbarCollapsed = true;

  constructor(public router: Router, private dataService: DataService) {
    this.componentes = this.dataService.getMenuOpts();
  }

  ngOnInit(): void {
  }


}

