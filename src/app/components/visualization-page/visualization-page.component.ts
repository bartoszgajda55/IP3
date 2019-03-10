/// <reference types="@types/googlemaps" />
import { Component, OnInit } from "@angular/core";
import styles from "../../data/map-style";
import {} from "googlemaps";
import { FormControl, Validators } from "@angular/forms";
import { MatSelectChange } from "@angular/material";

@Component({
  selector: "app-visualization-page",
  templateUrl: "./visualization-page.component.html",
  styleUrls: ["./visualization-page.component.scss"]
})
export class VisualizationPageComponent {
  private map: any;
  private defaultLayerName: string = "TA2";
  public mapStyles = styles;

  public onMapReady(map): void {
    this.map = map;
    this.setMapWithLayer(this.defaultLayerName, this.map);
  }

  public handleUserMapLayerSelection(event: MatSelectChange): void {
    this.setMapWithLayer(event.value, this.map);
  }

  private setMapWithLayer(layerName: string, map: any): void {
    map.overlayMapTypes.clear();
    var imageMapType = new google.maps.ImageMapType({
      getTileUrl: function(coord, zoom) {
        return `https://a.sat.owm.io/vane/2.0/weather/${layerName}/${zoom}/${coord.x}/${coord.y}?appid=9de243494c0b295cca9337e1e96b00e2`;
      },
      tileSize: new google.maps.Size(256, 256)
    });
    map.overlayMapTypes.push(imageMapType);
  }
}
