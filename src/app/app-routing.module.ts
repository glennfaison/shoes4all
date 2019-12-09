import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GalleryComponent } from './gallery/gallery.component';
import { HomeComponent } from './home/home.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { AboutUsComponent } from './about-us/about-us.component';


const routes: Routes = [
  { path: 'home', pathMatch: 'full', component: HomeComponent },
  { path: 'gallery', pathMatch: 'full', component: GalleryComponent },
  { path: 'contact', pathMatch: 'full', component: ContactUsComponent },
  { path: 'about', pathMatch: 'full', component: AboutUsComponent },
  { path: '', pathMatch: 'full', redirectTo: 'home' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
