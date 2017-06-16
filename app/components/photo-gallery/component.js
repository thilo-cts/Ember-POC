import layout from './template';
export default Ember.Component.extend({
layout: layout,
store: Ember.inject.service('servlet'),
init(){
       this._super(...arguments);
        this.getAllPhotoLists();
},
getAllPhotoLists(){
    let store = this.get('store');
    store.getListOfPhotos().then((response) => {
        console.log("at init.........", response);
         this.set('photos', response);
    });
},
actions: {

}

})