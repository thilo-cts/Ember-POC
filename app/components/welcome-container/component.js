import layout from './template';

export default Ember.Component.extend({
layout: layout,
store: Ember.inject.service('servlet'),
init() {
   this._super(...arguments);
   this.set('photos', 'ihjk');
   this.getAllPhotoLists();
},
getAllPhotoLists(){
    let store = this.get('store');
    store.getListOfPhotos().then((response) => {
        console.log("at init.........", response);
         this.set('photos', response);
    });
},
actions : {
    submit : function() {
        let photos = this.get('photos');
        this.get('router').transitionTo('welcome.aboutus', {queryParams: {'title': photos}});
    }
}

})