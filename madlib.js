$("#submit").click(function() {
    var input = $("#name").val();
    var input = $("#adj").val();
    var input = $("#day").val();
    
    $("p").append("Hello " + $("#name1").val() + ", isn't it a "+ $("#adj").val()+ " " + $("#weekday").val() + "? Maybe " + $("#name2").val() + " would want to go to " + $("#their").val() + $("#place").val() + " to play " + $("#sport").val() + " Don't you think that would be " +  $("#descriptor").val());
});
