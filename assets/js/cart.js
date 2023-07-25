var numberProduct = document.querySelector('.header__cart-notice');
var json = localStorage.getItem('CART');
var data =  JSON.parse(json);
const headerCart = document.querySelector('.header__cart-list-item');
var cartArray = [data];
const cart = {
    render: function(product){
        var cartHtml = `
        <li class="header__cart-item">
        <img src="${product.img}" alt="" class="header__cart-img">
        <div class="header__cart-item-info">
        <div class="header__cart-item-head">
                <h5 class="header__cart-item-name">${product.id}</h5>
                <div class="header__cart-item-price-wrap">
                <span class="header__cart-item-price">${homeProduct.pricecur(product)}đ</span>
                </div>
            </div>
            <div class="header__cart-item-body">
                <span class="header__cart-item-description">
                    Phân loại: ${product.numberBed} giường
                </span>
        </div>
        </div>
        </li>
        `
        cartArray.push(cartHtml)
    },

    setLocal: function(cartArray){
        var cartPage = JSON.stringify(cartArray.join(''))
        localStorage.setItem('CART', cartPage);
    },

    getLocal: function(){
        
        var json = localStorage.getItem('CART');
        var data =  JSON.parse(json);
        headerCart.innerHTML = data;
    },

    hadleCart: function(product,id){
        const _this = this;
        addCart.onclick = function(){
            _this.render(product);
            _this.setLocal(cartArray);
            _this.getLocal();
            notification.handleAdd(product,id)
            alert('Thêm vào giỏ thành công')
            _this.countNumber();
        }

        buyIt.onclick = () => {
            notification.changeState();
            _this.render(product);
            _this.setLocal(cartArray);
            _this.getLocal();
            notification.handleAdd(product,id)
            _this.countNumber();
            viewCart.click();
        }
    },
    countNumber: function(){
        var json = localStorage.getItem('CART');
        var data = JSON.parse(json);
        var domParse = new DOMParser();
        var docs = domParse.parseFromString(data, "text/html");
        var number = docs.querySelectorAll('.header__cart-item')
        numberProduct.innerHTML = `${number.length}`
    }
}
cart.countNumber()
cart.hadleCart();
cart.getLocal()