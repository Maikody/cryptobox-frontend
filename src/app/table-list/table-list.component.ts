import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Coin } from '../coin/coin.interface';
import { CoinService } from '../coin/coin.service';

@Component({
  selector: 'app-table-list',
  templateUrl: './table-list.component.html',
  styleUrls: ['./table-list.component.css']
})
export class TableListComponent implements OnInit {
  public coins$: Observable<Coin[]>;

  constructor(private coinService: CoinService) { }

  ngOnInit(): void {
    this.coins$ = this.coinService.fetchCoins();
  }

}
