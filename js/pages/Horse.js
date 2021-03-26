$(function(){
    $(".number").mousedown(function(e){
            $(".tan_window").show();
    })
    $("#inpt").mousedown(function(){
        this.placeholder="";
    })
    
    $(".function>div").click(function() {
        $(".function>div").css('background','none')
        $(this).css('background','#fff')
    })
    $(".tabBar>div").click(function() {
        $(".tabBar>div").css('background','none')
        $(this).css('background','#F6F4F4')
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
    $('.tail_person').on('click',function() {
        window.location.href = "HoPersonal.html"
    })
    $('.tail_wallet').on('click',function() {
        window.location.href = "HoWallet.html"
    })
    $('.tail_set').on('click',function() {
        window.location.href = "HoSetting.html"
    })
    
    })