import Ember from 'ember';
import _ from "underscore";
export default Ember.Route.extend({
    model(params){
        var dashboard = this.modelFor('dashboard');       
        dashboard = _.findWhere(dashboard, {boxId : parseInt(params.boxId)});
        return dashboard;
    }
});
