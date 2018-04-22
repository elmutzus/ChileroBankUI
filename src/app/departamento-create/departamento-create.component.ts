import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DepartamentoService } from '../departamento.service';
import { Departamento } from '../dto/Departmento';

@Component({
  selector: 'app-departamento-create',
  templateUrl: './departamento-create.component.html',
  styleUrls: ['./departamento-create.component.css']
})
export class DepartamentoCreateComponent implements OnInit {

  title = "Crear departamento";

  code: string;
  name: string;
  errorMessage: string = '';

  constructor(private router: Router,
    private deptService: DepartamentoService) { }

  ngOnInit() {
  }

  onKeyUpCode(event: any) {
    this.code = event.target.value;
  }

  onKeyUpName(event: any) {
    this.name = event.target.value;
  }

  private goBack = function () {
    this.router.navigateByUrl('/departamento');
  }

  btnCancelClick = function () {
    this.goBack();
  };

  btnCreateClick = function () {
    let dept = new Departamento;

    dept.codigo = this.code;
    dept.nombre = this.name;

    this.deptService.createDepartment(dept)
      .subscribe(
        (data: Departamento) => {
          console.log(data);

          this.goBack();
        },
        (err) => {
          console.log("ERROR:" + err.message);
          this.errorMessage = err.message;
        });
  }
}
