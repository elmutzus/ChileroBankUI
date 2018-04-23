import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TransaccionService } from '../transaccion.service';
import { Transaccion } from '../dto/Transaccion';
import { TarjetaCredito } from '../dto/TajetaCredito';
import { TarjetaCreditoResponse } from '../dto/TarjetaCreditoResponse';

@Component({
  selector: 'app-transaccion-create',
  templateUrl: './transaccion-create.component.html',
  styleUrls: ['./transaccion-create.component.css']
})
export class TransaccionCreateComponent implements OnInit {

  title: string = 'Creación de transacción';
  amount: number;
  operation: number;
  account: number;
  message: string = '';

  cardNumber: number;
  cardAmount: number;

  creditCard: TarjetaCreditoResponse;

  constructor(private router: Router, private trxService: TransaccionService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.account = this.route.snapshot.params.id;
  }

  btnCancelClick = function () {
    this.goBack();
  }

  btnValidateClick = function () {
    this.trxService.validateCreditCard(this.cardNumber)
      .subscribe(
        (data: TarjetaCreditoResponse) => {
          this.creditCard = data;
        },
        (err) => {
          console.log("ERROR:" + err.message);
          this.message = err.message;
        });
  }

  btnCreateClick = function () {
    if (confirm("Desea crear la nueva transacción?")) {
      let trx = new Transaccion;

      trx.monto = this.amount;
      trx.operacion = this.operation;
      trx.fechaMovimiento = Date.now().toString();
      trx.cuenta = this.account;

      this.trxService.create(trx)
        .subscribe(
          (data: Transaccion) => {
            this.goBack();
          },
          (err) => {
            console.log("ERROR:" + err.message);
            this.message = err.message;
          });
    }
  }

  btnPayClick = function () {
    if (confirm("Desea pagar la tarjeta de crédito?")) {
      let tc = new TarjetaCredito;

      tc.cuenta = this.account;
      tc.monto = this.cardAmount;
      tc.tarjeta = this.cardNumber;
      tc.fechaMovimiento = Date.now().toString();

      this.trxService.payCreditCard(tc)
        .subscribe(
          (data: Transaccion) => {
            this.goBack();
          },
          (err) => {
            console.log("ERROR:" + err.message);
            this.message = err.message;
          });
    }
  }

  btnConsumeClick = function () {
    if (confirm("Desea consumir la tarjeta de crédito?")) {
      let tc = new TarjetaCredito;

      tc.monto = this.cardAmount;
      tc.tarjeta = this.cardNumber;

      this.trxService.consumeCreditCard(tc)
        .subscribe(
          (data: TarjetaCreditoResponse) => {
            this.goBack();
          },
          (err) => {
            console.log("ERROR:" + err.message);
            this.message = err.message;
          });
    }
  }

  goBack = function () {
    this.router.navigateByUrl('/transaccion/' + this.account);
  }

}
