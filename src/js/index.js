require('../css/index.styl');

const App = require('./modules/app').default;
const Pjax = require('pjax');

console.log("Document initialized:", window.location.href)

document.addEventListener("pjax:send", function() {
  console.log("Event: pjax:send", arguments)
})

document.addEventListener("pjax:complete", function() {
  console.log("Event: pjax:complete", arguments)
})

document.addEventListener("pjax:error", function() {
  console.log("Event: pjax:error", arguments)
})

document.addEventListener("pjax:success", function() {
  console.log("Event: pjax:success", arguments);
  new App();
})

document.addEventListener("DOMContentLoaded", function() {
  var pjax = new Pjax({
    elements: 'a:not([data-open-window])',
    selectors: ['title', '#content']
  });
  new App();
});
