const btn = document.querySelector('.order');

/* function btnClick() {
    if(document.order.product.value == '') {
        alert('상품명을 입력하세요.');
        document.order.product.focus();
        exit;
    }
} */

btn.onclick = () => {
    if(document.order.product.value == '') {
        document.order.product.focus();
        return alert('상품명을 입력하세요.');
    }
    if(document.order['prod-num'].value == '') {
        document.order['prod-num'].focus();
        return alert('주문할 수량을 입력하세요.');
    }
    if(document.querySelector('#order-name').value == '') {
        document.querySelector('#order-name').focus();
        return alert('이름을 입력하세요.');
    }
    if(document.querySelector('#order-tel').value == '') {
        document.querySelector('#order-tel').focus();
        return alert('연락처를 입력하세요.');
    }
    if(document.querySelector('#order-addr').value == '') {
        document.querySelector('#order-addr').focus();
        return alert('주소를 입력하세요.');
    }
}