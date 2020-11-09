window.addEventListener("DOMContentLoaded", () => {

    //First part practice TABS

    const
        tabs = document.querySelectorAll(".tabheader__item"),
        tabsContent = document.querySelectorAll(".tabcontent"),
        tabsParent = document.querySelector(".tabheader__items");

    function hideTabContent() {
        tabsContent.forEach(item => {
            item.classList.add("hide");
            item.classList.remove("show", "fade");
        });

        tabs.forEach(item => {
            item.classList.remove("tabheader__item_active");
        });
    }

    function showTabContent(i = 0) {
        tabsContent[i].classList.add("show", "fade");
        tabsContent[i].classList.remove("hide");
        tabs[i].classList.add("tabheader__item_active");
    }

    hideTabContent();
    showTabContent();

    tabsParent.addEventListener('click', (event) => {
        const target = event.target;

        if (target && target.classList.contains("tabheader__item")) {
            tabs.forEach((item, i) => {
                if (target == item) {
                    hideTabContent();
                    showTabContent(i);
                }
            });
        }
    });


    //Part 2 practice TIMER

    const deadLine = "2022-10-14 00:01:01 GMT+0200";
    // const deadLine = "Oct 14, 2020 00:00:01 GMT+0200";

    function getTimeRemaining(endtime) {
        const t = Date.parse(endtime) - Date.parse(new Date()),
            days = Math.floor(t / (1000 * 60 * 60 * 24)),
            hours = Math.floor((t / (1000 * 60 * 60)) % 24),
            minutes = Math.floor((t / 1000 / 60) % 60),
            seconds = Math.floor((t / 1000) % 60);

        return {
            'total': t,
            'days': days,
            'hours': hours,
            'minutes': minutes,
            'seconds': seconds
        };

    }

    function getZero(num) {
        if (num >= 0 && num < 10) {
            return `0${num}`;
        } else {
            return num;
        }
    }

    function setClock(selector, endtime) {
        const timer = document.querySelector(selector),
            days = document.querySelector("#days"),
            hours = document.querySelector("#hours"),
            minutes = document.querySelector("#minutes"),
            seconds = document.querySelector("#seconds"),
            timeInterval = setInterval(updateClock, 500);

        updateClock();

        function updateClock() {
            const t = getTimeRemaining(endtime);

            days.innerHTML = getZero(t.days);
            hours.innerHTML = getZero(t.hours);
            minutes.innerHTML = getZero(t.minutes);
            seconds.innerHTML = getZero(t.seconds);

            if (t.total <= 0) {
                clearInterval(timeInterval);
                days.innerHTML = 0;
                hours.innerHTML = 0;
                minutes.innerHTML = 0;
                seconds.innerHTML = 0;
            }
        }
    }

    setClock(".timer", deadLine);


    //Part 3 practice MODAL

    function closeModal() {
        modal.classList.add("hide");
        modal.classList.remove('show');
        document.body.style.overflow = "";
    }

    function openModal() {
        //open modal
        modal.classList.add("show");
        modal.classList.remove('hide');
        document.body.style.overflow = "hidden";
        //if use this function clear timer
        clearInterval(modalTimerId);
        //if use this function remove event for scroll
        window.removeEventListener("scroll",showModalByScroll);
    }
    //3.1 Only one button
    const
        modalTrigger = document.querySelector("[data-modal]"),
        modal = document.querySelector(".modal"),
        modalCloseBtn = document.querySelector("[data-close]");

    // modalTrigger.addEventListener("click", e => {
    //     modal.classList.toggle("show");
    //     document.body.style.overflow = "hidden";
    // });

    // modalCloseBtn.addEventListener("click", e => {
    //     modal.classList.toggle("show");
    //     document.body.style.overflow = "";
    // });

    //3.2 All buttons
    const modalTriggerAll = document.querySelectorAll("[data-modal]");

    modalTriggerAll.forEach(btn => {
        btn.addEventListener("click", openModal);
        modalCloseBtn.addEventListener("click", closeModal);
    }); 



    //3.3 Close modal if outside click 

    modal.addEventListener("click", (e) => {
        if (e.target === modal) {
            closeModal();
        }
    });

    //Close modal if use "ESCAPE"
    document.addEventListener("keydown", (e) => {
        if (e.code === "Escape" && modal.classList.contains("show")) {
            closeModal();
        }
    });

    //3.4 SetTimeOut show modal aafter 5 sec
    const modalTimerId = setTimeout(openModal, 5000);

    //3.5 window
    function showModalByScroll(){
        if(window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight){
            openModal();
            window.removeEventListener("scroll",showModalByScroll);
        }
    }
    window.addEventListener("scroll",showModalByScroll);
});