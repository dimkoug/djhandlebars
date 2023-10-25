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
        template = templates['user_login'];
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


