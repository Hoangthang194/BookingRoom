const date = new Date();
const productCheckin = homeProduct.products[2].checkin;
const productCheckout = homeProduct.products[2].checkout;
// In ra danh sách các ngày giữa 2 ngày
function calculateMiddleDatesList(startDate, endDate) {
    const start = new Date(startDate);
    const end = new Date(endDate);
    const middleDates = [];
    const currentDate = new Date(start);
    // Lặp qua các ngày trong khoảng từ ngày bắt đầu đến ngày kết thúc
    while (currentDate <= end) {
      // Thêm ngày hiện tại vào danh sách ngày tháng năm giữa
      middleDates.push(currentDate.toISOString().split('T')[0]);
      
      // Tăng ngày hiện tại lên 1 ngày
      currentDate.setDate(currentDate.getDate() + 1);
    }
  
    return middleDates;
  }

  const middleDatesList = calculateMiddleDatesList(productCheckin, productCheckout);

//   console.log(middleDatesList)


function renderCalender() {
    date.setDate(1);
    const header = $('.content');
    let  title = `
        <div class="title-month">THÁNG ${date.getMonth() + 1}</div>
        <div class="description-date">${date.toDateString()}</div>
    `
    header.innerHTML = title;

    // Lấy ra ngày cuối của tháng trước
    let preLastDay = new Date(
        date.getFullYear(),
        date.getMonth(),
        0
    ).getDate();

    // lấy ra chỉ số ngày đầu của tháng này
    let firstDayIndex = date.getDay();

    // Lấy ra ngày hôm nay
    let today = new Date().getDate();

    // Lấy ra ngày cuối của tháng này
    let lastDay = new Date(
        date.getFullYear(),
        date.getMonth() + 1,
        0
    ).getDate();

    //  Lấy ra chỉ số cuối của tháng này
    let lastDayIndex = new Date(
        date.getFullYear(),
        date.getMonth() + 1,
        0
    ).getDay();
    
    // Lấy ra số ngày tháng sau hiển thị

    let nextDay = 7 - lastDayIndex - 1;

    // Lấy ra ngày check-in , check-out của tháng
    const dayCheckIn = new Date(productCheckin).getDate();
    let dayCheckout = new Date(productCheckout).getDate();
    
    // Hiển thị days
    let days = '';

    for(let i = preLastDay - firstDayIndex + 1; i <= preLastDay; i++  ){
        days += `
        <div class="pre-day day" value = "${date.getMonth()}">${i}</div>
        `
    }

    for(let i = 1; i <= lastDay ; i++){
        if(i===new Date().getDate() && date.getMonth() === new Date().getMonth()){
            days += `
            <div class="today day" value = "${date.getMonth() + 1}">${i}</div>
            `
        }
        else {
            days += `
            <div class = "day" value = "${date.getMonth() + 1}">${i}</div>
            `
        }
    }

    for(let i = 1; i <= nextDay; i++){
        days += `
        <div class="next-day day" value = "${date.getMonth() + 2}">${i}</div>
        `
    }

    const listDay = $('.days');
    listDay.innerHTML = days;

    const dayAll = document.querySelectorAll(".day");
    for(const day of dayAll){
        const dayBooked = new Date(
            date.getFullYear(),
            day.getAttribute("value") - 1,
            Number.parseInt(day.textContent) + 1
        );
        const dayString = dayBooked.toISOString().split('T')[0]
        for(let i = 0 ; i < middleDatesList.length - 1; i++){
            if(dayString == middleDatesList[i]){
                day.classList.add('active');
            }
        }
    }

}