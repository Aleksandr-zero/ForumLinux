const body = document.querySelector("body");

const menuBtn = document.querySelector(".header__burger-btn");
const headerOther = document.querySelector(".header__other");
const sidebar = document.querySelector(".sidebar");

const btnsRegistration = document.querySelectorAll(".link-registration");
const btnsSign = document.querySelectorAll(".link-sign-in");
const closeBtnRegistration = document.querySelector(".window-registration-close-btn");
const closeBtnSign = document.querySelector(".window-sign-close-btn");

let block_is_lockingPaddings = document.querySelectorAll(".lock-padding");

const windowRegistration = document.querySelector(".window-registration");
const windowSign = document.querySelector(".window-sign");

let timeout = 600;

// задаём счётчик для того, чтобы отсчитывать если мы будем открывать окно регистрации/войти
// когда уже будет открыто окно регистрации/войти, чтобы не было тряски контента при вызове
// функции "clearRightPadding"
let score = 1;


menuBtn.addEventListener("click", function() {
    sidebar.classList.toggle("active");
    menuBtn.classList.toggle("active-btn");
});

check_WindowResize_for_HeaderOther()

window.addEventListener("resize", check_WindowResize_for_HeaderOther);


// Итерируем, так как кнопки регистрации и войти на странице не одни
btnsRegistration.forEach(btnRegistration => {
    btnRegistration.addEventListener("click", function() { opensWindow_Registration_Sign(pointerWindow = windowRegistration) });
});

btnsSign.forEach(btnSign => {
    btnSign.addEventListener("click", function() { opensWindow_Registration_Sign(pointerWindow = windowSign) });
});


closeBtnRegistration.addEventListener("click", function() { closesWindow_Registration_Sign(window = windowRegistration) });
closeBtnSign.addEventListener("click", function() { closesWindow_Registration_Sign(window = windowSign) });


function opensWindow_Registration_Sign(pointerWindow) {
    let lockPaddingScroll = window.innerWidth - document.querySelector(".window-registration").offsetWidth;

    pointerWindow.classList.toggle("window-open");

    if (pointerWindow == windowRegistration) {
        if (windowSign.classList.contains("window-open")) {
            windowSign.classList.toggle("window-open");
            score++;
        };
    } 
    else if (pointerWindow == windowSign) {
        if (windowRegistration.classList.contains("window-open")) {
            windowRegistration.classList.toggle("window-open");
            score++;
        };
    };

    if (score == 1) {
        clearRightPadding(rightPaddingCount = lockPaddingScroll);
    };
};


function closesWindow_Registration_Sign(window) {
    window.classList.toggle("window-open");

    if (score > 1) {
        score = 1;
    };

    setTimeout(function() { clearRightPadding(rightPaddingCount = 0) }, timeout);
    setTimeout( () => {
        window.querySelectorAll("input").forEach(fieldInput => {
            fieldInput.value = "";
        });
    }, timeout);
};


function check_WindowResize_for_HeaderOther() {
    if (window.innerWidth < 821) {
        headerOther.classList.add("lock-padding");
    }

    else if (window.innerWidth > 821) {
        headerOther.classList.remove("lock-padding");
    };

    block_is_lockingPaddings = document.querySelectorAll(".lock-padding");
};


function clearRightPadding(rightPaddingCount) {
    for (let index = 0; index < block_is_lockingPaddings.length; index++) {
        const elementLock = block_is_lockingPaddings[index];
        elementLock.style.paddingRight = rightPaddingCount + "px";
    };

    body.style.paddingRight = rightPaddingCount + "px";
    body.classList.toggle("lock");
};
