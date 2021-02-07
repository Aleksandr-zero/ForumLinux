const blockItemsHistory = document.querySelector(".history__content__items");
const blockItemHistory = document.querySelector(".history__content-item");
const itemHistoryCount = document.querySelectorAll(".history__content-item").length;

const sliderBtnLeft = document.querySelector(".slider__btn__left");
const sliderBtnRight = document.querySelector(".slider__btn__right");

const imagesPopDistributions = document.querySelectorAll(".pop-distributions__content-item-img");

let position = 0;
let movePosition = 0;


// Подгрузка изображений
const options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
};

function handleImg(myImg, observer) {
    myImg.forEach(myImgSingle => {

        if (myImgSingle.intersectionRatio > 0) {
            loadImage(myImgSingle.target);
        };
    });
};

function loadImage(image) {
    image.src = image.getAttribute('data');
};

const observer = new IntersectionObserver(handleImg, options);

imagesPopDistributions.forEach(img => {
    observer.observe(img);
});


// Слайдер-карусель
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
