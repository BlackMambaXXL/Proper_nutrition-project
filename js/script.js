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
                    element.classList.add('tabcontent__item_hiden');
                });
                tabContent[index].classList.remove('tabcontent__item_hiden');
            }
        });
        event.target.classList.add('tabheader__item_active');
    }
});

      