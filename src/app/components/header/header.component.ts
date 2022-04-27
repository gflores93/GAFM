import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  descriptions: string[] = ['Guillermo Flores', 'an Engineer', 'a Front end developer'];
  constructor() { }

  ngOnInit(): void {
  }

}
