import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.scss']
})
export class DefaultComponent implements OnInit {

  public sideBarOpen: boolean = true;

  constructor() { }

  public ngOnInit(): void {}

  public sideBarToggle(ev: Event): void {
    this.sideBarOpen = !this.sideBarOpen;
  }

}
