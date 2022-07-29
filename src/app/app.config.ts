import {Injectable} from "@angular/core";

@Injectable()
export class UriConfig {
  //TODO set url with ip
  baseApiUrl = 'http://188.239.43.89/'
  clips = `${this.baseApiUrl}clips/`;
  tickers = `${this.baseApiUrl}tickers/`;
  tags = `${this.baseApiUrl}tags/`;
}
