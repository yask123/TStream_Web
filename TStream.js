
var ws;
var byteArray;
var context;

function WebSocketTest()
{
  if ("WebSocket" in window)
  {

    ws = new WebSocket("ws://" + document.getElementById('ipaddr').value + "/connect");

    ws.onopen = function()
    {
     console.log("Connection open");
    };

    ws.onmessage = function (evt)
    {

      if (evt.data.indexOf("URL") > -1) {
        var x = document.getElementById("audio");
        x.src = evt.data.substring(6,evt.data.length);
        x.play();
      }
    };

    ws.onclose = function()
    {
     console.log("Connection closed");
    };
  }

  else
  {
    alert("WebSocket NOT supported by your Browser!");
  }
}

