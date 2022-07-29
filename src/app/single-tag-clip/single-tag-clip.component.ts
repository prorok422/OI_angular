import {AfterViewInit, Component, Input, OnInit, ViewChild} from '@angular/core';
import {TagClip} from "../models/tag-clip.model";
import {MatTableDataSource} from "@angular/material/table";
import {MatSort} from "@angular/material/sort";

@Component({
  selector: 'app-single-tag-clip',
  templateUrl: './single-tag-clip.component.html',
  styleUrls: ['./single-tag-clip.component.css']
})
export class SingleTagClipComponent implements OnInit, AfterViewInit {

  tagClipList: TagClip[];
  displayedColumns: string[] = ['name', 'uploaded_at', 'link'];
  dataSource: MatTableDataSource<TagClip>;
  @ViewChild(MatSort) sort: MatSort;
  @Input() set _tagClipList(tagClipList:TagClip[]) {
    this.tagClipList = tagClipList;
    this.dataSource = new MatTableDataSource<TagClip>(this.tagClipList);
    this.dataSource.sort = this.sort;
  }

  constructor() {
  }

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource<TagClip>(this.tagClipList);
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }
}
