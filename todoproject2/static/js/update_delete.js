'use strict';


(function(w,d,$){
    $(d).ready(function(){
        $('body').on('click', '.update, .delete', async function(e){
            e.preventDefault();
            let link = $(this).attr('href');
            let cls = $(this).attr('class');
            let error = false;
            let model = $(this).data('model');
            let action = $(this).data('action');
            let method = $(this).data('method');
            let collection = $(this).data('collection');
            $('body').removeClass('is-invalid');
            $('body').find('.invalid-feedback').remove();
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
                    error = true;
                    $.each(err.responseJSON, function(index, value){
                        console.info(index, value);
                        $('#id_'+ index).addClass('is-invalid');
                        $('#id_'+ index).after("<div class='invalid-feedback'>" + value + "</div>");
                    });
                })
                data_obj['method'] = 'put';
                console.info(data_obj);
                await generate_template(model,'form',data_obj,link);
        
            }
            if(cls==='delete'){
                if (confirm( $(this).data('confirm'))) {
                    await $.when($.ajax({
                        url: link,
                        method: 'delete',
                        datatype: 'json',
                      })).catch(function(err){
                        error = true;
                        $.each(err.responseJSON, function(index, value){
                            console.info(index, value);
                            $('#id_'+ index).addClass('is-invalid');
                            $('#id_'+ index).after("<div class='invalid-feedback'>" + value + "</div>");
                        });
                    })
                    
                if(collection){
                    await get_data(collection);
                }

                if(!error){
                    console.info("error");
                    await generate_template(model,'list',data,collection);
                }

                
        
        
                }
        
            }
            
            return false;
        })



    })



})(window,document,jQuery)


