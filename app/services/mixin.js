import AjaxService from 'ember-ajax/services/ajax';

export default Ember.Mixin.create({
    namespace: 'https://jsonplaceholder.typicode.com',
    getListOfPhotos(){
        return this.request('/photos', {
             method: 'GET',
             dataType: '*',
        }).then((response) => {
            console.log("...............",response);
            return response;
        });
    }
})