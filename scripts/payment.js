(function(window) {
  "use strict";
  var FORM_SELECTOR = "[data-payment='form']";
  var TO_WORK_ON_DIV = "[data-onsubmit-pop='Thank']";
  var App = window.App;
  var FormHandler = App.FormHandler;
  var formHandler = new FormHandler(TO_WORK_ON_DIV);
  formHandler.addSubmitHandler(function() {});
})(window);
