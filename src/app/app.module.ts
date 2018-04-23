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

@NgModule({
  declarations: [
    AppComponent,
    DepartamentoIndexComponent,
    DepartamentoCreateComponent,
    DepartamentoEditComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    FormsModule
  ],
  providers: [
    DepartamentoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
