$(function(){
    $(window).on("scroll",function(){
        if($(window).scrollTop() > 150) {
            $(".top").css("display","block");
        }
        else{
            $(".top").css("display","none");
        }
    })
})

function toTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}


