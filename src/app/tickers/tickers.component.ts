import {Component, OnInit, ViewChild} from '@angular/core';
import { TickersService} from "../services/tickers.service";
import {Ticker} from "../models/ticker.model";
import {Subject} from "rxjs";
import {takeUntil} from "rxjs/operators";
import {MatSort} from "@angular/material/sort";
import {TickerClip} from "../models/ticker-clip.model";
import {FormControl} from "@angular/forms";

@Component({
  selector: 'app-tickers',
  templateUrl: './tickers.component.html',
  styleUrls: ['./tickers.component.css']
})
export class TickersComponent implements OnInit {

  tickers: Ticker[];
  selectedTickerName: string;
  searchFormField = new FormControl('');
  tickerClips: TickerClip[];
  @ViewChild(MatSort) sort: MatSort;
  private unsubscribe$: Subject<void> = new Subject();

  constructor(
    private tickersService: TickersService
  ) { }

  ngOnInit(): void {
    this.tickersService.getAllTickers()
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe(tickers => this.tickers = tickers)
  }

  onSelectTicker(ticker) {
    this.selectedTickerName = ticker;
    this.tickersService.getTickerClips(ticker)
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((val: TickerClip[]) => this.tickerClips = val);
  }

  goBack() {
    this.selectedTickerName = '';
  }
}
