import Route from '@ember/routing/route';
import { service } from '@ember/service';

export default class FavoritesRoute extends Route {
  @service favoriteBeverages;

  async model() {
    let beverages = await this.favoriteBeverages.show();
    return { beverages };
  }
}
