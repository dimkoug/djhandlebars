function getCookie(name) {
    var cookieValue = null;
    if (document.cookie && document.cookie !== '') {
        var cookies = document.cookie.split(';');
        for (var i = 0; i < cookies.length; i++) {
            var cookie = jQuery.trim(cookies[i]);
            // Does this cookie string begin with the name we want?
            if (cookie.substring(0, name.length + 1) === (name + '=')) {
                cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                break;
            }
        }
    }
    return cookieValue;
}
var csrftoken = getCookie('csrftoken');

function csrfSafeMethod(method) {
    // these HTTP methods do not require CSRF protection
    return (/^(GET|HEAD|OPTIONS|TRACE)$/.test(method));
}
$.ajaxSetup({
    beforeSend: function(xhr, settings) {
        if (!csrfSafeMethod(settings.type) && !this.crossDomain) {
            xhr.setRequestHeader("X-CSRFToken", csrftoken);
        }
    }
});

'use strict';

let data = null;
const BASE_URL = '/api/';

const get_data = async function(url) {
    await $.when($.ajax({
        url: url,
        method: 'get',
        datatype: 'json',
        headers:{"Authorization": "JWT " + localStorage.token}
      })).then(function( response, textStatus, jqXHR ) {
        data = response;

    }).catch(function(err){
        $.each(err.responseJSON, function(index, value){
            console.info(index, value);
            $('#id_'+ index).addClass('is-invalid');
            $('#id_'+ index).after("<div class='invalid-feedback'>" + value + "</div>");
        });
    })
};

async function generate_template(model,action,data,url){
    let template = null;
    let finalTemplate = null;
    if(localStorage.token){
        template = templates[model + "_"+ action];
        finalTemplate = template({data:data,model:model,url:url});
    }
    else {
        model = 'user'
        if(action === 'register'){
            template = templates[model + "_" + action];
        }
        else{
            template = templates[model + "_login"];
        }
        
        finalTemplate = template({model:model});
    }

    $('#content').html(finalTemplate).show('slow');
    if(model !== 'user'){
        await populate_selectbox();
    }
    
};

function logged_in(){
    if(localStorage.token){
      $('.logout').show();
      $(".login").hide();
      $(".login_url").hide();
      $(".register").hide();
    }
    else{
      $('.logout').hide();
      $(".login").show();
      $(".register").show();
      $(".login_url").show();
    }
  };







$(document)
  .ajaxStart(function() { $('.spinner-border').show(); })
  .ajaxStop(function() { $('.spinner-border').hide(); })



const templates = {
    'user_login': app.templates.user_login,
    'user_register': app.templates.user_register,
    'tag_list': app.templates.tag_list,
    'tag_form': app.templates.tag_form,
    'category_list': app.templates.category_list,
    'category_form': app.templates.category_form,
    'todo_list': app.templates.todo_list,
    'todo_form': app.templates.todo_form,
};

async function populate_selectbox(){
    $('select').each(async function(){
        let data = null;
        let url = $(this).data('url');
        let selected = $(this).data('selected');
        console.info(typeof(selected))
        if(typeof(selected) === 'string'){
            selected = selected.split(',')


        }
        else {
            selected = [selected];
        }
        console.info(selected)
        await $.ajax({
            url: url,
            method: 'get',
            datatype: 'json',
            headers:{"Authorization": "JWT " + localStorage.token}
          }).then(function( response, textStatus, jqXHR ) {
            data = response.results;
    
        }).catch(function(err){
            $.each(err.responseJSON, function(index, value){
                console.info(index, value);
                $('#id_'+ index).addClass('is-invalid');
                $('#id_'+ index).after("<div class='invalid-feedback'>" + value + "</div>");
            });
        })
        $(this).html('');
        let d = '<option value>---------</option>';
        if(data && data.length !==0 ){
            
            for (var i=0 ; i < data.length ; i++ ) {
                let selected_item = ''
                for (let z=0; z < selected.length;z++){
                    if(parseInt(selected[z]) === parseInt(data[i]['id'])){
                        selected_item = 'selected'
                    }
                }

              d += `<option value="${parseInt(data[i]['id'])}" ${selected_item}>${data[i]['text']}</option>`;
            }
        }
        else {
                d = '<option value>---------</option>';
            }
        $(this).html(d);
        $(this).select2();
        
        
      });


};


(function(w,d,$){
$(d).ready(function(){
    logged_in();
        
    $('.spinner-border').hide();
    $('body').on('click', '#logout',function(e) {
        e.preventDefault();
        localStorage.clear();
        window.location = '/';
        console.info('log out');
        logged_in();
    });

})



})(window,document,jQuery)



'use strict';


(function(w,d,$){
    $(d).ready(function(){
        $('body').on('click', '.create-link', async function(e){
            e.preventDefault();
            let link = $(this).attr('href');
            let cls = $(this).attr('class')
            let model = $(this).data('model');
            let action = $(this).data('action');
            let method = $(this).data('method');
            let response = {url:link,model:model,method:method,collection:link};
            await generate_template(model,action,response,link);
            return false;
        })
    })
})(window,document,jQuery)



'use strict';

(function(w,d,$){
    $(d).ready(function(){
        $('body').on('submit', '#form',async function(e){
            let link = $(this).attr('action');
            let error = false;
            $('body').removeClass('is-invalid');
            $('body').find('.invalid-feedback').remove();
            let klass = $(this).attr('class');
            let model = $(this).data('model');
            let method = $(this).attr("method");
            let collection = $(this).data("collection");
            let full_link = BASE_URL + link;
            e.preventDefault();
            console.info(localStorage.token);
            if(localStorage.token !== null && model !== 'user'){
                console.info(model);
                await $.when($.ajax({
                    url: link,
                    data: $(this).serialize(),
                    type:  method,
                    headers:{"Authorization": "JWT " + localStorage.token},
                    statusCode: {
                        400: function() {
                          error=true;
                        }
                      }
                    
                  })).then(function( response, textStatus, jqXHR ) {
                    console.info(response);
                
                }).catch(function(err){
                    error = true;
                    $.each(err.responseJSON, function(index, value){
                        console.info(index, value);
                        
                        $('#id_'+ index).addClass('is-invalid');
                        $('#id_'+ index).after("<div class='invalid-feedback'>" + value + "</div>");
                    });
                })

            }
            if(model === 'user'){
                await $.when($.ajax({
                    url: link,
                    data: $(this).serialize(),
                    type:  method
                })).then(function( response, textStatus, jqXHR ) {
                    console.info(response);
                    if(response.access){
                        localStorage.token = response.access;
                        logged_in();
                    }
                 
                }).catch(function(err){
                    error = true;
                    $.each(err.responseJSON, function(index, value){
                        console.info(index, value);
                        $('#id_'+ index).addClass('is-invalid');
                        $('#id_'+ index).after("<div class='invalid-feedback'>" + value + "</div>");
                    });
                })                
            }
            

            if(model !== 'user'){
                if(collection){
                    await get_data(collection);
                }
                else{
                    await get_data(link);
                }

                if(!error){
                    console.info("error");
                    await generate_template(model,'list',data,link);
                }
                
                
                


            }
            else{
                
                if(!error){
                    console.info("error");
                    w.location = '/';
                }
                
                

                
            }

            return await false;
        })




    })


})(window,document,jQuery)




'use strict';


(function(w,d,$){
    $(d).ready(function(){
        $('body').on('click', '.api-link',async function(e){
            let link = $(this).attr('href');
            let model = $(this).data('model');
            let action = $(this).data('action');
            let method = $(this).data("method");
            let full_link = link.split('?')[0];
            /*if (full_link.indexOf("http") >= 0){
                full_link = link;
            }*/
            if($(this).data('url')){
                link = $(this).data('url')
            }
            e.preventDefault();
            console.info(link);
            await get_data(link);
            console.info(data);
            await generate_template(model,action,data,full_link);
            return false;
        })



    })


})(window,document,jQuery)


'use strict';


(function(w,d,$){
    $(d).ready(function(){
        $('body').on('click', '.update, .delete', async function(e){
            e.preventDefault();
            let link = $(this).attr('href');
            let cls = $(this).attr('class')
            let model = $(this).data('model');
            let action = $(this).data('action');
            let method = $(this).data('method');
            let collection = $(this).data('collection');
            console.info(collection);
            let data_obj = {url:link,model:model,method:method,collection:collection};
            if(cls==='update'){
                await $.when($.ajax({
                    url: link,
                    method: 'get',
                    datatype: 'json',
                    headers:{"Authorization": "JWT " + localStorage.token}
                  })).then(function( response, textStatus, jqXHR ) {
                    data_obj['obj'] = response;
                    let tags = [];
                    if('tags' in response){
                        for (let k=0;k<response['tags'].length;k++){
                            tags.push(response['tags'][k]['id'])
                        }
                        data_obj['tags'] = tags;
                    }
                    
            
                }).catch(function(err){
                    $.each(err.responseJSON, function(index, value){
                        console.info(index, value);
                        $('#id_'+ index).addClass('is-invalid');
                        $('#id_'+ index).after("<div class='invalid-feedback'>" + value + "</div>");
                    });
                })
                data_obj['method'] = 'put';
                console.info(data_obj)
                await generate_template(model,'form',data_obj,link);
        
            }
            if(cls==='delete'){
                if (confirm( $(this).data('confirm'))) {
                    await $.when($.ajax({
                        url: link,
                        method: 'delete',
                        datatype: 'json',
                      })).catch(function(err){
                        $.each(err.responseJSON, function(index, value){
                            console.info(index, value);
                            $('#id_'+ index).addClass('is-invalid');
                            $('#id_'+ index).after("<div class='invalid-feedback'>" + value + "</div>");
                        });
                    })
                    
                if(collection){
                    await get_data(collection);
                }
                await generate_template(model,'list',data,collection);
        
        
                }
        
            }
            
            return false;
        })



    })



})(window,document,jQuery)


