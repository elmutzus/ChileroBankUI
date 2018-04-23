import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { environment } from '../environments/environment';
import { Transaccion } from './dto/Transaccion';

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';

const API_URI = environment.apiUrl;

@Injectable()
export class TransaccionService {

  constructor(private http: HttpClient) { }

  public getAllByAccount(id: number) {
    return this.http.get<Transaccion[]>(API_URI + '/banking/transacciones/findByAccount/' + id)
      .map((response: Transaccion[]) => {
        return response;
      })
      .catch((error) => {
        return Observable.throw(error);
      })
  }

  public create(trx: Transaccion) {
    return this.http.post<Transaccion>(API_URI + '/banking/transacciones', trx)
      .map((response: Transaccion) => {
        return response;
      })
      .catch((error) => {
        return Observable.throw(error);
      });
  }
}
