import Component from '@glimmer/component';
import { service } from '@ember/service';
import { action } from '@ember/object';

export default class BeverageDetailsComponent extends Component {
  @service('favourite-beverages') favourites;

  @action
  saveFavourite(beverage) {
    this.favourites.add(beverage);
  }

  @action
  removeFavourite(beverage) {
    this.favourites.remove(beverage);
  }
}
