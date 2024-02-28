var best = 99;
var winner = "";

var dataGenerated = function(data) {
    //console.log("Données générées :", data)//

    if ( data.main.temp < best ) { best = data.main.temp; winner = data.name }
}

var dataGeneratedFINAL = function(data) {
    //console.log("Données générées :", data)//

    if ( data.main.temp < best ) { best = data.main.temp; winner = data.name }

    var element = document.getElementById("pire_temp");
    element.innerHTML = ("La plus basse température est de " + best + "°C à " + winner);
}


$.get("https://api.openweathermap.org/data/2.5/weather?q=Paris,fr&lang=fr&appid=6d6fcda6e2a66bd3ec44f01af669fd2b&units=metric", dataGenerated).done(function() {
    //alert("Paris OK" );
})

$.get("https://api.openweathermap.org/data/2.5/weather?q=Rennes,fr&lang=fr&appid=6d6fcda6e2a66bd3ec44f01af669fd2b&units=metric", dataGenerated).done(function() {
    //alert("Rennes OK" );
})

$.get("https://api.openweathermap.org/data/2.5/weather?q=Rouen,fr&lang=fr&appid=6d6fcda6e2a66bd3ec44f01af669fd2b&units=metric", dataGenerated).done(function() {
    //alert("Rouen OK" );
})

$.get("https://api.openweathermap.org/data/2.5/weather?q=Lille,fr&lang=fr&appid=6d6fcda6e2a66bd3ec44f01af669fd2b&units=metric", dataGenerated).done(function() {
    //alert("Lille OK" );
})

$.get("https://api.openweathermap.org/data/2.5/weather?q=Strasbourg,fr&lang=fr&appid=6d6fcda6e2a66bd3ec44f01af669fd2b&units=metric", dataGenerated).done(function() {
    //alert("Strasbourg OK" );
})

$.get("https://api.openweathermap.org/data/2.5/weather?q=Orléans,fr&lang=fr&appid=6d6fcda6e2a66bd3ec44f01af669fd2b&units=metric", dataGenerated).done(function() {
    //alert("Orléans OK" );
})

$.get("https://api.openweathermap.org/data/2.5/weather?q=Nantes,fr&lang=fr&appid=6d6fcda6e2a66bd3ec44f01af669fd2b&units=metric", dataGenerated).done(function() {
    //alert("Nantes OK" );
})

$.get("https://api.openweathermap.org/data/2.5/weather?q=Dijon,fr&lang=fr&appid=6d6fcda6e2a66bd3ec44f01af669fd2b&units=metric", dataGenerated).done(function() {
    //alert("Dijon OK" );
})

$.get("https://api.openweathermap.org/data/2.5/weather?q=Bordeaux,fr&lang=fr&appid=6d6fcda6e2a66bd3ec44f01af669fd2b&units=metric", dataGenerated).done(function() {
    //alert("Bordeaux OK" );
})

$.get("https://api.openweathermap.org/data/2.5/weather?q=Lyon,fr&lang=fr&appid=6d6fcda6e2a66bd3ec44f01af669fd2b&units=metric", dataGenerated).done(function() {
    //alert("Lyon OK" );
})

$.get("https://api.openweathermap.org/data/2.5/weather?q=Marseille,fr&lang=fr&appid=6d6fcda6e2a66bd3ec44f01af669fd2b&units=metric", dataGenerated).done(function() {
    //alert("Marseille OK" );
})

$.get("https://api.openweathermap.org/data/2.5/weather?q=Toulouse,fr&lang=fr&appid=6d6fcda6e2a66bd3ec44f01af669fd2b&units=metric", dataGenerated).done(function() {
    //alert("Toulouse OK" );
})

$.get("https://api.openweathermap.org/data/2.5/weather?q=Ajaccio,fr&lang=fr&appid=6d6fcda6e2a66bd3ec44f01af669fd2b&units=metric", dataGeneratedFINAL).done(function() {
    //alert("Ajaccio OK" );
})

/*const object = { a: 8.55, b: 6.05, c: 7 };
var best = 99;
var winner = "";

for (const property in object) {
    if ( object[property] < best ) { best = object[property]; winner = property }
}

console.log("La plus basse température est : " + winner + ", " + best); */

//console.log(`${property}: ${object[property]}`);