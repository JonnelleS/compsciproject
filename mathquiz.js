var score = 0;

$("p").html("You Got!!!!");

$("#go").click(function() {
    var input= $('input[name=Q1]:checked').val();
    
    if(input === "correct") {
        score= score + 1;
    }

 var input= $('input[name=Q2]:checked').val();
 
 if(input === "correct") {
        score= score + 1;
    }
    
   var input= $('input[name=Q3]:checked').val();
 
 if(input === "correct") {
        score= score + 1;
    }
    
     var input= $('input[name=Q4]:checked').val();
 
 if(input === "correct") {
        score= score + 1;
    }
     var input= $('input[name=Q5]:checked').val();
 
 if(input === "correct") {
        score= score + 1;
    }
    
     var input= $('input[name=Q6]:checked').val();
 
 if(input === "correct") {
        score= score + 1;
    }
     var input= $('input[name=Q7]:checked').val();
 
 if(input === "correct") {
        score= score + 1;
    }
    
     var input= $('input[name=Q8]:checked').val();
 
 if(input === "correct") {
        score= score + 1;
    }
     var input= $('input[name=Q9]:checked').val();
 
 if(input === "correct") {
        score= score + 1;
    }
    
     var input= $('input[name=Q10]:checked').val();
 
 if(input === "correct") {
        score= score + 1;
    }
    
 $("p").html(score);
score= 0; 
});
