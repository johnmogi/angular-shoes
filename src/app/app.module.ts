import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { LayoutComponent } from "./components/layout/layout.component";
import { HeaderComponent } from "./components/header/header.component";
import { FooterComponent } from "./components/footer/footer.component";
import { MenuComponent } from "./components/menu/menu.component";
import { HomeComponent } from "./components/home/home.component";

@NgModule({
  declarations: [
    LayoutComponent,
    HeaderComponent,
    FooterComponent,
    MenuComponent,
    HomeComponent
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [LayoutComponent]
})
export class AppModule {}
