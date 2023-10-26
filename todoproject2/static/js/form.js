'use strict';

(function(w,d,$){
    $(d).ready(function(){
        $('body').on('submit', '#form',async function(e){
            let link = $(this).attr('action');
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
                    headers:{"Authorization": "JWT " + localStorage.token}
                    
                  })).then(function( response, textStatus, jqXHR ) {
                    console.info(response);
                
                }).catch(function(err){
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
                
                await generate_template(model,'list',data,link);


            }
            else{
                w.location = '/';
                

                
            }

            return await false;
        })




    })


})(window,document,jQuery)



