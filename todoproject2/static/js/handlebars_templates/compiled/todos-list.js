(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['todos-list'] = template({"1":function(container,depth0,helpers,partials,data) {
    var alias1=container.lambda, alias2=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "        <li>\r\n          "
    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"name") : depth0), depth0))
    + "\r\n          <a href='#' data-model=\"todos\" data-url=\"todos/\"  data-action='delete' data-id='"
    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"id") : depth0), depth0))
    + "' class='delete btn btn-danger'>Delete</a>\r\n          <a href='#' data-model=\"todos\" data-url=\"todos/\" data-action='put' data-id='"
    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"id") : depth0), depth0))
    + "' class='update btn btn-warning'>Update</a>\r\n        </li>\r\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"container\">\r\n  <div class=\"row py-2\">\r\n    <div class=\"col\">\r\n      <button data-model=\"todos\" data-action=\"create-form\" class=\"create btn btn-primary float-right\">Add Todo</button>\r\n    </div>\r\n  </div>\r\n  <div class=\"row py-2\">\r\n    <div class=\"col\">\r\n      <ul>\r\n"
    + ((stack1 = lookupProperty(helpers,"each").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"data") : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":10,"column":8},"end":{"line":16,"column":17}}})) != null ? stack1 : "")
    + "      </ul>\r\n    </div>\r\n</div>\r\n<div class=\"row py-2 paginator\"></div>\r\n</div>\r\n";
},"useData":true});
})();