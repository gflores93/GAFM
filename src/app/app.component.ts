import { Component } from '@angular/core';
import {Title, Meta} from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  

  constructor(titleService: Title, meta: Meta) {
    titleService.setTitle('Guillermo Flores');

    meta.updateTag({name:'viewport', content: 'width=device-width, initial-scale=1, shrink-to-fit=no'});
    meta.addTag({name: 'description', content: 'Portfolio of Guillermo Flores'});
    meta.addTag({name: 'author', content: 'Guillermo Flores'});

  }
}
