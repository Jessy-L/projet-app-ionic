import { Component } from '@angular/core';

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

  }

  AddMarker(){

    this.map.on("click", (args) => {

      this.stock = this.OnClickGetPosition(args)


      var markers = new ol.layer.markers( "Markers" );
      this.map.addLayer(markers);

      markers.addMarker(new ol.marker(this.stock));


    });
  }



  OnClickGetPosition(args){

    var lonlat = ol.proj.transform(args.coordinate, 'EPSG:3857', 'EPSG:4326');
    // EPSG:3857 et EPSG:4326 don des Pseudo-Mercator ou Spherical Mercator
    // utilisé par Google maps, OpenStreetMap, blong ,ArcGIS, ESRI
    return this.stockPositionOnClick = lonlat

  }

}

declare var ol : any;
