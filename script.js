$(document).ready(function() {
    
    function toggleLightOne(){
        
        if($("#bulb1").attr("src") == "img/bulboff.gif"){
            $("#bulb1").attr("src", "img/bulbon.gif")
            $("#switch1").attr("src", "img/switch_on.png")
        }else {
            $("#bulb1").attr("src", "img/bulboff.gif")
            $("#switch1").attr("src", "img/switch_off.png")
        }
    
    }
    
    function toggleLightTwo(){
        
        if($("#bulb2").attr("src") == "img/bulboff.gif"){
            $("#bulb2").attr("src", "img/bulbon.gif")
            $("#switch2").attr("src", "img/switch_on.png")
        }else {
            $("#bulb2").attr("src", "img/bulboff.gif")
            $("#switch2").attr("src", "img/switch_off.png")
        }
    
    }
    
    function toggleLightThree(){
        
        if($("#bulb3").attr("src") == "img/bulboff.gif"){
            $("#bulb3").attr("src", "img/bulbon.gif")
            $("#switch3").attr("src", "img/switch_on.png")
        }else {
            $("#bulb3").attr("src", "img/bulboff.gif")
            $("#switch3").attr("src", "img/switch_off.png")
        }
    
    }
    
    $("#switch1").click(function(){
        toggleLightOne()
    })
    
    $("#switch2").click(function(){
        toggleLightTwo()
    })
    
    $("#switch3").click(function(){
        toggleLightThree()
    })
    
    $("#switch4").click(function(){
        toggleLightTwo();
        toggleLightThree();
    });
    
    $("#switch5").click(function(){
        toggleLightOne();
        toggleLightTwo();
        toggleLightThree();

    });
})