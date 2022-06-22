import { Component } from '@angular/core';
import VectorSource from 'ol/source/vector';
import VectorLayer from 'ol/layer/vector';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})


export class HomePage {
  layer: any;

  constructor() {

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position: GeolocationPosition) => {
        this.GeoMapConfirm(position)
      });
    }else{
      this.GeoMapConfirm(123456)
    }

  }


  markerSource = new ol.source.Vector();
  stockPositionOnClick : any;
  map: any;
  stock: any;

  GeoMapConfirm(position : any){

    console.log(position.coords.latitude)

    this.map = new ol.Map({

      target: 'map',
      layers: [
        new ol.layer.Tile({
          source: new ol.source.OSM()
        })
      ],

      view: new ol.View({
        center: ol.proj.fromLonLat([position.coords.longitude, position.coords.latitude]),
        zoom: 3
      })

    });

    console.log(position.coords.longitude, position.coords.latitude)

  }

  AddMarker(){



    var source = new VectorSource({});
    var layer = new VectorLayer({ source: source});
        this.map.addLayer(layer );


    var marker = new ol.Feature({
      geometry: new ol.geom.Point([0,0]) // dont worry about coordinate type 0,0 will be in west coast of africa
    });

    source.addFeature(marker);

    // this.map.on("click", (args) => {


    //   console.log(args)

    //   this.stock = this.OnClickGetPosition(args)

    //   console.log(this.stock)

    //   console.log(args)


    // });
  }



  OnClickGetPosition(args){

    var lonlat = ol.proj.transform(args.coordinate, 'EPSG:3857', 'EPSG:4326');
    // EPSG:3857 et EPSG:4326 don des Pseudo-Mercator ou Spherical Mercator
    // utilisé par Google maps, OpenStreetMap, blong ,ArcGIS, ESRI
    return this.stockPositionOnClick = lonlat

  }

}

declare var ol : any;
