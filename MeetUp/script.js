const timerDisplay = document.querySelector('.header__countdown_value');
const dateNow = new Date();

function countDown(seconds) {
   /* const now = Date.now();*/
    const now = new Date();
    const dayEnd = now.toTimeString();
    console.log(now, dayEnd);
    timerDisplay.textContent = dayEnd;
}

function countDays() {
    const month = dateNow.getMonth();
    const todays = dateNow.getDate();
    let days = 30;
    if (month == 1) {
        days = 28 - todays;
    } else if (month==3 ||month==5||month==8||month==10) {
        days = 30 - todays;
    } else {
        days = 31 - todays;}
    console.log(days);
}

function countHours() {
    const hour = dateNow.getHours();
    const hoursLeft = 23 - hour;
    console.log(hoursLeft);
}

function countMinutes() {
    const minute = dateNow.getMinutes();
    const minutesLeft = 59 - minute;
    console.log(minutesLeft);
}

function countSeconds() {
    const second = dateNow.getSeconds();
    const secondsLeft = 59 - second;
    console.log(secondsLeft);
}

