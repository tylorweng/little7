//齊齊帶你愛運動

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
    var userId = 'U087e7ce49ad11b0bdbc68a240e6d8108';
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

	//存款查詢
		case '帳戶餘額查詢':
			event.reply('CTWDABAQU');
			break;
		
		case '交易明細查詢':
			event.reply('CTWDATXQU');
			break;
		
		case '定存明細查詢':
			event.reply('CTWDATDQU');
			break;
		
		
		
		
		case '存匯服務':
		
		return event.reply(
			message = {
			"type": "template",
			"altText": "請查看手機",
			"template": {
				"type": "carousel",
				"columns": [
				  {
					"text": "存款查詢",
					"actions": [
					  {
						"type": "message",
						"label": "帳戶餘額查詢",
						"text": "CTWDABAQU"
					  },
					  {
						"type": "message",
						"label": "交易明細查詢",
						"text": "CTWDATXQU"
					  },
					  {
						"type": "message",
						"label": "定存明細查詢",
						"text": "CTWDATDQU"
					  }
					]
				  },
				  {
					"text": "第二組標題",
					"actions": [
					  {
						"type": "message",
						"label": "帳戶餘額查詢",
						"text": "CTWDABAQU"
					  },
					  {
						"type": "message",
						"label": "交易明細查詢",
						"text": "CTWDATXQU"
					  },
					  {
						"type": "message",
						"label": "定存明細查詢",
						"text": "CTWDATDQU"
					  }
					]
				  }
				]
			  }
			});
	
			break;	
		

		case '批次作業':
		
		return event.reply(
			message = {
			"type": "template",
			"altText": "請查看手機",
			"template": {
				"type": "carousel",
				"columns": [
				  {
					"text": "請點選想查詢之批次",
					"actions": [
					  {
						"type": "message",
						"label": "台幣相關批次",
						"text": "台幣相關批次"
					  },
					  {
						"type": "message",
						"label": "薪資轉帳相關批次",
						"text": "薪資轉帳相關批次"
					  },
					  {
						"type": "message",
						"label": "繳稅費相關批次",
						"text": "繳稅費相關批次"
					  }
					]
				  },
				  {
					"text": "XXX",
					"actions": [
					  {
						"type": "message",
						"label": "XX",
						"text": "XX"
					  },
					  {
						"type": "message",
						"label": "XX",
						"text": "X"
					  },
					  {
						"type": "message",
						"label": "X",
						"text": "X"
					  }
					]
				  }
				]
			  }
			});
	
			break;	



	case '台幣相關批次':
		
		return event.reply(
			message = {
			"type": "template",
			"altText": "請查看手機",
			"template": {
				"type": "carousel",
				"columns": [
				  {
					"text": "台幣相關_1",
					"actions": [
					  {
						"type": "message",
						"label": "臺幣單筆預約到期1-10扣",
						"text": "臺幣單筆付款預約到期1-10扣 : BTWTPTRTATW"
					  },
					  {
						"type": "message",
						"label": "臺幣單筆付款未明交易retry",
						"text": "臺幣單筆付款未明交易retry : BTWTPTXCHTW"
					  },
					  {
						"type": "message",
						"label": "臺幣整批預約到期1-10扣",
						"text": "臺幣整批付款預約到期1-10扣 : BTWTPBRTATW"
					  }
					]
				  },
				  {
					"text": "台幣相關_2",
					"actions": [
					  {
						"type": "message",
						"label": "臺幣整批付款未明交易retry",
						"text": "臺幣整批付款未明交易retry : BTWTPBXCHTW"
					  },
					  {
						"type": "message",
						"label": "產生臺幣整批交易檢核檔",
						"text": "產生臺幣整批交易檢核檔: BTWTPCHKFTW"
					  },
					  {
						"type": "message",
						"label": "接收整批交易檢核結果檔",
						"text": "接收臺幣整批交易檢核結果檔: BTWTPCHKRTW"
					  }
					]
				  },
				  {
					"text": "台幣相關_3",
					"actions": [
					  {
						"type": "message",
						"label": "臺幣預約付款提醒通知",
						"text": "臺幣預約付款提醒通知 : BTWTPNAPTTW"
					  },
					  {
						"type": "message",
						"label": "臺幣交易結果日終彙整通知",
						"text": "臺幣交易結果日終彙整通知: BTWTPNDAYTW"
					  },
					  {
						"type": "message",
						"label": "臺幣轉帳過7日銷案通知",
						"text": "臺幣轉帳申請過7日銷案通知: BTWTPNRJETW"
					  }
					]
				  },
				  {
					"text": "台幣相關_4",
					"actions": [
					  {
						"type": "message",
						"label": "臺幣餘額不足轉失敗通知",
						"text": "臺幣交易餘額不足轉失敗通知 : BTWTPNFAITW"
					  },
					  {
						"type": "message",
						"label": "臺幣交易人工重送處理",
						"text": "臺幣交易人工重送處理: BTWTPRESNTW"
					  },
					  {
						"type": "message",
						"label": "臺幣整批交易異常未明retry",
						"text": "臺幣整批交易異常未明retry: BTWTPRTRYTW"
					  }
					]
				  }
				]
			  }
			});
	
			break;	



	case '薪資轉帳相關批次':
			
			return event.reply(
				message = {
				"type": "template",
				"altText": "請查看手機",
				"template": {
					"type": "carousel",
					"columns": [
					  {
						"text": "薪轉相關_1",
						"actions": [
						  {
							"type": "message",
							"label": "薪轉預約到期(1~8扣)",
							"text": " 薪資轉帳預約到期(1~8扣) : BTWSPFRTBTW "
						  },
						  {
							"type": "message",
							"label": "薪資轉帳未明交易Retry",
							"text": "薪資轉帳未明交易Retry : BTWSPFBRETW"
						  },
						  {
							"type": "message",
							"label": "薪轉預約付款提醒通知",
							"text": "薪資轉帳預約付款提醒通知 : BTWSPFTPNTW"
						  }
						]
					  },
					  {
						"text": "薪轉相關_2",
						"actions": [
						  {
							"type": "message",
							"label": "薪轉交易結果日終彙整通知",
							"text": "薪資轉帳交易結果日終彙整通知 : BTWSPDSMNTW"
						  },
						  {
							"type": "message",
							"label": "薪轉臨櫃過7日銷案通知",
							"text": "薪資轉帳臨櫃申請過7日銷案通知 : BTWSPNRJETW"
						  },
						  {
							"type": "message",
							"label": "產生薪資員工交易檢核檔",
							"text": "產生薪資員工交易檢核檔 : BTWSPFBCKTW"
						  }
						]
					  },
					  {
						"text": "薪轉相關_3",
						"actions": [
						  {
							"type": "message",
							"label": "接收員工交易檢核結果檔",
							"text": "接收薪資員工交易檢核結果檔 : BTWSPFBRSTW"
						  },
						  {
							"type": "message",
							"label": "批次查詢整批薪資單下載",
							"text": "批次查詢整批薪資單下載 : BTWSPSADNTW"
						  },
						  {
							"type": "message",
							"label": "薪資轉帳交易人工重送處理",
							"text": "薪資轉帳交易人工重送處理 : BTWSPRESNTW"
						  }
						]
					  }
					]
				  }
				});
		
				break;	


	case '繳稅費相關批次':
		
		return event.reply(
			message = {
			"type": "template",
			"altText": "請查看手機",
			"template": {
				"type": "carousel",
				"columns": [
				  {
					"text": "繳稅費相關_1",
					"actions": [
					  {
						"type": "message",
						"label": "繳稅費預約到期1扣批次",
						"text": " 繳稅費預約到期1扣批次 : BTWTXFRTATW"
					  },
					  {
						"type": "message",
						"label": "繳稅費未明交易Retry批次",
						"text": "繳稅費未明交易Retry批次 : BTWTXFRRETW"
					  },
					  {
						"type": "message",
						"label": "繳稅費交易結果日終彙整通知批次",
						"text": "繳稅費交易結果日終彙整通知批次 : BTWTXDSMNTW"
					  }
					]
				  },
				  {
					"text": "繳稅費相關_2",
					"actions": [
					  {
						"type": "message",
						"label": "繳稅費預約到期提醒通知批次",
						"text": "繳稅費預約到期提醒通知批次 : BTWTXFTPNTW"
					  },
					  {
						"type": "message",
						"label": "--",
						"text": "-- : -- "
					  },
					  {
						"type": "message",
						"label": "--",
						"text": "-- : -- "
					  }
					]
				  }
				]
			  }
			});
	
			break;	








		

		}
	break;

	
}

});




app.listen(process.env.PORT || 80, function () {
	console.log('LineBot is running.');
});