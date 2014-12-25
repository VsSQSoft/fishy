/**
 * Created by Валерий on 25.12.2014.
 */

$(document).ready( function()
    {
        alert('123');
        $('.ajax-clicker').click( function()
            {
                var url = '../html/' + $(this).text().toLowerCase().trim()+'.html';
                alert(url);
                var result_id = 'main-content-actually';
                AjaxRequest(result_id, url);
            });


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