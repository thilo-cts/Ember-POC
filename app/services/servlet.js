import AjaxService from 'ember-ajax/services/ajax';

export default AjaxService.extend({

    getListOfPhotos(){
        return this.request('/photos?&_limit=20', {
            host: 'https://jsonplaceholder.typicode.com',
             method: 'GET',
             dataType: '*',
        }).then((response) => {
            return response;
        });
    }
})