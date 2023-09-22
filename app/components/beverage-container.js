import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { service } from '@ember/service';

export default class BeverageContainerComponent extends Component {
  @service favoriteBeverages;
  @tracked beverage = null;
  @tracked id = 0;
  @tracked beverageList = [];
  @tracked justLoaded = true;
  @tracked favMarked = false;

  //Walking the array in reverse, switching each element with a random element before it
  shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  @action
  checkFavState(beverage) {
    let favsArray = this.favoriteBeverages.show();
    if (favsArray.find((bev) => bev.id == beverage.id)) {
      this.favMarked = true;
    } else {
      this.favMarked = false;
    }
  }

  @action
  showBeverageDetails(bev) {
    this.beverage = bev;
    this.id = bev.id;
    this.checkFavState(bev);
  }

  @action
  getBeverageList() {
    const beverageArray = this.args.model.beverages; //Collecting component model

    //Simulating beverage IDs in an array
    let idArray = [];
    for (let i = 1; i <= beverageArray.length; i++) {
      idArray.push(i);
    }
    //Shuffleing the array of ordered IDs, and taking out the 10 first elements
    let shuffledIdArray = this.shuffle(idArray).splice(0, 10);
    let selectedBeveragesArray = [];
    shuffledIdArray.forEach((element) => {
      let beverage = beverageArray.find(({ id }) => id === element);
      selectedBeveragesArray.push(beverage);
    });
    this.beverageList = selectedBeveragesArray;
    this.justLoaded = false;
    this.id = 0;
  }
}
