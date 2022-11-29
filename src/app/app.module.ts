import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { MainComponent } from './routes/main/main.component';
import { QueEsNetComponent } from './routes/que-es-net/que-es-net.component';
import { Page404Component } from './components/page404/page404.component';
import { CarruselComponent } from './components/carrusel/carrusel.component';
import { Card1Component } from './components/card1/card1.component';
import { BannerSubscriptionComponent } from './components/banner-subscription/banner-subscription.component';
import { IndevelopmentComponent } from './routes/indevelopment/indevelopment.component';
import { SignupComponent } from './routes/signup/signup.component';
import { SignupcComponent } from './components/signupc/signupc.component';
import { LogincComponent } from './components/loginc/loginc.component';
import { LoginComponent } from './routes/login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './routes/home/home.component';
import { HomecComponent } from './components/homec/homec.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    MainComponent,
    QueEsNetComponent,
    Page404Component,
    CarruselComponent,
    Card1Component,
    BannerSubscriptionComponent,
    IndevelopmentComponent,
    SignupComponent,
    SignupcComponent,
    LogincComponent,
    LoginComponent,
    HomeComponent,
    HomecComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
