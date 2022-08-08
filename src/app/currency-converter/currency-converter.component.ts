import { Component} from '@angular/core';
import { CurrencyconverterService } from '../services/currencyconverter.service';

@Component({
  selector: 'app-currency-converter',
  templateUrl: './currency-converter.component.html',
  styleUrls: ['./currency-converter.component.css']
})
export class CurrencyConverterComponent {

  currencyjson: any = [];
  country1 = 'USD';
  country2 = 'USD';
  result: string = '1.00';
  amount: number = 1

  constructor(private currencyService: CurrencyconverterService) { }

  changecountry1(country: string) {
    this.country1 = country
  }

  changecountry2(country: string) {
    this.country2 = country
  }

  convert() {
    this.currencyService.getCurrencyDate(this.country1).subscribe(date => {
      this.currencyjson = JSON.stringify(date);
      this.currencyjson = JSON.parse(this.currencyjson)

      if(this.country2 == 'USD') {
        this.result = (+this.currencyjson.rates.USD * this.amount).toFixed(2) + ''
      }

      if(this.country2 == 'EUR') {
        this.result = (+this.currencyjson.rates.EUR* this.amount).toFixed(2) + ''
      }

      if(this.country2 == 'UAH') {
        this.result = (+this.currencyjson.rates.UAH * this.amount).toFixed(2) + ''
      }

    })
  }
}
