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
      { shop: "Class302", rows: 1, cols:1},
      { shop: "ChaforTea", rows: 1, cols:1 },
      { shop: "GongCha", rows: 1 , cols:1},
      { shop: "BobaTime", rows: 3, cols:1},
      { shop: "KungFuTea", rows: 1, cols:1},
      { shop: "Lollicup", rows: 1 , cols:1},
      { shop: "Milkbox", rows: 1, cols:1},
      { shop: "OmomoTeaShoppe", rows: 1, cols:1},
      { shop: "ShareTea", rows: 1, cols:1},
      { shop: "SnowMonster", rows: 1, cols:1},
    ];
  }
}
