import DS from 'ember-data';

export default DS.Model.extend({
    icon: DS.attr(),
    label : DS.attr(),
    content: DS.attr(),
    'is-image': DS.attr()
});
