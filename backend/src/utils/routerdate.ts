type DataOrError = object | null;

export default class RouterDate {
  time: string;
  id_router: string;

  constructor(time, id_router) {
    this.time = time;
    this.id_router = id_router;
  }
}
