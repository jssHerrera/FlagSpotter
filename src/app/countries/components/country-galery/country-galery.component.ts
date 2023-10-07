import { Component, Input } from '@angular/core';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'countries-galery',
  templateUrl: './country-galery.component.html',
  styles: [],
})
export class CountryGaleryComponent {
  @Input()
  public countries: Country[] = [];
}
