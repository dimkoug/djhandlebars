this["app"] = this["app"] || {};
this["app"]["templates"] = this["app"]["templates"] || {};
this["app"]["templates"]["category_form"] = Handlebars.template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, alias5=container.lambda, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "        <div class=\"card\">\r\n            <div class=\"card-body\">\r\n                <h5 class=\"card-title\">Categories Add</h5>\r\n                <div class=\"row\">  \r\n                    <form action=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"url") || (depth0 != null ? lookupProperty(depth0,"url") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"url","hash":{},"data":data,"loc":{"start":{"line":5,"column":34},"end":{"line":5,"column":41}}}) : helper)))
    + "\" method=\""
    + alias4(alias5(((stack1 = (depth0 != null ? lookupProperty(depth0,"data") : depth0)) != null ? lookupProperty(stack1,"method") : stack1), depth0))
    + "\" id=\"form\" data-model=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"model") || (depth0 != null ? lookupProperty(depth0,"model") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"model","hash":{},"data":data,"loc":{"start":{"line":5,"column":90},"end":{"line":5,"column":99}}}) : helper)))
    + "\"  data-collection=\""
    + alias4(alias5(((stack1 = (depth0 != null ? lookupProperty(depth0,"data") : depth0)) != null ? lookupProperty(stack1,"collection") : stack1), depth0))
    + "\">\r\n                        <input type=\"hidden\" id=\"id\" value=\""
    + alias4(alias5(((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"data") : depth0)) != null ? lookupProperty(stack1,"obj") : stack1)) != null ? lookupProperty(stack1,"id") : stack1), depth0))
    + "\" name='id'>\r\n                        <div class=\"mb-3\"><input type=\"text\" class=\"form-control\" id=\"id_name\" value=\""
    + alias4(alias5(((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"data") : depth0)) != null ? lookupProperty(stack1,"obj") : stack1)) != null ? lookupProperty(stack1,"name") : stack1), depth0))
    + "\" name='name' placeholder=\"name\"></div>\r\n                        <div class=\"d-grid gap-2 d-md-flex justify-content-md-end\">\r\n                            <button type=\"submit\" class=\"btn btn-primary\">Save</button>\r\n                        </div>\r\n                    </form>\r\n                </div>\r\n            </div>\r\n        </div>";
},"useData":true});
this["app"]["templates"]["category_list"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var alias1=container.lambda, alias2=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                                    <tr>\r\n                                        <td>"
    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"id") : depth0), depth0))
    + "</td>\r\n                                        <td>"
    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"name") : depth0), depth0))
    + "</td>\r\n\r\n                                        <td>\r\n                                            <a href=\""
    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"url") : depth0), depth0))
    + "\" data-model=\"category\" data-action='form' data-collection='/api/categories/' data-method=\"put\" class='update'><i class=\"bi bi-pencil-square text-warning\"></i></a>\r\n                                            <a href=\""
    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"url") : depth0), depth0))
    + "\" data-confirm=\"Delete "
    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"name") : depth0), depth0))
    + "; \" data-model=\"category\" data-action='delete'  data-collection='/api/categories/' data-method='delete' class='delete'><i class=\"bi bi-x text-danger\"></i></a>\r\n                                        \r\n                                        </td>\r\n                                        \r\n                                    </tr>\r\n";
},"3":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                            <div class=\"d-grid gap-2 d-md-flex justify-content-md-start\">\r\n                                <a href=\""
    + alias1(container.lambda(((stack1 = (depth0 != null ? lookupProperty(depth0,"data") : depth0)) != null ? lookupProperty(stack1,"previous") : stack1), depth0))
    + "\" data-model=\""
    + alias1(((helper = (helper = lookupProperty(helpers,"model") || (depth0 != null ? lookupProperty(depth0,"model") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"model","hash":{},"data":data,"loc":{"start":{"line":43,"column":72},"end":{"line":43,"column":81}}}) : helper)))
    + "\" class='api-link' data-action='list' data-method='get'>Previous</a>\r\n                            </div>\r\n";
},"5":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                            <div class=\"d-grid gap-2 d-md-flex justify-content-md-end\">\r\n                                <a href=\""
    + alias1(container.lambda(((stack1 = (depth0 != null ? lookupProperty(depth0,"data") : depth0)) != null ? lookupProperty(stack1,"next") : stack1), depth0))
    + "\" data-model=\""
    + alias1(((helper = (helper = lookupProperty(helpers,"model") || (depth0 != null ? lookupProperty(depth0,"model") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"model","hash":{},"data":data,"loc":{"start":{"line":50,"column":68},"end":{"line":50,"column":77}}}) : helper)))
    + "\" class='api-link' data-action='list' data-method='get'>Next</a>\r\n                            </div>\r\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "        <div class=\"card\">\r\n            <div class=\"card-body\">\r\n                <h5 class=\"card-title\">Categories</h5>\r\n                <div class=\"row py-2\">\r\n                    <div class=\"col\">\r\n                        <div class=\"d-grid gap-2 d-md-flex justify-content-md-end\">\r\n                            <a href=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"url") || (depth0 != null ? lookupProperty(depth0,"url") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"url","hash":{},"data":data,"loc":{"start":{"line":7,"column":37},"end":{"line":7,"column":44}}}) : helper)))
    + "\" data-model=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"model") || (depth0 != null ? lookupProperty(depth0,"model") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"model","hash":{},"data":data,"loc":{"start":{"line":7,"column":58},"end":{"line":7,"column":67}}}) : helper)))
    + "\" class='create-link btn btn-primary' data-action='form' data-method='post'>Add</a>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"row\">\r\n                    <div class=\"col-12\">\r\n                        <table class=\"table table-bordered\">\r\n                            <thead>\r\n                                <tr>\r\n                                    <th>Id</th>\r\n                                    <th>Name</th>\r\n                                    <th></th>\r\n                                </tr>\r\n                            </thead>\r\n                            <tbody>\r\n"
    + ((stack1 = lookupProperty(helpers,"each").call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"data") : depth0)) != null ? lookupProperty(stack1,"results") : stack1),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":22,"column":32},"end":{"line":34,"column":41}}})) != null ? stack1 : "")
    + "                            </tbody>\r\n                        </table>\r\n                    </div>\r\n                </div>\r\n                <div class=\"row\">\r\n                    <div class=\"col-6\">\r\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"data") : depth0)) != null ? lookupProperty(stack1,"previous") : stack1),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":41,"column":24},"end":{"line":45,"column":31}}})) != null ? stack1 : "")
    + "                    </div>\r\n                    <div class=\"col-6\">\r\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"data") : depth0)) != null ? lookupProperty(stack1,"next") : stack1),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":48,"column":24},"end":{"line":52,"column":31}}})) != null ? stack1 : "")
    + "                    </div>\r\n                </div>\r\n            </div>\r\n        </div>";
},"useData":true});
this["app"]["templates"]["tag_form"] = Handlebars.template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, alias5=container.lambda, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "        <div class=\"card\">\r\n            <div class=\"card-body\">\r\n                <h5 class=\"card-title\">Tag Add</h5>\r\n                <div class=\"row\">  \r\n                    <form action=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"url") || (depth0 != null ? lookupProperty(depth0,"url") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"url","hash":{},"data":data,"loc":{"start":{"line":5,"column":34},"end":{"line":5,"column":41}}}) : helper)))
    + "\" method=\""
    + alias4(alias5(((stack1 = (depth0 != null ? lookupProperty(depth0,"data") : depth0)) != null ? lookupProperty(stack1,"method") : stack1), depth0))
    + "\" id=\"form\" data-model=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"model") || (depth0 != null ? lookupProperty(depth0,"model") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"model","hash":{},"data":data,"loc":{"start":{"line":5,"column":90},"end":{"line":5,"column":99}}}) : helper)))
    + "\"  data-collection=\""
    + alias4(alias5(((stack1 = (depth0 != null ? lookupProperty(depth0,"data") : depth0)) != null ? lookupProperty(stack1,"collection") : stack1), depth0))
    + "\">\r\n                        <input type=\"hidden\" id=\"id\" value=\""
    + alias4(alias5(((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"data") : depth0)) != null ? lookupProperty(stack1,"obj") : stack1)) != null ? lookupProperty(stack1,"id") : stack1), depth0))
    + "\" name='id'>\r\n                        <div class=\"mb-3\"><input type=\"text\" class=\"form-control\" id=\"id_name\" value=\""
    + alias4(alias5(((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"data") : depth0)) != null ? lookupProperty(stack1,"obj") : stack1)) != null ? lookupProperty(stack1,"name") : stack1), depth0))
    + "\" name='name' placeholder=\"name\"></div>\r\n                        <div class=\"d-grid gap-2 d-md-flex justify-content-md-end\">\r\n                            <button type=\"submit\" class=\"btn btn-primary\">Save</button>\r\n                        </div>\r\n                    </form>\r\n                </div>\r\n\r\n            </div>\r\n        </div>";
},"useData":true});
this["app"]["templates"]["tag_list"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var alias1=container.lambda, alias2=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                                    <tr>\r\n                                        <td>"
    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"id") : depth0), depth0))
    + "</td>\r\n                                        <td>"
    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"name") : depth0), depth0))
    + "</td>\r\n                                        <td>\r\n                                            <a href=\""
    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"url") : depth0), depth0))
    + "\" data-model=\"tag\" data-action='form' data-collection='/api/tags/' data-method=\"put\" class='update'><i class=\"bi bi-pencil-square text-warning\"></i></a>\r\n                                            <a href=\""
    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"url") : depth0), depth0))
    + "\" data-confirm=\"Delete "
    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"name") : depth0), depth0))
    + "; \" data-model=\"tag\" data-action='delete'  data-collection='/api/tags/' data-method='delete' class='delete'><i class=\"bi bi-x text-danger\"></i></a>\r\n                                        \r\n                                        </td>\r\n                                        \r\n                                    </tr>\r\n";
},"3":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                            <div class=\"d-grid gap-2 d-md-flex justify-content-md-start\">\r\n                                <a href=\""
    + alias1(container.lambda(((stack1 = (depth0 != null ? lookupProperty(depth0,"data") : depth0)) != null ? lookupProperty(stack1,"previous") : stack1), depth0))
    + "\" data-model=\""
    + alias1(((helper = (helper = lookupProperty(helpers,"model") || (depth0 != null ? lookupProperty(depth0,"model") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"model","hash":{},"data":data,"loc":{"start":{"line":42,"column":72},"end":{"line":42,"column":81}}}) : helper)))
    + "\" class='api-link' data-action='list' data-method='get'>Previous</a>\r\n                            </div>\r\n";
},"5":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                            <div class=\"d-grid gap-2 d-md-flex justify-content-md-end\">\r\n                                <a href=\""
    + alias1(container.lambda(((stack1 = (depth0 != null ? lookupProperty(depth0,"data") : depth0)) != null ? lookupProperty(stack1,"next") : stack1), depth0))
    + "\" data-model=\""
    + alias1(((helper = (helper = lookupProperty(helpers,"model") || (depth0 != null ? lookupProperty(depth0,"model") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"model","hash":{},"data":data,"loc":{"start":{"line":49,"column":68},"end":{"line":49,"column":77}}}) : helper)))
    + "\" class='api-link' data-action='list' data-method='get'>Next</a>\r\n                            </div>\r\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "        <div class=\"card\">\r\n            <div class=\"card-body\">\r\n                <h5 class=\"card-title\">Tags</h5>\r\n                <div class=\"row py-2\">\r\n                    <div class=\"col\">\r\n                        <div class=\"d-grid gap-2 d-md-flex justify-content-md-end\">\r\n                            <a href=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"url") || (depth0 != null ? lookupProperty(depth0,"url") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"url","hash":{},"data":data,"loc":{"start":{"line":7,"column":37},"end":{"line":7,"column":44}}}) : helper)))
    + "\" data-model=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"model") || (depth0 != null ? lookupProperty(depth0,"model") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"model","hash":{},"data":data,"loc":{"start":{"line":7,"column":58},"end":{"line":7,"column":67}}}) : helper)))
    + "\" class='create-link btn btn-primary' data-action='form' data-method='post'>Add</a>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"row\">\r\n                    <div class=\"col-12\">\r\n                        <table class=\"table table-bordered\">\r\n                            <thead>\r\n                                <tr>\r\n                                    <th>Id</th>\r\n                                    <th>Name</th>\r\n                                    <th></th>\r\n                                </tr>\r\n                            </thead>\r\n                            <tbody>\r\n"
    + ((stack1 = lookupProperty(helpers,"each").call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"data") : depth0)) != null ? lookupProperty(stack1,"results") : stack1),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":22,"column":32},"end":{"line":33,"column":41}}})) != null ? stack1 : "")
    + "                            </tbody>\r\n                        </table>\r\n                    </div>\r\n                </div>\r\n                <div class=\"row\">\r\n                    <div class=\"col-6\">\r\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"data") : depth0)) != null ? lookupProperty(stack1,"previous") : stack1),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":40,"column":24},"end":{"line":44,"column":31}}})) != null ? stack1 : "")
    + "                    </div>\r\n                    <div class=\"col-6\">\r\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"data") : depth0)) != null ? lookupProperty(stack1,"next") : stack1),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":47,"column":24},"end":{"line":51,"column":31}}})) != null ? stack1 : "")
    + "                    </div>\r\n                </div>\r\n            </div>\r\n        </div>";
},"useData":true});
this["app"]["templates"]["todo_form"] = Handlebars.template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, alias5=container.lambda, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "        <div class=\"card\">\r\n            <div class=\"card-body\">\r\n                <h5 class=\"card-title\">Todo Add</h5>\r\n                <div class=\"row\">  \r\n                    <form action=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"url") || (depth0 != null ? lookupProperty(depth0,"url") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"url","hash":{},"data":data,"loc":{"start":{"line":5,"column":34},"end":{"line":5,"column":41}}}) : helper)))
    + "\" method=\""
    + alias4(alias5(((stack1 = (depth0 != null ? lookupProperty(depth0,"data") : depth0)) != null ? lookupProperty(stack1,"method") : stack1), depth0))
    + "\" id=\"form\" data-model=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"model") || (depth0 != null ? lookupProperty(depth0,"model") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"model","hash":{},"data":data,"loc":{"start":{"line":5,"column":90},"end":{"line":5,"column":99}}}) : helper)))
    + "\"  data-collection=\""
    + alias4(alias5(((stack1 = (depth0 != null ? lookupProperty(depth0,"data") : depth0)) != null ? lookupProperty(stack1,"collection") : stack1), depth0))
    + "\">\r\n                        <input type=\"hidden\" id=\"id\" value=\""
    + alias4(alias5(((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"data") : depth0)) != null ? lookupProperty(stack1,"obj") : stack1)) != null ? lookupProperty(stack1,"id") : stack1), depth0))
    + "\" name='id'>\r\n                        <div class=\"mb-3\">\r\n                            <label for=\"id_category\" class=\"form-label\">Category</label>\r\n                            <select class=\"form-control\" name=\"category\" id=\"id_category\" data-url='/categories/' data-selected="
    + alias4(alias5(((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"data") : depth0)) != null ? lookupProperty(stack1,"obj") : stack1)) != null ? lookupProperty(stack1,"category") : stack1), depth0))
    + ">\r\n                                <option value=\"volvo\">Volvo</option>\r\n                                <option value=\"saab\">Saab</option>\r\n                                <option value=\"opel\">Opel</option>\r\n                                <option value=\"audi\">Audi</option>\r\n                            </select>\r\n                        </div>\r\n                        <div class=\"mb-3\">\r\n                            <input class=\"form-control\" type=\"text\" id=\"id_name\" value=\""
    + alias4(alias5(((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"data") : depth0)) != null ? lookupProperty(stack1,"obj") : stack1)) != null ? lookupProperty(stack1,"name") : stack1), depth0))
    + "\" name='name' placeholder=\"name\">\r\n                        </div>\r\n                        <div class=\"mb-3\">\r\n                            <label for=\"id_tags\" class=\"form-label\">Tags</label>\r\n                            <select class=\"form-control\" name=\"tags\" id=\"id_tags\"  data-url='/tags/' multiple data-selected='"
    + alias4(alias5(((stack1 = (depth0 != null ? lookupProperty(depth0,"data") : depth0)) != null ? lookupProperty(stack1,"tags") : stack1), depth0))
    + "'>\r\n                                <option value=\"volvo\">Volvo</option>\r\n                                <option value=\"saab\">Saab</option>\r\n                                <option value=\"opel\">Opel</option>\r\n                                <option value=\"audi\">Audi</option>\r\n                            </select>\r\n                        </div>\r\n                       <div class=\"d-grid gap-2 d-md-flex justify-content-md-end\">\r\n                            <button type=\"submit\" class=\"btn btn-primary\">Save</button>\r\n                        </div>\r\n                    </form>\r\n                </div>\r\n            </div>\r\n        </div>";
},"useData":true});
this["app"]["templates"]["todo_list"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                                    <tr>\r\n                                        <td>"
    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"id") : depth0), depth0))
    + "</td>\r\n                                        <td>"
    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"category_name") : depth0), depth0))
    + "</td>\r\n                                        <td>"
    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"name") : depth0), depth0))
    + "</td>\r\n                                        <td>\r\n                                            <ul>\r\n"
    + ((stack1 = lookupProperty(helpers,"each").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"tags") : depth0),{"name":"each","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":31,"column":44},"end":{"line":34,"column":53}}})) != null ? stack1 : "")
    + "                                            </ul>\r\n\r\n\r\n\r\n\r\n                                        </td>\r\n                                        <td>\r\n                                            <a href=\""
    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"url") : depth0), depth0))
    + "\" data-model=\"todo\" data-action='form' data-collection='/api/todos/' data-method=\"put\" class='update'><i class=\"bi bi-pencil-square text-warning\"></i></a>\r\n                                            <a href=\""
    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"url") : depth0), depth0))
    + "\" data-confirm=\"Delete "
    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"name") : depth0), depth0))
    + "; \" data-model=\"todo\" data-action='delete'  data-collection='/api/todos/' data-method='delete' class='delete'><i class=\"bi bi-x text-danger\"></i></a>\r\n                                        \r\n                                        </td>\r\n                                        \r\n                                    </tr>\r\n";
},"2":function(container,depth0,helpers,partials,data) {
    var lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                                            \r\n                                                <li>"
    + container.escapeExpression(container.lambda((depth0 != null ? lookupProperty(depth0,"name") : depth0), depth0))
    + "</li>\r\n";
},"4":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                            <div class=\"d-grid gap-2 d-md-flex justify-content-md-start\">\r\n                                <a href=\""
    + alias1(container.lambda(((stack1 = (depth0 != null ? lookupProperty(depth0,"data") : depth0)) != null ? lookupProperty(stack1,"previous") : stack1), depth0))
    + "\" data-model=\""
    + alias1(((helper = (helper = lookupProperty(helpers,"model") || (depth0 != null ? lookupProperty(depth0,"model") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"model","hash":{},"data":data,"loc":{"start":{"line":57,"column":72},"end":{"line":57,"column":81}}}) : helper)))
    + "\" class='api-link' data-action='list' data-method='get'>Previous</a>\r\n                            </div>\r\n";
},"6":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                            <div class=\"d-grid gap-2 d-md-flex justify-content-md-end\">\r\n                                <a href=\""
    + alias1(container.lambda(((stack1 = (depth0 != null ? lookupProperty(depth0,"data") : depth0)) != null ? lookupProperty(stack1,"next") : stack1), depth0))
    + "\" data-model=\""
    + alias1(((helper = (helper = lookupProperty(helpers,"model") || (depth0 != null ? lookupProperty(depth0,"model") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"model","hash":{},"data":data,"loc":{"start":{"line":64,"column":68},"end":{"line":64,"column":77}}}) : helper)))
    + "\" class='api-link' data-action='list' data-method='get'>Next</a>\r\n                            </div>\r\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "        <div class=\"card\">\r\n            <div class=\"card-body\">\r\n                <h5 class=\"card-title\">Todos</h5>\r\n                <div class=\"row py-2\">\r\n                    <div class=\"col\">\r\n                        <div class=\"d-grid gap-2 d-md-flex justify-content-md-end\">\r\n                            <a href=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"url") || (depth0 != null ? lookupProperty(depth0,"url") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"url","hash":{},"data":data,"loc":{"start":{"line":7,"column":37},"end":{"line":7,"column":44}}}) : helper)))
    + "\" data-model=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"model") || (depth0 != null ? lookupProperty(depth0,"model") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"model","hash":{},"data":data,"loc":{"start":{"line":7,"column":58},"end":{"line":7,"column":67}}}) : helper)))
    + "\" class='create-link btn btn-primary' data-action='form' data-method='post'>Add</a>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"row\">\r\n                    <div class=\"col-12\">\r\n                        <table class=\"table table-bordered\">\r\n                            <thead>\r\n                                <tr>\r\n                                    <th>Id</th>\r\n                                    <th>Category</th>\r\n                                    <th>Name</th>\r\n                                    <th>Tags</th>\r\n                                    <th></th>\r\n                                </tr>\r\n                            </thead>\r\n                            <tbody>\r\n"
    + ((stack1 = lookupProperty(helpers,"each").call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"data") : depth0)) != null ? lookupProperty(stack1,"results") : stack1),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":24,"column":32},"end":{"line":48,"column":41}}})) != null ? stack1 : "")
    + "                            </tbody>\r\n                        </table>\r\n                    </div>\r\n                </div>\r\n                <div class=\"row\">\r\n                    <div class=\"col-6\">\r\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"data") : depth0)) != null ? lookupProperty(stack1,"previous") : stack1),{"name":"if","hash":{},"fn":container.program(4, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":55,"column":24},"end":{"line":59,"column":31}}})) != null ? stack1 : "")
    + "                    </div>\r\n                    <div class=\"col-6\">\r\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"data") : depth0)) != null ? lookupProperty(stack1,"next") : stack1),{"name":"if","hash":{},"fn":container.program(6, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":62,"column":24},"end":{"line":66,"column":31}}})) != null ? stack1 : "")
    + "                    </div>\r\n                </div>\r\n            </div>\r\n        </div>";
},"useData":true});
this["app"]["templates"]["user_login"] = Handlebars.template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div class=\"container\">\r\n  <div class=\"row py-2\">\r\n    <form class=\"login\" data-model=\"user\" action=\"/api/token/\" method=\"post\" id=\"form\">\r\n    <div class=\"mb-3\"><input class=\"form-control py-2 gy-2\" name=\"username\" id=\"id_username\" type=\"text\" placeholder=\"username\" aria-label=\"username\"></div>\r\n      <div class=\"mb-3\"><input class=\"form-control py-2 gy-2\" name=\"password\" id=\"id_password\" type=\"password\" placeholder=\"password\" aria-label=\"username\"></div>\r\n      <div class=\"d-grid gap-2 d-md-flex justify-content-md-end\">\r\n          <button class=\"btn btn-primary\" type=\"submit\">Login</button>\r\n      </div>\r\n      \r\n    </form>\r\n  </div>\r\n</div>";
},"useData":true});
this["app"]["templates"]["user_register"] = Handlebars.template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div class=\"container\">\r\n  <div class=\"row py-2\">\r\n    <div class=\"col\">\r\n      register user\r\n    </div>\r\n  </div>\r\n  <div class=\"row py-2\">\r\n    <div class=\"col\">\r\n      <form class=\"register\" action='/api/register/' data-model=\"user\" data-method=\"post\" method='post' id=\"form\">\r\n        <div classs=\"form-row\">\r\n          <label>Username</label>\r\n          <input type='text' name='username' value='' id=\"id_username\" class=\"form-control\"/>\r\n        </div>\r\n        <div classs=\"form-row\">\r\n          <label>email</label>\r\n          <input type='text' name='email' value='' id=\"id_email\" class=\"form-control\"/>\r\n        </div>\r\n        <div classs=\"form-row\">\r\n          <label>password</label>\r\n          <input type='password' name='password' value='' id=\"id_password\" class=\"form-control\"/>\r\n        </div>\r\n        <div classs=\"form-row\">\r\n          <label>confirm password</label>\r\n          <input type='password' name='password2' value='' id=\"id_password2\" class=\"form-control\"/>\r\n        </div>\r\n        <div classs=\"form-row\">\r\n          <label>first name</label>\r\n          <input type='text' name='first_name' value='' id=\"id_first_name\" class=\"form-control\"/>\r\n        </div>\r\n        <div classs=\"form-row\">\r\n          <label>last name</label>\r\n          <input type='text' name='last_name' value='' id=\"id_last_name\" class=\"form-control\"/>\r\n        </div>\r\n        <div class=\"row py-2\">\r\n          <div class=\"col\">\r\n            <input type='submit' name='sumbit' value='register' class=\"btn btn-primary\"/>\r\n          </div>\r\n        </div>\r\n      </form>\r\n    </div>\r\n  </div>\r\n</div>";
},"useData":true});