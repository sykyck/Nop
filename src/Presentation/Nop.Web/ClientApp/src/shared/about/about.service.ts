import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';

@Injectable()
export class AboutService {
  public about: BehaviorSubject<any> = new BehaviorSubject('');
  public baseUrl = 'http://localhost:15536';
  constructor(private http: HttpClient) {}

  getData(url: string) {
    return this.http.get(url, { responseType: 'text' });
  }

  fetchAbout() {
    const url = this.baseUrl + '/about-us';
    this.getData(url).subscribe((page: any) => {
      this.about.next(page);
    });
  }
}
