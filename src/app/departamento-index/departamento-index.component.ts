import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-departamento-index',
  templateUrl: './departamento-index.component.html',
  styleUrls: ['./departamento-index.component.css']
})
export class DepartamentoIndexComponent implements OnInit {

  title = "Listado de departamentos";

  constructor(private router: Router) { }

  ngOnInit() {
  }

  btnCreateClick = function () {
    this.router.navigateByUrl('/departamento/create');
  };

}
