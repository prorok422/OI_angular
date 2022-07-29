import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatTabsModule} from "@angular/material/tabs";
import {TickersComponent} from './tickers/tickers.component';
import {TagsComponent} from './tags/tags.component';
import {HttpClientModule} from "@angular/common/http";
import {UriConfig} from "./app.config";
import {MatChipsModule} from "@angular/material/chips";
import {MatTableModule} from "@angular/material/table";
import {MatSortModule} from "@angular/material/sort";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import { SingleTickerClipsComponent } from './single-ticker-clips/single-ticker-clips.component';
import {MatInputModule} from "@angular/material/input";
import {ReactiveFormsModule} from "@angular/forms";
import { FilterPipe } from './pipes/filter.pipe';
import {MatSelectModule} from "@angular/material/select";
import { SingleTagClipComponent } from './single-tag-clip/single-tag-clip.component';

@NgModule({
  declarations: [
    AppComponent,
    TickersComponent,
    TagsComponent,
    SingleTickerClipsComponent,
    FilterPipe,
    SingleTagClipComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatTabsModule,
    HttpClientModule,
    MatChipsModule,
    MatTableModule,
    MatSortModule,
    MatIconModule,
    MatButtonModule,
    MatInputModule,
    ReactiveFormsModule,
    MatSelectModule
  ],
  providers: [UriConfig],
  bootstrap: [AppComponent]
})
export class AppModule {
}
