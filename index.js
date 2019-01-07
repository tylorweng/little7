//GIB

var request = require("request");
var cheerio = require("cheerio");

const linebot = require('linebot');
const express = require('express');

const bot = linebot({
	channelId: process.env.CHANNEL_ID,
	channelSecret: process.env.CHANNEL_SECRET,
	channelAccessToken: process.env.CHANNEL_ACCESS_TOKEN
});

const app = express();

const linebotParser = bot.parser();

app.get('/',function(req,res){
    res.send('Hello World!');
});

app.post('/linewebhook', linebotParser);

//每當server啟動，或是重build時，發送給自己的訊息
setTimeout(function(){
    var userId = 'Ufc301832dd245e99bbccf32b2cc0abd8';
    var sendMsg = 'server啟動惹';
    bot.push(userId,sendMsg);
    console.log('send: '+sendMsg);
},5000);


//製作回覆
bot.on('message', function (event) {

switch(event.message.type){

	case 'text':
	
		switch(event.message.text){

		//純文字區	
		case '安安':
			event.reply('安安 你好 幾歲 住哪?');
			break;
		}
		
		
//存匯服務
		
		//存款查詢
		case '帳戶餘額查詢':
			event.reply('CTWDABAQU');
			break;
		}
		case '交易明細查詢':
			event.reply('CTWDATXQU');
			break;
		}
		
		
	

case '編號':
		
		return event.reply(
			
		message = {
		  "type": "template",
		  "altText": "在不支援顯示樣板的地方顯示的文字",
		  "template": {
			"type": "carousel",
			"columns": [
			  {
				"text": "第一組標題",
				"actions": [
				  {
					"type": "message",
					"label": "第一個按鈕",
					"text": "1"
				  }
				]
			  },
			  {
				"text": "第二組標題",
				"actions": [
				  {
					"type": "message",
					"label": "第一個按鈕",
					"text": "1"
				  }
				]
			  }
			]
		  }
		}
			
			
			);
	
			break;




	
		
		
		
	break;

	
}

});




app.listen(process.env.PORT || 80, function () {
	console.log('LineBot is running.');
});