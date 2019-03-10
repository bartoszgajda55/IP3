/// <reference types="@types/googlemaps" />
import { Component, OnInit } from "@angular/core";
import { FormControl, Validators } from "@angular/forms";
import { MatSelectChange } from "@angular/material";
import styles from "../../data/map-style";
import layers from "../../data/map-layers";
import {} from "googlemaps";

@Component({
  selector: "app-visualization-page",
  templateUrl: "./visualization-page.component.html",
  styleUrls: ["./visualization-page.component.scss"]
})
export class VisualizationPageComponent {
  private map: any;
  private layerCode: string;
  public layerName: string;
  public availableMapLayers: any[] = layers;
  public mapStyles = styles;

  public onMapReady(map): void {
    this.layerCode = this.availableMapLayers[0].value;
    this.layerName = this.availableMapLayers[0].name;
    this.map = map;
    this.setMapWithLayer(this.layerCode, this.map);
  }

  public handleUserMapLayerSelection(event: MatSelectChange): void {
    this.layerCode = event.value;
    this.layerName = event.source.triggerValue;
    this.setMapWithLayer(this.layerCode, this.map);
  }

  private setMapWithLayer(layerCode: string, map: any): void {
    map.overlayMapTypes.clear();
    var imageMapType = new google.maps.ImageMapType({
      getTileUrl: function(coord, zoom) {
        return `https://a.sat.owm.io/vane/2.0/weather/${layerCode}/${zoom}/${coord.x}/${coord.y}?appid=9de243494c0b295cca9337e1e96b00e2`;
      },
      tileSize: new google.maps.Size(256, 256)
    });
    map.overlayMapTypes.push(imageMapType);
  }
}
