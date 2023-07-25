
const activeDes = document.querySelector('.container-modal')
const description = {
    modals: [
        {
            id:"D601",
            img1:"assets/img/Directview/D601/20210409_141832.jpg",
            img2:"assets/img/Directview/D601/20210409_141859.jpg",
            img3:"assets/img/Directview/D601/20210409_142022.jpg",
            img4:"assets/img/Directview/D601/20210409_142102.jpg",
        },
        {
            id:"D1207",
            img1:"assets/img/Directview/D1207/1.jpg",
            img2:"assets/img/Directview/D1207/2.jpg",
            img3:"assets/img/Directview/D1207/3.jpg",
            img4:"assets/img/Directview/D1207/4.jpg",
        },
        {
            id:"D1501",
            img1:"assets/img/Directview/D1501/1.jpg",
            img2:"assets/img/Directview/D1501/2.jpg",
            img3:"assets/img/Directview/D1501/3.jpg",
            img4:"assets/img/Directview/D1501/4.jpg",
        },
        {
            id:"B1210",
            img1:"assets/img/Seaview/B1210/1.jpg",
            img2:"assets/img/Seaview/B1210/2.jpg",
            img3:"assets/img/Seaview/B1210/3.jpg",
            img4:"assets/img/Seaview/B1210/4.jpg",
        },
        {
            id:"B1216",
            img1:"assets/img/Seaview/B1216/1.jpg",
            img2:"assets/img/Seaview/B1216/2.jpg",
            img3:"assets/img/Seaview/B1216/3.jpg",
            img4:"assets/img/Seaview/B1216/4.jpg",
        },
        {
            id:"C1524",
            img1:"assets/img/Cityview/C1524/1.jpg",
            img2:"assets/img/Cityview/C1524/2.jpg",
            img3:"assets/img/Cityview/C1524/3.jpg",
            img4:"assets/img/Cityview/C1524/4.jpg",
        },
        {
            id:"C1619",
            img1:"assets/img/Cityview/C1619/1.jpg",
            img2:"assets/img/Cityview/C1619/2.jpg",
            img3:"assets/img/Cityview/C1619/3.jpg",
            img4:"assets/img/Cityview/C1619/4.jpg",
        },
        {
            id:"C1720",
            img1:"assets/img/Cityview/C1720/1.jpg",
            img2:"assets/img/Cityview/C1720/2.jpg",
            img3:"assets/img/Cityview/C1720/3.jpg",
            img4:"assets/img/Cityview/C1720/4.jpg",
        },
        {
            id:"C1824",
            img1:"assets/img/Cityview/C1824/1.jpg",
            img2:"assets/img/Cityview/C1824/2.jpg",
            img3:"assets/img/Cityview/C1824/3.jpg",
            img4:"assets/img/Cityview/C1824/4.jpg",
        },
        {
            id:"C2221",
            img1:"assets/img/Cityview/C2221/1.jpg",
            img2:"assets/img/Cityview/C2221/2.jpg",
            img3:"assets/img/Cityview/C2221/3.jpg",
            img4:"assets/img/Cityview/C2221/4.jpg",
        },
        {
            id:"C2421",
            img1:"assets/img/Cityview/C2421/1.jpg",
            img2:"assets/img/Cityview/C2421/2.jpg",
            img3:"assets/img/Cityview/C2421/3.jpg",
            img4:"assets/img/Cityview/C2421/4.jpg",
        },
        {
            id:"C2722",
            img1:"assets/img/Cityview/C2722/1.png",
            img2:"assets/img/Cityview/C2722/2.jpg",
            img3:"assets/img/Cityview/C2722/3.jpg",
            img4:"assets/img/Cityview/C2722/4.jpg",
        },
        {
            id:"B1717",
            img1:"assets/img/Seaview/B1717/1.jpg",
            img2:"assets/img/Seaview/B1717/2.jpg",
            img3:"assets/img/Seaview/B1717/3.jpg",
            img4:"assets/img/Seaview/B1717/4.jpg",
        },
        {
            id:"B1716",
            img1:"assets/img/Seaview/B1716/1.jpg",
            img2:"assets/img/Seaview/B1716/2.jpg",
            img3:"assets/img/Seaview/B1716/3.jpg",
            img4:"assets/img/Seaview/B1716/4.jpg",
        },
        {
            id:"B1816",
            img1:"assets/img/Seaview/B1816/1.jpg",
            img2:"assets/img/Seaview/B1816/2.jpg",
            img3:"assets/img/Seaview/B1816/3.jpg",
            img4:"assets/img/Seaview/B1816/4.jpg",
        },
        {
            id:"C2119",
            img1:"assets/img/Cityview/C2119/4.jpg",
            img2:"assets/img/Cityview/C2119/6.jpg",
            img3:"assets/img/Cityview/C2119/7.jpg",
            img4:"assets/img/Cityview/C2119/8.jpg",
        },
        {
            id:"C1719",
            img1:"assets/img/Cityview/C1719/1.jpg",
            img2:"assets/img/Cityview/C1719/2.jpg",
            img3:"assets/img/Cityview/C1719/3.jpg",
            img4:"assets/img/Cityview/C1719/4.jpg",
        },
    ],
    handleSlider: function(){
        const nextBtn = document.querySelector('.next-btn');
        const preBtn = document.querySelector('.pre-btn');
        let lists = document.querySelectorAll('.img-sub');
        lists[0].classList.add('active');
        nextBtn.onclick = ()=>{
                let lists = document.querySelectorAll('.img-sub');
                document.getElementById('container-img').appendChild(lists[0]);
                let lists2 = document.querySelectorAll('.img-sub');
                lists2[0].classList.add('active');
                for(let i = 1; i <= 3; i++){
                    lists2[i].classList.remove('active');
                }
                let html = `
                <img src="${lists2[0].src}" alt="" class="img-description slide-1">
                `
                document.querySelector('.slider-main').innerHTML = html
        }
        preBtn.onclick = () => {
                let lists = document.querySelectorAll('.img-sub');
                document.getElementById('container-img').prepend(lists[3]);
                let lists2 = document.querySelectorAll('.img-sub');
                lists2[0].classList.add('active');
                for(let i = 1; i <= 3; i++){
                    lists2[i].classList.remove('active');
                }
                let html = `
                <img src="${lists2[0].src}" alt="" class="img-description slide-1">
                `
                document.querySelector('.slider-main').innerHTML = html
        }
    },
    render: function(){

// handle modal
        const itemBtns = $$('.home-product-item')
        const mainDes = $('.description-information')
        const slideImg = $('.slider')

        for(var itemBtn of itemBtns){
            itemBtn.onclick = (e) => {
                var closest = e.target.closest('.home-product-item');
                homeProduct.products.map(function(product){
                    if(product.id == closest.getAttribute('value')){
                        activeDes.classList.add("active")
                        description.modals.map(function(modal){
                            if(modal.id == product.id){
                                var htmls1 = `
                                <div class="slider-main">
                            <img src="${modal.img1}" alt="" class="img-description slide-1">
                        </div>


                        <div class="slider-sub row">
                            <i class="fa-solid fa-angle-left icon-des pre-btn col c-1"></i>
                            <div id="container-img">
                            <img src="${modal.img1}" alt="" class="img-sub col c-3">
                            <img src="${modal.img2}" alt="" class="img-sub col c-3">
                            <img src="${modal.img3}" alt="" class="img-sub col c-3">
                            <img src="${modal.img4}" alt="" class="img-sub col c-3">
                            </div>
                            
                            <i class="fa-solid fa-angle-right icon-des next-btn col c-1"></i>
                        </div>

                            <section class="search-calendar flex">
                                <div class="calender">
                                    <header class="month flex">
                                        <div class="icon-pre icon-nav">
                                            <i class="fa-solid fa-angle-left"></i>
                                        </div>
                                        <div class="content">
                                            
                                        </div>
                                        <div class="icon-next icon-nav">
                                            <i class="fa-solid fa-angle-right"></i>
                                        </div>
                                    </header>
                            
                                    <article class="main-date">
                                        <section class="weekends flex">
                                            <div>Mo</div>
                                            <div>Tu </div>
                                            <div>We</div>
                                            <div>Th</div>
                                            <div>Fr</div>
                                            <div>Sa</div>
                                            <div>Su</div>
                                        </section>
                            
                                        <section class="days flex">
                                            
                                        </section>
                                    </article>
                                </div>
                                
                                <div class="note-color">
                                    <div class="note-item">
                                        <div class="booked box"></div>
                                        <div class="note-booked">Đã đặt</div>
                                    </div>
                                    <div class="note-item">
                                        <div class="not-booked box"></div>
                                        <div class="note-booked">Chưa đặt</div>
                                    </div>
                                </div>
                                `
                                slideImg.innerHTML = htmls1;
                                // handle calendar
                                renderCalender();
                                document.querySelector('.icon-pre').addEventListener('click', () => {
                                    date.setMonth(date.getMonth() - 1);
                                    renderCalender();
                                  })
                                  
                                  document.querySelector('.icon-next').addEventListener('click', () => {
                                    date.setMonth(date.getMonth() + 1);
                                    renderCalender();
                                  })

                                description.handleSlider();

                            }
                        })
                        
                        var htmls = `
                        <div class="close"><i class="fa-solid fa-rectangle-xmark"></i></div>
                        <h1 class="code-room">${product.id}</h1>
                            <div class="information-room-detail">

                                <div class="infor-item">
                                    <div class="title-infor">
                                        Phục vụ
                                    </div>
    
                                    <div class="sub-title">
                                        Người lớn: ${product.numberBed * 2}<br>
                                        Trẻ em: ${product.numberBed}<br>
                                    </div>
    
                                </div>
    
                                <div class="infor-item">
                                    <div class="title-infor">
                                        Bố trí căn hộ
                                    </div>
    
                                    <div class="sub-title">
                                        Diện tích: ${product.acreage}m2<br>
                                        Hướng view: trực diện biển<br>
                                        Số giường:<br>
                                        + ${product.numberBed} Super King size 2mx2m<br>
                                        + Hoặc tách thành ${product.numberBed * 2} giường đơn<br>
                                    </div>
    
                                </div>

                                <div class="infor-item">
                                    <div class="title-infor">
                                        Bếp:
                                    </div>
    
                                    <div class="sub-title">
                                        + Bếp từ 2 lò cao cấp<br>
                                        + Máy hút mùi cao cấp<br>
                                        + Dụng cụ nấu: Nội cơm, nồi nấu, bát, đĩa…<br>
                                        + Tủ lạnh<br>
                                        + Lò vi sóng<br>
                                    </div>
    
                                </div>
    
                                <div class="infor-item">
                                    <div class="title-infor">
                                        Phòng khách:
                                    </div>
    
                                    <div class="sub-title">
                                        + Sofa<br>
                                        + Bàn trà<br>
                                    </div>
    
                                </div>
    
                                <div class="infor-item">
                                    <div class="title-infor">
                                        Phòng tắm:<br>
                                    </div>
    
                                    <div class="sub-title">
                                        + Vách tắm đứng<br>
                                        + Khăn tắm<br>
                                        + Dầu gội xả, bàn chải răng<br>
                                    </div>
    
                                </div>
    
                                <div class="infor-item">
                                    <div class="title-infor">
                                        Tiện ích khác:<br>
                                    </div>
    
                                    <div class="sub-title">
                                        + Tivi<br>
                                        + Wifi<br>
                                        + Ban công view trực diện biển – đại dương cực hướng ban công mát, đẹp nhất<br>
                                    </div>
                            </div>
                            <div class = "price-des">Giá mỗi đêm: <span class ="price"> ${homeProduct.pricecur(product)} VNĐ</span></div>
                        </div>
                                
                        `
                        mainDes.innerHTML = htmls;             
                        cart.hadleCart(product,product.id);
                        const close = $('.close')
                        close.onclick = () => {
                            activeDes.classList.remove('active')
                        }
                    }
                })
            }
        }


    }
    }

    description.render();

    




    