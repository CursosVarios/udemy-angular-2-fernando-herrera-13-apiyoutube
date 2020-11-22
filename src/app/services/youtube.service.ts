import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from "@angular/common/http";
import { Observable } from "rxjs";
import { map, take } from "rxjs/operators";
import {
  AnswerYoutubeModel,
  ItemModel,
  VideoModel,
} from "../interfaces/answer-youtube.model";

@Injectable({
  providedIn: "root",
})
export class YoutubeService {
  private _url = "https://www.googleapis.com/youtube/v3";
  private _pagetoken = "";
  /*   get params() {
    return {
      key: "AIzaSyAfocPMUpnoH4g8kvNWGaN4n_8w_8EUmQg",
      part: "snippet",
      playlistId: "UUuaPTYj15JSkETGnEseaFFg",
      maxResults: "10",
      pageToken: this._pagetoken,
    };
  } */

  get params() {
    return new HttpParams()
      .set("key", "AIzaSyAfocPMUpnoH4g8kvNWGaN4n_8w_8EUmQg")
      .set("part", "snippet")
      .set("playlistId", "UUuaPTYj15JSkETGnEseaFFg")
      .set("maxResults", "10")
      .set("pageToken", this._pagetoken);
  }

  constructor(private _http: HttpClient) {}

  GetVideos(): Observable<VideoModel[]> {
    console.log("se llma function");
    return this._http
      .get<AnswerYoutubeModel>(this._url + "/playlistItems", {
        params: this.params,
      })
      .pipe(
        take(1),
        map((resp) => {
          this._pagetoken = resp.nextPageToken;
          console.log(resp.items);
          return resp.items;
        }),
        map((resp) => resp.map((video) => video.snippet))
      );
  }
}
