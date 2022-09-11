const swiper_wrapper = document.querySelector('.swiper-wrapper');

const loadGallery = () => {
    for(let i = 1; i < 132; i++) {
        swiper_wrapper.innerHTML += 
        `
            <div class="swiper-slide">
                <img src="assets/GalleryImgs/ImgComedores/comedores_${i}.jpg" class="swiper-lazy gallery-img" loading="lazy"/>
            </div>
        `
    };

    const swiper = new Swiper('.swiper', {
        lazy: true,
        pagination: {
            el: '.swiper-pagination',
            dynamicBullets: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        }
    })
}


document.addEventListener('DOMContentLoaded', loadGallery)