function receiveOrder() {
    $.ajax({
        url:"http://choutuan.cwp.cool/api/rider/showreceivingorderall",
        type:"get",
        success:function(data) {
            console.log(data);
            let str = ``
            console.log(data.data);
            for(i in data.data){
                str += ` <div class="order_detail">
                <div class="order_img"><img src="${data.data[i].image_url}"></div>
                <div class="order_name">
                    <h5>${data.data[i].name}</h5>
                    <p>${data.data[i].goods_name}</p>
                </div>
                <div class="HoOrder_price">
                    <p>${data.data[i].delivery}</p>
                    <button class="HoOder_button" onclick="goDetail(${data.data[i].order_id})">查看</button>
                </div>
                <div>
                    <p>￥${data.data[i].total}</p>
                    <p> ${data.data[i].num}</p>
                </div>
            </div>`
            }
            $(".middle").empty().append(str) 
        }

    })
 
}

receiveOrder();
function goDetail(id) {
   location.href ="HoRobView.html"
   sessionStorage.setItem("order_id",id)
}

