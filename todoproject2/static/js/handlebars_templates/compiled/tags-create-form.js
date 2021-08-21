(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['tags-create-form'] = template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div class=\"container\">\r\n<div class=\"row py-2\">\r\n  <div class=\"col\">\r\n    Create tag\r\n  </div>\r\n</div>\r\n<div class=\"row py-2\">\r\n  <div class=\"col\">\r\n    <form action='/todo/api/tags/create/' method='post' id=\"form\" data-model_url=\"tags/\" data-model=\"tags\">\r\n      <div classs=\"form-row\">\r\n      <input type='text' name='name' value='' class=\"form-control\"/>\r\n    </div>\r\n    <div class=\"row py-2\">\r\n      <div class=\"col\">\r\n      <input type='submit' name='sumbit' value='create' class=\"btn btn-primary\"/>\r\n    </div>\r\n    </div>\r\n    </form>\r\n  </div>\r\n</div>\r\n</div>\r\n";
},"useData":true});
})();