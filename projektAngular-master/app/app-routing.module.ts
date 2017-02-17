import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SpotsComponent }      from './spots.component';
import { SpotDetailComponent }  from './spot-detail.component';

const routes: Routes = [
  { path: 'detail/:id', component: SpotDetailComponent },
  { path: 'spots',     component: SpotsComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}

