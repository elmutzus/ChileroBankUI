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
  private message: string = '';

  constructor(private router: Router,
    private deptService: DepartamentoService) { }

  ngOnInit() {
    this.loadDepartments();
  }

  btnCreateClick = function () {
    this.router.navigateByUrl('/departamento/create');
  };

  btnDeleteClick = function (id: number) {
    if (confirm("Desea eliminar el departamento " + id + "?")) {
      this.deptService.delete(id)
        .subscribe((data: Departamento) => {
          this.message = "Departamento " + data.id + " fue eliminado exitosamente";
          this.loadDepartments();
        })
    }
  }

  btnEditClick = function (id: number) {
    console.log('Estoy editando:' + id);
  }

  loadDepartments() {
    console.log('Call to load departments');
    this.deptService.getAll()
      .subscribe((data: Departamento[]) => {
        this.departments = data;
      });
  }

}
