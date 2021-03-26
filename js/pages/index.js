$(function() {
    $('.function>div:first-child').css('background','#fff')
    $(".function>div").click(function() {
        $(".function>div").css('background','none')
        $(this).css('background','#fff')
    })
    $(".tabBar>div").click(function() {
        $(".tabBar>div").css('background','none')
        $(this).css('background','#F6F4F4')
    })
    $('.HoOder_button').on('click',function() {
        window.location.href = "HoOrderDetail.html"
    })
    $('#lanxi').on('click',function() {
        window.location.href = "UseNewsContent.html"
    })
    $('#2').on('click',function() {
        window.location.href = "HoOrderDetail.html"
    })
    $('#1').on('click',function() {
        window.location.href = "HoOder.html"
    })
    $('#4').on('click',function() {
        window.location.href = "HoReceiveOrder.html"
    })
    $('#5').on('click',function() {
        window.location.href = "HoReceiveOrder.html"
    })
    $('#6').on('click',function() {
        window.location.href = "HoOder.html"
    })
    $('#7').on('click',function() {
        window.location.href = "HoNews.html"
    })
    $('#8').on('click',function() {
        window.location.href = "Horse.html"
    })

     $("#3").mousedown(function(){
         $(".up_window").show();
     })
     $(".up_img").mousedown(function(){
        $(".up_window").hide();
    })
    $('.back').on('click',function() {
        window.location.href = "HoNews.html"
    })
})