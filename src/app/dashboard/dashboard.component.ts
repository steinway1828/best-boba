import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { Boba } from './boba';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  bobas: Boba[]
  constructor() {
    this.bobas = [
      { shop: "Class 302", rows: 1, cols:1},
      { shop: "Cha for Tea", rows: 1, cols:1 },
      { shop: "Gong Cha", rows: 1 , cols:1},
      { shop: "It's Boba Time", rows: 3, cols:1},
      { shop: "KungFu Tea", rows: 1, cols:1},
      { shop: "Lollicup", rows: 1 , cols:1},
      { shop: "Milkbox", rows: 1, cols:1},
      { shop: "Omomo Tea Shoppe", rows: 1, cols:1},
      { shop: "ShareTea", rows: 1, cols:1},
      { shop: "Snow Monster", rows: 1, cols:1},
    ];
  }
}
