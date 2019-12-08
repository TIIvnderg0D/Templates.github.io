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
    //console.log(days);
    DaysDisplay.textContent = days;
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
        //console.log(hoursLeft);
        HoursDisplay.textContent = hoursLeft;
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
        //console.log(minutesLeft);
        MinutesDisplay.textContent = minutesLeft;
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
        //console.log(secondsLeft);
        SecondsDisplay.textContent = secondsLeft;
    }, 1000)
}

