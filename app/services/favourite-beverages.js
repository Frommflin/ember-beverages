import Service from '@ember/service';
import { A } from '@ember/array';

export default class FavouriteBeveragesService extends Service {
  favourites = A([]);

  add(beverage) {
    this.favourites.pushObject(beverage);
  }

  remove(beverage) {
    this.favourites.removeObject(beverage);
  }
}
