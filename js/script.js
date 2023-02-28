window.addEventListener('DOMContentLoaded', () => {
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
});

      