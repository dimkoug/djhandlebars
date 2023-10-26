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
            let response = {url:link,model:model,method:method};
            await generate_template(model,action,response,link);
            return false;
        })
    })
})(window,document,jQuery)


