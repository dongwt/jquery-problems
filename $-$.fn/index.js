//$拓展的方法是静态方法
//$.fn拓展的方法是实例方法  jQuery.fn = jQuery.prototype = {......},

$.getInputValById = function(){
  var result = $('[id="fn"]').val();
  console.log("getInputValById:" + result);
}

$.getInputValById();


$.fn.getInputVal = function(){
  var result = $(this).val();
  console.log("getInputVal:" + result);
}

$('#fn').getInputVal();