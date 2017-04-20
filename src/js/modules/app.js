import FastClick from 'fastclick';
import { scrollToY } from './scroll';
import Tabs from './tabs';
import Affix from './affix';

require('classlist-polyfill');
require('core-js/fn/array/for-each');

export default class App {
  constructor() {
    window.$ = jQuery;
    this.touch = false;
    this._initToggles();
    this._initFastClick();

    this.affix = new Affix();

    const anchorLinks = document.querySelectorAll('a[href="#"]');
    if (anchorLinks.length) {
      Array.prototype.forEach.call(anchorLinks, a => {
        a.addEventListener('click', (e) => e.preventDefault());
      });
    }

    this.cards = document.querySelector('.mhr-cards-container');
    this.hero = document.querySelector('.hero');
    this.main = document.querySelector('main');
    this.nav = document.querySelector('.primary-nav');
    this.scrollIndicator = document.querySelector('.scroll-indicator');
    this.navToggle = document.querySelector('[data-nav-toggle]');

    if (this.hero) {
      // Resize
      this._handleResize();
      this._handleResize = this._handleResize.bind(this);
      window.onresize = this._handleResize;

      // Scroll
      this._handleScroll();
      this._handleScroll = this._handleScroll.bind(this);
      window.onscroll = this._handleScroll;
      this._scrollWindowToTop = this._scrollWindowToTop.bind(this);
    }

    // Test for Touch Events
    const touch = ('ontouchstart' in window) ||
      (navigator.maxTouchPoints > 0) ||
      (navigator.msMaxTouchPoints > 0);

    // Navigation
    const event = touch ? 'touchstart' : 'click';
    if (this.navToggle) {
      this.navToggle.addEventListener(event, this._toggleMenu.bind(this));
    }

    this.tabs = new Tabs(event);

    if (touch) {
      document.body.classList.add('touch');
      document.body.classList.remove('no-touch');
    }
  }

  _toggleMenu() {
    if (this.nav.classList.contains('active')) {
      this.nav.classList.remove('active');
      this.navToggle.classList.remove('fa-close');
      this.navToggle.classList.add('fa-bars');
    } else {
      this.nav.classList.add('active');
      this.navToggle.classList.remove('fa-bars');
      this.navToggle.classList.add('fa-close');
    }
  }

  _handleResize() {
    this.heroDimensions = this.hero.getBoundingClientRect();
  }
  _handleScroll() {
    if (window.scrollY > (this.heroDimensions.height || window.height)) {
      this.scrollIndicator.classList.add('back-to-top');
      this.nav.classList.add('pin-bottom');
      this.scrollIndicator.addEventListener('click', this._scrollWindowToTop);
    } else {
      this.scrollIndicator.classList.remove('back-to-top');
      this.nav.classList.remove('pin-bottom');
      this.scrollIndicator.removeEventListener('click', this._scrollWindowToTop);
    }
  }
  _scrollWindowToTop() {
    scrollToY(0, 300, 'easeInOutQuint');
  }

  _initToggles() {
    const toggleGroups = document.querySelectorAll('.toggle-group');
    if (!toggleGroups.length) {
      return;
    }
    Array.prototype.forEach.call(toggleGroups, (tg) => {
      tg.querySelector('.toggle-group__header').addEventListener('click', () => {
        if (tg.classList.contains('open')) {
          tg.classList.remove('open');
        } else {
          Array.prototype.forEach.call(toggleGroups, (t) => t.classList.remove('open'));
          tg.classList.add('open');
        }
      });
    });
  }

  _initFastClick() {
    if ('addEventListener' in document) {
      document.addEventListener('DOMContentLoaded', () => {
        FastClick.attach(document.body);
      }, false);
    }
  }
}