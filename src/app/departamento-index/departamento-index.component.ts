import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DepartamentoService } from '../departamento.service';
import { Departamento } from '../dto/Departmento';

@Component({
  selector: 'app-departamento-index',
  templateUrl: './departamento-index.component.html',
  styleUrls: ['./departamento-index.component.css']
})
export class DepartamentoIndexComponent implements OnInit {

  private title = "Listado de departamentos";
  private departments: Departamento[];

  constructor(private router: Router,
    private deptService: DepartamentoService) { }

  ngOnInit() {
    this.loadDepartments();
  }

  btnCreateClick = function () {
    this.router.navigateByUrl('/departamento/create');
  };

  loadDepartments() {
    console.log('Call to load departments');
    this.deptService.getDepartments()
      .subscribe((data: Departamento[]) => {
        this.departments = data;
      });
  }

}
