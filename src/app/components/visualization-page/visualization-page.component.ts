/// <reference types="@types/googlemaps" />
import { Component, OnInit } from "@angular/core";
import styles from "../../data/map-style";
import {} from "googlemaps";

@Component({
  selector: "app-visualization-page",
  templateUrl: "./visualization-page.component.html",
  styleUrls: ["./visualization-page.component.scss"]
})
export class VisualizationPageComponent implements OnInit {
  public mapStyles = styles;
  constructor() {}

  ngOnInit() {}

  public onMapReady(map): void {
    var imageMapType = new google.maps.ImageMapType({
      getTileUrl: function(coord, zoom) {
        return ["https://a.sat.owm.io/vane/2.0/weather/TA2/", zoom, "/", coord.x, "/", coord.y, "?appid=9de243494c0b295cca9337e1e96b00e2"].join("");
      },
      tileSize: new google.maps.Size(256, 256)
    });

    map.overlayMapTypes.push(imageMapType);
  }
}
