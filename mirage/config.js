import Mirage from 'ember-cli-mirage'

export default function() {
  this.get('/users', function(){
    return {
      jsonapi: {
        version: '1.0'
      },
      data: [{
        type: 'user',
        id: '1',
        attributes: {
          'first-name': 'Johan',
          'last-name': 'Zaff'
        }
       },
      {
        type: 'user',
        id: '2',
        attributes: {
          'first-name': 'Sangi',
          'last-name': 'Mangi'
        }
       }]
    }
  });

  // this.get('/users', () => {
  //   return new Mirage.Response(500, 
  //     {
  //       jsonapi: {
  //         version: "1.0.0"
  //       }
  //     },
  //     { 
  //       errors: [{
  //         id: "1544654",
  //         staus: "500",
  //         detail: "Internal server error"
  //       }
  //     ]});
  // });
}
