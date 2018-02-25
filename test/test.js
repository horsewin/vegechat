"use strict";

const conversation = require('alexa-conversation');
const target = require('../index.js'); // your Alexa skill's main file.

const opts = { // those will be used to generate the requests to your skill
    name: 'ベジチャット　単体テスト',
    appId: 'amzn1.ask.skill.a0705423-fd46-4532-9c2a-5774af6b8914',
    // Either provide your app (app.handler must exist)...
    app: target,

    // Other optional parameters. See readme.md
    userId: "amzn1.ask.account.AGBFVNUTAVEK7ZOLYMYXLTY35WBCV6IQPSK7ZBGR3XOX5634B4YTSGRREDOK6FLZNY7DTUUCPZNCR76I67XDXEEO45TSAI6S3Q2AD3UOPC7PENGXVO3H2NOBFJCSJNAQL63YPDEV6TMMUCOMVDLLI4DUNGMHZTKYZNWRNGQG7Y2CJUBX3IAZ7KAC4KGS6TF3M4HHXU37YQD7ZNA",
    locale: 'ja-JP'
};

process.env.FEATURE_FLAG = "1";
process.env.APP_ID = "amzn1.ask.skill.a0705423-fd46-4532-9c2a-5774af6b8914";

conversation(opts)
    .userSays('LaunchRequest')
    .ssmlResponse
    .shouldEqual(
        "<speak> ベジチャットへようこそ。知りたい野菜を教えてください。 </speak>",
        "<speak> どの野菜について知りたいですか？ </speak>"
    )
    .userSays('AMAZON.StopIntent')
    .ssmlResponse
    .shouldEqual(
        "<speak> また話しかけてくださいね。 </speak>"
    )
    .end();

conversation(opts)
    .userSays('AMAZON.HelpIntent')
    .ssmlResponse
    .shouldEqual(
        "<speak> ベジチャットへようこそ。野菜の旬と保存方法についてお答えします。例えば「にんじんの保存方法教えて？」や「にんじんの旬はいつ？」と話してください。どの野菜について知りたいですか？ </speak>",
        "<speak> どの野菜について知りたいですか？ </speak>"
    )
    .userSays('AMAZON.StopIntent')
    .ssmlResponse
    .shouldEqual(
        "<speak> また話しかけてくださいね。 </speak>"
    )
    .end();

conversation(opts)
    .userSays('MyVegetableIntent', {VegetableName: 'にんじん', SeasonName: ''})
    .ssmlResponse
    .shouldEqual(
        "<speak> ベジチャットへようこそ。にんじんの旬は4月から7月、11月から12月です。湿気に弱いので冷蔵庫に丸のまま保存する際には新聞紙などで包みましょう。冬など寒い季節は新聞紙にくるんだり、箱のまま冷暗所においておいても大丈夫です。切った物は切り口から傷み始めるので、ぴったりとラップで包んで冷蔵庫に入れておき、3日-4日位で使い切るようにしましょう。。他にどの野菜について知りたいですか？ </speak>",
        "<speak> 他にどの野菜について知りたいですか？ </speak>"
    )
    .userSays('MyVegetableIntent', {VegetableName: 'にんじん', SeasonName: '旬'})
    .ssmlResponse
    .shouldEqual(
        "<speak> にんじんの旬は4月から7月、11月から12月です。。。他にどの野菜について知りたいですか？ </speak>",
        "<speak> 他にどの野菜について知りたいですか？ </speak>"
    )
    .userSays('AMAZON.CancelIntent')
    .ssmlResponse
    .shouldEqual(
        "<speak> また話しかけてくださいね。 </speak>"
    )
    .end();

conversation(opts)
    .userSays('AMAZON.CancelIntent')
    .ssmlResponse
    .shouldEqual(
        "<speak> また話しかけてくださいね。 </speak>"
    )
    .end();

conversation(opts)
    .userSays('MyVegetableIntent', {VegetableName: 'アボガド', SeasonName: ''})
    .ssmlResponse
    .shouldEqual(
        "<speak> ベジチャットへようこそ。アボガドは対応外の野菜です。ごめんなさい。他にどの野菜について知りたいですか？ </speak>",
        "<speak> どの野菜について知りたいですか？ </speak>"
    )
    .end();

conversation(opts)
    .userSays('MyVegetableIntent', {VegetableName: '', SeasonName: ''})
    .ssmlResponse
    .shouldEqual(
        "<speak> ベジチャットへようこそ。野菜の名前が上手く聞き取れなかったです。知りたい野菜についてもう一度教えてください。 </speak>",
        "<speak> どの野菜について知りたいですか？ </speak>"
    )
    .end();
