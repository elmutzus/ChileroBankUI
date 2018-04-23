import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { environment } from '../environments/environment';
import { Cuenta } from './dto/Cuenta';

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';

const API_URI = environment.apiUrl;

@Injectable()
export class CuentaService {

  constructor(private http: HttpClient) { }

  public getAll() {
    return this.http.get<Cuenta[]>(API_URI + '/banking/cuentas')
      .map((response: Cuenta[]) => {
        return response;
      })
      .catch((error) => {
        return Observable.throw(error);
      })
  }
}
