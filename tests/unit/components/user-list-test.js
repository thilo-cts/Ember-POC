import { moduleForComponent, test } from 'ember-qunit';
import Ember from 'ember';
let component;

moduleForComponent('user-list', 
'Unit | Component | user list', {
  // Specify the other units that are required for this test
  // needs: ['component:foo', 'helper:bar'],
  unit: true

});

test('Should display users when response is succeed', function(assert) { 
   component =  this.subject({
    store: Ember.Object.create({
      findAll: function(){
        return Ember.RSVP.Promise.resolve({
          data: [{
            'first-name' : 'Johan',
            'last-name': 'jj'
          },{
            'first-name' : 'Sam',
            'last-name': 'jj'
          }]
        });
      }
    })
  });
  Ember.run(() => {
    component.send('fetchUsers');
  });
  assert.equal(component.get('users').data.length, 2, 'Handled success senario');

});

test('Should display error message when error occured', function(assert) { 
   component =  this.subject({
    store: Ember.Object.create({
      findAll: function(){
        return Ember.RSVP.Promise.reject({ 
          errors: [{
            id: "1544654",
            staus: "500",
            detail: "Internal server error"
          }
        ]});
      }
    })
  });

  Ember.run(() => {
    component.send('fetchUsers');
  });

  assert.equal(Ember.isEmpty(component.get('error')), false, 'Handled error senario');
});