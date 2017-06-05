import Ember from 'ember';

export default Ember.Route.extend({
    model(){
        return [{
            icon:'user',
            label : 'Account',
            boxId : 1,
            content : 'Lorem ipsum dolor sit amet.',
            isImage: false

        },{
            icon:'cogs',
            label : 'Settings',
            boxId : 2,
            content : 'Nulla pellentesque enim vitae accumsan luctus.',
            isImage: false
        },{
            icon:'tasks',
            label : 'Task',
            boxId : 3,
            content:'ember-toy.png',
            isImage: true
        },{
            icon:'rss',
            label : 'Activities',
            boxId : 4,
            content:'ember-cli-logo-small-dark.png',
            isImage: true
        },{
            icon:'bar-chart',
            label : 'Statistics',
            boxId : 5,
            content : 'Nulla pellentesque enim vitae accumsan luctus.',
            isImage: false
        },{
            icon:'envelope',
            label : 'Emails',
            boxId : 6,
            content : 'Ut molestie quam vel lorem sagittis semper.',
            isImage: false
        },{
            icon:'comments',
            label : 'Chat',
            boxId : 7,
            content : 'Nulla pellentesque enim vitae accumsan luctus.',
            isImage: false
        },{
            icon:'sign-out',
            label : 'Sign Out',
            boxId : 8,
            content : 'Ut molestie quam vel lorem sagittis semper.',
            isImage: false
        }];
    }
});
