import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class CurrencyconverterService {

  constructor(private http: HttpClient) { }

  getCurrencyDate(country: string) {
    let url = 'http://api.exchangerate.host/lates?base=' + country;
    return this.http.get(url)
  }
}
