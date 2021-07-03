import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {Coin} from '../coin/coin.interface';
import {BalanceObject} from '../balance/balance.interface';
import {CoinService} from '../coin/coin.service';
import { HttpResponse } from '@angular/common/http';

@Component({
  selector: 'app-receive',
  templateUrl: './receive.component.html',
  styleUrls: ['./receive.component.css']
})
export class ReceiveComponent implements OnInit {

  public qrCode: QrCode;
  public address: string;

  constructor(private coinService: CoinService) {
  }

  ngOnInit(): void {
    this.coinService.getQrCode().subscribe(qrCode => { 
      this.qrCode = qrCode;
    });
    this.coinService.getAddress().subscribe(response => {
      this.address = response;
    });
  }

}

export interface QrCode{
  code: string;
}
