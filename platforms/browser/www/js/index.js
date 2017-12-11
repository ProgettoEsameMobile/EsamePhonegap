$(document).ready(function() {
    // FUNZIONE PER ESERCIZIO 4
    $("#input_automatico").keyup(function() {
      $.ajax({
            url:"https://ewserver.di.unimi.it/mobicomp/geopost/users?session_id= 5ajy6&usernamestart=" + $("#input_automatico").val() + "&limit=10&callback=callback",
            jsonp: "callback",
            dataType: "jsonp",
            success: function(result) {
                $("#elenco").html("");
                $("#elenco").append("<ul>");
                result.usernames.forEach(function(item,index) {
                    $("#elenco").append("<li>" + item + "</li>");
                })
                $("#elenco").append("</ul>");
            }
        });
    });
});
