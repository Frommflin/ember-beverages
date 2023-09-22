import Service from '@ember/service';
import { A } from '@ember/array';

export default class FavoriteBeveragesService extends Service {
  favorites = A([]);

  add(beverage) {
    this.favorites.pushObject(beverage);
  }

  remove(beverage) {
    this.favorites.removeObject(beverage);
  }

  show() {
    return this.favorites;
  }
}
