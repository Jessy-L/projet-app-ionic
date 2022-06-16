import { AfterViewInit, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MapLeafletPageRoutingModule } from './map-leaflet-routing.module';

import { MapLeafletPage } from './map-leaflet.page';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MapLeafletPageRoutingModule
  ],
  declarations: [MapLeafletPage]
})
export class MapLeafletPageModule {}
