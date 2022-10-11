const grid_container = document.querySelector('.grid-container');
const regular_file = new RegExp('.jpg');

const loadGallery = () => {
    for(let i = 1; i < 68; i++) {
        grid_container.innerHTML += 
        `
            <div class="grid-element">
                <img src="assets/GalleryImgs/ImgAlcobas/alcobas_${i}.jpg" class="gallery-img" loading="lazy"/>
            </div>
        `
    };
}


document.addEventListener('DOMContentLoaded', loadGallery)


