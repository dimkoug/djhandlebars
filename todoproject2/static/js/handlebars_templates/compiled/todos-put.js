(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['todos-put'] = template({"1":function(container,depth0,helpers,partials,data) {
    return "";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3=container.escapeExpression, alias4=container.lambda, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"container\">\r\n  <div class=\"row py-2\">\r\n    <div class=\"col\">\r\n      Update todo\r\n    </div>\r\n  </div>\r\n  <div class=\"row py-2\">\r\n    <div class=\"col\">\r\n      <form action='"
    + alias3(((helper = (helper = lookupProperty(helpers,"url") || (depth0 != null ? lookupProperty(depth0,"url") : depth0)) != null ? helper : alias2),(typeof helper === "function" ? helper.call(alias1,{"name":"url","hash":{},"data":data,"loc":{"start":{"line":9,"column":20},"end":{"line":9,"column":27}}}) : helper)))
    + "' method='put' id=\"form\" data-model_url=\"todos/\" data-model=\"todos\">\r\n        <div classs=\"form-row\">\r\n        <input type='hidden' name='id' value='"
    + alias3(alias4(((stack1 = (depth0 != null ? lookupProperty(depth0,"item") : depth0)) != null ? lookupProperty(stack1,"id") : stack1), depth0))
    + "' class=\"form-control\"/>\r\n        <input type='text' name='name' value='"
    + alias3(alias4(((stack1 = (depth0 != null ? lookupProperty(depth0,"item") : depth0)) != null ? lookupProperty(stack1,"name") : stack1), depth0))
    + "' class=\"form-control\"/>\r\n      </div>\r\n      <div class=\"form-row\">\r\n"
    + ((stack1 = (lookupProperty(helpers,"makeSelectBox")||(depth0 && lookupProperty(depth0,"makeSelectBox"))||alias2).call(alias1,"category",((stack1 = (depth0 != null ? lookupProperty(depth0,"item") : depth0)) != null ? lookupProperty(stack1,"category") : stack1),(depth0 != null ? lookupProperty(depth0,"categories") : depth0),{"name":"makeSelectBox","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":15,"column":8},"end":{"line":16,"column":26}}})) != null ? stack1 : "")
    + "      </div>\r\n      <div class=\"form-row\">\r\n"
    + ((stack1 = (lookupProperty(helpers,"makeSelectBoxMultiple")||(depth0 && lookupProperty(depth0,"makeSelectBoxMultiple"))||alias2).call(alias1,"tags",((stack1 = (depth0 != null ? lookupProperty(depth0,"item") : depth0)) != null ? lookupProperty(stack1,"tags") : stack1),(depth0 != null ? lookupProperty(depth0,"tags") : depth0),{"name":"makeSelectBoxMultiple","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":19,"column":8},"end":{"line":20,"column":34}}})) != null ? stack1 : "")
    + "      </div>\r\n      <div class=\"row py-2\">\r\n        <div class=\"col\">\r\n        <input type='submit' name='sumbit' value='update' class=\"btn btn-primary\"/>\r\n      </div>\r\n      </div>\r\n      </form>\r\n    </div>\r\n  </div>\r\n</div>\r\n";
},"useData":true});
})();