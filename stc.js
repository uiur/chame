// ASCII文字列をRGB色に変換する

var strToColor = function (str) {
  return rgbToColor(strToRGB(str));
};

var strToRGB = function (str) {
  var i,c,a;
  var r = 0, g = 0, b = 0;
  for (i = 0; i < str.length; i++) {
    c = str.charCodeAt(i);
    a = asciiToRGB(c);
    r += a[0]; g += a[1]; b += a[2];
  }

  r /= str.length;
  g /= str.length;
  b /= str.length;

  return [r,g,b];
};

var asciiToColor = function (c) {
  return rgbToColor(asciiToRGB(c));
};

var asciiToRGB = function (c) {
  var h = 22.5 * (c % 16), s = 0.1*(c/16) + 0.3, v = 1.0;
  var h_i = Math.floor(h/60.0);
  var f = (h/60.0) - h_i;
  var p = v*(1-s), q = v*(1-f*s),  t = v*(1-(1-f)*s);
  var rgb = [[v,t,p],[q,v,p],[p,v,t],[p,q,v],[t,q,v],[v,p,q]];
  var r = ~~(255*(rgb[h_i][0])), g = ~~(255*(rgb[h_i][1])), b = ~~(255*(rgb[h_i][2]));

  return [r,g,b];
};

var rgbToColor = function (rgb) {
  var str = '#'
  rgb.forEach(function(a) {
    str += intToHex(a);
  });

  return str;
};

var intToHex = function (i) {
  var str = i.toString(16);
  return i < 16 ? "0" + str : str
};

var charToRGB = function (char) {
  return asciiToRGB(char.charCodeAt(0));
};

$(function () {
  $('#textbox').keyup(function(){
    str = $('#textbox').val();
    color = strToColor(str);
    
    $('#result').html("<p><font size='42' color='" + color + "'>" + str + "</font></p>");
  });
});
