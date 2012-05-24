$(function () {
  var c, s;
  $('#textbox').keyup(function(){
    var str = $('#textbox').val(),
        color = str.toRGBCode();

    $('#result').html("<p><font size='42' color='" + color + "'>" + str + "</font></p>");
  });
  
  for (c = 'A'.charCodeAt(0); c <= 'z'.charCodeAt(0); c++) {
    s = String.fromCharCode(c);
    $('#ascii').append("<tr></tr>").append("<td><font color='" + s.toRGBCode() + "'>" + s + "</font></td>");
  }
});
