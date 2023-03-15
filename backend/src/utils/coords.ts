type DataOrError = object | null;

export default class Coords {
  latitude: number;
  longitude: number;

  constructor(_lati, _long) {
    this.latitude = _lati;
    this.longitude = _long;
  }
}
