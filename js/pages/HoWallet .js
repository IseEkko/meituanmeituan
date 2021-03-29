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


function recharge() {
    let money = document.getElementById("money").value
    $.ajax({
        url: "http://choutuan.cwp.cool/api/riderhome/updateridermoney",
        type: "post",
        data:{
            wallet:money,
            token:getCookie("token")
        },
        success: function (data) {
           if(data.code==200){
               

           }
           if(data.code==100){

           }

        }

    })
}


/**
 * 获取token
 * @param c_name
 * @returns {string}
 */
 function getCookie(c_name){
    //判断document.cookie对象里面是否存有cookie
        if (document.cookie.length>0){
            c_start=document.cookie.indexOf(c_name + "=")
            //如果document.cookie对象里面有cookie则查找是否有指定的cookie，如果有则返回指定的cookie值，如果没有则返回空字符串
            if (c_start!=-1){
                c_start=c_start + c_name.length+1
                c_end=document.cookie.indexOf(";",c_start)
                if (c_end==-1) c_end=document.cookie.length
                return unescape(document.cookie.substring(c_start,c_end))
            }
        }
        return ""
    }


 function disappear()
    {
        ("button").click(function () {
            $("up_window").hide();
        })

    }