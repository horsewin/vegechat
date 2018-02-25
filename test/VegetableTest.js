"use strict";

const conversation = require('alexa-conversation');
const target = require('../index.js'); // your Alexa skill's main file.

const opts = { // those will be used to generate the requests to your skill
    name: 'ベジチャット　全体説明　単体テスト',
    appId: 'amzn1.ask.skill.a0705423-fd46-4532-9c2a-5774af6b8914',
    // Either provide your app (app.handler must exist)...
    app: target,

    // Other optional parameters. See readme.md
    userId: "amzn1.ask.account.AGBFVNUTAVEK7ZOLYMYXLTY35WBCV6IQPSK7ZBGR3XOX5634B4YTSGRREDOK6FLZNY7DTUUCPZNCR76I67XDXEEO45TSAI6S3Q2AD3UOPC7PENGXVO3H2NOBFJCSJNAQL63YPDEV6TMMUCOMVDLLI4DUNGMHZTKYZNWRNGQG7Y2CJUBX3IAZ7KAC4KGS6TF3M4HHXU37YQD7ZNA",
    locale: 'ja-JP'
};

process.env.FEATURE_FLAG = "1";
process.env.APP_ID = "amzn1.ask.skill.a0705423-fd46-4532-9c2a-5774af6b8914";

// 全体説明
conversation(opts)
    .userSays('LaunchRequest')
    .ssmlResponse
    .shouldEqual(
        "<speak> ベジチャットへようこそ。知りたい野菜を教えてください。 </speak>",
        "<speak> どの野菜について知りたいですか？ </speak>"
    )
    .userSays('MyVegetableOnlyIntent', {VegetableName: 'キャベツ', SeasonName: ''})
    .ssmlResponse
    .shouldEqual(
        "<speak> キャベツの旬は3月から5月です。涼しい気候を好むので、冬場をのぞいては冷蔵庫で保存。芯をくり抜き、水を含ませたキッチンペーパーを詰めたあとにビニール袋などに入れて冷蔵庫に入れると万全です。また、丸ごと使わないときは、カットするのではなく、外の葉からはがして使うと長持ちします。。他にどの野菜について知りたいですか？ </speak>",
        "<speak> 他にどの野菜について知りたいですか？ </speak>"
    )
    .userSays('MyVegetableOnlyIntent', {VegetableName: 'アスパラガス', SeasonName: ''})
    .ssmlResponse
    .shouldEqual(
        "<speak> アスパラガスの旬は3月から6月です。冷蔵庫に保存するときはビニール袋などに入れて立てて保存しましょう。横にすると穂先が起き上がろうとしてエネルギーを消費してしまうため、鮮度が落ちてしまいます。購入後は2日から3日で使い切りましょう。。他にどの野菜について知りたいですか？ </speak>",
        "<speak> 他にどの野菜について知りたいですか？ </speak>"
    )
    .userSays('AMAZON.CancelIntent')
    .ssmlResponse
    .shouldEqual(
        "<speak> また話しかけてくださいね。 </speak>"
    )
    .end();
