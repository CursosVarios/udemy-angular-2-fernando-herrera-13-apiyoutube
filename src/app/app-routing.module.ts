import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./page/home/home.component";

const routes: Routes = [
  { path: "home", component: HomeComponent },
  { path: "**", redirectTo: "home" },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
