const grid_container = document.querySelector('.grid-container');


const loadGallery = () => {
    for(let i = 1; i < 101; i++) {
        grid_container.innerHTML += 
        `
            <div class="grid-element">
    <img src="assets/GalleryImgs/ImgSofas/sofa_${i}.jpg" class="gallery-img" loading="lazy"/>
            </div>
        `
    };

}


document.addEventListener('DOMContentLoaded', loadGallery)