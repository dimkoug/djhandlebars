(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['tags-put'] = template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=container.escapeExpression, alias2=container.lambda, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"container\">\r\n  <div class=\"row py-2\">\r\n    <div class=\"col\">\r\n      Update tag\r\n    </div>\r\n  </div>\r\n  <div class=\"row py-2\">\r\n    <div class=\"col\">\r\n      <form action='"
    + alias1(((helper = (helper = lookupProperty(helpers,"url") || (depth0 != null ? lookupProperty(depth0,"url") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"url","hash":{},"data":data,"loc":{"start":{"line":9,"column":20},"end":{"line":9,"column":27}}}) : helper)))
    + "' method='put' id=\"form\" data-model_url=\"tags/\" data-model=\"tags\">\r\n        <div classs=\"form-row\">\r\n        <input type='hidden' name='id' value='"
    + alias1(alias2(((stack1 = (depth0 != null ? lookupProperty(depth0,"item") : depth0)) != null ? lookupProperty(stack1,"id") : stack1), depth0))
    + "' class=\"form-control\"/>\r\n        <input type='text' name='name' value='"
    + alias1(alias2(((stack1 = (depth0 != null ? lookupProperty(depth0,"item") : depth0)) != null ? lookupProperty(stack1,"name") : stack1), depth0))
    + "' class=\"form-control\"/>\r\n      </div>\r\n      <div class=\"row py-2\">\r\n        <div class=\"col\">\r\n        <input type='submit' name='sumbit' value='update' class=\"btn btn-primary\"/>\r\n      </div>\r\n      </div>\r\n      </form>\r\n    </div>\r\n  </div>\r\n</div>\r\n";
},"useData":true});
})();