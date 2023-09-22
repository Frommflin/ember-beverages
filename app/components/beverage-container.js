import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class BeverageContainerComponent extends Component {
  @tracked beverage = null;
  @tracked id = 0;

  @action
  showBeverageDetails(bev) {
    this.beverage = bev;
    this.id = bev.id;
  }
}
