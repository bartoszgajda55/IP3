import { Coord } from "./coord";
import { Weather } from "./weather";
import { Main } from "./main";
import { Wind } from "./wind";
import { Rain } from "./rain";
import { Snow } from "./snow";
import { Clouds } from "./clouds";
import { Sys } from "./sys";

export interface CurrentWeather {
  coord: Coord;
  weather: Weather[];
  /** Internal parameter */
  base: string;
  main: Main;
  wind: Wind;
  clouds: Clouds;
  rain?: Rain;
  snow?: Snow;
  /** Time of data calculation, unix, UTC */
  dt: number;
  sys: Sys;
  /** City ID */
  id: number;
  /** City name */
  name: string;
  /** Internal parameter */
  cod: number;
}
