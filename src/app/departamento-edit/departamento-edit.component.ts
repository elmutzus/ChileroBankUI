import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DepartamentoService } from '../departamento.service';
import { Departamento } from '../dto/Departmento';

@Component({
  selector: 'app-departamento-edit',
  templateUrl: './departamento-edit.component.html',
  styleUrls: ['./departamento-edit.component.css']
})
export class DepartamentoEditComponent implements OnInit {

  private title: string = 'Modificación de departamentos';
  private id: number;
  private code: string;
  private name: string;
  private message: string = '';

  constructor(private router: Router, private deptService: DepartamentoService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.id = this.route.snapshot.params.id;
    this.loadDepartment(this.id);
  }

  loadDepartment(id: number) {
    this.deptService.get(id)
      .subscribe(
        (data: Departamento) => {
          this.code = data.codigo;
          this.name = data.nombre;
        },
        (err) => {
          this.message = err.message;
        });
  }

  btnCancelClick = function () {
    this.goBack();
  };

  private goBack = function () {
    this.router.navigateByUrl('/departamento');
  }

  btnCreateClick = function () {
    if (confirm("Desea modificar el departamento?")) {
      let dept = new Departamento;

      dept.id = this.id;
      dept.codigo = this.code;
      dept.nombre = this.name;

      this.deptService.update(dept)
        .subscribe(
          (data: Departamento) => {
            this.goBack();
          },
          (err) => {
            this.message = err.message;
          });
    }
  }
}
