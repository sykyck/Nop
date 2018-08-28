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
export class InfoService {
  public delivery: BehaviorSubject<any> = new BehaviorSubject('');
  public productCondition: BehaviorSubject<any> = new BehaviorSubject('');
  public productionInformation: BehaviorSubject<any> = new BehaviorSubject('');
  public warningAboutForgery: BehaviorSubject<any> = new BehaviorSubject('');
  public faq: BehaviorSubject<any> = new BehaviorSubject('');
  public care: BehaviorSubject<any> = new BehaviorSubject('');
  public baseUrl = 'http://localhost:15536';
  constructor(private http: HttpClient) {}

  getData(url: string) {
    return this.http.get(url, { responseType: 'text' });
  }

  fetchDelivery() {
    const url = this.baseUrl + '/delivery';
    this.getData(url).subscribe((page: any) => {
      this.delivery.next(page);
    });
  }

  fetchProductInformation() {
    const url = this.baseUrl + '/price-and-payments';
    this.getData(url).subscribe((page: any) => {
      this.productionInformation.next(page);
    });
  }

  fetchProductCondition() {
    const url = this.baseUrl + '/service';
    this.getData(url).subscribe((page: any) => {
      this.productCondition.next(page);
    });
  }

  fetchWarningAboutForgery() {
    const url = this.baseUrl + '/terms';
    this.getData(url).subscribe((page: any) => {
      this.warningAboutForgery.next(page);
    });
  }

  fetchFAQ() {
    const url = this.baseUrl + '/shipping';
    this.getData(url).subscribe((page: any) => {
      this.faq.next(page);
    });
  }

  fetchCare() {
    const url = this.baseUrl + '/care';
    this.getData(url).subscribe((page: any) => {
      this.care.next(page);
    });
  }
}
