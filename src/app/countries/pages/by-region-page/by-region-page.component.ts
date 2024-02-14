import { Component } from '@angular/core';
import { Country } from '../../interfaces/country.interface';
import { CountriesService } from '../../services/countries.service';

@Component({
  selector: 'countries-by-region-page',
  templateUrl: './by-region-page.component.html',
  styles: ``
})
export class ByRegionPageComponent {

  public countries : Country[] = [];

  constructor(private service : CountriesService){}

  searchByRegion(term : string) : void{
    this.service.searchRegion(term).subscribe(data => {
      this.countries = data;
    });
  }

}
