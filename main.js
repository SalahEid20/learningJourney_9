let     sliderImgs = Array.from(document.querySelectorAll('.slider-container img')),
        slidesCount = sliderImgs.length,
        currentSlide = 1,
        slideNumberElement = document.getElementById('slide-number'),
        prevBtn = document.getElementById('prev'),
        nextBtn = document.getElementById('next'),
        imgsList = document.querySelector('.imgs-list ul');

for (let i = 1; i <= slidesCount; i++) {
    let li = document.createElement('li'),
        slideNo = document.createTextNode(`${i}`);
    li.appendChild(slideNo);
    li.dataset.index = i;
    if (i != 1) {
        imgsList.appendChild(li);
    } else {
        li.className = 'current';
        imgsList.appendChild(li);
    };
};

let indicators = Array.from(document.querySelectorAll('.imgs-list ul li'));
slideNumberElement.innerHTML = `Slide #${currentSlide} of ${slidesCount}`;
prevBtn.classList.add('disabled');

indicators.map(function (indicator) {
    indicator.onclick = function () {
        currentSlide = parseInt(indicator.dataset.index);
        addActiveAndDisabledClass()
    };
});

nextBtn.onclick = nextSlide;
prevBtn.onclick = prevSlide;

function nextSlide() {
    if (currentSlide < slidesCount) {
        currentSlide++;
        addActiveAndDisabledClass();
    };
};

function prevSlide() {
    if (currentSlide > 1) {
        currentSlide--;
        addActiveAndDisabledClass();
    };
};

function removeActiveClass() {
    sliderImgs.forEach((img) => {
        if (img.classList.contains("active")) {
            img.classList.remove("active");
        };
    });
    indicators.forEach((indicator) => {
        if (indicator.classList.contains("current")) {
            indicator.classList.remove("current");
        };
    });
};

function addActiveAndDisabledClass() {
    removeActiveClass();
    slideNumberElement.innerHTML = `Slide #${currentSlide} of ${slidesCount}`;
    sliderImgs[currentSlide - 1].className = "active";
    indicators[currentSlide - 1].className = "current";
    if(currentSlide == 1) {
        prevBtn.classList.add('disabled');
    } else {
        prevBtn.classList.remove('disabled');
    };
    if(currentSlide == slidesCount) {
        nextBtn.classList.add('disabled');
    } else {
        nextBtn.classList.remove('disabled');
    };
};

