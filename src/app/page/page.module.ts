import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HomeComponent } from "./home/home.component";
import { CompontensModule } from "../compontens/compontens.module";

const declarations = [HomeComponent];

@NgModule({
  declarations: [...declarations],
  imports: [CommonModule, CompontensModule],
  exports: [...declarations],
})
export class PageModule {}
