(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['categories-list'] = template({"1":function(container,depth0,helpers,partials,data) {
    var helper, alias1=container.escapeExpression, alias2=container.lambda, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "          <li>\r\n            "
    + alias1(((helper = (helper = lookupProperty(helpers,"name") || (depth0 != null ? lookupProperty(depth0,"name") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"name","hash":{},"data":data,"loc":{"start":{"line":13,"column":12},"end":{"line":13,"column":20}}}) : helper)))
    + "\r\n            <a href='#' data-model=\"categories\" data-url=\"categories/\"  data-action='delete' data-id='"
    + alias1(alias2((depth0 != null ? lookupProperty(depth0,"id") : depth0), depth0))
    + "' class='delete btn btn-danger'>Delete</a>\r\n            <a href='#' data-model=\"categories\" data-url=\"categories/\" data-action='put' data-id='"
    + alias1(alias2((depth0 != null ? lookupProperty(depth0,"id") : depth0), depth0))
    + "' class='update btn btn-warning'>Update</a>\r\n          </li>\r\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"container\">\r\n  <div class=\"row py-2\">\r\n    <div class=\"col\">\r\n      <button data-model=\"categories\" data-action=\"create-form\" class=\"create btn btn-primary float-right\">Add Category</button>\r\n    </div>\r\n  </div>\r\n  <div class=\"row py-2\">\r\n    <div class=\"col\">\r\n\r\n      <ul>\r\n"
    + ((stack1 = lookupProperty(helpers,"each").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"data") : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":11,"column":8},"end":{"line":17,"column":17}}})) != null ? stack1 : "")
    + "      </ul>\r\n    </div>\r\n</div>\r\n<div class=\"row py-2 paginator\"></div>\r\n</div>\r\n";
},"useData":true});
})();