import { Component, OnInit } from '@angular/core';
import { forkJoin } from 'rxjs';
import { CurrencyconverterService } from '../services/currencyconverter.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  usdjson: any = [];
  eurjson: any = [];
  USD = 'USD';
  EUR = 'EUR';

  constructor(private currencyService: CurrencyconverterService) { }

  ngOnInit(): void {
    const USD = this.currencyService.getCurrencyDate('USD');
    const EUR = this.currencyService.getCurrencyDate('EUR');

    forkJoin([USD, EUR]).subscribe(result => {
      this.usdjson = JSON.stringify(result[0]);
      this.usdjson = JSON.parse(this.usdjson)
      this.eurjson = JSON.stringify(result[1]);
      this.eurjson = JSON.parse(this.eurjson)

      this.USD = +this.usdjson.rates.UAH.toFixed(2) + ''
      this.EUR = +this.eurjson.rates.UAH.toFixed(2) + ''
    })
  }

}
