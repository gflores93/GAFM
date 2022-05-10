import { OnInit, AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { ProjectsComponent } from './components/projects/projects.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {

  @ViewChild(HeaderComponent, { read: ElementRef }) home!: ElementRef;
  @ViewChild(AboutComponent, { read: ElementRef }) about!: ElementRef;
  @ViewChild(ProjectsComponent, { read: ElementRef }) projects!: ElementRef;
  @ViewChild(FooterComponent, { read: ElementRef }) contact!: ElementRef;

  // @ViewChild(ContactComponent, {read: ElementRef}) contact!: ElementRef;
  public sections: any = {};

  constructor(titleService: Title, meta: Meta) {
    titleService.setTitle('Guillermo Flores');

    meta.updateTag({ name: 'viewport', content: 'width=device-width, initial-scale=1, shrink-to-fit=no' });
    meta.addTag({ name: 'description', content: 'Portfolio of Guillermo Flores' });
    meta.addTag({ name: 'author', content: 'Guillermo Flores' });

  }

  ngAfterViewInit(): void {
    this.sections = {
      'home': this.home,
      'about': this.about,
      'portfolio': this.projects,
      'contact': this.contact
    }
  }

  scrollToElement(target: string): void {
    console.log(target);
    let element = this.sections[target];
    console.log(element);
    element?.nativeElement.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
  }
}
