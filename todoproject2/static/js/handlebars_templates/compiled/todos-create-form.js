(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['todos-create-form'] = template({"1":function(container,depth0,helpers,partials,data) {
    return "";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"container\">\r\n  <div class=\"row py-2\">\r\n    <div class=\"col\">\r\n      Create todo\r\n    </div>\r\n  </div>\r\n  <div class=\"row py-2\">\r\n    <div class=\"col\">\r\n      <form action='/todo/api/todos/create/' method='post' id=\"form\" data-model_url=\"todos/\" data-model=\"todos\">\r\n        <div classs=\"form-row\">\r\n        <input type='text' name='name' value='' class=\"form-control\"/>\r\n      </div>\r\n      <div class=\"form-row\">\r\n"
    + ((stack1 = (lookupProperty(helpers,"makeSelectBox")||(depth0 && lookupProperty(depth0,"makeSelectBox"))||alias2).call(alias1,"category","",(depth0 != null ? lookupProperty(depth0,"categories") : depth0),{"name":"makeSelectBox","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":14,"column":8},"end":{"line":15,"column":26}}})) != null ? stack1 : "")
    + "      </div>\r\n      <div class=\"form-row\">\r\n"
    + ((stack1 = (lookupProperty(helpers,"makeSelectBoxMultiple")||(depth0 && lookupProperty(depth0,"makeSelectBoxMultiple"))||alias2).call(alias1,"tags","",(depth0 != null ? lookupProperty(depth0,"tags") : depth0),{"name":"makeSelectBoxMultiple","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":18,"column":8},"end":{"line":19,"column":34}}})) != null ? stack1 : "")
    + "      </div>\r\n      <div class=\"row py-2\">\r\n        <div class=\"col\">\r\n        <input type='submit' name='sumbit' value='create' class=\"btn btn-primary\"/>\r\n      </div>\r\n      </div>\r\n      </form>\r\n    </div>\r\n  </div>\r\n</div>\r\n";
},"useData":true});
})();