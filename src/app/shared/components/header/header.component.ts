import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Output() public toggleSideBar: EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  public ngOnInit(): void {
  }

  public toggleSidebar(): void {
    this.toggleSideBar.emit();

    setTimeout(() => {
      window.dispatchEvent(
        new Event('resize')
      );
    }, 300);
  }

}
