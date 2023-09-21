import Route from '@ember/routing/route';
import fetch from 'fetch';

export default class BeveragesRoute extends Route {
  async model() {
    const response = await fetch('https://api.punkapi.com/v2/beers');
    let beverages = await response.json();
    return { beverages };
  }
}
