import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-departamento-create',
  templateUrl: './departamento-create.component.html',
  styleUrls: ['./departamento-create.component.css']
})
export class DepartamentoCreateComponent implements OnInit {

  title = "Crear departamento";
  
  constructor(private router: Router) { }

  ngOnInit() {
  }

  btnCancelClick = function () {
    this.router.navigateByUrl('/departamento');
  };
}
