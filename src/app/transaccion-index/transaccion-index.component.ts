import { Component, OnInit } from '@angular/core';
import { Transaccion } from '../dto/Transaccion';
import { ActivatedRoute, Router } from '@angular/router';
import { TransaccionService } from '../transaccion.service';

@Component({
  selector: 'app-transaccion-index',
  templateUrl: './transaccion-index.component.html',
  styleUrls: ['./transaccion-index.component.css']
})
export class TransaccionIndexComponent implements OnInit {

  title: string = 'Listado de Transacciones';
  message: string = '';
  private transactions: Transaccion[];

  accountId: number;

  constructor(private router: Router, private trxService: TransaccionService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.accountId = this.route.snapshot.params.id;
    this.loadTransactionsPerAccount(this.accountId);
  }

  loadTransactionsPerAccount(accountId: number) {
    this.trxService.getAllByAccount(accountId)
      .subscribe((data: Transaccion[]) => {
        this.transactions = data;
      });
  }


  btnCreateClick = function () {
    this.router.navigateByUrl('/transaccion/create/' + this.accountId);
  };

  btnCancelClick = function() {
    this.goBack();
  }

  btnPayClick = function () {
    this.goBack();
  }

  btnConsumeClick = function () {
    this.goBack();
  }

  goBack = function() {
    this.router.navigateByUrl('/cuenta');
  }
}
