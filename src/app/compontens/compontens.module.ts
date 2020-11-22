import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { NadvarComponent } from "./nadvar/nadvar.component";
import { FooterComponent } from "./footer/footer.component";
import { HeaderComponent } from "./header/header.component";
import { LoadComponent } from "./load/load.component";

const declarations = [
  NadvarComponent,
  FooterComponent,
  HeaderComponent,
  LoadComponent,
];

@NgModule({
  declarations: [...declarations],
  imports: [CommonModule],
  exports: [...declarations],
})
export class CompontensModule {}
