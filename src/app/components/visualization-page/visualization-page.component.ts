/// <reference types="@types/googlemaps" />
import { Component, OnInit } from "@angular/core";
import { GoogleMapsAPIWrapper } from "@agm/core";
import {} from "googlemaps";

@Component({
  selector: "app-visualization-page",
  templateUrl: "./visualization-page.component.html",
  styleUrls: ["./visualization-page.component.scss"]
})
export class VisualizationPageComponent implements OnInit {
  constructor(private googleMapsApiWrapper: GoogleMapsAPIWrapper) {}

  ngOnInit() {
    this.googleMapsApiWrapper.getNativeMap().then((map: any) => {
      var bounds = {
        17: [[20969, 20970], [50657, 50658]],
        18: [[41939, 41940], [101315, 101317]],
        19: [[83878, 83881], [202631, 202634]],
        20: [[167757, 167763], [405263, 405269]]
      };

      var imageMapType = new google.maps.ImageMapType({
        getTileUrl: function(coord, zoom) {
          if (
            zoom < 17 ||
            zoom > 20 ||
            bounds[zoom][0][0] > coord.x ||
            coord.x > bounds[zoom][0][1] ||
            bounds[zoom][1][0] > coord.y ||
            coord.y > bounds[zoom][1][1]
          ) {
            return null;
          }

          return ["//www.gstatic.com/io2010maps/tiles/5/L2_", zoom, "_", coord.x, "_", coord.y, ".png"].join("");
        },
        tileSize: new google.maps.Size(256, 256)
      });

      map.overlayMapTypes.push(imageMapType);
    });
  }
}
