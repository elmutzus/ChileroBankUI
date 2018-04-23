import { Component, OnInit } from '@angular/core';
import { CuentaService } from '../cuenta.service';
import { Cuenta } from '../dto/Cuenta';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cuenta-index',
  templateUrl: './cuenta-index.component.html',
  styleUrls: ['./cuenta-index.component.css']
})
export class CuentaIndexComponent implements OnInit {

  title: string = 'Listado de Cuentas';
  message: string = '';
  private accounts: Cuenta[];

  constructor(private router: Router,
    private accountService: CuentaService) { }

  ngOnInit() {
    this.loadAccounts();
  }

  btnCreateClick = function () {
    this.router.navigateByUrl('/cuenta/create');
  };

  btnEditClick = function (id: number) {
    this.router.navigateByUrl('/cuenta/edit/' + id);
  }

  btnTransactionsClick = function (id: number) {
    this.router.navigateByUrl('/transaccion/' + id);
  }

  loadAccounts() {
    this.accountService.getAll()
      .subscribe((data: Cuenta[]) => {
        this.accounts = data;
      });
  }
}
