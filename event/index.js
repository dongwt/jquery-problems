$(document).on("mouseover", "#btn1", function (event) {
  var $this = $(event.currentTarget);
  var e = $.Event("btn1.hover");
  $this.trigger(e);

  if (e.isDefaultPrevented()) {
    console.log("btn1.hover  isDefaultPrevented");
  }
});

$("#btn1").on("btn1.hover", function (event) {
  event.preventDefault();
  console.log("btn1.hover");
});


$(document).on("click.test", "#btn3", function () {
  console.log("click.test");
});

$(document).on("keydown", "#text1", function (e) {
  console.log(e.type + ': ' + e.which);
});

