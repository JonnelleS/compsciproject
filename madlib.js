$("#submit").click(function() {
    var input = $("#name").val();
    var input = $("#adjecctive").val();
    var input = $("#day").val();
    
    $("p").append("Hello " + $("#name").val() + ", isn't it a "+ $("#adjective").val()+ " " + $("#day").val()+ "? I think it would be cool to "+ $("#verb").val() + " at the patk"  );
});
