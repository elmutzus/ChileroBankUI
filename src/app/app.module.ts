import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { DepartamentoIndexComponent } from './departamento-index/departamento-index.component';
import { DepartamentoCreateComponent } from './departamento-create/departamento-create.component';
import { DepartamentoEditComponent } from './departamento-edit/departamento-edit.component';
import { appRoutes } from './routerConfig';
import { HttpClientModule } from '@angular/common/http';
import { DepartamentoService } from './departamento.service';
import { CuentaIndexComponent } from './cuenta-index/cuenta-index.component';
import { CuentaEditComponent } from './cuenta-edit/cuenta-edit.component';
import { CuentaCreateComponent } from './cuenta-create/cuenta-create.component';
import { TransaccionIndexComponent } from './transaccion-index/transaccion-index.component';
import { TransaccionCreateComponent } from './transaccion-create/transaccion-create.component';
import { CuentaService } from './cuenta.service';
import { TransaccionService } from './transaccion.service';

@NgModule({
  declarations: [
    AppComponent,
    DepartamentoIndexComponent,
    DepartamentoCreateComponent,
    DepartamentoEditComponent,
    CuentaIndexComponent,
    CuentaEditComponent,
    CuentaCreateComponent,
    TransaccionIndexComponent,
    TransaccionCreateComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    FormsModule
  ],
  providers: [
    DepartamentoService,
    CuentaService,
    TransaccionService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
