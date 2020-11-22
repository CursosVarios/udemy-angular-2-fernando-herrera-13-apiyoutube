import { Component, OnInit } from "@angular/core";
import { VideoModel } from "src/app/interfaces/answer-youtube.model";
import { YoutubeService } from "src/app/services/youtube.service";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
})
export class HomeComponent implements OnInit {
  public videos: VideoModel[] = [];
  constructor(private _youtubeService: YoutubeService) {}

  ngOnInit(): void {
    this.solicitarVideos();
  }
  solicitarVideos() {
    this._youtubeService.GetVideos().subscribe((res) => {
      this.videos.push(...res);
      console.log({ v: this.videos });
    });
  }
}
