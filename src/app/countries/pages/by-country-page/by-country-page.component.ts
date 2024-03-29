import { Component } from '@angular/core';
import { Country } from '../../interfaces/country.interface';
import { CountriesService } from '../../services/countries.service';

@Component({
  selector: 'countries-by-country-page',
  templateUrl: './by-country-page.component.html',
  styles: ``
})
export class ByCountryPageComponent {

  public countries : Country[] = [];

  constructor(private service : CountriesService){}

  searchByCountry(term : string) : void{
    this.service.searchCountry(term).subscribe(data => {
      this.countries = data;
    });
  }

}
