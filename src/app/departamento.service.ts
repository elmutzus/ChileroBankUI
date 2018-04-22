import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { environment } from '../environments/environment';

const API_URI = environment.apiUrl;

@Injectable()
export class DepartamentoService {

  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

  public getDepartments() {
    console.log('[' + API_URI + '/banking/departamentos]');
    return this.http.get(API_URI + '/banking/departamentos')
      .subscribe((data) => {
        console.log(data);
      });
    }
}
