$(document).ready(function(){
    $(".add-btn").click(function() {
        $(this).parent().find("p").css("color", "red");
        console.log("testing");
    })
});

$(document).ready(function(){
    $(".slide-btn").click(function() {
        $("#corgi-img").slideToggle("slow");
        console.log("testing");
    })
});

$(document).ready(function(){
    $(".append-btn").click(function() {
        $(this).parent().find("div").append("<p>Well, well, well, how the turntables....</p>");
        console.log("added p");
    })
});