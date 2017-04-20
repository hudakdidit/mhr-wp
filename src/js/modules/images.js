export default {
  init() {
    this.images = [].slice.call(document.querySelectorAll('.lightbox-link'));
    if (this.images.length) {
      this._initLightBox();
    }
  },

  _initLightBox() {
    this.images.forEach(img => {
      img.addEventListener('click', () => {
        const href = img.getAttribute('href');
        const lightbox = document.createElement('div');
        lightbox.classList.add('lightbox');
        const image = document.createElement('img');
        lightbox.appendChild(image);
        image.onload = () => {
          document.body.appendChild(lightbox);
        };
        image.src = href;
      });
    });
  },
};
