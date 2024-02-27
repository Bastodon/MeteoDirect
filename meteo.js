var callBackGetSuccess = function(data) {
    console.log("donnees API", data)
    //alert("Il fait " + data.main.temp + "°C en Bretagne");
    var element = document.getElementById("zone_meteo");
    element.innerHTML = data.name + " : " + data.main.temp + " °C";
}

function buttonClickGET(){
    var queryLoc = document.getElementById("queryLoc").value;
    var url = "https://api.openweathermap.org/data/2.5/weather?q="+queryLoc+"&appid=6d6fcda6e2a66bd3ec44f01af669fd2b&units=metric"

    $.get(url, callBackGetSuccess).done(function() {
        //alert("second success" );
    })
    .fail(function() {
        alert(" erreur ");
    })
    .always(function() {
        //alert( "finished" );
    });
}

function mapClickGET(city){
    var url = "https://api.openweathermap.org/data/2.5/weather?q="+city+"&appid=6d6fcda6e2a66bd3ec44f01af669fd2b&units=metric"

    $.get(url, callBackGetSuccess).done(function() {
        //alert("second success" );
    })
    .fail(function() {
        alert(" erreur ");
    })
    .always(function() {
        //alert( "finished" );
    });
}