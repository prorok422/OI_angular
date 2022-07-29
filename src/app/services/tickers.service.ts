import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {UriConfig} from "../app.config";
import {Observable} from "rxjs";
import {Ticker} from "../models/ticker.model";
import {TickerClip} from "../models/ticker-clip.model";

@Injectable({
  providedIn: 'root'
})
export class TickersService {

  constructor(
    protected http: HttpClient,
    private uriConfig: UriConfig,
  ) {}

  getAllTickers(): Observable<Ticker[]> {
    return this.http.get<Ticker[]>(this.uriConfig.tickers)
  }

  getTickerClips(ticker): Observable<TickerClip[]> {
    return this.http.get<TickerClip[]>(this.uriConfig.tickers + ticker + '/')
  }
}

