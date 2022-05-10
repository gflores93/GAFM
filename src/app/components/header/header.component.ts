import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  descriptions: string[] = ['Guillermo Flores', 'a Front-End Developer'];
  introduction: string = 'Hello, my name is Guillermo Flores.';
  description: string = 'I am a self-taught Front-End developer living in Germany';
  constructor() { }

  ngOnInit(): void {
  }

}
