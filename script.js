/* for header btns.. */

$("*").click(function(e){
    var data = e.target.className.split(" ")[0];
    data = data.substring(0,data.length-2);
//    console.log(data);
    e.stopPropagation();

    var data1 = ["home", "about", "project", "resume"]; 
    var x = -1;

    for(var i=0;i<4;i++){
        if(data==data1[i]){
            x=i;
        }
    }

    if(x!=-1){

        var speed = 600;
        $(".circle").slideUp(speed);

        for(i=0;i<4;i++){
            if(i!=x){
                $("."+data1[i]+"cont").fadeTo("slow",0);
            }
            else{
                $("."+data1[i]+"cont").fadeTo("slow",1);
            }
        }

        $(".main1 h1").fadeOut(speed);
        $(".main1 p").fadeOut(speed);
    
    
        function fun1(){
            $(".main1 h1").html(data);
        }    
    
        setTimeout(fun1,speed);
        
        $(".circle").slideDown(speed);
        $(".content").slideDown(speed);
        $(".main1 h1").fadeIn(speed);    

    }
})

/* for content tab.. */
/*
$("*").click(function(e){
    var data = e.target.className.split(" ")[0];
    data = data.substring(0,data.length-2);
//    console.log(data);
    e.stopPropagation();


    if(
        data=="home"||data=="about"||data=="project"||data=="resume"
    ){

        var speed = 800;
        $(".main1 h1").fadeOut(speed);
        $(".main1 p").fadeOut(speed);
    
    
        function fun1(){
            $(".main1 h1").html(data);
        }    
    
        setTimeout(fun1,speed);
        
        $(".content").slideDown(speed);
        $(".main1 h1").fadeIn(speed);    

    }
})
*/