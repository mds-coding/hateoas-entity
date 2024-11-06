export class HateoasEntity<T> {
  type: string;
  data: T;

  constructor(type: string, data: T) {
    this.type = type;
    this.data = data;
  }
}
