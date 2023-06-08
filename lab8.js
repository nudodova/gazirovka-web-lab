function showDate() {
    let out = document.getElementById('current-date');
    let out1 = document.getElementById('current-date1');
    let out2 = document.getElementById('current-date2');
    let out3 = document.getElementById('current-date3');
    let out4 = document.getElementById('current-date4');
    let today = new Date();
    let today1 = new Date();
    let today2 = new Date();
    let today3 = new Date();
    let today4 = new Date();
    out.innerHTML ="Дата и время для русской локали: " + today.toLocaleString('ru-RU');
    out1.innerHTML ="Дата и время для американской локали: " + today1.toLocaleString('en-US');
    out2.innerHTML ="Дата и время для французской локали: " + today2.toLocaleString('fr-FR');
    out3.innerHTML ="Дата и время для японской локали: " + today3.toLocaleString('ja-JP');
    out4.innerHTML ="Дата и время для тайской локали: " + today4.toLocaleString('th-TH');
}
    
function showDaysCount() {
    let today = new Date();
    let inputDate = document.querySelector('input[type=date');
    let birthday = new Date(inputDate.value);
    let daysCount = (today - birthday)/1000/60/60/24;
    daysCount = Math.floor(daysCount);
    let day = document.getElementById('days');
    day.innerHTML = 'Количество дней с дня рождения: ' + daysCount;
}
    
function Clear() {
    let inputDate = document.querySelector('input[type=date');
    let day = document.getElementById('days');
    
    inputDate.value = '';
    day.innerHTML = '';
}
    
function showTime() {
    let today = new Date();
    let currentTime = today.toLocaleTimeString('ru-RU');
    document.getElementById('clock').innerHTML = currentTime;
}
    setInterval(showTime, 1000);
    
function Vivid() {
    let out5 = document.getElementById('current-date5');
    let today5 = new Date();
    out5.innerHTML ="Дата и время для арабской локали: " + today5.toLocaleString('ar-AE');
}