$(function(){
    $(".inp_intp").click(function(){
     $(".up_window").show(0);
     // $(".up_window").css('z-index','999')
 }) 
 
 $(".up_img").click(function(){
     $(".up_window").hide(0);
 })
 $(".emails").mousedown(function(){
     this.placeholder='';
 })
 $(".emails1").mousedown(function(){
     this.placeholder='';
 })
 $(".emails").blur(function(){
  this.placeholder='请输入邮箱';
 
 })
 $(".emails1").blur(function(){
     this.placeholder='请设置登录密码';
    
    })
    $("#emails2").blur(function(){
        this.placeholder='请再次输入登录密码';
       
       })
       $(".inp_into").mousedown(function(){
           $("#Authen").hide();
           $("#Discuss").show();
       })
       $("#set_img").mousedown(function(){
        $("#Authen").show();
        $("#Discuss").hide();
       })
       $('.heard_img').on('click',function() {
        window.location.href = "HorseLogin.html"
    })
    $('.up_img').on('click',function() {
        window.location.href = "HorseLogin.html"
    })
    //  $.fn.ipt=(function(){
    //        var ipt=$(".ipt");
           
    //              for(let i=0;i<ipt.length;i++){
    //                 ipt.click(function(){
    //            ipt[i].placeholder='';
           
    //         })
    //         }
         
    //   })
    //   $(".ipt").ipt();
    $("#1").mousedown(function(){
        this.placeholder='';
    })
    $("#2").mousedown(function(){
        this.placeholder='';
    })
    $("#3").mousedown(function(){
        this.placeholder='';
    })
    $("#4").mousedown(function(){
        this.placeholder='';
    })
    $("#5").mousedown(function(){
        this.placeholder='';
    })
    })
    $("#1").blur(function(){
        this.placeholder='请输入身份证件号码';
    })
    $("#2").blur(function(){
        this.placeholder='请输入姓名';
    })

    $("#3").blur(function(){
        this.placeholder='请输入年龄';
    })

    $("#4").blur(function(){
        this.placeholder='请输入性别';
    })
    $("#5").blur(function(){
        this.placeholder='请输入电话号码';
    })
