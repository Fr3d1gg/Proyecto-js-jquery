$("document").ready(function(){
    
    setInterval(() => {
        let clock=moment().format(" h:mm:ss a");
        $("#clock").html(clock);
    },1000);
    
});