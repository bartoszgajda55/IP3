import { Main } from "./main";
import { Weather } from "./weather";
import { Clouds } from "./clouds";
import { Wind } from "./wind";
import { Rain } from "./rain";
import { Snow } from "./snow";

export interface Forecast {
  /** Time of data forecasted, unit, UTC */
  dt: number;
  /** Main forecast information */
  main: Main;
  /** Weather condition codes */
  weather: Weather;
  clouds: Clouds;
  wind: Wind;
  rain: Rain;
  snow: Snow;
  dt_txt: string;
}
