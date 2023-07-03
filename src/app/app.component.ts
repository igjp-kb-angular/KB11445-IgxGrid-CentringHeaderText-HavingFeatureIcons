import { Component, OnInit } from '@angular/core';

import { DATA, ICustomer } from "./customers";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'kb11457-app2';

  employess: ICustomer[] = DATA;

  constructor(){}

  ngOnInit(): void {
  }
}
