import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { ProjectsComponent } from './components/projects/projects.component';

const routes: Routes = [
  { path: 'home', component: AboutComponent },
  { path: 'about', component: AboutComponent },
  { path: 'portfolio', component: ProjectsComponent },
  { path: 'contact', component: ContactComponent },
  { path: '**', component: ProjectsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)], /* , { scrollPositionRestoration: 'enabled' } */
  exports: [RouterModule]
})
export class AppRoutingModule { }
