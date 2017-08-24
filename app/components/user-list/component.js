import Ember from 'ember';

export default Ember.Component.extend({
  users: null,
  store: Ember.inject.service(),
  error: null,
  actions: {
    fetchUsers() {
      this.get('store')
        .findAll('user')
        .then((response) => {
          console.log('response......',response);  
          this.set('users', response);
        }).catch((xhrError) => {
          console.log('error block')
          if(xhrError.errors !== undefined){
            this.set('error', xhrError.errors[0]);
          }
        });
    }
  }
});
