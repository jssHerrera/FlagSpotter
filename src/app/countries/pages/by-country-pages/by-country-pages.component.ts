import { Component, OnInit } from '@angular/core';
import { CountryService } from '../../services/countries.service';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'app-by-country-pages',
  templateUrl: './by-country-pages.component.html',
  styles: [],
})
export class ByCountryPagesComponent implements OnInit {
  public countries: Country[] = [];
  public initialValue: string = '';
  public isLoading: boolean = false;

  constructor(public countryService: CountryService) {}

  ngOnInit(): void {
    this.countries = this.countryService.cacheStore.byCountry.countries;
    this.initialValue = this.countryService.cacheStore.byCountry.term;
  }

  searchByCountry(term: string): void {
    this.isLoading = true;
    this.countryService.searchCountryl(term).subscribe((countries) => {
      this.countries = countries;
      this.isLoading = false;
    });
  }
}
