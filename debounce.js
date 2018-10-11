export default function debounce(fn, wait) {
  var timeout;
  var result;

  var debounced = function(){
    var context = this;
    var args = arguments;

    clearTimeout(timeout);
    timeout = setTimeout(function() {
      result = fn.apply(context, args);
    }, wait);

    return result;
  };

  debounced.cancel = function() {
    clearTimeout(timeout);
  };

  return debounced;
}