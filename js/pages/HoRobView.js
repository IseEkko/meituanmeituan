
function showDetail() {
    let id = sessionStorage.getItem("order_id")
    console.log(id);
    $.ajax({
        url: "http://choutuan.cwp.cool/api/rider/showreceivingorder",
        type: "get",
        data: { order_id: id },
        success: function (data) {
            console.log(data);
            let str = ``
            console.log(data.data);
            for (i in data.data) {
                str += `<div class="merchandise_news">
                <div class="merchandise_img">
                    <div>
                    <img src="${data.data[i].image_url}">
                    </div>
                </div>
                <div class="merchandise_name">
                    <h6>${data.data[i].name}</h6>
                    <p>${data.data[i].goods_name}</p>
                    <p>${data.data[i].delivery}</p>
                </div>
                <div class="merchandise_price">
                    <p>￥${data.data[i].price}</p>
                    <p>共计：${data.data[i].total}</p>
                </div>
            </div>
            <div class="commission_father">
                <div class="commission">
                    <span>您可得佣金：￥${data.data[i].delivery}元</span>
                    <button onclick="qiang(${id},${data.data[i].rider_id})">马上抢单</button>
                </div>
            </div>
            <div class="order_information">
                <div>
                    <div class="order_time">
                        <p>订单编号：${data.data[i].order_id}</p>
                        <p>预计需要配送时间：30分钟</p>
                        <p>距离：${data.data[i].distance}m</p>
                        <p>取货地址：${data.data[i].address}</p>
                    </div>
                </div>
            </div>`
            }
            $(".middle").empty().append(str)
        }

    })
}
showDetail();

function qiang(order_id, rider_id) {
    $.ajax({
        url: "http://choutuan.cwp.cool/api/rider/catchreceivingorder",
        type: "post",
        data: {
            order_id: order_id,
            rider_id: rider_id
        },
        success: function (data) {
            if (data.code == 200) {

                var w = window.innerWidth
                var h = window.innerHeight
                mask1.style.width = w + "px"
                mask1.style.height = h + "px"

                $(".commission>button").on('click', function () {
                    if ($("#mask1").css('display', 'none')) {
                        $("#mask1").show(); //如果元素为隐藏,则将它显现
                        setTimeout(function () {
                            $('#mask1').hide(); //将DIV标签隐藏。
                            $('.commission>span').text('用户已取消订单')
                            $('.commission>button').css('display', 'none')
                        }, 3000);
                    } else {
                        $("#mask1").hide(); //如果元素为显现,则将其隐藏
                    }
                })
            }

            if (data.code == 100) {
                $("#mask").show()
                var w = window.innerWidth
                var h = window.innerHeight
                mask.style.width = w + "px"
                mask.style.height = h + "px"

                $(".commission>button").on('click', function () {
                    if ($("#mask").css('display', 'none')) {
                        $("#mask").show(); //如果元素为隐藏,则将它显现
                        setTimeout(function () {
                            $('#mask').hide(); //将DIV标签隐藏。
                            $('.commission>span').text('用户已取消订单')
                            $('.commission>button').css('display', 'none')
                        }, 3000);
                    } else {
                        $("#mask").hide(); //如果元素为显现,则将其隐藏
                    }
                })
            }
        }

    })
}