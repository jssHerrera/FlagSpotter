import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ByCapitalPagesComponent } from './pages/by-capital-pages/by-capital-pages.component';
import { ByCountryPagesComponent } from './pages/by-country-pages/by-country-pages.component';
import { ByRegionPagesComponent } from './pages/by-region-pages/by-region-pages.component';
import { CountryPageComponent } from './pages/country-page/country-page.component';
import { CountriesRoutingsModule } from './countries-routing.module';
import { SharedModule } from '../shared/shared.module';
import { CountryGaleryComponent } from './components/country-galery/country-galery.component';
import { CountryInfoComponent } from './components/country-info/country-info.component';

@NgModule({
  declarations: [
    ByCapitalPagesComponent,
    ByCountryPagesComponent,
    ByRegionPagesComponent,
    CountryPageComponent,
    CountryGaleryComponent,
    CountryInfoComponent,
  ],
  imports: [CommonModule, CountriesRoutingsModule, SharedModule],
})
export class CountriesModule {}
