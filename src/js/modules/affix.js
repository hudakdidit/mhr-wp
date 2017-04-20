export default class Affix {
  constructor() {
    this.affixElement = document.querySelector('[data-affix]');
    this.affixContainer = document.querySelector('[data-affix-container]');
    if (!this.affixElement && !this.affixContainer) {
      return;
    }
    this._handleResize = this._handleResize.bind(this);
    window.resize = this._handleResize;
    this._handleResize();
    this._handleScroll = this._handleScroll.bind(this);
    window.onscroll = this._handleScroll;
  }

  _handleResize() {
    this.affixElementOffsetWidth = this.affixElement.offsetWidth;
    this.affixElementOffsetTop = this.affixElement.offsetTop;
    this.affixElementOffsetHeight = this.affixElement.offsetHeight;
  }

  _handleScroll() {
    const scrollY = window.scrollY;
    if (scrollY > this.affixElementOffsetTop &&
      (scrollY + window.innerHeight) <
      (this.affixContainer.offsetTop + this.affixContainer.offsetHeight)) {
      this.affixElement.classList.add('affix');
      this.affixElement.style.width = `${this.affixElementOffsetWidth}px`;
    } else {
      this.affixElement.classList.remove('affix');
      this.affixElement.removeAttribute('style');
    }
  }
}
