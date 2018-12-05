
module.exports = function(app) {
    var pagenavigate = require('../controllers/index.server.controller');
    //var about = require('../controllers/index.server.controller');
    app.get('/', pagenavigate.render);
    //app.get('/about', about.render);
    app.route('/about')     .get(pagenavigate.Aboutrender);
    app.route('/seo')     .get(pagenavigate.PageUnderRender);
    app.route('/WebDesign')     .get(pagenavigate.PageUnderRender);
    app.route('/WebDevelopment')     .get(pagenavigate.PageUnderRender);
    app.route('/AppDevelopment')     .get(pagenavigate.PageUnderRender);
    app.route('/DigitalMarketting')     .get(pagenavigate.PageUnderRender);
    app.route('/smo')     .get(pagenavigate.PageUnderRender);
    app.route('/mongodb')     .get(pagenavigate.PageUnderRender);
    app.route('/express')     .get(pagenavigate.PageUnderRender);
    app.route('/angular')     .get(pagenavigate.PageUnderRender);
    app.route('/nodejs')     .get(pagenavigate.PageUnderRender);
      
   };
   