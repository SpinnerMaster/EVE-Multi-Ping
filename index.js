var fs = require('fs');

//-----the Discord function-----
    function sendMessage() {
//	  sendSlack();
	  var sentence = document.getElementById("pingText").value;
	  var color = document.getElementById("pPriority");
	  var colorVal = color.options[color.selectedIndex].value;
	  var alarmaText = " ";
	  var alarma = document.getElementById("alarma").checked;
	  if (alarma == true) {
	  alarmaText = "<:frogsiren:708165935114223636> <:frogsiren:708165935114223636> <:frogsiren:708165935114223636> <:frogsiren:708165935114223636>"
	  } else if (alarma == false) {
	  alarmaText = ""
	  };
	  var hexSet = "";
	  if (colorVal == "low") {
	  hexSet = "32768"
	  } else if (colorVal == "high") {
	  hexSet = "16753920"
	  } else if (colorVal == "critical") {
	  hexSet = "16711680"
	  };
    alertLevel = ""
    if (colorVal == "low") {
    alertLevel = "here"
    } else if (colorVal == "high") {
    alertLevel = "channel"
    } else if (colorVal == "critical") {
    alertLevel = "everyone"
    };
    var alertLevel = "";
    if (colorVal == "low") {
    alertLevel = "here"
    } else if (colorVal == "high") {
    alertLevel = "channel"
    } else if (colorVal == "critical") {
    alertLevel = "everyone"
    };
    var request = new XMLHttpRequest();
	  var pingText = {
	    title: "New ping!",
		  description: (alertLevel + ' ' + sentence),
      color: (hexSet)
    }
    var alarmaHack = {
        title: "",
        description: (":thinking:" + " " + alarmaText),
        color: (hexSet)
    }
//INSERT URL FOR DISCORD IN THE QUOTES
      request.open("POST", "https://discordapp.com/api/webhooks/708135837560209428/ReZIvRXFea-vpTJpvFpgogLXENAl0cgMeiLtNDMLGkwNeGQrBhUfphf761BJ2c5LMSz0");
      request.setRequestHeader('Content-type', 'application/json');
	  var params = {
		username: "Pingbot 2K20",
		embeds: [ pingText, alarmaHack ]
		}
      request.send(JSON.stringify(params));
    }

//-----the Slack function-----
	function sendSlack() {
	  var sentence = document.getElementById("pingText").value;
    var color = document.getElementById("pPriority");
    var colorVal = color.options[color.selectedIndex].value;
    var alarmaText = " ";
    var alarma = document.getElementById("alarma").checked;
    if (alarma == true) {
    alarmaText = ":frogsiren: :frogsiren: :frogsiren: :frogsiren:"
    } else if (alarma == false) {
    alarmaText = ""
    };
    var alertLevel = "";
    if (colorVal == "low") {
    alertLevel = "here"
    } else if (colorVal == "high") {
    alertLevel = "channel"
    } else if (colorVal == "critical") {
    alertLevel = "everyone"
    };
    var request = new XMLHttpRequest();
//INSERT URL FOR SLACK IN THE QUOTES
    request.open("POST", "");
	  var params = {
      "text": "New Ping!",
      "blocks": [
          {
              "type": "section",
              "text": {
                  "type": "mrkdwn",
                  "text": (alertLevel + ' ' + sentence)
              }
            },
            {
              "type": "section",
              "text": {
                "type": "mrkdwn",
                "text": (alarmaText)
              }
            }
          ]
		}
		console.log(params)
        request.send(JSON.stringify(params));
	}
