$("*").click(function(e){
    var data = e.target.className.split(" ")[0];
    data = data.substring(0,data.length-2);
    e.stopPropagation();

    $(".circle").slideUp(1000);
    $(".main1 h1").fadeOut(1000);
    $(".main1 p").fadeOut(1000);


    function fun1(){
        $(".main1 h1").html(data);
    }    

    setTimeout(fun1,1000);
    
    $(".circle").slideDown(1000);
    $(".main1 h1").fadeIn(1000);

})