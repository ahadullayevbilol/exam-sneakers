function showTime(){
    const days = document.querySelector(".day"),
        hours = document.querySelector(".hour"),
        minutes = document.querySelector(".minute"),
        seconds = document.querySelector(".seconds"),
        nextYear = new Date('2023-04-05'),
        currentTime = new Date(),
        diff = nextYear - currentTime,
        daysLeft = Math.floor(diff / 1000 / 60 / 60 / 24),
        hoursLeft = Math.floor(diff / 1000 / 60 / 60) % 24,  
        minutesLeft = Math.floor(diff / 1000 / 60) % 60,  
        secondsLeft = Math.floor(diff / 1000) % 60
    
    if(diff > 0) {
        days.innerText = daysLeft;
        hours.innerText = hoursLeft < 10 ? '0' + hoursLeft : hoursLeft;
        minutes.innerText = minutesLeft < 10 ? '0' + minutesLeft : minutesLeft;
        seconds.innerText = secondsLeft < 10 ? '0' + secondsLeft : secondsLeft;
    }else {
        days.innerText = '00'
        hours.innerText = '00'
        minutes.innerText = '00'
        seconds.innerText = '00'
    }    
}

setInterval(showTime, 1000)

showTime()