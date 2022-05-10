import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  public projects: Array<any> = [
    {
      title: 'E-commerce App', description: 'E-commerce website', active: true,
      siteUrl: 'https://ecommerceapp-gafm93.web.app/products', imgUrl: 'https://picsum.photos/400/500'
    },
    {
      title: 'Restaurant', description: 'Pizza and beers', active: true,
      siteUrl: '#', imgUrl: 'https://picsum.photos/400/500'
    },
    {
      title: 'Portfolio', description: 'This portfolio itself', active: true,
      siteUrl: 'https://guillermoflores.me/', imgUrl: 'https://picsum.photos/400/500'
    },
    {
      title: 'Real Estate App', description: 'Work in progress...', active: false,
      siteUrl: '#', imgUrl: 'https://picsum.photos/400/500'
    },

  ];
  constructor() { }

  ngOnInit(): void {
  }

}
