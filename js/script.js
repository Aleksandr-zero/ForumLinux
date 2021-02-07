let blockItemsHistory = document.querySelector(".history__content__items");
let blockItemHistory = document.querySelector(".history__content-item");
let itemHistoryCount = document.querySelectorAll(".history__content-item").length;

let sliderBtnLeft = document.querySelector(".slider__btn__left");
let sliderBtnRight = document.querySelector(".slider__btn__right");

let position = 0;
let movePosition = 0;

let menuBtn = document.querySelector(".header__burger-btn")
let sidebar = document.querySelector(".sidebar")


if (sliderBtnLeft || sliderBtnRight) {
    sliderBtnLeft.addEventListener("click", function() {
        position--;
        movePosition += 105.5;
    
        blockItemsHistory.style.transform = `translateX(${movePosition}%)`;
    
        checkBtns();
    });
    
    sliderBtnRight.addEventListener("click", function() {
        position++;
        movePosition -= 105.5;
    
        blockItemsHistory.style.transform = `translateX(${movePosition}%)`;
    
        checkBtns();
    });
}

function checkBtns() {
    if (position == itemHistoryCount - 1) {
        sliderBtnRight.classList.add("hide");
    }

    else if (position == 1) {
        sliderBtnLeft.classList.remove("hide");
        sliderBtnRight.classList.remove("hide");
    }

    else if (position == 0) {
        sliderBtnLeft.classList.toggle("hide");
    };
};

// измеряем размеры экрана чтобы обратно вернуть прежнее состояние "itemsHistory"
window.addEventListener("resize", function(){

    if (blockItemsHistory.clientWidth >= 423) {

        // чтобы "blockItemsHistory" не изменялось в состояние "карусели"
        if (blockItemHistory.clientWidth <= 200) {
            blockItemsHistory.style.removeProperty("transform");

            // возвращаем в прежнее состояние
            position = 0;
            movePosition = 0;
            sliderBtnLeft.classList.add("hide");
            sliderBtnRight.classList.remove("hide");
        }
    };
});


menuBtn.addEventListener("click", function() {
    sidebar.classList.toggle("active");
    menuBtn.classList.toggle("active-btn");
});

