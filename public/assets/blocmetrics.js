var blocmetrics = (function() {
  var my = {};
  var _bm_event = {};

  my.track = function(name, property_1, property_2) {
    _bm_event.name = name;
    _bm_event.property_1 = property_1;
    _bm_event.property_2 = property_2;

    _send_data();
  };

  function _send_data() {

    _bm_request = new XMLHttpRequest();
    _bm_request.open("POST", "http://localhost:4000/events.json", true);
    _bm_request.setRequestHeader('Content-Type', 'application/json');
    _bm_request.onreadystatechange = function() {
    // this function runs when the Ajax request changes state.
    // https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest
    };
    _bm_request.send(JSON.stringify(_bm_event));
  };

  return my;
})();  