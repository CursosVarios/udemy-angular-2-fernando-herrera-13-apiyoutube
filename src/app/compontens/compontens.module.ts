import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { NadvarComponent } from "./nadvar/nadvar.component";
import { FooterComponent } from "./footer/footer.component";
import { HeaderComponent } from "./header/header.component";
import { LoadComponent } from "./load/load.component";
import { VideoCardComponent } from "./card/video-card/video-card.component";
import { VideoCardListComponent } from "./card/video-card-list/video-card-list.component";

const declarations = [
  NadvarComponent,
  FooterComponent,
  HeaderComponent,
  LoadComponent,
  VideoCardComponent,
  VideoCardListComponent,
];

@NgModule({
  declarations: [...declarations],
  imports: [CommonModule],
  exports: [...declarations],
})
export class CompontensModule {}
