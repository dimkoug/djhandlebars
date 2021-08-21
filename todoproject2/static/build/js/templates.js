this["app"] = this["app"] || {};
this["app"]["templates"] = this["app"]["templates"] || {};
this["app"]["templates"]["categories_create_form"] = Handlebars.template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div class=\"container\">\r\n<div class=\"row py-2\">\r\n  <div class=\"col\">\r\n    Create category\r\n  </div>\r\n</div>\r\n<div class=\"row py-2\">\r\n  <div class=\"col\">\r\n    <form action='/todo/api/categories/create/' method='post' id=\"form\" data-model_url=\"categories/\" data-model=\"categories\">\r\n      <div classs=\"form-row\">\r\n      <input type='text' name='name' value='' class=\"form-control\"/>\r\n    </div>\r\n    <div class=\"row py-2\">\r\n      <div class=\"col\">\r\n      <input type='submit' name='sumbit' value='create' class=\"btn btn-primary\"/>\r\n    </div>\r\n    </div>\r\n    </form>\r\n  </div>\r\n</div>\r\n</div>\r\n";
},"useData":true});
this["app"]["templates"]["categories_list"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
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

  return "<div class=\"container\">\r\n  <div class=\"row py-2\">\r\n    <div class=\"col\">\r\n      <button data-model=\"categories\" data-action=\"create_form\" class=\"create btn btn-primary float-right\">Add Category</button>\r\n    </div>\r\n  </div>\r\n  <div class=\"row py-2\">\r\n    <div class=\"col\">\r\n\r\n      <ul>\r\n"
    + ((stack1 = lookupProperty(helpers,"each").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"data") : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":11,"column":8},"end":{"line":17,"column":17}}})) != null ? stack1 : "")
    + "      </ul>\r\n    </div>\r\n</div>\r\n<div class=\"row py-2 paginator\"></div>\r\n</div>\r\n";
},"useData":true});
this["app"]["templates"]["categories_put"] = Handlebars.template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=container.escapeExpression, alias2=container.lambda, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"container\">\r\n  <div class=\"row py-2\">\r\n    <div class=\"col\">\r\n      Update category\r\n    </div>\r\n  </div>\r\n  <div class=\"row py-2\">\r\n    <div class=\"col\">\r\n      <form action='"
    + alias1(((helper = (helper = lookupProperty(helpers,"url") || (depth0 != null ? lookupProperty(depth0,"url") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"url","hash":{},"data":data,"loc":{"start":{"line":9,"column":20},"end":{"line":9,"column":27}}}) : helper)))
    + "' method='put' id=\"form\" data-model_url=\"categories/\" data-model=\"categories\">\r\n        <div classs=\"form-row\">\r\n        <input type='hidden' name='id' value='"
    + alias1(alias2(((stack1 = (depth0 != null ? lookupProperty(depth0,"item") : depth0)) != null ? lookupProperty(stack1,"id") : stack1), depth0))
    + "' class=\"form-control\"/>\r\n        <input type='text' name='name' value='"
    + alias1(alias2(((stack1 = (depth0 != null ? lookupProperty(depth0,"item") : depth0)) != null ? lookupProperty(stack1,"name") : stack1), depth0))
    + "' class=\"form-control\"/>\r\n      </div>\r\n      <div class=\"row py-2\">\r\n        <div class=\"col\">\r\n        <input type='submit' name='sumbit' value='update' class=\"btn btn-primary\"/>\r\n      </div>\r\n      </div>\r\n      </form>\r\n    </div>\r\n  </div>\r\n</div>\r\n";
},"useData":true});
this["app"]["templates"]["tags_create_form"] = Handlebars.template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div class=\"container\">\r\n<div class=\"row py-2\">\r\n  <div class=\"col\">\r\n    Create tag\r\n  </div>\r\n</div>\r\n<div class=\"row py-2\">\r\n  <div class=\"col\">\r\n    <form action='/todo/api/tags/create/' method='post' id=\"form\" data-model_url=\"tags/\" data-model=\"tags\">\r\n      <div classs=\"form-row\">\r\n      <input type='text' name='name' value='' class=\"form-control\"/>\r\n    </div>\r\n    <div class=\"row py-2\">\r\n      <div class=\"col\">\r\n      <input type='submit' name='sumbit' value='create' class=\"btn btn-primary\"/>\r\n    </div>\r\n    </div>\r\n    </form>\r\n  </div>\r\n</div>\r\n</div>\r\n";
},"useData":true});
this["app"]["templates"]["tags_list"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var alias1=container.lambda, alias2=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "        <li>\r\n          "
    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"name") : depth0), depth0))
    + "\r\n          <a href='#' data-model=\"tags\" data-url=\"tags/\"  data-action='delete' data-id='"
    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"id") : depth0), depth0))
    + "' class='delete btn btn-danger'>Delete</a>\r\n          <a href='#' data-model=\"tags\" data-url=\"tags/\" data-action='put' data-id='"
    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"id") : depth0), depth0))
    + "' class='update btn btn-warning'>Update</a>\r\n        </li>\r\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"container\">\r\n  <div class=\"row py-2\">\r\n    <div class=\"col\">\r\n      <button data-model=\"tags\" data-action=\"create_form\" class=\"create btn btn-primary float-right\">Add Tag</button>\r\n    </div>\r\n  </div>\r\n  <div class=\"row py-2\">\r\n    <div class=\"col\">\r\n      <ul>\r\n"
    + ((stack1 = lookupProperty(helpers,"each").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"data") : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":10,"column":8},"end":{"line":16,"column":17}}})) != null ? stack1 : "")
    + "      </ul>\r\n    </div>\r\n</div>\r\n<div class=\"row py-2 paginator\"></div>\r\n</div>\r\n";
},"useData":true});
this["app"]["templates"]["tags_put"] = Handlebars.template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
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
this["app"]["templates"]["todos_create_form"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
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
this["app"]["templates"]["todos_list"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
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

  return "<div class=\"container\">\r\n  <div class=\"row py-2\">\r\n    <div class=\"col\">\r\n      <button data-model=\"todos\" data-action=\"create_form\" class=\"create btn btn-primary float-right\">Add Todo</button>\r\n    </div>\r\n  </div>\r\n  <div class=\"row py-2\">\r\n    <div class=\"col\">\r\n      <ul>\r\n"
    + ((stack1 = lookupProperty(helpers,"each").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"data") : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":10,"column":8},"end":{"line":16,"column":17}}})) != null ? stack1 : "")
    + "      </ul>\r\n    </div>\r\n</div>\r\n<div class=\"row py-2 paginator\"></div>\r\n</div>\r\n";
},"useData":true});
this["app"]["templates"]["todos_put"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
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
this["app"]["templates"]["user_login"] = Handlebars.template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div class=\"container\">\r\n  <div class=\"row py-2\">\r\n    <form class=\"login\" action=\"/api-token-auth/\" method=\"post\" id=\"login\">\r\n      <input class=\"form-control\" name=\"username\" type=\"text\" placeholder=\"username\" aria-label=\"username\">\r\n      <input class=\"form-control\" name=\"password\" type=\"password\" placeholder=\"password\" aria-label=\"username\">\r\n      <button class=\"btn btn-primary\" type=\"submit\">Login</button>\r\n    </form>\r\n  </div>\r\n</div>\r\n";
},"useData":true});
this["app"]["templates"]["user_register"] = Handlebars.template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div class=\"container\">\r\n  <div class=\"row py-2\">\r\n    <div class=\"col\">\r\n      register user\r\n    </div>\r\n  </div>\r\n  <div class=\"row py-2\">\r\n    <div class=\"col\">\r\n      <form action='/todo/api/register/' method='post' id=\"register-form\">\r\n        <div classs=\"form-row\">\r\n          <label>Username</label>\r\n          <input type='text' name='username' value='' class=\"form-control\"/>\r\n        </div>\r\n        <div classs=\"form-row\">\r\n          <label>email</label>\r\n          <input type='text' name='email' value='' class=\"form-control\"/>\r\n        </div>\r\n        <div classs=\"form-row\">\r\n          <label>password</label>\r\n          <input type='password' name='password' value='' class=\"form-control\"/>\r\n        </div>\r\n        <div classs=\"form-row\">\r\n          <label>confirm password</label>\r\n          <input type='password' name='password1' value='' class=\"form-control\"/>\r\n        </div>\r\n        <div classs=\"form-row\">\r\n          <label>first name</label>\r\n          <input type='text' name='first_name' value='' class=\"form-control\"/>\r\n        </div>\r\n        <div classs=\"form-row\">\r\n          <label>last name</label>\r\n          <input type='text' name='last_name' value='' class=\"form-control\"/>\r\n        </div>\r\n        <div class=\"row py-2\">\r\n          <div class=\"col\">\r\n            <input type='submit' name='sumbit' value='register' class=\"btn btn-primary\"/>\r\n          </div>\r\n        </div>\r\n      </form>\r\n    </div>\r\n  </div>\r\n</div>\r\n";
},"useData":true});