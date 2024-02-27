var callBackGetSuccess = function(data) {

}

function buttonClickGET(){
    var url = "https://api.openweathermap.org/data/2.5/weather?lat=48.2640845&lon=-2.9202408&appid=6d6fcda6e2a66bd3ec44f01af669fd2b"

    $.get(url, callBackGetSuccess).done(function() {
        //alert("second success" );


    });
}