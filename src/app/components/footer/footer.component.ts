import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  public github: string = 'https://github.com/gflores93';
  public linkedin: string = 'https://linkedin.com/in/gflores93/';


  constructor() { }

  ngOnInit(): void {
  }

}
