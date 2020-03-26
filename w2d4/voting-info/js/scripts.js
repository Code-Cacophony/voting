$(document).ready(function(){
  $("form#form-age").submit(function(){
    event.preventDefault();
    var number1 = parseInt($("#age").val());
    $("#output").text(number1);
  
    if (number1 >= 18) {
        $("#adult").show();
    } else {
        $("#minor").show();
    }
  });
});