import { AfterViewInit, Component, Input, ViewChild } from '@angular/core';
import {} from 'googlemaps';

@Component({
  selector: 'app-widget-map',
  templateUrl: './widget-map.component.html',
  styleUrls: ['./widget-map.component.scss'],
})
export class WidgetMapComponent implements AfterViewInit {
  @ViewChild('map') mapElement: any;
  public map: google.maps.Map | undefined;
  public marker: google.maps.Marker | undefined;
  @Input() data: { lat: number; lng: number } | undefined;

  constructor() {}

  private loadMap() {
    if (!this.data) return;
    const { lat, lng } = this.data;
    const mapProperties: google.maps.MapOptions = {
      center: new google.maps.LatLng(lat, lng),
      zoom: 15,
      mapTypeId: google.maps.MapTypeId.ROADMAP,
    };
    this.map = new google.maps.Map(
      this.mapElement.nativeElement,
      mapProperties
    );

    this.marker = new google.maps.Marker({
      position: { lat, lng },
      map: this.map,
    });
  }

  ngAfterViewInit(): void {
    this.loadMap();
  }
}
