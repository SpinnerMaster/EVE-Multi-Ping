(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
(function (__dirname){
var fs = require("fs");
var src = fs.readFileSync(__dirname + '/config.txt');

// fs.readFile('config.txt', function(err, data) {
//     if(err) throw err;
//     var webhookURL = data.toString().split("\n");
//     for(i in webhookURL) {
//         console.log(webhookURL[0]);
//     }
// });

//-----the Discord function-----
function sendMessage() {
//	  sendSlack();
  const sentence = document.getElementById("pingText").value;
  const color = document.getElementById("pPriority");
  const colorVal = color.options[color.selectedIndex].value;
  var alarmaText = " ";
  const alarma = document.getElementById("alarma").checked;

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

  const request = new XMLHttpRequest();
  const pingText = {
	    title: "New ping!",
		  description: (alertLevel + ' ' + sentence),
      color: (hexSet)
    };
  const alarmaHack = {
        title: "",
        description: (":thinking:" + " " + alarmaText),
        color: (hexSet)
    };

//INSERT URL FOR DISCORD IN THE QUOTES
  request.open("POST", "");

  request.setRequestHeader('Content-type', 'application/json');

  const params = {
		username: "Pingbot 2K20 Mk 2",
		embeds: [ pingText, alarmaHack ]
		}
      request.send(JSON.stringify(params));
    };

//-----the Slack function-----
function sendSlack() {
  const sentence = document.getElementById("pingText").value;
  const color = document.getElementById("pPriority");
  const colorVal = color.options[color.selectedIndex].value;
  const alarmaText = " ";
  const alarma = document.getElementById("alarma").checked;

  if (alarma == true) {
    alarmaText = ":frogsiren: :frogsiren: :frogsiren: :frogsiren:"
    } else if (alarma == false) {
    alarmaText = ""
    };

  const alertLevel = "";

  if (colorVal == "low") {
    alertLevel = "here"
    } else if (colorVal == "high") {
    alertLevel = "channel"
    } else if (colorVal == "critical") {
    alertLevel = "everyone"
    };

  const request = new XMLHttpRequest();

//INSERT URL FOR SLACK IN THE QUOTES
  request.open("POST", "");

  const params = {
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
};

}).call(this,"/")
},{"fs":2}],2:[function(require,module,exports){

},{}]},{},[1]);
