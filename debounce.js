export default function debounce(fn, wait, immediate=false) {
  var timeout;
  var result;

  var debounced = function(){
    var context = this;
    var args = arguments;
    var callNow = immediate && !timeout;

    clearTimeout(timeout);
    timeout = setTimeout(function() {
      timeout = null;
      if(!immediate){
        result = fn.apply(context, args);
      }
    }, wait);

    if(callNow) {
      result = fn.apply(context, args);
    }

    return result;
  };

  debounced.cancel = function() {
    clearTimeout(timeout);
    timeout = null;
  };

  return debounced;
}