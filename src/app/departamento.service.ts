import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { environment } from '../environments/environment';
import { Departamento } from './dto/Departmento';

const API_URI = environment.apiUrl;

@Injectable()
export class DepartamentoService {

  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

  public getDepartments() {
    return this.http.get<Departamento[]>(API_URI + '/banking/departamentos');
  }
}
