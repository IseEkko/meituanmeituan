$(function(){
     $(".set_login").mousedown(function(){
      //   $("#frist").hide();
        $(".window").show();
     })
     $(".inp_into").mousedown(function(){
        $("#frist").show();
        $(".window").hide();
     })
     $(".set_sets").mousedown(function(){
         $("#frist").hide();
         $("#thrid").show();
     })
     $(".heard_img").mousedown(function(){
        $("#frist").show();
        $("#thrid").hide();
     })
     $('.heard_img').on('click',function() {
      window.location.href = "Horse.html"
  })
  $('.set_set').on('click',function() {
   window.location.href = "FindPassword.html"
})
$('.fonts').on('click',function() {
   window.location.href = "HorseLogin.html"
})
})