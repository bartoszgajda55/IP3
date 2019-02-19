export interface CurrentWeather {
  coord: Coord;
  weather: Weather[];
  base: string;
  main: Main;
  wind: Wind;
  clouds: Clouds;
  rain: Rain;
  snow: Snow;
  dt: number;
  sys: Sys;
  id: number;
  name: string;
  cod: number;
}

interface Coord {
  lon: number;
  lat: number;
}

interface Weather {
  id: number;
  main: string;
  description: string;
  icon: string;
}

interface Main {
  temp: number;
  pressure: number;
  humidity: number;
  temp_min: number;
  temp_max: number;
  sea_level: number;
  grnd_level: number;
}

interface Wind {
  speed: number;
  deg: number;
}

interface Rain {
  _1h: number;
  _3h: number;
}

interface Snow {
  _1h: number;
  _3h: number;
}

interface Clouds {
  all: number;
}

interface Sys {
  type: number;
  id: number;
  message: number;
  country: string;
  sunrise: number;
  sunset: number;
}
