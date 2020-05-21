window.onload = function () {
    $("#about").show();
    $("#examples").hide();
    $("#contact").hide();
}

$("#button-about").on("click", function (){
    $("#about").show();
    $("#examples").hide();
    $("#contact").hide();
});

$("#button-examples").on("click", function (){
    $("#about").hide();
    $("#examples").show();
    $("#contact").hide();
});

$("#button-contact").on("click", function (){
    $("#about").hide();
    $("#examples").hide();
    $("#contact").show();
})