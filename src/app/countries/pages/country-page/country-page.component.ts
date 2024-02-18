import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CountriesService } from '../../services/countries.service';
import { switchMap } from 'rxjs';
import { Country } from '../../interfaces/country.interface';

@Component({
  selector: 'countries-country-page',
  templateUrl: './country-page.component.html',
  styles: ``
})
export class CountryPageComponent implements OnInit{  

  public country?: Country;

  constructor(private activateRoute : ActivatedRoute, private service : CountriesService, private router : Router){}

  ngOnInit(): void {
    this.activateRoute.params.pipe(switchMap(({id}) => this.service.searchCountryAlphaCode(id))).subscribe(data => {

      if(!data){
        return this.router.navigateByUrl('');
      }
      return this.country = data;
    })
  }
  

}
