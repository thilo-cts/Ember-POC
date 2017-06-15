import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('welcome', function() {
    this.route('aboutus', function() {
      this.route('gallery');
    });
  });
});

export default Router;
