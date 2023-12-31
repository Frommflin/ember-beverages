import EmberRouter from '@ember/routing/router';
import config from 'ember-beverages/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('beverages', { path: '/' });
  this.route('favorites');
});
