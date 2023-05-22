const activeDes = document.querySelector('.container-modal')
const description = {
    modals: [
        {
            code:"D601",
            img1:"assets/img/Directview/D601/20210409_141832.jpg",
            img2:"assets/img/Directview/D601/20210409_141859.jpg",
            img3:"assets/img/Directview/D601/20210409_142022.jpg",
            img4:"assets/img/Directview/D601/20210409_142102.jpg",
        },
        {
            code:"D1207",
            img1:"assets/img/Directview/D1207/1.jpg",
            img2:"assets/img/Directview/D1207/2.jpg",
            img3:"assets/img/Directview/D1207/3.jpg",
            img4:"assets/img/Directview/D1207/4.jpg",
        },
        {
            code:"D1501",
            img1:"assets/img/Directview/D1501/1.jpg",
            img2:"assets/img/Directview/D1501/2.jpg",
            img3:"assets/img/Directview/D1501/3.jpg",
            img4:"assets/img/Directview/D1501/4.jpg",
        },
        {
            code:"B1210",
            img1:"assets/img/Seaview/B1210/1.jpg",
            img2:"assets/img/Seaview/B1210/2.jpg",
            img3:"assets/img/Seaview/B1210/3.jpg",
            img4:"assets/img/Seaview/B1210/4.jpg",
        },
        {
            code:"B1216",
            img1:"assets/img/Seaview/B1216/1.jpg",
            img2:"assets/img/Seaview/B1216/2.jpg",
            img3:"assets/img/Seaview/B1216/3.jpg",
            img4:"assets/img/Seaview/B1216/4.jpg",
        },
        {
            code:"C1524",
            img1:"assets/img/Cityview/C1524/1.jpg",
            img2:"assets/img/Cityview/C1524/2.jpg",
            img3:"assets/img/Cityview/C1524/3.jpg",
            img4:"assets/img/Cityview/C1524/4.jpg",
        },
        {
            code:"C1619",
            img1:"assets/img/Cityview/C1619/1.jpg",
            img2:"assets/img/Cityview/C1619/2.jpg",
            img3:"assets/img/Cityview/C1619/3.jpg",
            img4:"assets/img/Cityview/C1619/4.jpg",
        },
        {
            code:"C1720",
            img1:"assets/img/Cityview/C1720/1.jpg",
            img2:"assets/img/Cityview/C1720/2.jpg",
            img3:"assets/img/Cityview/C1720/3.jpg",
            img4:"assets/img/Cityview/C1720/4.jpg",
        },
        {
            code:"C1824",
            img1:"assets/img/Cityview/C1824/1.jpg",
            img2:"assets/img/Cityview/C1824/2.jpg",
            img3:"assets/img/Cityview/C1824/3.jpg",
            img4:"assets/img/Cityview/C1824/4.jpg",
        },
        {
            code:"C2221",
            img1:"assets/img/Cityview/C2221/1.jpg",
            img2:"assets/img/Cityview/C2221/2.jpg",
            img3:"assets/img/Cityview/C2221/3.jpg",
            img4:"assets/img/Cityview/C2221/4.jpg",
        },
        {
            code:"C2421",
            img1:"assets/img/Cityview/C2421/1.jpg",
            img2:"assets/img/Cityview/C2421/2.jpg",
            img3:"assets/img/Cityview/C2421/3.jpg",
            img4:"assets/img/Cityview/C2421/4.jpg",
        },
        {
            code:"C2722",
            img1:"assets/img/Cityview/C2722/1.png",
            img2:"assets/img/Cityview/C2722/2.jpg",
            img3:"assets/img/Cityview/C2722/3.jpg",
            img4:"assets/img/Cityview/C2722/4.jpg",
        },
        {
            code:"B1717",
            img1:"assets/img/Seaview/B1717/1.jpg",
            img2:"assets/img/Seaview/B1717/2.jpg",
            img3:"assets/img/Seaview/B1717/3.jpg",
            img4:"assets/img/Seaview/B1717/4.jpg",
        },
        {
            code:"B1716",
            img1:"assets/img/Seaview/B1716/1.jpg",
            img2:"assets/img/Seaview/B1716/2.jpg",
            img3:"assets/img/Seaview/B1716/3.jpg",
            img4:"assets/img/Seaview/B1716/4.jpg",
        },
        {
            code:"B1816",
            img1:"assets/img/Seaview/B1816/1.jpg",
            img2:"assets/img/Seaview/B1816/2.jpg",
            img3:"assets/img/Seaview/B1816/3.jpg",
            img4:"assets/img/Seaview/B1816/4.jpg",
        },
        {
            code:"C2119",
            img1:"assets/img/Cityview/C2119/1.jpg",
            img2:"assets/img/Cityview/C2119/2.jpg",
            img3:"assets/img/Cityview/C2119/3.jpg",
            img4:"assets/img/Cityview/C2119/4.jpg",
        },
        {
            code:"C1719",
            img1:"assets/img/Cityview/C1719/1.jpg",
            img2:"assets/img/Cityview/C1719/2.jpg",
            img3:"assets/img/Cityview/C1719/3.jpg",
            img4:"assets/img/Cityview/C1719/4.jpg",
        },
    ],
    render: function(){
        const inputBtns = document.querySelectorAll('.radio-btn');

// handle modal

        const itemBtns = $$('.home-product-item')
        const mainDes = $('.main-des')
        const slideImg = $('.slide-img')
        const close = $('.close')

        for(var itemBtn of itemBtns){
            itemBtn.onclick = (e) => {
                var closest = e.target.closest('.home-product-item');
                homeProduct.products.map(function(product){
                    if(product.code == closest.getAttribute('value')){
                        activeDes.classList.add("active")
                        description.modals.map(function(modal){
                            if(modal.code == product.code){
                                var htmls1 = `
                                <div class="slide first">
                                            <img src="${modal.img1}" alt="">
                                        </div>
                                        <div class="slide">
                                        <img src="${modal.img2}" alt="">
                                        </div>
                                        <div class="slide">
                                        <img src="${modal.img3}" alt="">
                                        </div>
                                        <div class="slide">
                                        <img src="${modal.img4}" alt="">
                                        </div>
                                `
                                slideImg.innerHTML = htmls1;
                                const first = document.querySelector('.first')
                                var counter = 1;
                            setInterval(() =>{
                                document.getElementById('radio' + counter).click();
                                counter++;
                                if(counter > 4){
                                    counter = 1;
                                }
                                inputClick(first, inputBtns)
                            }, 3000)
                            }
                        })
                        
                        var htmls = `
                        <div class="description-title">${product.code}</div>
                        <div class="description-product">
                        ⛺️Nghỉ dưỡng vui vẻ cùng CĂN GÓC ${product.code} tại NS Luxury😍.<br>
                        🧨Nằm tại tầng ${product.floor} với căn bo góc 2 ban công cực rộng chiếm lĩnh mọi khung cảnh giữa biển và thành phố đặc biệt view thẳng đại dương💯<br>
                        🧨Thiết kế phòng sang trọng với ${product.numberBed} phòng ngủ riêng biệt💯<br>
                        🧨Nội thất đầy đủ với các họa tiết được trang trí hài hòa, độc đáo💯<br>
                        👉👉Thiết kế phòng:<br>
                        - ${product.numberBed} phòng ngủ riêng biệt với ${product.numberBed} giường cỡ lớn<br>
                        - Số lượng: ${product.numberBed * 2} người lớn + ${product.numberBed} trẻ em<br>
                        - Tiện nghi đầy đủ<br>
                        👉 Đặc Biệt mỗi phòng được setup 1 trà + 1 cafe + 1 nước suối và đồ amenities cơ bản.<br>
                        ❤🌼❤ PHÒNG<br>
                        Phòng ngủ: ${product.numberBed} giường đôi<br>
                        Giường: 1.8m x 2m và 1.4m x 2m<br>
                        Phòng tắm: ${product.numberBed}<br>
                        ❤🌼❤TIỆN NGHI<br>
                        Tiện nghi thiết yếu<br>
                        Điều hòa nhiệt độ<br>
                        Bếp nấu hiện đại<br>
                        Nhân viên hỗ trợ nhiệt tình.<br>
                        </div>
                        `
                        mainDes.innerHTML = htmls;             
                        cart.hadleCart(product,product.code);
                    }
                })
            }
        }

        close.onclick = () => {
            activeDes.classList.remove('active')
        }


    }
}


function inputClick(first, inputBtns){
    for(var inputBtn of inputBtns ){
        if(inputBtn.id == "radio1"){
            inputBtn.onclick = () => {
                first.style = "margin-left: 0%"
            }
        }
        else if(inputBtn.id == "radio2"){
            inputBtn.onclick = () => {
                first.style = "margin-left: -20%"
            }
        }
        else if(inputBtn.id == "radio3"){
            inputBtn.onclick = () => {
                first.style = "margin-left: -40%"
            }
        }
        else{
            inputBtn.onclick = () => {
                first.style = "margin-left: -60%"
            }
        }
    }
    }




    



