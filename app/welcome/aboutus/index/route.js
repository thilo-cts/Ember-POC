import Ember from 'ember';


export default Ember.Route.extend({
    queryParams: {
    title: {
      refreshModel: true
    }
  },
    model(params){
        console.log(".roteu.", params);
    }
});
