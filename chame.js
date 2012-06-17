// ASCII文字列をRGB色に変換する

String.prototype.toRGBCode = (function () {
  // ASCII文字コードをRGB値に変換
  var charToRGB = function (c) {
    var h = 22.5 * (c % 16), s = 0.1*(c/16) + 0.3, v = 1.0;
    var h_i = Math.floor(h/60.0);
    var f = (h/60.0) - h_i;
    var p = v*(1-s), q = v*(1-f*s),  t = v*(1-(1-f)*s);
    var rgb = [[v,t,p],[q,v,p],[p,v,t],[p,q,v],[t,q,v],[v,p,q]];
    var r = ~~(255*(rgb[h_i][0])), g = ~~(255*(rgb[h_i][1])), b = ~~(255*(rgb[h_i][2]));

    return [r,g,b];
  };

  // ASCII文字列をRGB値に変換
  var strToRGB = function (str) {
    var i,c,a;
    var r = 0, g = 0, b = 0;
    for (i = 0; i < str.length; i++) {
      c = str.charCodeAt(i);
      a = charToRGB(c);
      r += a[0]; g += a[1]; b += a[2];
    }

    r = ~~(r / str.length);
    g = ~~(g / str.length);
    b = ~~(b / str.length);

    return [r,g,b];
  };

  var rgbToRGBCode = function (rgb) {
    return '#' + rgb.map(intToHex).join('');
  };

  var intToHex = function (i) {
    var str = i.toString(16);
    return i < 16 ? "0" + str : str
  };

  var strToRGBCode = function () {
    return rgbToRGBCode(strToRGB(this));
  };

  return strToRGBCode;
}());
