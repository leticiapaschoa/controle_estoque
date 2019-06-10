import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { environment } from '../environments/environment';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from "src/app/material-module";
import { MainNavComponent } from './main-nav/main-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule, MatFooterCell, MatFormField, MatFormFieldControl } from '@angular/material';
import { EditComponent } from './produtos/edit/edit.component';
import { ListComponent } from './produtos/list/list.component';
import { FormsModule } from '@angular/forms';
import { EstoqueComponent } from './produtos/estoque/estoque.component';
import { MatFormFieldModule} from '@angular/material';

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
    AppComponent,  MainNavComponent, EditComponent, ListComponent, EstoqueComponent
  ],
  imports: [    
    BrowserModule,
    NoopAnimationsModule,
    AppRoutingModule,
    MaterialModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    FormsModule,
    MatFormFieldModule
  ],
  exports: [    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
