const appInit = () => {
    document.addEventListener("scroll", scrollSection);
    document.addEventListener("click", aboutInteraction);
};

const initMap = () => {
    const myLatLng = { lat: 4.671917748936838, lng: -74.07096308750127 };
    const map = new google.maps.Map(document.querySelector("[data-map]"), {
      center: myLatLng,
      mapId: "1cf93b3193b68e8b",
      zoom: 18,
    });
  
    new google.maps.Marker({
      position: myLatLng,
      map,
      title: "Clásicos Monserrate",
      icon: '../assets/svg/location.svg',
    });
  };

  const blockElements = () => {
    // NAVEGATION ELEMENTS //
    const headerLink = document.querySelector("[data-navBar-home]");
    const aboutLink = document.querySelector("[data-navBar-about]");
    const servicesLink = document.querySelector("[data-navBar-services]");
    const productsLink = document.querySelector("[data-navBar-products]");
    const contactLink = document.querySelector("[data-navBar-contact]");
    // SECTION ELEMENTS //
    const headerSection = document.querySelector("[data-section-header]");
    const aboutSection = document.querySelector("[data-section-about]");
    const servicesSection = document.querySelector("[data-section-services]");
    const productsSection = document.querySelector("[data-section-products]");
    const contactSection = document.querySelector("[data-section-contact]");
    // ABOUT SECTION DOM ELEMENTS //
    const aboutContentHide = document.querySelector("[data-about-hide]");
    const aboutDots = document.querySelector("[data-about-dots]");
    // GALLERY ELEMENTS //
    const galleryOverlay = document.querySelector("[data-gallery-overlay]");
    const galleryContainer = document.querySelector("[data-gallery-container]");
    const closeBtn = document.querySelector("[data-gallery-close]");
    const sliderContainer = document.querySelector("[data-slider-container]");
    const sliderElements = document.querySelectorAll("[data-slider-element]");
    const rightArrow = document.querySelector("[data-slider-rightArrow]");
    const leftArrow = document.querySelector("[data-slider-leftArrow]");
    const bullets = document.querySelectorAll("[data-bullet]");
  
    return {
      //NAVEGATION//
      headerLink,
      aboutLink,
      servicesLink,
      productsLink,
      contactLink,
      //SECTIONS//
      headerSection,
      aboutSection,
      servicesSection,
      productsSection,
      contactSection,
      //ABOUT//
      aboutContentHide,
      aboutDots,
      // GALLERY //
      galleryOverlay,
      galleryContainer,
      closeBtn,
      sliderContainer,
      sliderElements,
      rightArrow,
      leftArrow,
      bullets,
    };
  };

  const aboutInteraction = (e) => {
    let isReadBtn = e.target.matches("[data-showMore-button]");
    if (!isReadBtn) return;
  
    if (isReadBtn) {
      blockElements().aboutContentHide.classList.toggle(
        "about-section__content-show"
      );
      blockElements().aboutDots.classList.toggle(
        "about-section__content-dots-unactive"
      );
  
      if (e.target.innerText === "LEER MÁS...") {
        e.target.innerText = "LEER MENOS";
      } else {
        e.target.innerText = "LEER MÁS...";
      }
    }
  };

  class SectionElements {
    constructor(section, linkElement) {
      this.section = section;
      this.linkElement = linkElement;
    }
  }
  
  const scrollSection = () => {
    const sectionsElements = [
      new SectionElements(
        blockElements().headerSection,
        blockElements().headerLink
      ),
      new SectionElements(
        blockElements().aboutSection,
        blockElements().aboutLink
      ),
      new SectionElements(
        blockElements().servicesSection,
        blockElements().servicesLink
      ),
      new SectionElements(
        blockElements().servicesSection,
        blockElements().servicesLink
      ),
      new SectionElements(
        blockElements().productsSection,
        blockElements().productsLink
      ),
      new SectionElements(
        blockElements().contactSection,
        blockElements().contactLink
      ),
    ];
  
    sectionsElements.forEach((element) => {
      let isInVp = isInViewPort(element.section);
      if (isInVp) {
        element.linkElement.classList.add("navegation-links__link-active");
      } else {
        element.linkElement.classList.remove("navegation-links__link-active");
      }
    });
  };
  
  const isInViewPort = (element) => {
    const rect = element.getBoundingClientRect();
  
    return (
      rect.top <= 190 &&
      rect.top >= -1 * (element.offsetHeight - element.offsetHeight * 0.15)
    );
  };

  document.addEventListener("DOMContentLoaded", initMap);
document.addEventListener("DOMContentLoaded", appInit);
  