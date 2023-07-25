//Restful API

var productApi = 'http://localhost:3000/products';

// Lấy các element

const $$ = document.querySelectorAll.bind(document);
const $ = document.querySelector.bind(document);

const categoryBtns = $$('.category-item')
const productParent = $('.product')
const btnActived = $('.category-item--active')
const btnAll = $('.all')

// Tạo biến trang page
var perPage = 10;
var currentPage = 1;
var startPage = 0;
var endPage = perPage;
var clicked = false;

const nextBtn = $('.next')
const backBtn = $('.back')
const numberPage = $('.home-filter__page-num')
const listNumberPage = $('.list-number')
const pricelow = $('.lowprice');
const pricehight = $('.highprice')
// Biến search
const checkin = $('#checkin');
const checkout = $('#checkout');
const bed = $('#number-bed');
const child = $('#number-child');
const search = $('.search-icon')

var key = 'SEARCH'
// Handle search

function getSearch(){
    var checkinInput = checkin.value
    var checkoutInput = checkout.value;
    var bedInput = bed.value;
    var childInput = child.value;
    var info = {
        checkin: checkinInput,
        chechout: checkoutInput,
        bed: bedInput,
        child: childInput
    }

    if(checkinInput == "" || checkoutInput == " " || bedInput <= 0 || bedInput > 2){
        alert('Nhập đầy đủ thông tin(Phòng chỉ có 1-2 phòng)')
        localStorage.clear()
    } 

    else {
        var json = JSON.stringify(info);
        localStorage.setItem(key,json);
    }
}

function actionSearch(products){
    search.onclick = function(){
        getSearch();
        var info = localStorage.getItem(key);
        var data = JSON.parse(info);
        var result = products.filter(function(product){
        return product.numberBed == Number.parseInt(data.bed)
        })
        homeProduct.render(result, startPage, endPage)
        page.handleProduct(result)
        priceProduct(result)
    }
}


// Handle price

function priceProduct(products) {
        getPrice(products)
            .then(function(){
                var data = products.map(function(product){
                    return homeProduct.pricecur(product)
                })

                return sortPrice(data.sort(),products)
                    .then((product) => {
                        return product
                    })
            })

            .then(function(data){
                let dataSet = data.slice().reverse();
                pricelow.onclick = () => {
                    homeProduct.render(data, startPage, endPage);
                }

                pricehight.onclick = () => {
                    homeProduct.render(dataSet, startPage, endPage)
                }
            }) 
}




//  handle page

const page = {
    sumPage: function(products){
        return Math.ceil(products.length / perPage);
    },
    handlePage: function(products, currentPage){
        var statePage = `
                <span class="home-filter__page-current">${currentPage}</span>/${this.sumPage(products)}
            `
        numberPage.innerHTML = statePage;
    },

    handleNumberPage: function(products, currentPage){
        var numberList = []
        for(var i = 1; i <= this.sumPage(products); i++){
            var number = `
                <li class="pagination-item" value = "${i}">
                    <a href="#" class="pagination-item__link">${i}</a>
                </li>
            `
            numberList.push(number);
        }
        listNumberPage.innerHTML = numberList.join('')

        
        const numberAll = $$('.pagination-item');
        for(var number of numberAll){
            if(number.value == currentPage){
                number.classList.add('pagination-item--active')
            }

            if(number.value != 0){
            number.addEventListener('click',(e) => {
                if(e.target){
                var btnActived = $('.pagination-item.pagination-item--active')
                var btnPage = e.target;
                var btnPageParent = btnPage.parentElement;
                btnActived.classList.remove('pagination-item--active')
                btnPageParent.classList.add('pagination-item--active')
                currentPage = Number.parseInt(btnPageParent.value);
                startPage = (currentPage - 1) * perPage;
                endPage = currentPage* perPage;
                homeProduct.render(products,startPage,endPage)
                page.handlePage(products, currentPage)
                }
            })
            }

        }


    },

    // Xử lý thao tác chuyển page

    handleProduct: function(products){
            page.handlePage(products,currentPage)
            page.handleNumberPage(products, currentPage);
            nextBtn.onclick = function(){
            var active = $('.pagination-item.pagination-item--active')
            listNumberPage.scrollBy(30, 0)
            currentPage = active.value
                if(currentPage < page.sumPage(products)){
                    currentPage++;
                    startPage = (currentPage - 1) * perPage;
                    endPage = currentPage* perPage;
                    homeProduct.render(products, startPage, endPage)
                    page.handlePage(products,currentPage)
                    page.handleNumberPage(products, currentPage);
                    description.render()
                    }
            }

            backBtn.onclick = function(){
                var active = $('.pagination-item.pagination-item--active')
                listNumberPage.scrollBy(-30, 0)
                currentPage = active.value
                if(currentPage > 1){
                    currentPage--;
                    startPage = (currentPage - 1) * perPage;
                    endPage = currentPage* perPage;
                    homeProduct.render(products, startPage, endPage)
                    page.handlePage(products, currentPage)
                    page.handleNumberPage(products, currentPage);
                    description.render()
                    }
            }
    },

    start: function(products){
        this.handleProduct(products)
    }

}

// Danh mục
const category = {
    handleActive: (nonActive, actived) => {
        actived.classList.remove('category-item--active');
        nonActive.classList.add('category-item--active');
    },
    
    handleCategory: function() {
        const _this = this;
        for(const categoryBtn of categoryBtns){
            btnAll.click();
            categoryBtn.onclick = function() {
                // reset input

                checkin.value = ""
                checkout.value = ""
                bed.value = ""
                child.value = ""

                const categoryActived = $('.category-item.category-item--active') 
                        _this.handleActive(categoryBtn,categoryActived)
                
                
                // Render home, chuyển page
                var text = categoryBtn.textContent.trim();
                var viewDirection = text.slice(0,1)
                if(viewDirection == 'T'){
                    homeProduct.render(homeProduct.products, startPage, endPage)
                    page.handleProduct(homeProduct.products)
                    priceProduct(homeProduct.products)
                    // description.render()
                    actionSearch(homeProduct.products)
                }
                else{
                var productFind = homeProduct.products.filter(function(product){
                    var id = product.id.slice(0,1);
                    return viewDirection == id;
                })
                currentPage = 1;
                startPage = (currentPage - 1) * perPage;
                endPage = currentPage* perPage;
                homeProduct.render(productFind, startPage, endPage)
                page.handleProduct(productFind)
                priceProduct(productFind)
                description.render()
                actionSearch(productFind)
            }
            }
        }
    },

    startCa: function() {
        this.handleCategory();
    }
}


// navigation

const homeBtns = $$('.home-filter__btn')

const navigation = {
    handleActive: (nonActive, actived) => {
        nonActive.classList.add('btn--primary');
        actived.classList.remove('btn--primary');
    },
    handleNav: function(){
        const _this = this;
        for(const homeBtn of homeBtns){
            homeBtn.onclick = () => {
                const homeBtnActived = $('.home-filter__btn.btn--primary')
                const text = homeBtn.getAttribute("class")
                if(text == "home-filter__btn btn"){
                    _this.handleActive(homeBtn, homeBtnActived);
                }
                
                // Loại phòng hot, mới nhất

                var navBtn = homeBtn.textContent.trim();
                var check = navBtn.indexOf('hot');
                if(check > 0){
                    for(var categoryBtn of categoryBtns){
                        const categoryActived = $('.category-item.category-item--active')
                        categoryActived.classList.remove('category-item--active')
                        btnAll.classList.add('category-item--active')
                        break;
                    }
                    var productFind = homeProduct.products.filter(function(product){
                        return product.rating == 5;
                    })
                    homeProduct.render(productFind, startPage, endPage)
                    page.handleProduct(productFind)
                    description.render()
                }
                else if(navBtn != 'Phổ biến'){
                    for(var categoryBtn of categoryBtns){
                        const categoryActived = $('.category-item.category-item--active')
                        categoryActived.classList.remove('category-item--active')
                        btnAll.classList.add('category-item--active')
                        break;
                    }
                    var productFind = homeProduct.products.filter(function(product){
                        return product.rating < 5;
                    })
                    homeProduct.render(productFind, startPage, endPage);
                    page.handleProduct(productFind)
                    description.render()
                }
                else{
                    homeProduct.render(homeProduct.products, startPage, endPage)
                    page.handleProduct(homeProduct.products)
                    description.render()
                }
            }
        }
    },

    startNa: function(){
        this.handleNav();
    }
}


//  product

function setProducts(){
    fetch(productApi)
        .then(function(response){
            return response.json()
        })
        .then(function(products){
            var json = JSON.stringify(products)
            localStorage.setItem('LIST-PRODUCT', json)
        })
}

setProducts()

function getProducts(){
    var data =localStorage.getItem('LIST-PRODUCT');
    var listProduct = JSON.parse(data);
    return listProduct;
}
  
const homeProduct = {
    products: getProducts(),

    // Hàm tính giá hiện tại
    pricecur: function(product){
        var percentString = product.saleoff.slice(0,2);
        var percentNumber = Number.parseInt(percentString);
        var pricecur =product.priceold - product.priceold * percentNumber / 100;
        return pricecur;
    },

    // Hàm tính lượt like
    sumLike: function(product){
        if(product.favourite){
            var heart = 'home-product-item__like-icon-fill fa-solid fa-heart'
       }
       else{
           var heart = 'home-product-item__like-icon-empty fa-solid fa-heart'
       }
       return heart;
    },

    // Hàm tính lượt sao
    sumRating: function(product){
        var rate = [];
            for(var i = 0; i < product.rating ; i++){
                rate.push(`<i class="home-product-item__star--gold fa-solid fa-star"></i>`)
            }
            if(product.rating < 5){
                for(var i = 0; i < 5 - product.rating; i++){
                rate.push(`<i class=" fa-solid fa-star"></i>`)
                }
            }
        return rate.join('')
    },

    // Render list phòng
    render: function(products, startPage, endPage){
        const _this = this;
        var result = [];
        products.map(function(product, index){
            if(index >= startPage && index < endPage){
            var productContent = `
            <div class="col l-2-4 m-4 c-6">
            <a class="home-product-item" href="#" value=${product.id}>
                <div class="home-product-item__img" style="background-image: url(${product.img});"></div>
                <h4 class="home-product-item__name">${product.title}</h4>
                <div class="home-product-item__price">
                    <span class="home-product-item__price-old">${product.priceold}đ</span>
                    <span class="home-product-item__price-current">${_this.pricecur(product)}</span>
                </div>
                <div class="home-product-item__action">
                    <span class="home-product-item__like  home-product-item__like--liked">
                        <i class="${_this.sumLike(product)}"></i>
                    </span>
                    <div class="home-product-item__rating">
                        ${_this.sumRating(product)}
                    </div>
                    <div class="home-product-item__sold">${product.state}</div>
                </div>
                <div class="home-product-item__favourite">
                    <i class="fa-solid fa-check"></i>
                    <span>Yêu thích</span>
                </div>
                <div class="home-product-item__sale-off">
                    <span class="home-product-item__sale-off-percent">${product.saleoff}</span>
                    <span class="home-product-item__sale-off-label">GỈAM</span>
                </div>
            </a>
        </div>
            `
            result.push(productContent);
            }
        })
        productParent.innerHTML = result.join('')
    },

    start: function(){
        this.render(homeProduct.products)
    }


}

category.startCa();
navigation.startNa();

// Tạo promise

function getPrice(products){
    return new Promise((resolve) => {
        resolve(products)
    })
}

function sortPrice(datas, products){
    return new Promise((resolve) => {
        var output = []
        var dataSet = [...new Set(datas)];
        for(var i = 0 ; i < dataSet.length; i++){
            products.map(function(product){
                if(homeProduct.pricecur(product) == dataSet[i]){
                    output.push(product)
                }
            })
        }

        resolve(output);
    })
}






