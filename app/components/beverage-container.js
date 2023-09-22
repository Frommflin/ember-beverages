import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class BeverageContainerComponent extends Component {
  @tracked beverageID = 0;

  @action
  showBeverageDetails(id) {
    this.beverageID = id;
    alert(`ID for clicked beverage is: ${id}`);
  }
}
