module.exports = function(answer) {
SendAuth: {
  var ws = new WebSocket("ws://185.49.69.143:20080");
  ws.onopen = function () {
    console.log('conected');
    ws.send(JSON.stringify({"pid": 1, "method": "auth.login", "data": {"login": "test", "password": "test"}}));
  };
  ws.onmessage = function (message) {
    var str = message.data.substring(0, message.data.length - 1);
    console.log(JSON.parse(str))
  };
}};
