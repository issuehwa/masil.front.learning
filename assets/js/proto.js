//주소 파라미터값을 가져옵니다.
//사용법 => let params = ''.getParam('?');
String.prototype.getParam = function (flag) {
  var requestArr = (flag == '?' ? location.search : location.hash).split(flag);
  if (!requestArr || requestArr.length < 2) {
      return '';
  }

  var paramArr = requestArr[1].split('&');
  var result = {}, pArr;
  for (var i in paramArr) {
      pArr = paramArr[i].split('=');
      if (this == pArr[0]) {
          return pArr[1];
      }
      result[pArr[0]] = pArr[1];
  }

  return result;
};