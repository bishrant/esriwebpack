import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';
// import esri = __esri;
import Map from "arcgis-js-api/Map";
import MapView from "arcgis-js-api/views/MapView";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'esriwebpack';
  @ViewChild('mapViewNode', { static: true }) private mapViewEl: ElementRef;

  ngOnInit() {
    console.log(this.mapViewEl);
    const mapPorps = {basemap: 'streets'};
    const map = new Map(mapPorps);
    console.log(map);
    const mapView = new MapView({
      container: this.mapViewEl.nativeElement,
      map: map,
      center: [-99.5, 31.2],
      zoom: 10
    });
    return mapView;
  }
  
}
