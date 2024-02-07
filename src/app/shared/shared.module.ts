import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { SidebarComponent } from './pages/sidebar/sidebar.component';
import { RouterModule } from '@angular/router';
import { SearchBoxComponent } from './components/search-box/search-box.component';



@NgModule({
  declarations: [
    HomePageComponent,
    SidebarComponent,
    SearchBoxComponent,
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports:[
    HomePageComponent,
    SidebarComponent,
    SearchBoxComponent
  ]
})
export class SharedModule { }
