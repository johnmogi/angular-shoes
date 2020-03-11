import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-menu",
  templateUrl: "./menu.component.html",
  styleUrls: ["./menu.component.css"]
})
export class MenuComponent implements OnInit {
  public currentDiscount: number;
  constructor() {}

  ngOnInit(): void {
    this.currentDiscount = 10;
  }
}
