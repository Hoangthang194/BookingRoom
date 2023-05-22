const header__notify = $('.header__notify-list')
const addCart = $('.add-cart')
const buyIt = $('.buy-btn')
var getJSON = localStorage.getItem('NOTIFY');
var data = JSON.parse(getJSON);
var arrayNotify = [data];
const viewCart = $('.header__cart-view-cart');
const  notification = {
    addNotify: function(product,code, state) {
        var textNotify = `
        <li class="header__notify-item header__notify-item--viewed">
        <a href="cart.html" class="header__notify-link">
            <img src="${product.img}" alt="" class="header__notify-img">
            <div class="header__notify-info">
                <span class="header__notify-name">${code} đã được ${state}</span>
                <span class="header__notify-description">${product.title}</span>
            </div>
        </a>
    </li>
        `
    arrayNotify.push(textNotify);
    },

    setLocal: function(notify){
        var json = JSON.stringify(notify);
        localStorage.setItem('NOTIFY', json);
    },

    getLocal:function(){
        var getJSON = localStorage.getItem('NOTIFY');
        var data = JSON.parse(getJSON);
        header__notify.innerHTML = data;
    },

    render: function(){
        var notify = arrayNotify.join('')
        this.setLocal(notify);
    }
    ,
    changeState: function(){
        var stateCart = 'Đặt phòng';
        var json = JSON.stringify(stateCart);
        localStorage.setItem('STATE', json);
    },

    handleAdd: function(product, code){
            notification.start(product, code, 'đã thêm vào giỏ')
            notification.getLocal()
            notification.changeState()
    },
    start: function(product, code, state){
        this.addNotify(product, code, state)
        this.render()
    }
}

notification.getLocal()
