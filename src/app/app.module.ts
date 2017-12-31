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
import { CreateComponent } from './create/create.component';
import { PlacesService } from "./services/places.service";
import { AuthService} from "./services/auth.service";

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { environment } from '../environments/environment';
import { HttpModule } from "@angular/http";
import { LinkifystrPipe } from './pipes/linkifystr.pipe';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

const appRoutes: Routes = [
  {path: '', component: PlacesComponent},
  {path: 'places', component: PlacesComponent},
  {path: 'detail/:id', component: DetailComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'create/:id', component: CreateComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    ResaltarDirective,
    CountClicksDirective,
    DetailComponent,
    PlacesComponent,
    ContactComponent,
    CreateComponent,
    LinkifystrPipe,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAQoGRXkVkAT7TDHkIuxwsYlbkVpdvC00w'
    }),
    RouterModule.forRoot(appRoutes),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    HttpModule
  ],
  providers: [
    PlacesService,
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
