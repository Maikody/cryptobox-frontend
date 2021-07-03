import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Coin} from './coin.interface';
import {BalanceObject} from '../balance/balance.interface';
import { QrCode } from 'app/receive/receive.component';

@Injectable({
  providedIn: 'root'
})
export class CoinService {

  constructor(private httpClient: HttpClient) {  }

  public fetchCoins(): Observable<Coin[]> {
    return this.httpClient.get<Coin[]>('http://localhost:8080/exchange/rates');
  }

  public getAddress() {
    return this.httpClient.get('http://localhost:8080/wallet/address', {responseType:'text'});
  }

  public getBalance(): Observable<BalanceObject> {
    return this.httpClient.get<BalanceObject>('http://localhost:8080/wallet/balance');
  }

  public getQrCode(): Observable<QrCode> {
    return this.httpClient.get<QrCode>('http://localhost:8080/wallet/qr');
  }
}
