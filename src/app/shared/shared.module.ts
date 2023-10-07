import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AboutPageComponent } from './pages/about-page/about-page.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { DropListComponent } from './components/drop-list/drop-list.component';
import { FormsModule } from '@angular/forms';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { LoadingSpinerComponent } from './components/loading-spiner/loading-spiner.component';
import { SearchBoxComponent } from './components/search-box/search-box.component';

@NgModule({
  declarations: [
    AboutPageComponent,
    ContactPageComponent,
    DropListComponent,
    HomePageComponent,
    LoadingSpinerComponent,
    SearchBoxComponent,
  ],
  imports: [CommonModule, RouterModule, FormsModule, HttpClientModule],
  exports: [
    AboutPageComponent,
    ContactPageComponent,
    DropListComponent,
    HomePageComponent,
    LoadingSpinerComponent,
    SearchBoxComponent,
  ],
})
export class SharedModule {}
