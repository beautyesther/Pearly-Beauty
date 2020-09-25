import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {MakeUpComponent} from './make-up/make-up.component';
import {BridalsComponent} from './bridals/bridals.component';
import {FacialTreatmentComponent} from './facial-treatment/facial-treatment.component';
import {ManicurePedicureComponent} from './manicure-pedicure/manicure-pedicure.component';
import {TrainingsComponent} from './trainings/trainings.component';
import {BeautyProductsComponent} from './beauty-products/beauty-products.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
       path: 'make-up',
    component: MakeUpComponent
  },
{
       path: 'bridals',
    component: BridalsComponent
  },
{
       path: 'facial-treatment',
    component: FacialTreatmentComponent
  },
{
       path: 'manicure-pedicure',
    component: ManicurePedicureComponent
},
{
       path: 'beauty-products',
    component: BeautyProductsComponent
  },
{
       path: 'trainings',
    component: TrainingsComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
