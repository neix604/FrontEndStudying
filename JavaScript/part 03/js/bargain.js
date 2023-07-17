function showPrice() {
    var originprice = document.querySelector("#oPrice").value;
    var dcRate = document.querySelector("#dcRate").value;

    var savedPrice = originprice * (dcRate / 100);
    var resultPrice = originprice - savedPrice;

    document.querySelector("#showResult").innerHTML = "<p>상품 원가는 <span>" 
            + originprice + "원</span>이고, 할인율은 " + dcRate + "% 입니다. <br>"
            + "할인 금액은 " + savedPrice + "원이고, 할인 후 가격은 <span>" + resultPrice 
            + "원</span>입니다.<br><p>";
}