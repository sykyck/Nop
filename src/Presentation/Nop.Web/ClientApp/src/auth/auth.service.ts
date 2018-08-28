import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';
import { Subscriber } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    accept: 'application/json',
    'Content-Type': 'application/x-www-form-urlencoded'
  })
};

@Injectable()
export class AuthService {
  public token: BehaviorSubject<any> = new BehaviorSubject('NOTSET');
  constructor(private http: HttpClient) {
    this.token.next('NOTSET');
  }

  authInit() {
    const client_id = '312b03ac-053e-4bd5-b6ce-1a15ea9606ad';
    const client_secret = '1e331c31-d1cf-46b4-99cb-1639cfc8c611';
    const scope = 'nop_api';
    const grant_type = 'client_credentials';
    const data = `client_id=${client_id}&client_secret=${client_secret}&scope=${scope}&grant_type=${grant_type}`;
    this.http.post('/api/token', data, httpOptions).subscribe(result => {
      this.token.next((result as any).access_token);
    });
  }
}
