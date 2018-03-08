(function(window) {
  "use strict";
  var App = window.App || {};
  var $ = window.jQuery;

  function FormHandler(selector) {
    if (!selector) {
      throw new Error("No selector provided");
    }
    this.$formElement = $(selector);
    if (this.$formElement.length === 0) {
      throw new Error("Could not find element with selector: " + selector);
    }
  }
  FormHandler.prototype.addSubmitHandler = function() {
    console.log("Setting submit handler for form");
    this.$formElement.on("submit", function(event) {
      event.preventDefault();
      var data = {};
      $(this).serializeArray().forEach(function(item) {
        data[item.name] = item.value;
        console.log(item.name + " is " + item.value);
        //console.log("data[title] : " + data["title"]);
        //console.log("data[username] : " + data["username"]);
      });
      //console.log(data);
      this.reset();

      function msg_div(msg) {
        // Constructor code will go here
        var $div = $("<div></div>", {
          "id": "msg_ind",
          "data-msg-div": "msg",
          "class": "inner_msg"
        });

        var $label = $("<label></label>");

        var description = "Thank you for your payment," + data["title"] + " " + data["username"];

        $label.append(description);
        $div.append($label);
        this.$element = $div;
      }

    });
  };
  App.FormHandler = FormHandler;
  window.App = App;
})(window);
