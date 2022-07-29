import {AfterViewInit, Component, Input, OnInit, ViewChild} from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {MatSort} from "@angular/material/sort";
import {TickerClip} from "../models/ticker-clip.model";

@Component({
  selector: 'app-single-ticker-clips',
  templateUrl: './single-ticker-clips.component.html',
  styleUrls: ['./single-ticker-clips.component.css']
})
export class SingleTickerClipsComponent implements OnInit {
  @Input() tickerClips: TickerClip[];
  displayedColumns: string[] = ['name', 'uploaded_at', 'link'];
  dataSource: TickerClip[];

  constructor() {
  }

  ngOnInit(): void {
    this.dataSource = this.tickerClips
  }

}
