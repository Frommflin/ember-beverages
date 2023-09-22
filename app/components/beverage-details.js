import Component from '@glimmer/component';
import { service } from '@ember/service';
import { action } from '@ember/object';

export default class BeverageDetailsComponent extends Component {
  @service('favorite-beverages') favorites;

  @action
  saveFavorite(beverage) {
    this.favorites.add(beverage);
  }

  @action
  removeFavorite(beverage) {
    this.favorites.remove(beverage);
  }
}
