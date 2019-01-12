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
					"text": "請點選想查詢之批次",
					"actions": [
					  {
						"type": "message",
						"label": "FXML相關批次",
						"text": "FXML相關批次"
					  },
					  {
						"type": "message",
						"label": "ACH相關批次",
						"text": "ACH相關批次"
					  },
					  {
						"type": "message",
						"label": "外幣相關批次",
						"text": "外幣相關批次"
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



	case 'FXML相關批次':
		
		return event.reply(
			message = {
			"type": "template",
			"altText": "請查看手機",
			"template": {
				"type": "carousel",
				"columns": [
				  {
					"text": "FXML相關批次",
					"actions": [
					  {
						"type": "message",
						"label": "入帳Pending發送100400",
						"text": "FXML入帳Pending交易發送100400 : BTWFMRGFTTW"
					  },
					  {
						"type": "message",
						"label": "FXML入帳未明Retry",
						"text": "FXML入帳未明Retry : BTWFMINRYTW"
					  },
					  {
						"type": "message",
						"label": "--",
						"text": "-- : --"
					  }
					]
				  }
				]
			  }
			});
	
			break;			
			
			
			
			

	case 'ACH相關批次':
		
		return event.reply(
			message = {
			"type": "template",
			"altText": "請查看手機",
			"template": {
				"type": "carousel",
				"columns": [
				  {
					"text": "ACH相關_1",
					"actions": [
					  {
						"type": "message",
						"label": "ACH代付扣帳及retry",
						"text": " ACH代付扣帳及retry : BTWACSCRETW"
					  },
					  {
						"type": "message",
						"label": "產生ACH提出",
						"text": "產生ACH提出 : BTWACFLCRTW"
					  },
					  {
						"type": "message",
						"label": "接收ACH提回",
						"text": "接收ACH提回 : BTWACFLBKTW"
					  }
					]
				  },
				  {
					"text": "ACH相關_2",
					"actions": [
					  {
						"type": "message",
						"label": "ACH代付作業期前提醒通知",
						"text": "ACH代付作業期前提醒通知 : BTWACSCPNTW"
					  },
					  {
						"type": "message",
						"label": "ACH退件通知",
						"text": "ACH退件通知 : BTWACRTNNTW"
					  },
					  {
						"type": "message",
						"label": "ACH驗印提回檔",
						"text": "ACH驗印提回檔 : BTWACFLRETW"
					  }
					]
				  }
				]
			  }
			});
	
			break;	


	case '外幣相關批次':
		
		return event.reply(
			message = {
			"type": "template",
			"altText": "請查看手機",
			"template": {
				"type": "carousel",
				"columns": [
				  {
					"text": "外幣相關_1",
					"actions": [
					  {
						"type": "message",
						"label": "外幣單筆轉帳匯款預約到期(1~8扣)",
						"text": "外幣單筆轉帳匯款預約到期(1~8扣) : BTWFPFRTATW"
					  },
					  {
						"type": "message",
						"label": "外幣單筆轉帳匯款未明交易Retry",
						"text": "外幣單筆轉帳匯款未明交易Retry : BTWFPFRRETW"
					  },
					  {
						"type": "message",
						"label": "外幣單筆轉帳匯款原幣交易3扣",
						"text": "外幣單筆轉帳匯款原幣交易3扣 : BTWFPFRTBTW"
					  }
					]
				  },
				  {
					"text": "外幣相關_2",
					"actions": [
					  {
						"type": "message",
						"label": "外幣整批付款預約到期(1~10扣)",
						"text": "外幣整批付款預約到期(1~10扣) : BTWFPFBTPTW"
					  },
					  {
						"type": "message",
						"label": "外幣整批付款未明交易Retry",
						"text": "外幣整批付款未明交易Retry : BTWFPFBRETW"
					  },
					  {
						"type": "message",
						"label": "接收匯出匯款交易狀態回饋檔",
						"text": "接收匯出匯款交易狀態回饋檔 : BTWFPTTRSTW"
					  }
					]
				  },
				  {
					"text": "外幣相關_3",
					"actions": [
					  {
						"type": "message",
						"label": "外幣預約付款提醒通知",
						"text": "外幣預約付款提醒通知 : BTWFPFTPNTW"
					  },
					  {
						"type": "message",
						"label": "外幣交易結果日終彙整通知",
						"text": "外幣交易結果日終彙整通知 : BTWFPDSMNTW"
					  },
					  {
						"type": "message",
						"label": "產生外幣整批交易檢核檔",
						"text": "產生外幣整批交易檢核檔 : BTWFPFBCKTW"
					  }
					]
				  },
				  {
					"text": "外幣相關_4",
					"actions": [
					  {
						"type": "message",
						"label": "接收外幣整批交易檢核結果檔",
						"text": "接收外幣整批交易檢核結果檔 : BTWFPFBRSTW"
					  },
					  {
						"type": "message",
						"label": "匯入及更新匯出受款受款人資料",
						"text": "匯入及更新匯出受款受款人資料 : BTWFPREMITW"
					  },
					  {
						"type": "message",
						"label": "匯入幣別檔",
						"text": "匯入幣別檔 : BTWFPCURRTW"
					  }
					]
				  },
				  {
					"text": "外幣相關_5",
					"actions": [
					  {
						"type": "message",
						"label": "匯入申報性質檔",
						"text": "匯入申報性質檔 : BTWFPPTNOTW"
					  },
					  {
						"type": "message",
						"label": "匯入玉山海外聯行檔",
						"text": "匯入玉山海外聯行檔 : BTWFPESUNTW"
					  },
					  {
						"type": "message",
						"label": "匯入外幣國別檔",
						"text": "匯入外幣國別檔 : BTWFPCTRYTW"
					  }
					]
				  },
				  {
					"text": "外幣相關_6",
					"actions": [
					  {
						"type": "message",
						"label": "匯入外幣銀行名稱檔",
						"text": "匯入外幣銀行名稱檔 : BTWFPBKNATW"
					  },
					  {
						"type": "message",
						"label": "外幣交易餘額不足轉失敗通知",
						"text": "外幣交易餘額不足轉失敗通知 : BTWFPNFAITW"
					  },
					  {
						"type": "message",
						"label": "外幣交易人工重送處理",
						"text": "外幣交易人工重送處理 : BTWFPRESNTW"
					  }
					]
				  },
				  {
					"text": "外幣相關_7",
					"actions": [
					  {
						"type": "message",
						"label": "外幣代收付參加行檔(RTGS)",
						"text": "外幣代收付參加行檔(RTGS) : BTWFRRTGSTW"
					  },
					  {
						"type": "message",
						"label": "--",
						"text": "-- : --"
					  },
					  {
						"type": "message",
						"label": "--",
						"text": "-- : --"
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