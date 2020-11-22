import { Component, Input, OnInit } from "@angular/core";
import { VideoModel } from "src/app/interfaces/answer-youtube.model";

@Component({
  selector: "app-video-card-list",
  templateUrl: "./video-card-list.component.html",
  styleUrls: ["./video-card-list.component.scss"],
})
export class VideoCardListComponent implements OnInit {
  @Input() data: VideoModel[];
  constructor() {}

  ngOnInit(): void {}
}
