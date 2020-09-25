import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MakeUpComponent } from './make-up/make-up.component';
import { BridalsComponent } from './bridals/bridals.component';
import { FacialTreatmentComponent } from './facial-treatment/facial-treatment.component';
import { ManicurePedicureComponent } from './manicure-pedicure/manicure-pedicure.component';
import { BeautyProductsComponent } from './beauty-products/beauty-products.component';
import { TrainingsComponent } from './trainings/trainings.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MakeUpComponent,
    BridalsComponent,
    FacialTreatmentComponent,
    ManicurePedicureComponent,
    BeautyProductsComponent,
    TrainingsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
