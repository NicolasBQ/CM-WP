const grid_container = document.querySelector('.grid-container');

const loadGallery = () => {
    for(let i = 1; i < 84; i++) {
        grid_container.innerHTML += 
        `
            <div class="grid-element">
    <img src="assets/GalleryImgs/ImgMesasDeCentro/mdc_${i}.jpg" class="gallery-img" loading="lazy"/>
            </div>
        `
    };

}


document.addEventListener('DOMContentLoaded', loadGallery)


