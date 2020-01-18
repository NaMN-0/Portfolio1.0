$("*").click(function(e){
    var data = e.target.className.split(" ")[0];
    data = data.substring(0,data.length-2);
//    console.log(data);
    e.stopPropagation();


    if(
        data=="home"||data=="about"||data=="project"||data=="resume"
    ){

        var speed = 800;
        $(".circle").slideUp(speed);
        $(".main1 h1").fadeOut(speed);
        $(".main1 p").fadeOut(speed);
    
    
        function fun1(){
            $(".main1 h1").html(data);
        }    
    
        setTimeout(fun1,speed);
        
        $(".circle").slideDown(speed);
        $(".main1 h1").fadeIn(speed);    

    }


})
