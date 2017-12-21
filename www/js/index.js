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
                    session_id = $("#session_id").html(data);
                    console.log($("#session_id").html(data));
                    localStorage.setItem("session_id", data);
                    console.log("session prova" + data);
                    location.href="AmiciSeguiti.html";

                } else
                    alert("Controlla connessione! (Login)");
            });
    }); // button


    $("#bLogout").click(function(){

        console.log("div logout");
        console.log("session_id: "+ localStorage.getItem("session_id"));


        $.get("https://ewserver.di.unimi.it/mobicomp/geopost/logout?session_id=" + localStorage.getItem("session_id"),

            function(data, status){
                console.log("data: "+ data);
                console.log("status: "+ status);
                if (status) {
                    localStorage.setItem("session_id", null);
                    location.href="index.html";

                } else
                    alert("Controlla connessione! (Logout)");
            });

    }); // button


    $("#bPubblica").click(function(){

        console.log("div pubblica");
        console.log("stato: "+$("#message").val());
        console.log("session: " + localStorage.getItem("session_id"));

        $.get("https://ewserver.di.unimi.it/mobicomp/geopost/status_update?",
            {
                session_id: localStorage.getItem("session_id"),
                stato: $("#message").val(),
                lat: localStorage.getItem("lat"),
                lon: localStorage.getItem("lon")
            },
            function(data, status){
                console.log("posizione: " + localStorage.getItem("lat") + ", " + localStorage.getItem("lon"));
                console.log("data: "+ data);
                console.log("status: "+ status);
                if (status) {
                    console.log("stato in local: " + $("#message").val());
                    localStorage.setItem("stato", JSON.stringify($("#message").val()));
                    location.href="AmiciSeguiti.html";
                } else
                    alert("Controlla connessione! (Pubblica)");
            });
    }); // button

});