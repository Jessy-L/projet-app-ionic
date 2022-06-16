import { AfterContentInit, Component } from '@angular/core';
import * as L from 'leaflet'


@Component({
  selector: 'app-map-leaflet',
  templateUrl: './map-leaflet.page.html',
  styleUrls: ['./map-leaflet.page.scss'],
})
export class MapLeafletPage implements AfterContentInit {

  private map : any;
  public position : any;
  public stockPosition: any[];
  public lonLatOnClick : any[];

  markerIcon = {
    icon: L.icon({
      iconSize: [25, 41],
      iconAnchor: [10, 41],
      popupAnchor: [2, -40],
      // specify the path here
      iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
      shadowUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png"
    })
  };

  constructor(){}


  private initMap(coord):void{

    var lonlat = this.GetPosition(coord)

    console.log(lonlat)

    // return

    this.map = L.map('map', {
      center: [lonlat[0], lonlat[1]],
      zoom: 15
    });

    const tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {

      maxZoom: 18,
      minZoom: 3,
      attribution :'&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'

    })

    tiles.addTo(this.map)
  }


  public AddMarkerOnClick(){

    var stock = this.map

    this.map.on("click" , function(e){

      const newMarker = L.marker([e.latlng.lat, e.latlng.lng], this.markerIcon)

      newMarker.addTo(stock)

    })


  }


  private GetPosition(args : any){

    var coord = [ args.coords.latitude, args.coords.longitude ]
    this.stockPosition = coord ;
    return coord

  }


  ngAfterContentInit(): void {

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((positionFind: GeolocationPosition) => {
        this.initMap(positionFind)
      });
    }

  }

}
