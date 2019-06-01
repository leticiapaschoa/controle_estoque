import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { environment } from '../environments/environment';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from "src/app/material-module";
import { ToolbarComponent } from './toolbar/toolbar.component';

var config = {
    apiKey: "AIzaSyCzulZSrjgglLjFIv1IbAZeqTbrGNpTaek",
    authDomain: "estoque-cfd31.firebaseapp.com",
    databaseURL: "https://estoque-cfd31.firebaseio.com",
    projectId: "estoque-cfd31",
    storageBucket: "estoque-cfd31.appspot.com",
    messagingSenderId: "764428655429",
    appId: "1:764428655429:web:4904121b15d75c52"
  };

@NgModule({
  declarations: [    
    AppComponent, ToolbarComponent
  ],
  imports: [    
    BrowserModule,
    NoopAnimationsModule,
    AppRoutingModule,
    MaterialModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule
  ],
  exports: [    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
