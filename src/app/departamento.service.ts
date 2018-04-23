import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { environment } from '../environments/environment';
import { Departamento } from './dto/Departmento';

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';


const API_URI = environment.apiUrl;

@Injectable()
export class DepartamentoService {

  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

  public getAll() {
    return this.http.get<Departamento[]>(API_URI + '/banking/departamentos')
      .map((response: Departamento[]) => {
        return response;
      })
      .catch((error) => {
        return Observable.throw(error);
      })
  }

  public get(id: number) {
    return this.http.get<Departamento>(API_URI + '/banking/departamentos/' + id)
      .map((response: Departamento) => {
        return response;
      })
      .catch((error) => {
        return Observable.throw(error);
      })
  }

  public create(dept: Departamento) {
    return this.http.post<Departamento>(API_URI + '/banking/departamentos', dept)
      .map((response: Departamento) => {
        return response;
      })
      .catch((error) => {
        return Observable.throw(error);
      });
  }

  public put(dept: Departamento) {
    return this.http.put<Departamento>(API_URI + '/banking/departamentos', dept)
      .map((response: Departamento) => {
        return response;
      })
      .catch((error) => {
        return Observable.throw(error);
      });
  }

  public delete(id: number) {
    return this.http.delete<Departamento>(API_URI + '/banking/departamentos/' + id)
      .map((response: Departamento) => {
        return response;
      })
      .catch((error) => {
        return Observable.throw(error);
      });
  }  
}
