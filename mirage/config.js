export default function() {
  this.namespace = '/api';
  this.get('/dashboards', function(db, request) {
      let dashboards = db.dashboards.all();
      return dashboards;
  });
  this.get('/dashboards/:id', function(db,request) {
      let id = request.params.id;
      let dashboard = db.dashboards.find(id);
      return {data: dashboard};
  });
  this.passthrough();
}