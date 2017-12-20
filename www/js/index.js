$(document).ready(function(){

    localStorage.setItem("session", null);

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
                    session = $("#session_id").html(data);
                    console.log($("#session_id").html(data));
                    localStorage.setItem("session", data);
                    console.log("session prova" + data);
                    location.href="AmiciSeguiti.html";

                } else
                    alert("Controlla la connessione a internet!");
            });
    }); // button


    $("#bLogout").click(function(){

        console.log("div logout");
        console.log("session id: "+ localStorage.getItem("session"));


        $.get("https://ewserver.di.unimi.it/mobicomp/geopost/logout?session_id=" + localStorage.getItem("session"),

            function(data, status){
                console.log("data: "+ data);
                console.log("status: "+ status);
                if (status) {
                    localStorage.setItem("session", null);
                    location.href="index.html";

                } else
                    alert("Controlla la connessione a internet!");
            });

    }); // button

});