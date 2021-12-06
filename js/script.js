const hour = document.querySelector('.h'),
    min = document.querySelector('.m'),
    sec = document.querySelector('.s'),
    hoursNum = document.querySelector('.hours'),
    minutesNum = document.querySelector('.minutes')

function clock() {
    let time = new Date()
    let second = time.getSeconds() * 6
    let minutes = time.getMinutes() * 6
    let hours = time.getHours() * 30

    sec.style.transform = `rotate(${second}deg)`
    min.style.transform = `rotate(${minutes}deg)`
    hour.style.transform = `rotate(${hours}deg)`


    hoursNum.innerHTML = time.getHours() < 10 ? '0' + time.getHours() : time.getHours()
    minutesNum.innerHTML = time.getMinutes() < 10 ? "0" + time.getMinutes() : time.getMinutes()

    setTimeout(() => clock(), 1000);

}
console.log(clock());

const tabsContentItem = document.querySelectorAll('.tabsContentItem'),
    tabsItem = document.querySelectorAll('.tabsItem')

// tabsItem.forEach(el => {
//     el.addEventListener('click', () => {
//         console.log(el);
//         el.classList.add('active')

//     })
// })
for (let i = 0; i < tabsItem.length; i++) {
    tabsItem[i].addEventListener('click', () => {
        for (let j = 0; j < tabsItem.length; j++) {
            tabsItem[j].classList.remove('active')
            tabsContentItem[j].classList.remove('active')
        }
        tabsItem[i].classList.add('active')
        tabsContentItem[i].classList.add('active')
    })
}




// sekundomer 


const stopwatch__hours = document.querySelector('.stopwatch__hours'),
stopwatch__minutes = document.querySelector('.stopwatch__minutes'),
stopwatch__seconds = document.querySelector('.stopwatch__seconds'),
    stopwatch__btn = document.querySelector('.stopwatch__btn'),
    tabsLink__span = document.querySelector('.tabsLink__span')
    
    stopwatch__btn.addEventListener('click', function () {
        if (stopwatch__btn.innerHTML== 'start') {
            stopwatch__btn.innerHTML = 'stop'
            tabsLink__span.classList.add('active')
        }else if (stopwatch__btn.innerHTML== 'stop') {
            stopwatch__btn.innerHTML = 'clear'
            tabsLink__span.classList.add('active_clear')
        }else if (stopwatch__btn.innerHTML== 'clear'){
            stopwatch__btn.innerHTML ='start'
            tabsLink__span.classList.remove('active')
            tabsLink__span.classList.remove('active_clear')
        }
    })    
    
    
    function watch() {
        if (stopwatch__btn.innerHTML == 'stop') {
            stopwatch__seconds.innerHTML++
            if (stopwatch__seconds.innerHTML > 59) {
                stopwatch__seconds.innerHTML = 0
                stopwatch__minutes.innerHTML++
                if (stopwatch__minutes.innerHTML > 59) {
                    stopwatch__minutes.innerHTML = 0
                    stopwatch__hours.innerHTML++
                }
            }
        }else if (stopwatch__btn.innerHTML == 'start') {
            stopwatch__seconds.innerHTML = 0
            stopwatch__minutes.innerHTML = 0
            stopwatch__hours.innerHTML = 0
        }
        setTimeout(() => {
            watch()
        }, 1000);
    }
    watch()




