import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {UriConfig} from "../app.config";
import {Observable} from "rxjs";
import {Tag} from "../models/tag.model";
import {TagClip} from "../models/tag-clip.model";

@Injectable({
  providedIn: 'root'
})
export class TagsService {

  constructor(
    protected http: HttpClient,
    private uriConfig: UriConfig,
  ) { }

  getAllTags(): Observable<Tag[]> {
    return this.http.get<Tag[]>(this.uriConfig.tags);
  }

  getTagsClips(ticker): Observable<TagClip[]> {
    return this.http.get<TagClip[]>(this.uriConfig.tags + ticker + '');
  }

  getAllClips(): Observable<TagClip[]> {
    return this.http.get<TagClip[]>(this.uriConfig.clips);
  }
}
