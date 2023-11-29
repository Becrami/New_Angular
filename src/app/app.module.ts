import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './page/home/home.component';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { RegisterComponent } from './page/register/register.component';
import { LoginComponent } from './page/login/login.component';

const config ={
  apiKey: "AIzaSyDTNDTsBJI68ih3zGOWtXF2HpLknSJbpwA",
  authDomain: "apirest-2fb0f.firebaseapp.com",
  databaseURL: "https://apirest-2fb0f-default-rtdb.firebaseio.com",
  projectId: "apirest-2fb0f",
  storageBucket: "apirest-2fb0f.appspot.com",
  messagingSenderId: "237983704476",
  appId: "1:237983704476:web:18aa210093cfede0f51459",
  measurementId: "G-5RZ2F82HF7"
};

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RegisterComponent,
    LoginComponent
    
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(config),
    AngularFirestoreModule,
    AngularFireAuthModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
