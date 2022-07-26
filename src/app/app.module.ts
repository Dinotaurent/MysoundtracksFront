import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { IndexComponent } from './index/index.component';
import { ArtistaComponent } from './artista/artista.component';
import { FormComponent } from './artista/form.component';
// import { RouterModule,Routes } from '@angular/router';


// const routes: Routes = [
//   {path: '', component: IndexComponent},
//   {path: 'artistas', component: ArtistaComponent}
// ];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    IndexComponent,
    ArtistaComponent,
    FormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
