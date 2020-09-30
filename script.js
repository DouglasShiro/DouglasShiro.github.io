const TIME_WORK = 25
const TIME_REST = 5
const TIME_SECONDS = 60

let minutesId = document.getElementById('minutes')
let secondsId = document.getElementById('seconds')
let pomoText = document.getElementById('isWorking')
let minutes_work = TIME_WORK
let minutes_rest = TIME_REST
let isWorking = true
let seconds = 0

let interval

function _start_() {

    interval = setInterval(() => {
        if (seconds == 0) {
            isWorking = minutes_work ? true : false
            if (isWorking) {
                pomoText.innerHTML = '- Focus on your task!'
                minutesId.innerHTML = (--minutes_work).toString().padStart(2, '0')
            } else {
                pomoText.innerHTML = '- Rest!'
                minutesId.innerHTML = (--minutes_rest).toString().padStart(2, '0')
            }
            if (minutes_work == 0 && minutes_rest == 0) {
                minutes_work = TIME_WORK
                minutes_rest = TIME_REST
            }

            seconds = TIME_SECONDS
        }

        secondsId.innerHTML = (--seconds).toString().padStart(2, '0')
    }, 1000)
}

function _stop_() {
    clearInterval(interval)
}

function _reset_() {
    minutesId.innerHTML = '25'
    secondsId.innerHTML = '00'
    minutes_work = TIME_WORK
    minutes_rest = TIME_REST
    seconds = TIME_SECONDS
}
