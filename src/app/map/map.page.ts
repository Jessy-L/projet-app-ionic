import { Component, OnInit } from '@angular/core';
import Map from 'ol/Map';
import View from 'ol/View';
import TileLayer from 'ol/layer/Tile';
import XYZ from 'ol/source/XYZ';
import Route from 'geoportal-extensions-openlayers/src/OpenLayers';
import GeoportalWMTS from 'geoportal-extensions-openlayers/src/OpenLayers';
import Gp from 'geoportal-extensions-openlayers/src/OpenLayers';

@Component({
  selector: 'app-map',
  templateUrl: './map.page.html',
  styleUrls: ['./map.page.scss'],
})
export class MapPage implements OnInit {

  map: any

  constructor(  ) {

    var cartesLyr = new GeoportalWMTS({
      layer: "GEOGRAPHICALGRIDSYSTEMS.PLANIGNV2",
    });

    var map = new Map({

      target: 'map',
      layers: [
        cartesLyr
      ],
      view: new View({
        center: [288074.8449901076, 6247982.515792289],
        zoom: 12
      })
    });

    var routeControl = new Route({
      collapsed : true
    });

    map.addControl(routeControl);

    Gp.Services.getConfig({
      apiKey: "essentiels,calcul",
      onSuccess: null
    });

  }


  ngOnInit() {
  }

}
