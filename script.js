$("h1").hover(function() {
    $("h1").css("color", "blue");
});
$("h1").click(function() {
    $("body").css("background-color", "orange");
});
$("h1").dblclick(function() {
    $(".oh").delay(1000).slideToggle();
    $("p").text("Shameless advertisment");
});
$(".hi").click(function() {
    $(".hi").text("Now double click for Magic");
});
$(".hi").dblclick(function() {
    $(".boo").fadeIn();
    $(".hi").hide();
    $("button").show();
});
$("button").click(function() {
    $(".boo").attr("src", "https://media.tenor.com/images/e12df403a7d0684fe3fa0e669fe5f159/tenor.gif");
    $("body").css("background-image", "url(https://image.freepik.com/free-vector/futuristic-glowing-low-polygonal-laurel-wreath-symbol-victory-winner-award-isolated-dark-blue-background_67515-513.jpg)");
    alert("Now double click to win your prize");
});
$(".boo").dblclick(function() {
    $("div").hide();
    $(".no").slideDown();
    $("button").hide();
});
$(".no").mouseenter(function() {
    $(".no").attr("src","https://media3.giphy.com/media/EndO2bvE3adMc/giphy.gif");
});