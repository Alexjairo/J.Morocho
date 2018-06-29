import { Component, ViewChild, NgModule, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
 import { } from '@types/googlemaps';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit {
  @ViewChild('gmap') gmapElement: any;
  map: google.maps.Map;

  constructor(public navCtrl: NavController) {

  }

  ngOnInit() {
    this.startGoogleMap();
  }

  startGoogleMap() {
//     const mapProp = {
//         center: new google.maps.LatLng(-0.266144, -78.543043),//-0.224710, -78.516763),
//         zoom: 12,
//         mapTypeId: google.maps.MapTypeId.ROADMAP
      
//     };
//     this.map = new google.maps.Map(this.gmapElement.nativeElement, mapProp);
//   }
// }
 
  const Ubicacion =new google.maps.LatLng(-0.266144, -78.543043);
  const mapProp= {

      center: Ubicacion,
      zoom: 15,
      mapTypeId: google.maps.MapTypeId.ROADMAP
  };
  const map = new google.maps.Map(this.gmapElement.nativeElement, mapProp);
  var marcador = new google.maps.Marker({
  position:Ubicacion,
  map:map,
  
 });

}
}