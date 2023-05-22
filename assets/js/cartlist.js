const cartListParent = document.querySelector('.cart-list');
const cartListBuy = document.querySelector('.cart-list-buy:not(:active)')
const sumPriceBuy = document.querySelector('.sum-price')
const btnBuy = document.querySelector('.buy-btn');
var result = [];
var price = []
const cartList = {
    render: function(products){
        products.map(function(product){
            var html = `
            <li class="cart-list-item">
            <img src="${product.img}" alt="" class="cart-img">
            <div class="cart-description">
                <div class="cart-sub-description">
                    <div class="cart-title">
                        ${product.code}
                    </div>
                    <div class="cart-subtitle">
                        ${product.title}
                        </div>
                </div>
                
                <div class="cart-buy">
                    <div class="cart-price">${homeProduct.pricecur(product)}đ</div>
                    <div class="cart-delete">Xóa</div>
                </div>
            </div>
            </li>
        `
        result.push(html);
        price.push(homeProduct.pricecur(product))
        })
        var sumPrice = 0;
        for(var i = 0 ; i < price.length; i++){
            sumPrice += price[i]
        }
        var html = `
        <span>Tổng giá :${sumPrice}</span> 
        `
        sumPriceBuy.innerHTML= html;
        cartListParent.innerHTML = result.join('')
        cartListBuy.innerHTML = result.join('')

        var htmlState = localStorage.getItem('STATE');
        var data = JSON.parse(htmlState);
        btnBuy.innerHTML = data;
        if(data == "Đã đặt"){
            btnBuy.removeEventListener('click')
        }
    },
    handleCartList: function(){
        var json = localStorage.getItem('CART');
        var data = JSON.parse(json)
        var domParse = new DOMParser();
        var docs = domParse.parseFromString(data, "text/html");
        const nameCartList = docs.querySelectorAll('.header__cart-item-name');
        
        var arrayCart = [];
        for(var nameRoom of nameCartList){
        homeProduct.products.map(function(product){
            if(product.code == nameRoom.textContent.trim()){
                arrayCart.push(product)
            }
        })
    }
    cartList.render(arrayCart)  
    this.delete()
}, 
    delete: function(){
        const deleteBtns = document.querySelectorAll('.cart-list .cart-delete');
        const deleteBtnBuys = document.querySelectorAll('.cart-list-buy .cart-delete')
        for(var deleteBtn of deleteBtns){
            deleteBtn.addEventListener('click', (e) => {
                localStorage.clear()
                if(e.target.closest('.cart-list-item')){
                    var parentBlock = e.target.closest('.cart-list-item');
                    parentBlock.remove();
                }
                
                const localCurs = document.querySelectorAll('.cart-list .cart-list-item')
                var arrayRender = [];
                cartList.handleDeleteCart(localCurs, arrayRender)
                cartList.handleDeleteNotify(localCurs,'Xoá khỏi giỏ hàng thành công')

            })
    }
        for(var deleteBtn of deleteBtnBuys){
            deleteBtn.addEventListener('click', (e) => {
                localStorage.clear()
                if(e.target.closest('.cart-list-item')){
                    var parentBlock = e.target.closest('.cart-list-item');
                    parentBlock.remove();
                }

                const localCurs = document.querySelectorAll('.cart-list-buy .cart-list-item')
                var arrayRender = [];
                cartList.handleDeleteCart(localCurs, arrayRender)
                cartList.handleDeleteNotify(localCurs,'Xoá khỏi giỏ hàng thành công')

            })
}
},
    handleDeleteCart: function(localCurs, arrayRender){
        for(var localCur of localCurs){
            var roomCur = localCur.querySelector('.cart-title').textContent.trim()
            var productFind = homeProduct.products.filter(function(product){
                return roomCur == product.code;
            })
            var cartHtml = `
                <li class="header__cart-item">
                <img src="${productFind[0].img}" alt="" class="header__cart-img">
                <div class="header__cart-item-info">
                <div class="header__cart-item-head">
                        <h5 class="header__cart-item-name">${productFind[0].code}</h5>
                        <div class="header__cart-item-price-wrap">
                        <span class="header__cart-item-price">${homeProduct.pricecur(productFind[0])}đ</span>
                        </div>
                    </div>
                    <div class="header__cart-item-body">
                        <span class="header__cart-item-description">
                            Phân loại: ${productFind[0].numberBed} giường
                        </span>
                        <span class="header__cart-item-remove">Xóa</span>
                </div>
                </div>
                </li>
                `
        arrayRender.push(cartHtml);
        }
        var json = JSON.stringify(arrayRender.join(''));
        localStorage.setItem('CART', json);
    },
    handleDeleteNotify: function(localCurs, state){
        var getJSON = localStorage.getItem('NOTIFY');
        var data = JSON.parse(getJSON);
        var arrayNotify = [data];
        for(var localCur of localCurs){
            var roomCur = localCur.querySelector('.cart-title').textContent.trim()
            var productFind = homeProduct.products.filter(function(product){
                return roomCur == product.code;
            })
            var textNotify = `
                <li class="header__notify-item header__notify-item--viewed">
                <a href="cart.html" class="header__notify-link">
                    <img src="${productFind[0].img}" alt="" class="header__notify-img">
                    <div class="header__notify-info">
                        <span class="header__notify-name">${productFind[0].code} đã được ${state}</span>
                        <span class="header__notify-description">${productFind[0].title}</span>
                    </div>
                </a>
                </li>
            `
            arrayNotify.push(textNotify);
        }
        var json = JSON.stringify(arrayNotify.join(''));
        localStorage.setItem('NOTIFY', json);
    },
    disable : function(state){
        btnBuy.innerHTML = `${state}`
    }
}

cartList.handleCartList()
cartList.delete()

// Đặt phòng

const cartContain = document.querySelector('.cart-contain.buy')
const cartListConfirm = document.querySelector('.cart-list-buy')
btnBuy.addEventListener('click', () => {
    const cartActive = document.querySelector('.cart-contain.active')
    cartActive.classList.remove('active')
    cartContain.classList.add('active');
    cartListConfirm.classList.add('active');
    cartList.delete()

    const buyCart = document.querySelector('.btn-buy-cart')
    const submitForm = document.querySelector('.submit-form')
    buyCart.onclick = () => {
        var state = JSON.stringify('Đã đặt');
        localStorage.setItem('STATE', state);
        submitForm.click();
        if(submitForm.click() == true){
        location.href = "index.html"
        }
    }
})

