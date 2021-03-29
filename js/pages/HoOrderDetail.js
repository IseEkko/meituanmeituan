
function showDetail() {
    let id = sessionStorage.getItem("c_order_id")
    console.log(id);
    $.ajax({
        url: "http://choutuan.cwp.cool/api/rider/riderorder",
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
                    <img src="${data.data[i].image_url}" alt="">
                    </div>
                </div>
                <div class="merchandise_name">
                    <h6>${data.data[i].name}</h6>
                    <p>${data.data[i].goods_name}</p>
                    <p>配送费：￥${data.data[i].delivery}</p>
                </div>
                <div class="merchandise_price">
                    <p>￥${data.data[i].price}</p>
                    <p>共计：${data.data[i].price}元</p>
                </div>
            </div>
            <div class="commission_father">
                <div class="commission">
                    <span>佣金：￥${data.data[i].delivery}</span>
                </div>
            </div>
            <div class="order_information">
                <div>
                    <div class="order_time">
                        <p>订单编号：${data.data[i].order_id}</p>
                        <p>配送日期：2021.3.30</p>
                        <p>距离：390m</p>
                        <p>配送地址：${data.data[i].order_address}</p>
                    </div>
                </div>
                <div class="order_information_btn">
                </div>
            </div>`
            }
            $(".middle").empty().append(str)
        }

    })
}
showDetail();