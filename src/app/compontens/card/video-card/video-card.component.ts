import { Component, Input, OnInit } from "@angular/core";
import { VideoModel } from "src/app/interfaces/answer-youtube.model";

@Component({
  selector: "app-video-card",
  templateUrl: "./video-card.component.html",
  styleUrls: ["./video-card.component.scss"],
})
export class VideoCardComponent implements OnInit {
  @Input() data: VideoModel;
  constructor() {}

  ngOnInit(): void {}
}
