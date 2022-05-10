import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  public navItems: Array<any> = [
    { name: 'Home', route: '/home' },
    { name: 'About', route: '/about' },
    { name: 'Portfolio', route: '/portfolio' },
    { name: 'Contact', route: '/contact' }
  ];
  public selectedIndex: number = 0;


  constructor() { }

  ngOnInit(): void {
    console.log('navbar on Init');
  }

  select(index: number) {
    this.selectedIndex = index;
  }
}
