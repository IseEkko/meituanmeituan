
function HoOder() {
    $.ajax({
        url:"http://choutuan.cwp.cool/api/rider/riderorderlist",
        type:"get",
        data:{
            token:getCookie("token")
        },
        success:function(data) {
            console.log(123)
            console.log(data);
            let str = ``
            console.log(data.data);
            for(i in data.data){
                str += ` <div class="order_detail">
                <div class="order_img"><img src="${data.data[i].image_url}" alt=""></div>
                <div class="order_name">
                    <h5>${data.data[i].name}</h5>
                    <p>${data.data[i].goods_name}</p>
                </div>
                <div class="HoOrder_price">
                    <p>佣金：${data.data[i].delivery}</p>
                    <button class="HoOder_button" onclick="goDetail(${data.data[i].order_id})">查看</button>
                </div>
                <div>
                    <p>￥${data.data[i].price}</p>
                    <p>${data.data[i].num} 件</p>
                </div>
            </div>`
            }
            $(".middle").empty().append(str)
        }
    })
    
}
HoOder();



function goDetail(order_id){
    location.href ="HoOrderDetail.html"
    sessionStorage.setItem("c_order_id",order_id)
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