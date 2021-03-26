$(function(){
    $(".sure").mousedown(function(){
        $(".up_window").show();

    })
    // $(".up_img").mousedown(function(){
    //     $(".up_window").hide();
        
    // })
    $('.up_img').on('click',function() {
        window.location.href = "Horse.html"
    })
    $('.heard_img').on('click',function() {
        window.location.href = "Horse.html"
    })
})