(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['user-login'] = template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div class=\"container\">\r\n  <div class=\"row py-2\">\r\n    <form class=\"login\" action=\"/api-token-auth/\" method=\"post\" id=\"login\">\r\n      <input class=\"form-control\" name=\"username\" type=\"text\" placeholder=\"username\" aria-label=\"username\">\r\n      <input class=\"form-control\" name=\"password\" type=\"password\" placeholder=\"password\" aria-label=\"username\">\r\n      <button class=\"btn btn-primary\" type=\"submit\">Login</button>\r\n    </form>\r\n  </div>\r\n</div>\r\n";
},"useData":true});
})();