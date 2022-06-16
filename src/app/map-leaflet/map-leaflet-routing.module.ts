import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MapLeafletPage } from './map-leaflet.page';

const routes: Routes = [
  {
    path: '',
    component: MapLeafletPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MapLeafletPageRoutingModule {}
