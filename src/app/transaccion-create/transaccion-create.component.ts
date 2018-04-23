import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TransaccionService } from '../transaccion.service';
import { Transaccion } from '../dto/Transaccion';

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

  constructor(private router: Router, private trxService: TransaccionService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.account = this.route.snapshot.params.id;
  }

  btnCancelClick = function() {
    this.goBack();
  }

  btnCreateClick = function() {
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

  goBack = function() {
    this.router.navigateByUrl('/transaccion/' + this.account);
  }

}
