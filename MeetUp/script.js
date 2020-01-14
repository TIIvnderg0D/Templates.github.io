const DaysDisplay = document.getElementById('daysLeft');
const HoursDisplay = document.getElementById('hoursLeft');
const MinutesDisplay = document.getElementById('minutesLeft');
const SecondsDisplay = document.getElementById('secondsLeft');

function countDays() {
    setInterval(() => {
    const dateNow = new Date();
    const month = dateNow.getMonth();
    const todays = dateNow.getDate();
    let days = 30;
    if (month == 1) {
        days = 28 - todays;
    } else if (month==3 ||month==5||month==8||month==10) {
        days = 30 - todays;
    } else {
        days = 31 - todays;}
    days >= 10 ? DaysDisplay.textContent = days : DaysDisplay.textContent = '0'+ days;
    }, 1000);
}

function countHours() {
    setInterval(() => {
        const dateNow = new Date();
        const hour = dateNow.getHours();
        var hoursLeft = 23 - hour;
        if (hour === 0) {
            hoursLeft = 23;
        }
        hoursLeft >= 10 ? HoursDisplay.textContent = hoursLeft : HoursDisplay.textContent = '0'+ hoursLeft;
    }, 1000)
}

function countMinutes() {  
    setInterval(() => {
        const dateNow = new Date();
        const minute = dateNow.getMinutes();
        var minutesLeft = 59 - minute;
            if (minute === 0) {
                minutesLeft = 0;
            }
        minutesLeft >= 10 ? MinutesDisplay.textContent = minutesLeft : nutesDisplay.textContent = '0'+ minutesLeft;    
    }, 1000)
}

function countSeconds() {
    setInterval(() => {
        const dateNow = new Date();
        const second = dateNow.getSeconds();
        var secondsLeft = 60 - second;
        if (second === 0) {
            secondsLeft = 0;
        }
        secondsLeft >= 10 ? SecondsDisplay.textContent = secondsLeft : SecondsDisplay.textContent = '0'+ secondsLeft;
    }, 1000)
}

function start() {
    countDays();
    countHours();
    countSeconds();
    countMinutes();
}


document.addEventListener("DOMContentLoaded" , start);
