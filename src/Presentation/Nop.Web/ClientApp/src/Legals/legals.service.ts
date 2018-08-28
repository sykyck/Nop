import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
    accept: '*'
  })
};

@Injectable()
export class LegalService {
  public privacy: BehaviorSubject<any> = new BehaviorSubject('');
  public pricesAndPayment: BehaviorSubject<any> = new BehaviorSubject('');
  public terms: BehaviorSubject<any> = new BehaviorSubject('');
  public shipping: BehaviorSubject<any> = new BehaviorSubject('');
  public service: BehaviorSubject<any> = new BehaviorSubject('');
  public baseUrl = 'http://localhost:15536';
  constructor(private http: HttpClient) {}

  getData(url: string) {
    return this.http.get(url, { responseType: 'text' });
  }

  fetchPrivacy() {
    const url = this.baseUrl + '/privacy-notice';
    this.getData(url).subscribe((page: any) => {
      this.privacy.next(page);
    });
  }

  fetchPricesAndPayment() {
    const url = this.baseUrl + '/price-and-payments';
    this.getData(url).subscribe((page: any) => {
      this.pricesAndPayment.next(page);
    });
  }

  fetchService() {
    const url = this.baseUrl + '/service';
    this.getData(url).subscribe((page: any) => {
      this.service.next(page);
    });
  }

  fetchTerms() {
    const url = this.baseUrl + '/terms';
    this.getData(url).subscribe((page: any) => {
      this.terms.next(page);
    });
  }

  fetchShipping() {
    const url = this.baseUrl + '/shipping';
    this.getData(url).subscribe((page: any) => {
      this.shipping.next(page);
    });
  }
}
