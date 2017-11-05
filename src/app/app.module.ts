import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { AgmCoreModule } from '@agm/core';
import { ResaltarDirective } from './directives/resaltar.directive';
import { CountClicksDirective } from './directives/count-clicks.directive';
import { Routes } from '@angular/router';

const appRoutes: Routes = [
  {path: '', component: AppComponent},
  {path: 'places', component: AppComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    ResaltarDirective,
    CountClicksDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAQoGRXkVkAT7TDHkIuxwsYlbkVpdvC00w'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
