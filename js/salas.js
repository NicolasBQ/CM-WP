const grid_container = document.querySelector('.grid-container');


const loadGallery = () => {
    for(let i = 1; i < 104; i++) {
        grid_container.innerHTML += 
        `
            <div class="grid-element">
    <img src="assets/GalleryImgs/ImgSalas/sala_${i}.jpg" class="gallery-img" loading="lazy"/>
            </div>
        `
    };

}


document.addEventListener('DOMContentLoaded', loadGallery)