import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  @Output() scrollToElement = new EventEmitter<string>();
  public navItems: Array<any> = [
    { name: 'Home', route: 'home' },
    { name: 'About', route: 'about' },
    { name: 'Portfolio', route: 'portfolio' },
    { name: 'Contact', route: 'contact' }
  ];
  public selectedIndex: number = 0;


  constructor() { }

  ngOnInit(): void {}

  onClick(index: number, route: string) {
    this.selectedIndex = index;
    this.scrollToElement.emit(route);
  }

}
