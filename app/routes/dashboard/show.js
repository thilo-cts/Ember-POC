import Ember from 'ember';
export default Ember.Route.extend({
    model(params){
        var dashboard = this.modelFor('dashboard');       
        dashboard = dashboard.findBy('boxId', parseInt(params.boxId));
        return dashboard;
    }
});
