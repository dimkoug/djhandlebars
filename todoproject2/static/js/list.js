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

