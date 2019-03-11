import { Coord } from "./coord";

export interface City {
  /** City ID */
  id: number;
  /** City name */
  name: string;
  /** City geo location, lat. and lon. */
  coord: Coord;
  /** Country code (GB, JP etc.) */
  country: string;
}
