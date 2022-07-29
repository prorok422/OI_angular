import { Component, OnInit } from '@angular/core';
import {TagsService} from "../services/tags.service";
import {Subject} from "rxjs";
import {take, takeUntil} from "rxjs/operators";
import {Tag} from "../models/tag.model";
import {TagClip} from "../models/tag-clip.model";

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.css']
})
export class TagsComponent implements OnInit {

  private unsubscribe$: Subject<void> = new Subject();
  tagList: Tag[];
  tagClipList: TagClip[];
  allTagClipList: TagClip[];
  tagClipsLoaded = false;

  constructor(
    private tagsService: TagsService
  ) { }

  ngOnInit(): void {
    this.tagsService.getAllClips()
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((clips: TagClip[]) => {
        this.allTagClipList = clips
        this.tagClipList = clips
      });

    this.tagsService.getAllTags()
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((tags: Tag[]) => this.tagList = tags);
  }

  onSelectTag(event) {
    if (event.value === 'default') {
      this.tagClipList = this.allTagClipList;
      return;
    }
    this.tagsService.getTagsClips(event.value)
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((tagClip:TagClip[]) => {
        console.log(111);
        this.tagClipsLoaded = !!tagClip.length;
        this.tagClipList = tagClip;
      })
  }

}
