import Route from '@ember/routing/route';
import { service } from '@ember/service';

export default class FavouritesRoute extends Route {
  @service favouriteBeverages;

  async model() {
    let beverages = await this.favouriteBeverages.show();
    return { beverages };
  }
}
