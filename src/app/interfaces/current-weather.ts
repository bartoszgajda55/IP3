export interface CurrentWeather {
  coord: Coord;
  weather: Weather[];
  /** Internal parameter */
  base: string;
  main: Main;
  wind: Wind;
  clouds: Clouds;
  rain: Rain;
  snow: Snow;
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

interface Coord {
  /** City geo location, longitude */
  lon: number;
  /** City geo location, latitude */
  lat: number;
}

interface Weather {
  /** Weather condition id */
  id: number;
  /** Group of weather parameters (Rain, Snow, Extreme etc.) */
  main: string;
  /** Weather condition within the group */
  description: string;
  /** Weather icon id */
  icon: string;
}

interface Main {
  /** Temperature. Unit Default: Kelvin, Metric: Celsius, Imperial: Fahrenheit. */
  temp: number;
  /** Atmospheric pressure (on the sea level, if there is no sea_level or grnd_level data), hPa */
  pressure: number;
  /** Humidity, % */
  humidity: number;
  /** Minimum temperature at the moment. This is deviation from current temp that is possible for large cities and megalopolises geographically expanded (use these parameter optionally). Unit Default: Kelvin, Metric: Celsius, Imperial: Fahrenheit. */
  temp_min: number;
  /** Maximum temperature at the moment. This is deviation from current temp that is possible for large cities and megalopolises geographically expanded (use these parameter optionally). Unit Default: Kelvin, Metric: Celsius, Imperial: Fahrenheit. */
  temp_max: number;
  /** Atmospheric pressure on the sea level, hPa */
  sea_level: number;
  /** Atmospheric pressure on the ground level, hPa */
  grnd_level: number;
}

interface Wind {
  /** Wind speed. Unit Default: meter/sec, Metric: meter/sec, Imperial: miles/hour. */
  speed: number;
  /** Wind direction, degrees (meteorological) */
  deg: number;
}

interface Rain {
  /** Rain volume for the last 1 hour, mm */
  _1h: number;
  /** Rain volume for the last 3 hours, mm */
  _3h: number;
}

interface Snow {
  /** Snow volume for the last 1 hour, mm */
  _1h: number;
  /** Snow volume for the last 3 hours, mm */
  _3h: number;
}

interface Clouds {
  /** Cloudiness, % */
  all: number;
}

interface Sys {
  /** Internal parameter */
  type: number;
  /** Internal parameter */
  id: number;
  /** Internal parameter */
  message: number;
  /** Country code (GB, JP etc.) */
  country: string;
  /**  Sunrise time, unix, UTC */
  sunrise: number;
  /** Sunset time, unix, UTC */
  sunset: number;
}
