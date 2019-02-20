import { City } from "./city";
import { Forecast } from "./forecast";

export interface FiveDayForecast {
  /** Internal parameter */
  cod: number;
  /** Internal parameter */
  message: number;
  city: City;
  /** Number of lines returned by this API call */
  cnt: number;
  /** List with weather forecast */
  list: Forecast[];
}
