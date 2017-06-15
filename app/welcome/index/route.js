import Ember from 'ember';
import Mixin from '../../services/mixin'

//let store = Ember.inject.service(AjaxServices);

export default Ember.Route.extend({
   model(){
       let photos = [];
       Ember.$.getJSON('https://jsonplaceholder.typicode.com/photos').then((response) => {
           photos = response;
       });
  
       return photos;
   }
});





