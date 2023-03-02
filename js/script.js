window.addEventListener('DOMContentLoaded', () => {
    // Tabs
    const tabsMenuWrapper = document.querySelector('.tabheader__items'),
      tabsMenuBody = document.querySelectorAll('.tabheader__item'),
      tabContent = document.querySelectorAll('.tabcontent');

    tabsMenuWrapper.addEventListener('click', (event) => {
        event.preventDefault();
        if (event.target && event.target.matches('div.tabheader__item')) {
            tabsMenuBody.forEach((element, index) => {
                element.classList.remove('tabheader__item_active');
                if (event.target == element) {
                    tabContent.forEach(element => {
                        element.classList.add('hide');
                    });
                    tabContent[index].classList.remove('hide');
                    tabContent[index].classList.add('fade');
                }
            });
            event.target.classList.add('tabheader__item_active');
        }
    });
    // Timer
    const deadLine = '2023-03-20';
    function getTimeRemaining(endTime) {
        const t = Date.parse(endTime) - Date.parse(new Date()),
              days = Math.floor(t / (1000 * 60 * 60 * 24)),
              hours = Math.floor((t / (1000 * 60 * 60) % 24)),
              minutes = Math.floor((t / 1000 / 60) % 60),
              seconds = Math.floor((t / 1000) % 60);
        return {
            'total': t,
            'days': days,
            'hours': hours,
            'minutes': minutes,
            'seconds': seconds,
        };
        
    }
    
    function setTimer(selector, endTime) {
        const timer = document.querySelector(selector),
              days = timer.querySelector('#days'),
              hours = timer.querySelector('#hours'),
              minutes = timer.querySelector('#minutes'),
              seconds = timer.querySelector('#seconds'),
              timeInterval = setInterval(updateTimer, 1000);

        function updateTimer() {
            const t = getTimeRemaining(endTime);

            days.innerHTML = t.days;
            hours.innerHTML = t.hours;
            minutes.innerHTML = t.minutes;
            seconds.innerHTML = t.seconds;

            if (t.total < 0) {
                clearInterval(timeInterval);
            }
        }
    }
    setTimer('.timer', deadLine);
});

      