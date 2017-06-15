import Ember from 'ember';

export default Ember.Route.extend({
       photos: this.modelFor('welcome'),
   model(){
       console.log(".........", this.photos);
       return photos;
   }

});
