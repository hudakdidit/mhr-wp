require('../css/index.styl');

const App = require('./modules/app').default;
const Nav = require('./modules/nav').default;
const Pjax = require('pjax');

let currentApp = new App();

document.addEventListener("pjax:send", function() {
  console.log("Event: pjax:send", arguments)
})

document.addEventListener("pjax:complete", function() {
  console.log("Event: pjax:complete", arguments);
  currentApp = undefined; // clean up
  currentApp = new App();
  Nav.setActiveNavItem();
})

document.addEventListener("pjax:error", function() {
  console.log("Event: pjax:error", arguments)
})

document.addEventListener("pjax:success", function() {
  console.log("Event: pjax:success", arguments);
  Nav.setActiveNavItem();
})

document.addEventListener("DOMContentLoaded", function() {
  var pjax = new Pjax({
    elements: 'a:not([data-open-window]):not([data-popup])',
    selectors: ['title', '#content']
  });
  Nav.init();
  Nav.setActiveNavItem();
});
