'use strict';

//------------------------------------------------------
// ライブラリ定義
//------------------------------------------------------
/**
 * Alexa開発に用いるSDKライブラリ
 */
let Alexa = require('alexa-sdk');

/**
 * 応答を組み立てるためのライブラリ
 */
let util = require('util');

//------------------------------------------------------
// 変数・定数定義
//------------------------------------------------------
//外出しにしている処理群
let myResponseHandlers = require('./response');

/**
 * 状態定義クラス
 */
const state = require("./dataAssets/state.json");

/**
 * 応答メッセージ格納変数
 */
const MESSAGE = require("./message_ja.json");

/**
 * 応答データ格納変数
 */
const DATA = require("./dataAssets/data.json");


//------------------------------------------------------
// Alexaの処理定義
// 各状態をハンドリングするハンドラーを追加する必要がある
//------------------------------------------------------
exports.handler = function (event, context, callback) {
    console.log(JSON.stringify(event, ' ', 4));
    let alexa = Alexa.handler(event, context, callback);
    alexa.appId = process.env.APP_ID;
    alexa.registerHandlers(
        NewSessionHandler,
        ActionHandler,
        myResponseHandlers  // welcome応答を差し込むためのEventを入れ込むためのハンドラー
    );

    // NOTE セッション間マタギの処理をするわけではないので
    // SDK純正の処理は使わない
    // alexa.dynamoDBTableName = 'AlexaSessionTable';
    alexa.execute();
};

//-------------------- ハンドラ定義 ---------------------

let NewSessionHandler = {
    'LaunchRequest': function () {
        this.handler.state = state.LOOPBACK;
        this.emit(':welcomeAsk', MESSAGE.welcome.speechOutput, MESSAGE.welcome.repromptText);
    },
    'AMAZON.HelpIntent': function () {
        this.handler.state = state.LOOPBACK;
        this.emit(':welcomeAsk', MESSAGE.help.speechOutput, MESSAGE.help.repromptText);
    },
    'MyVegetableIntent': function () {
        this.handler.state = state.LOOPBACK;
        this.emitWithState('MyVegetableIntent');
    },
    'MyVegetableOnlyIntent': function () {
        this.emit('MyVegetableIntent');
    },
    'AMAZON.CancelIntent': function () {
        this.handler.state = '';
        this.attributes = {};
        this.emit(':tell', MESSAGE.session.end.speechOutput);
    },
    'AMAZON.StopIntent': function () {
        this.handler.state = '';
        this.attributes = {};
        this.emit(':tell', MESSAGE.session.end.speechOutput);
    },
    'Unhandled': function () {
        // 無効応答のときであってもとりあえずスキルは起動させる
        this.emit('LaunchRequest');
    }
};

let ActionHandler = Alexa.CreateStateHandler(state.LOOPBACK, {
    'MyVegetableIntent': function () {
        let nameSlot = this.event.request.intent.slots.VEGETABLE_NAME;
        let seasonSlot = this.event.request.intent.slots.SEASON_NAME;

        let speechOutput;
        if (!DATA[nameSlot.value]){
            speechOutput = util.format(MESSAGE.guide.noinfo.speechOutput, nameSlot.value);
            this.emit(':ask', speechOutput, MESSAGE.guide.noinfo.repromptText);
        }else{
            let vegeJson = DATA[nameSlot.value];
            if (seasonSlot.value){
                speechOutput = util.format(MESSAGE.action.speechOutput, nameSlot.value, vegeJson.season, vegeJson.description);
            }else{
                speechOutput = util.format(MESSAGE.action.speechOutput, nameSlot.value, vegeJson.season, '。');
            }
            this.emit(':ask', speechOutput, MESSAGE.action.repromptText);
        }
    },
    'MyVegetableOnlyIntent': function () {
        this.emitWithState('MyVegetableIntent');
    },
    'AMAZON.CancelIntent': function () {
        this.emit('AMAZON.CancelIntent');
    },
    'AMAZON.StopIntent': function () {
        this.emit('AMAZON.StopIntent');
    },
    'Unhandled': function () {
        this.emit(':ask', MESSAGE.guide.error.speechOutput, MESSAGE.guide.error.repromptText);
    }
});

process.on('unhandledRejection', function (err) {
    console.error(`(Error) Uncaught unhandledRejection: ${err}\n${err.stack}`);
    throw err;
});
process.on('uncaughtException', function (err) {
    console.error(`(Error) Uncaught exception: ${err}\n${err.stack}`);
    throw err;
});


