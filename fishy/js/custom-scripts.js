/**
 * Created by Валерий on 25.12.2014.
 */

$(document).ready( function()
    {
        $(document).scroll(function(){

            if($(document).scrollTop()> 150) $('#anchor-button').show(100);
            else $('#anchor-button').hide();
        });
        $('.ajax-clicker').click( function()
            {
                var url = '../html/' + $(this).children('span').text().toLowerCase().trim()+'.html';
                var result_id = 'main-content-actually';
                if (url ==='about us.html') {$('#main-content-wrapper').css("width", "100%");}
                else{$('#main-content-wrapper').css("width", "1000px");}
                alert(url);
                /* НЕРАБОЧИЙ КОСТЫЛЬ */
                //$('#main-menu ul li').css("background-color", "#3A93FF");
                //$('#main-menu ul li:hover').css("background-color", "#00BFFF");
                //$(this).css("background-color", "aqua");
                AjaxRequest(result_id, url);
            });
        AjaxRequest('main-content-actually','../html/gallery.html');
    });



function AjaxRequest(result_id,url) {
    jQuery.ajax({
        url:     url,
        type:     "POST",
        dataType: "html",
        error: function (){
            alert("Ошибка соединения");
        },
        success: function(response){
            document.getElementById(result_id).innerHTML = response;
        }
    });
}