$("#submit").click(function(){
    var favoriteColor = "red";
    if($("#color").val()===favoriteColor){
        $("p").html("You guessed my favorite color!");
    } else {
        $("p").html("You didn't guess my favorite color!!");
    }
});
