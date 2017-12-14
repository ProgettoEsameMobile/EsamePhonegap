$(document).ready(function(){

    $("#button").click(function(){
        console.log("button");
        console.log("username: "+$("#username").val());
        console.log("password: "+$("#password").val());

        $.post("https://ewserver.di.unimi.it/mobicomp/geopost/login",
            {
                username: $("#username").val(),
                password: $("#password").val()
            },
            function(data, status){
                console.log("data: "+ data);
                console.log("status: "+ status);
                if (status) {
                    var session = $("#session_id").html(data);
                    location.href="AmiciSeguiti.html";

                } else
                    alert("Controlla la connessione a internet!");
            });

    }); // button

});