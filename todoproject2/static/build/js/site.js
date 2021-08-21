(function(w,d,$){
  'use strict';
  $(document).ready(function(){
    var root_url = '/todo/api/';
    var page_size = 100;
    var model_data = {
      "categories": [],
      "todos": [],
      "tags": []
    };
    $('#logout').click(function() {
      localStorage.clear();
      window.location = '/'
    });
    var templates = {
      'user_login': app.templates.user_login,
      'user_register': app.templates.user_register,
      'tags_list': app.templates.tags_list,
      'tags_create_form': app.templates.tags_create_form,
      'tags_put': app.templates.tags_put,
      'categories_list': app.templates.categories_list,
      'categories_create_form': app.templates.categories_create_form,
      'categories_put': app.templates.categories_put,
      'todos_list': app.templates.todos_list,
      'todos_create_form': app.templates.todos_create_form,
      'todos_put': app.templates.todos_put
    };
    Handlebars.registerHelper("makeSelectBox", function(name, value, options){
      var items = options;
      var output = '<label for="'+name+'" class="form-label">'+name+'</label><select class="form-control" name="'+name +'">'
      for(var val in items){
        var id = parseInt(items[val].id);
        if(value != '' && parseInt(value) == id){
          output +='<option value="'+ id +'" selected>'+items[val].name +'</option>';
        }
        else{
          output +='<option value="'+ id +'">'+items[val].name +'</option>';
        }
      }
      output += '</select>'
      return output;
    });
    Handlebars.registerHelper("makeSelectBoxMultiple", function(name, value, options){
      var items = options;
      var output = '<label for="'+name+'" class="form-label">'+name+'</label><select class="form-control" name="'+name +'" multiple="multiple">'
      for(var val in items){
        var id = parseInt(items[val].id);
        var selected = false;
        for(var item in value){
            if(parseInt(value[item].id)==id){
              selected = true;
            }
        }
        if(selected==true){
          output +='<option value="'+ id +'" selected>'+items[val].name +'</option>';
        }
        else{
            output +='<option value="'+ id +'">'+items[val].name +'</option>';
        }
      }
      output += '</select>'
      return output;
    });
    $("body").on("click", "#categories, #todos, #tags", function(e){
      e.preventDefault();
      var url = root_url + $(this).data("url");
      var model = $(this).data("model");
      get_data(url,model);
      return false;
    });
    function delete_model(url,action, model_url, model){
      $.when($.ajax({
               url: url,
               method: action,
               datatype: 'json',
               headers:{"Authorization": "JWT " + localStorage.token}
      })).then(function( response, textStatus, jqXHR ) {
        get_data(model_url, model);
      })
    };
    function create_pagination(response){
        if(response.next != null){
          var url = response.next.split('/')[5];
          $(".paginator").append(`<div class='col-2'>
            <a href="${response.next}" data-model="${url}" data-action="list" class="page next">next</a>
            </div>`)
        }
        else{
          $('.next').hide();
        }
        if(response.previous != null){
          var url = response.previous.split('/')[5];
          $(".paginator").append(`<div class='col-2'>
            <a href="${response.previous}" data-model="${url}" data-action="list" class="page prev">previous</a>
            </div>`)
        }
        else{
          $('.prev').hide();
        }
      };
      function display_template($elem, template,data){
        $elem.html('');
        if ($.isArray(data)){
          var html = template({data});
        }
        else{
          var html = template(data);
        }
        $elem.html(html).show('slow');
      };
      $("body").on("click", '#register, .create, #login_url', function(e){
          e.preventDefault();
          var model = $(this).data("model");
          var action = $(this).data("action");
          var data = {};
          if(model == 'todos'){
            var categories_url = root_url + 'categories/?page_size='+ page_size;
            var category_model = 'categories';
            $.when(load_data(categories_url, category_model)).then(function(data, textStatus, jqXHR){
              var tags_url = root_url + 'tags/?page_size='+ page_size;
              var tag_model = 'tags';
              $.when(load_data(tags_url, tag_model)).then(function( data, textStatus, jqXHR ) {
                var data = {'categories':model_data['categories'], 'tags':model_data['tags']};
                var template = templates[model + "_"+ action];
                display_template($("#content"), template, data);
              });
            });
          }
          else{
            var template = templates[model + "_"+ action];
            display_template($("#content"), template, data);
          }
          return false;
        });
        $("body").on("click", '.page', function(e){
          e.preventDefault();
          var model = $(this).data("model");
          $("#content").html('');
          var token = localStorage.token;
          $.when($.ajax({
                   url: $(this).attr('href'),
                   method: 'get',
                   datatype: 'json',
                   headers:{"Authorization": "JWT " + localStorage.token}
          })).then(function( response, textStatus, jqXHR ) {
            var data = response.results;
            var action = 'list';
            var template = templates[model + "_"+ action];
            display_template($("#content"), template, data);
            create_pagination(response);
          });
          return false;
        });
        $("body").on("click", '.delete', function(e){
          e.preventDefault();
          var token = localStorage.token;
          $(this).fadeOut();
          var id = $(this).data("id");
          var action = $(this).data("action");
          var url = root_url + $(this).data("url") + id;
          var model_url = root_url + $(this).data("url");
          var model = $(this).data("model");
          delete_model(url,action,model_url,model)
          return false;
        })
        $("body").on("click", '.update', function(e){
          e.preventDefault();
          var id = $(this).data("id");
          var model = $(this).data("model");
          var action = $(this).data("action");
          var url = $(this).data("url");
          $.when($.ajax({
                   url: root_url + url + id,
                   method: 'get',
                   datatype: 'json',
                   headers:{"Authorization": "JWT " + localStorage.token}
          })).then(function(response, textStatus, jqXHR ) {
            var item = response;
            var update_url = root_url + url + item.id + '/'
            var data = {url:update_url, item:item};
            if(model == 'todos'){
              var categories_url = root_url + 'categories/?page_size='+ page_size;
              var category_model = 'categories';
              $.when(load_data(categories_url, category_model)).then(function(data, textStatus, jqXHR){
                var tags_url = root_url + 'tags/?page_size='+ page_size;
                var tag_model = 'tags';
                $.when(load_data(tags_url, tag_model)).then(function(data, textStatus, jqXHR ) {
                  var data = {url:update_url,
                              item:item,
                              'categories':model_data['categories'],
                              'tags':model_data['tags']};
                  var template = templates[model + "_"+ action];
                  display_template($("#content"), template, data);
                });
              });
            }
            else{
              var template = templates[model + "_"+ action];
              display_template($("#content"), template, data);
            }
          });
          return false;
      });
      function load_data(url, model){
        if(localStorage.token){
          return $.when($.ajax({
                   url: url,
                   method: 'GET',
                   datatype: 'json',
                   headers:{"Authorization": "JWT " + localStorage.token},
          })).then(function( response, textStatus, jqXHR ) {
            var data = response.results;
            model_data[model] = data;
          });
        };
    };
    function get_data(url, model){
      if(localStorage.token){
        $("#content").html('');
        $.when($.ajax({
                   url: url,
                   method: 'GET',
                   datatype: 'json',
                   headers:{"Authorization": "JWT " + localStorage.token},
          })).then(function(response, textStatus, jqXHR) {
            var data = response.results;
            model_data[model] = data;
            var action = 'list';
            var template = templates[model + "_"+ action];
            display_template($("#content"),template,model_data[model]);
            create_pagination(response);
          })
        }
        else{
            $("#content").html('Login');
        }
    };
    function logged_in(){
      if(localStorage.token){
        $('.logout').show();
        $("#login").hide();
        $(".login_url").hide();
        $(".register").hide();
      }
      else{
        $('.logout').hide();
        $("#login").show();
        $(".register").show();
        $(".login_url").show();
      }
    };
    logged_in();
    $("body").on("submit", "#login",function(e){
      e.preventDefault();
      var formData = $(this).serialize();
      $.ajax({
               url: $(this).attr("action"),
               method: $(this).attr("method"),
               data: formData,
               headers: { 'X-CSRFToken': csrftoken },
               datatype: 'json',
               success: function(data){
                 if(data.token != 'undefined'){
                   localStorage.token = data.token;
                   logged_in();
                   var url = root_url + 'todos/';
                   get_data(url, 'todos');
                 }
               }
      });
      return false;
    });
    var url = root_url + 'todos/';
    get_data(url, 'todos');
    $("body").on("submit", "#form",function(e){
      e.preventDefault();
      var url = $(this).data('model_url');
      var model = $(this).data('model');
      var formData = $(this).serialize();
      var token = localStorage.token;
      var headers = {
          'X-CSRFToken': csrftoken,
          'Authorization': "JWT " + token
      };
      $.when($.ajax({
               url: $(this).attr("action"),
               method: $(this).attr("method"),
               data: formData,
               headers: headers,
               datatype: 'json'
      })).then(function( response, textStatus, jqXHR ) {
        var data = response;
        $("#form")[0].reset();
        var url = root_url + model + '/';
        get_data(url, model);
      }).catch(function(err){
        alert(JSON.stringify(err.responseText));
      });
  });
}); // document ready
})(window,document, jQuery);
