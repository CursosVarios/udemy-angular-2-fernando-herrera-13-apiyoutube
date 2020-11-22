import { Component, Input, OnInit } from "@angular/core";
import { VideoModel } from "src/app/interfaces/answer-youtube.model";
import Swal from "sweetalert2";

@Component({
  selector: "app-video-card",
  templateUrl: "./video-card.component.html",
  styleUrls: ["./video-card.component.scss"],
})
export class VideoCardComponent implements OnInit {
  @Input() data: VideoModel;
  constructor() {}

  ngOnInit(): void {}

  mostrarVideo() {
    Swal.fire({
      title: `<strong>${this.data.title}</strong>`,
      //icon: "info",
      html: `<iframe
      width="100%"
      height="315"
      src="https://www.youtube.com/embed/${this.data.resourceId.videoId}"
      frameborder="0"
      allow="accelerometer;
       autoplay;
       clipboard-write;
       encrypted-media;
       gyroscope;
       picture-in-picture"
        allowfullscreen>
      </iframe>`,
      //showCloseButton: true,
      //showCancelButton: true,
      // focusConfirm: false,
      //  confirmButtonText: '<i class="fa fa-thumbs-up"></i> Great!',
      //  confirmButtonAriaLabel: "Thumbs up, great!",
      // cancelButtonText: '<i class="fa fa-thumbs-down"></i>',
      // cancelButtonAriaLabel: "Thumbs down",
    });
  }
}
