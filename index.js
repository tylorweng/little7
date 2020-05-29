//GIB報你知

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

app.get('/', function (req, res) {
    res.send('Hello World!');
});

app.post('/linewebhook', linebotParser);

//每當server啟動，或是重build時，發送給自己的訊息
setTimeout(function () {
    var userId = 'U087e7ce49ad11b0bdbc68a240e6d8108';
    var sendMsg = 'server啟動惹';
    bot.push(userId, sendMsg);
    console.log('send: ' + sendMsg);
}, 5000);


//製作回覆
bot.on('message', function (event) {

    switch (event.message.type) {

        case 'text':

            switch (event.message.text) {

                //純文字區	
                case '安安':

                    event.reply('別在安安了吧...都幾歲了');

                    break;
                    
                case '佳禾':

                    event.reply('我家門前有佳禾~後面有山坡，拜託週五早點起～趕上科朝會～^_^');

                    break;
                    
                case '欣玫':

                    event.reply('煩死人了> < 不要再叫我了～我要回家帶小孩');

                    break;
                    
                case '俊州':

                    event.reply('電器王、家電王、貓飼料王、萬磁王～～現身吧！！');

                    break; 
                    
                case '志騰':

                    event.reply('HSM好了沒！！');

                    break;
                    
                case '冠宇':

                    event.reply('(︶｡︶✽)zzzZZZZ');

                    break;    
                
                case '欣紜':

                    event.reply('門清一摸三，我又碰碰胡');

                    break;   
                    
                case '又豪':

                    event.reply('開會囉～');

                    break;  
                    
                 case '強哥':

                    event.reply('我默默的在群組，誰偷偷叫我！！');

                    break;  
                    
                  case '德安':

                    event.reply('你各位～通報發了嗎！！！');

                    break;  
                  
                  case '士浩':
                    event.reply('是，我是！....是就早點下班><');
                    
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
                                                "text": "臺幣單筆付款預約到期1-10扣 : BTWTPTRTATW ，執行時間-->[每營業日] 05:00、09:10、10:10、11:10、12:10、13:10、14:10、15:00、15:20、15:40、16:00"
                                            },
                                            {
                                                "type": "message",
                                                "label": "臺幣單筆付款未明交易retry",
                                                "text": "臺幣單筆付款未明交易retry : BTWTPTXCHTW ，執行時間-->[每營業日] 09:08~18:38，每10分鐘"
                                            },
                                            {
                                                "type": "message",
                                                "label": "臺幣整批預約到期1-10扣",
                                                "text": "臺幣整批付款預約到期1-10扣 : BTWTPBRTATW，執行時間-->[每營業日] 05:00、09:10、10:10、11:10、12:10、13:10、14:10、15:00、15:20、15:40、16:00"
                                            }
                                        ]
                                    },
                                    {
                                        "text": "台幣相關_2",
                                        "actions": [
                                            {
                                                "type": "message",
                                                "label": "臺幣整批付款未明交易retry",
                                                "text": "臺幣整批付款未明交易retry : BTWTPBXCHTW，執行時間-->[每營業日] 09:08~18:38，每10分鐘"
                                            },
                                            {
                                                "type": "message",
                                                "label": "產生臺幣整批交易檢核檔",
                                                "text": "產生臺幣整批交易檢核檔: BTWTPCHKFTW，執行時間-->[每日曆日] 01:10、12:55"
                                            },
                                            {
                                                "type": "message",
                                                "label": "接收整批交易檢核結果檔",
                                                "text": "接收臺幣整批交易檢核結果檔: BTWTPCHKRTW，執行時間-->[每日曆日] 由主機檢核完成產生結果檔至FTP後帶起本批次"
                                            }
                                        ]
                                    },
                                    {
                                        "text": "台幣相關_3",
                                        "actions": [
                                            {
                                                "type": "message",
                                                "label": "臺幣預約付款提醒通知",
                                                "text": "臺幣預約付款提醒通知 : BTWTPNAPTTW ，執行時間-->[每營業日] 9:30"
                                            },
                                            {
                                                "type": "message",
                                                "label": "臺幣交易結果日終彙整通知",
                                                "text": "臺幣交易結果日終彙整通知: BTWTPNDAYTW，執行時間-->[每日曆日]17:40"
                                            },
                                            {
                                                "type": "message",
                                                "label": "臺幣轉帳過7日銷案通知",
                                                "text": "臺幣轉帳申請過7日銷案通知: BTWTPNRJETW，執行時間-->[每日曆日]22:00"
                                            }
                                        ]
                                    },
                                    {
                                        "text": "台幣相關_4",
                                        "actions": [
                                            {
                                                "type": "message",
                                                "label": "臺幣餘額不足轉失敗通知",
                                                "text": "臺幣交易餘額不足轉失敗通知 : BTWTPNFAITW，執行時間-->[每日曆日]17:30"
                                            },
                                            {
                                                "type": "message",
                                                "label": "臺幣交易人工重送處理",
                                                "text": "臺幣交易人工重送處理: BTWTPRESNTW，執行時間-->由資訊處手動執行"
                                            },
                                            {
                                                "type": "message",
                                                "label": "臺幣整批交易異常未明retry",
                                                "text": "臺幣整批交易異常未明retry: BTWTPRTRYTW，執行時間-->由資訊處手動執行"
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
                                                "text": " 薪資轉帳預約到期(1~8扣) : BTWSPFRTBTW，執行時間-->[每日曆日] 05:00、09:20、10:20、11:20、12:20、13:20、14:20、15:20、16:00"
                                            },
                                            {
                                                "type": "message",
                                                "label": "薪資轉帳未明交易Retry",
                                                "text": "薪資轉帳未明交易Retry : BTWSPFBRETW，執行時間-->[每日曆日] 05:20~19:20，每20分鐘"
                                            },
                                            {
                                                "type": "message",
                                                "label": "薪轉預約付款提醒通知",
                                                "text": "薪資轉帳預約付款提醒通知 : BTWSPFTPNTW，執行時間-->[每營業日] 9:30 執行"
                                            }
                                        ]
                                    },
                                    {
                                        "text": "薪轉相關_2",
                                        "actions": [
                                            {
                                                "type": "message",
                                                "label": "薪轉交易結果日終彙整通知",
                                                "text": "薪資轉帳交易結果日終彙整通知 : BTWSPDSMNTW，執行時間-->[每日曆日] 17:30 執行"
                                            },
                                            {
                                                "type": "message",
                                                "label": "薪轉臨櫃過7日銷案通知",
                                                "text": "薪資轉帳臨櫃申請過7日銷案通知 : BTWSPNRJETW，執行時間-->[每日曆日] 22:00 執行"
                                            },
                                            {
                                                "type": "message",
                                                "label": "產生薪資員工交易檢核檔",
                                                "text": "產生薪資員工交易檢核檔 : BTWSPFBCKTW，執行時間-->[每日曆日] 01:00、12:55 執行"
                                            }
                                        ]
                                    },
                                    {
                                        "text": "薪轉相關_3",
                                        "actions": [
                                            {
                                                "type": "message",
                                                "label": "接收員工交易檢核結果檔",
                                                "text": "接收薪資員工交易檢核結果檔 : BTWSPFBRSTW，由主機檢核完成產生結果檔至FTP後帶起本批次"
                                            },
                                            {
                                                "type": "message",
                                                "label": "批次查詢整批薪資單下載",
                                                "text": "批次查詢整批薪資單下載 : BTWSPSADNTW，執行時間-->[每日曆日]00:00~24:00，每20分鐘"
                                            },
                                            {
                                                "type": "message",
                                                "label": "薪資轉帳交易人工重送處理",
                                                "text": "薪資轉帳交易人工重送處理 : BTWSPRESNTW，由資訊處人工執行"
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
                                                "label": "外幣單筆預約到期(1~8扣)",
                                                "text": "外幣單筆轉帳匯款預約到期(1~8扣) : BTWFPFRTATW"
                                            },
                                            {
                                                "type": "message",
                                                "label": "外幣單筆轉帳未明交易Retry",
                                                "text": "外幣單筆轉帳匯款未明交易Retry : BTWFPFRRETW"
                                            },
                                            {
                                                "type": "message",
                                                "label": "外幣單筆轉帳原幣交易3扣",
                                                "text": "外幣單筆轉帳匯款原幣交易3扣 : BTWFPFRTBTW"
                                            }
                                        ]
                                    },
                                    {
                                        "text": "外幣相關_2",
                                        "actions": [
                                            {
                                                "type": "message",
                                                "label": "外幣整批預約到期(1~10扣)",
                                                "text": "外幣整批付款預約到期(1~10扣) : BTWFPFBTPTW"
                                            },
                                            {
                                                "type": "message",
                                                "label": "外幣整批付款未明交易Retry",
                                                "text": "外幣整批付款未明交易Retry : BTWFPFBRETW"
                                            },
                                            {
                                                "type": "message",
                                                "label": "接收匯出匯款狀態回饋檔",
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
                                                "label": "接收外幣整批檢核結果檔",
                                                "text": "接收外幣整批交易檢核結果檔 : BTWFPFBRSTW"
                                            },
                                            {
                                                "type": "message",
                                                "label": "匯入更新匯出受款人資料",
                                                "text": "匯入及更新匯出受款人資料 : BTWFPREMITW"
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
                                                "label": "外幣餘額不足轉失敗通知",
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
                                                "label": "外幣匯入匯款解款1~10重入",
                                                "text": "外幣匯入匯款解款1~10重入 : BTWTRFRTATW"
                                            },
                                            {
                                                "type": "message",
                                                "label": "外幣匯入匯款解款未明交易Retry",
                                                "text": "外幣匯入匯款解款未明交易Retry : BTWTRFRRETW"
                                            }
                                        ]
                                    },
                                    {
                                        "text": "外幣相關_8",
                                        "actions": [
                                            {
                                                "type": "message",
                                                "label": "外幣匯入匯款解款結果彙整通知",
                                                "text": "外幣匯入匯款解款結果彙整通知 : BTWTRDSMNTW"
                                            },
                                            {
                                                "type": "message",
                                                "label": "接收國外匯入匯款通知",
                                                "text": "接收國外匯入匯款通知 : BTWTRNPRITW"
                                            },
                                            {
                                                "type": "message",
                                                "label": "接收外幣匯入匯款可解款通知",
                                                "text": "接收外幣匯入匯款可解款通知 : BTWTRNSECTW"
                                            }
                                        ]
                                    },
                                    {
                                        "text": "外幣相關_9",
                                        "actions": [
                                            {
                                                "type": "message",
                                                "label": "接收外幣匯入匯款入帳通知",
                                                "text": "接收外幣匯入匯款入帳通知 : BTWTRNTHITW"
                                            },
                                            {
                                                "type": "message",
                                                "label": "外幣代收付扣帳及Retry",
                                                "text": "外幣代收付扣帳及Retry : BTWFRACHBTW"
                                            },
                                            {
                                                "type": "message",
                                                "label": "接收外幣代收付提回檔",
                                                "text": "接收外幣代收付提回檔 : BTWFRRULTTW"
                                            }
                                        ]
                                    },
                                    {
                                        "text": "外幣相關_10",
                                        "actions": [
                                            {
                                                "type": "message",
                                                "label": "外幣代付作業期前提醒通知書",
                                                "text": "外幣代付作業期前提醒通知書 : BTWFRNAPTTW"
                                            },
                                            {
                                                "type": "message",
                                                "label": "外幣代收付退件通知書",
                                                "text": "外幣代收付退件通知書 : BTWFRRJCTTW"
                                            },
                                            {
                                                "type": "message",
                                                "label": "外幣匯入匯款解款retryEFS",
                                                "text": "外幣匯入匯款解款retryEFS : BTWRTYEFSTW"
                                            }
                                        ]
                                    }
                                ]
                            }
                        });

                    break;

                case 'Status狀態列表':

                    return event.reply(
                        message = {
                            "type": "template",
                            "altText": "請查看手機",
                            "template": {
                                "type": "carousel",
                                "columns": [
                                    {
                                        "text": "請點選Status",
                                        "actions": [
                                            {
                                                "type": "message",
                                                "label": "一般性status",
                                                "text": "一般性status"
                                            },
                                            {
                                                "type": "message",
                                                "label": "流程中status",
                                                "text": "流程中status"
                                            },
                                            {
                                                "type": "message",
                                                "label": "交易結果status",
                                                "text": "交易結果status"
                                            }
                                        ]
                                    },
                                    {
                                        "text": "請點選Status",
                                        "actions": [
                                            {
                                                "type": "message",
                                                "label": "客戶端放行接銀行流程status",
                                                "text": "客戶端放行接銀行流程status"
                                            },
                                            {
                                                "type": "message",
                                                "label": "特殊交易狀待判斷status",
                                                "text": "特殊交易狀待判斷status"
                                            },
                                            {
                                                "type": "message",
                                                "label": "--",
                                                "text": "--"
                                            }
                                        ]
                                    }
                                ]
                            }
                        });

                    break;

                case 'help':

                    return event.reply(
                        message = {
                            "type": "template",
                            "altText": "請查看手機",
                            "template": {
                                "type": "carousel",
                                "columns": [
                                    {
                                        "text": "點選欲使用功能",
                                        "actions": [
                                            {
                                                "type": "message",
                                                "label": "批次作業",
                                                "text": "批次作業"
                                            },
                                            {
                                                "type": "message",
                                                "label": "Status狀態列表",
                                                "text": "Status狀態列表"
                                            },
                                            {
                                                "type": "message",
                                                "label": "主機交易通路代碼",
                                                "text": "主機交易通路代碼"
                                            }
                                        ]
                                    },
                                    {
                                        "text": "點選欲使用功能",
                                        "actions": [
                                            {
                                                "type": "message",
                                                "label": "待開發",
                                                "text": "待開發"
                                            },
                                            {
                                                "type": "message",
                                                "label": "待開發",
                                                "text": "待開發"
                                            },
                                            {
                                                "type": "message",
                                                "label": "待開發",
                                                "text": "待開發"
                                            }
                                        ]
                                    }
                                ]
                            }
                        });

                    break;

                //以下
                case '測試測試':

                    return event.reply(
                        message = {
                            "type": "flex",
                            "altText": "Flex Message",
                            "contents": {
                                "type": "bubble",
                                "direction": "rtl",
                                "hero": {
                                    "type": "image",
                                    "url": "https://scdn.line-apps.com/n/channel_devcenter/img/fx/01_2_restaurant.png",
                                    "size": "full",
                                    "aspectRatio": "20:13",
                                    "aspectMode": "cover",
                                    "action": {
                                        "type": "uri",
                                        "label": "Action",
                                        "uri": "https://linecorp.com"
                                    }
                                },
                                "body": {
                                    "type": "box",
                                    "layout": "vertical",
                                    "spacing": "md",
                                    "action": {
                                        "type": "uri",
                                        "label": "Action",
                                        "uri": "https://linecorp.com"
                                    },
                                    "contents": [
                                        {
                                            "type": "text",
                                            "text": "Brown's Burger",
                                            "size": "xl",
                                            "weight": "bold"
                                        },
                                        {
                                            "type": "box",
                                            "layout": "vertical",
                                            "spacing": "sm",
                                            "contents": [
                                                {
                                                    "type": "box",
                                                    "layout": "baseline",
                                                    "contents": [
                                                        {
                                                            "type": "icon",
                                                            "url": "https://scdn.line-apps.com/n/channel_devcenter/img/fx/restaurant_regular_32.png"
                                                        },
                                                        {
                                                            "type": "text",
                                                            "text": "$10.5",
                                                            "flex": 0,
                                                            "margin": "sm",
                                                            "weight": "bold"
                                                        },
                                                        {
                                                            "type": "text",
                                                            "text": "400kcl",
                                                            "size": "sm",
                                                            "align": "end",
                                                            "color": "#AAAAAA"
                                                        }
                                                    ]
                                                },
                                                {
                                                    "type": "box",
                                                    "layout": "baseline",
                                                    "contents": [
                                                        {
                                                            "type": "icon",
                                                            "url": "https://scdn.line-apps.com/n/channel_devcenter/img/fx/restaurant_large_32.png"
                                                        },
                                                        {
                                                            "type": "text",
                                                            "text": "$15.5",
                                                            "flex": 0,
                                                            "margin": "sm",
                                                            "weight": "bold"
                                                        },
                                                        {
                                                            "type": "text",
                                                            "text": "550kcl",
                                                            "size": "sm",
                                                            "align": "end",
                                                            "color": "#AAAAAA"
                                                        }
                                                    ]
                                                }
                                            ]
                                        },
                                        {
                                            "type": "text",
                                            "text": "Sauce, Onions, Pickles, Lettuce & Cheese",
                                            "size": "xxs",
                                            "color": "#AAAAAA",
                                            "wrap": true
                                        }
                                    ]
                                },
                                "footer": {
                                    "type": "box",
                                    "layout": "vertical",
                                    "contents": [
                                        {
                                            "type": "spacer",
                                            "size": "xxl"
                                        },
                                        {
                                            "type": "button",
                                            "action": {
                                                "type": "uri",
                                                "label": "Add to Cart",
                                                "uri": "https://linecorp.com"
                                            },
                                            "color": "#905C44",
                                            "style": "primary"
                                        }
                                    ]
                                }
                            }
                        }



                    );

                    break;



                case '批次總表':

                    return event.reply(
                        message = {

                            "type": "template",
                            "altText": "在不支援顯示樣板的地方顯示的文字",
                            "template": {
                                "type": "image_carousel",
                                "columns": [
                                    {
                                        "imageUrl": "https://upload.cc/i1/2019/10/10/1wNWHM.png",
                                        "action": {
                                            "type": "uri",
                                            "label": "顯示批次內容_1",
                                            "uri": "https://upload.cc/i1/2019/10/10/1wNWHM.png"
                                        }
                                    },
                                    {
                                        "imageUrl": "https://upload.cc/i1/2019/10/10/ilpJD0.png",
                                        "action": {
                                            "type": "uri",
                                            "label": "顯示批次內容_2",
                                            "uri": "https://upload.cc/i1/2019/10/10/ilpJD0.png"
                                        }
                                    },
                                    {
                                        "imageUrl": "https://upload.cc/i1/2019/10/10/LbKdOs.png",
                                        "action": {
                                            "type": "uri",
                                            "label": "顯示批次內容_3",
                                            "uri": "https://upload.cc/i1/2019/10/10/LbKdOs.png"
                                        }
                                    },
                                    {
                                        "imageUrl": "https://upload.cc/i1/2019/10/10/EwJMum.png",
                                        "action": {
                                            "type": "uri",
                                            "label": "顯示批次內容_4",
                                            "uri": "https://upload.cc/i1/2019/10/10/EwJMum.png"
                                        }
                                    },
                                    {
                                        "imageUrl": "https://upload.cc/i1/2019/10/10/aFgsGp.png",
                                        "action": {
                                            "type": "uri",
                                            "label": "顯示批次內容_5",
                                            "uri": "https://upload.cc/i1/2019/10/10/aFgsGp.png"
                                        }
                                    },
                                    {
                                        "imageUrl": "https://upload.cc/i1/2019/10/10/9lKet5.png",
                                        "action": {
                                            "type": "uri",
                                            "label": "顯示批次內容_6",
                                            "uri": "https://upload.cc/i1/2019/10/10/9lKet5.png"
                                        }
                                    }
                                ]
                            }



                        }
                    );

                    break;



            }// text輸出，請寫在這上方 
            break;


    }

});




app.listen(process.env.PORT || 80, function () {
    console.log('LineBot is running.');
});
