import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { AgmCoreModule } from '@agm/core';
import { ResaltarDirective } from './directives/resaltar.directive';
import { CountClicksDirective } from './directives/count-clicks.directive';
import { Routes, RouterModule } from '@angular/router';
import { DetailComponent } from './detail/detail.component';
import { PlacesComponent } from './places/places.component';
import { ContactComponent } from './contact/contact.component';

const appRoutes: Routes = [
  {path: '', component: PlacesComponent},
  {path: 'places', component: PlacesComponent},
  {path: 'detail/:id', component: DetailComponent},
  { path: 'contact', component: ContactComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    ResaltarDirective,
    CountClicksDirective,
    DetailComponent,
    PlacesComponent,
    ContactComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAQoGRXkVkAT7TDHkIuxwsYlbkVpdvC00w'
    }),
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
