import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Subject } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';
import { AuthService } from '../auth/auth.service';

@Injectable()
export class HomeService {
  public token;
  public httpOptions;
  public categories = [];
  public collection = [];
  public data = new Subject();
  public collectionResult = new Subject();
  constructor(private http: HttpClient, private authService: AuthService) {
    this.authService.token.subscribe(token => {
      if (token !== 'NOTSET') {
        this.token = token;
        this.httpOptions = {
          headers: new HttpHeaders({
            accept: '*',
            Authorization: `Bearer ${token}`
          })
        };
      }
    });
  }

  getCat() {
    this.http
      .get('/categories?parent_category_id=0', this.httpOptions)
      .subscribe(data => {
        (data as any).categories.forEach(cat => {
          if (cat.name === 'Collections') {
            const id = cat.id;
            this.http
              .get('/categories?parent_category_id=' + id,
                this.httpOptions
              )
              .subscribe(result => {
                this.collection = [...(result as any).categories];
                (result as any).categories.forEach((element, index) => {
                  const i = element.name.indexOf('$');
                  this.collection[index].name = element.name.substring(0, i);
                  this.collection[index].id = element.name[i+1];
                });
                this.collectionResult.next('change');
              });
          } else {
            this.categories.push(cat);
          }
        });
        this.data.next('change');
      });
  }
}
