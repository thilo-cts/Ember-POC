import Ember from 'ember';

export default Ember.Controller.extend({
    actions: {
        getPhotos(response){
            console.log("triggered cont", response);
        }
    }
});
