import { Component, EventEmitter, Output } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country.interface';

@Component({
  selector: 'countries-by-capital-page',
  templateUrl: './by-capital-page.component.html',
  styles: ``
})
export class ByCapitalPageComponent {

  public countries : Country[] = [];

  constructor(private service : CountriesService){}

  searchByCapital(term : string) : void{
    this.service.searchCapital(term).subscribe(data => {
      this.countries = data;
      console.log(this.countries);
    });
  }

}
