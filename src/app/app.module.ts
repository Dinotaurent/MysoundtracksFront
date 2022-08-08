import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { IndexComponent } from './index/index.component';
import { ArtistaComponent } from './artista/artista.component';
import { FormComponent } from './artista/form.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ArtistaService } from './artista/artista.service';


//Firebase
import { environment } from 'src/environments/environment.prod';
// import { AngularFireModule } from '@angular/fire/compat';
// import { AngularFireAnalyticsModule } from '@angular/fire/compat/analytics';
// import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';

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
    HttpClientModule,
    FormsModule,
    // AngularFireModule.initializeApp(environment.firebaseConfig),
    // AngularFireAnalyticsModule,
    // AngularFirestoreModule
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireStorageModule
    // RouterModule.forRoot(routes)
  ],
  providers: [ArtistaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
