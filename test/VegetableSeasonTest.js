"use strict";

const conversation = require('alexa-conversation');
const target = require('../index.js'); // your Alexa skill's main file.

const opts = { // those will be used to generate the requests to your skill
    name: 'ベジチャット　旬説明　単体テスト',
    appId: 'amzn1.ask.skill.a0705423-fd46-4532-9c2a-5774af6b8914',
    // Either provide your app (app.handler must exist)...
    app: target,

    // Other optional parameters. See readme.md
    userId: "amzn1.ask.account.AGBFVNUTAVEK7ZOLYMYXLTY35WBCV6IQPSK7ZBGR3XOX5634B4YTSGRREDOK6FLZNY7DTUUCPZNCR76I67XDXEEO45TSAI6S3Q2AD3UOPC7PENGXVO3H2NOBFJCSJNAQL63YPDEV6TMMUCOMVDLLI4DUNGMHZTKYZNWRNGQG7Y2CJUBX3IAZ7KAC4KGS6TF3M4HHXU37YQD7ZNA",
    locale: 'ja-JP'
};

process.env.FEATURE_FLAG = "1";
process.env.APP_ID = "amzn1.ask.skill.a0705423-fd46-4532-9c2a-5774af6b8914";

// 旬の説明
conversation(opts)
    .userSays('LaunchRequest')
    .ssmlResponse
    .shouldEqual(
        "<speak> ベジチャットへようこそ。知りたい野菜を教えてください。 </speak>",
        "<speak> どの野菜について知りたいですか？ </speak>"
    )
    .userSays('MyVegetableIntent', {VegetableName: 'キャベツ', SeasonName: '旬'})
    .ssmlResponse
    .shouldEqual(
        "<speak> キャベツの旬は3月から5月です。。。他にどの野菜について知りたいですか？ </speak>",
        "<speak> 他にどの野菜について知りたいですか？ </speak>"
    )
    .userSays('MyVegetableIntent', {VegetableName: 'アスパラガス', SeasonName: '旬'})
    .ssmlResponse
    .shouldEqual(
        "<speak> アスパラガスの旬は3月から6月です。。。他にどの野菜について知りたいですか？ </speak>",
        "<speak> 他にどの野菜について知りたいですか？ </speak>"
    )
    .userSays('MyVegetableIntent', {VegetableName: 'セロリ', SeasonName: '旬'})
    .ssmlResponse
    .shouldEqual(
        "<speak> セロリの旬は4月から7 月、11月から12月です。。。他にどの野菜について知りたいですか？ </speak>",
        "<speak> 他にどの野菜について知りたいですか？ </speak>"
    )
    .userSays('MyVegetableIntent', {VegetableName: 'スナップエンドウ', SeasonName: '旬'})
    .ssmlResponse
    .shouldEqual(
        "<speak> スナップエンドウの旬は4月から6月です。。。他にどの野菜について知りたいですか？ </speak>",
        "<speak> 他にどの野菜について知りたいですか？ </speak>"
    )
    .userSays('MyVegetableIntent', {VegetableName: 'クレソン', SeasonName: '旬'})
    .ssmlResponse
    .shouldEqual(
        "<speak> クレソンの旬は4月から5月です。。。他にどの野菜について知りたいですか？ </speak>",
        "<speak> 他にどの野菜について知りたいですか？ </speak>"
    )
    .userSays('MyVegetableIntent', {VegetableName: 'たけのこ', SeasonName: '旬'})
    .ssmlResponse
    .shouldEqual(
        "<speak> たけのこの旬は3月から5月です。。。他にどの野菜について知りたいですか？ </speak>",
        "<speak> 他にどの野菜について知りたいですか？ </speak>"
    )
    .userSays('MyVegetableIntent', {VegetableName: 'そら豆', SeasonName: '旬'})
    .ssmlResponse
    .shouldEqual(
        "<speak> そら豆の旬は4月から6月です。。。他にどの野菜について知りたいですか？ </speak>",
        "<speak> 他にどの野菜について知りたいですか？ </speak>"
    )
    .userSays('MyVegetableIntent', {VegetableName: 'さやえんどう', SeasonName: '旬'})
    .ssmlResponse
    .shouldEqual(
        "<speak> さやえんどうの旬は4月から6月です。。。他にどの野菜について知りたいですか？ </speak>",
        "<speak> 他にどの野菜について知りたいですか？ </speak>"
    )
    .userSays('MyVegetableIntent', {VegetableName: 'レタス', SeasonName: '旬'})
    .ssmlResponse
    .shouldEqual(
        "<speak> レタスの旬は3月から4月、7月から8月です。。。他にどの野菜について知りたいですか？ </speak>",
        "<speak> 他にどの野菜について知りたいですか？ </speak>"
    )
    .userSays('MyVegetableIntent', {VegetableName: 'トマト', SeasonName: '旬'})
    .ssmlResponse
    .shouldEqual(
        "<speak> トマトの旬は3月から4月、6月から8月です。。。他にどの野菜について知りたいですか？ </speak>",
        "<speak> 他にどの野菜について知りたいですか？ </speak>"
    )
    .userSays('MyVegetableIntent', {VegetableName: 'きゅうり', SeasonName: '旬'})
    .ssmlResponse
    .shouldEqual(
        "<speak> きゅうりの旬は5月から9月です。。。他にどの野菜について知りたいですか？ </speak>",
        "<speak> 他にどの野菜について知りたいですか？ </speak>"
    )
    .userSays('MyVegetableIntent', {VegetableName: 'ピーマン', SeasonName: '旬'})
    .ssmlResponse
    .shouldEqual(
        "<speak> ピーマンの旬は4月から9月です。。。他にどの野菜について知りたいですか？ </speak>",
        "<speak> 他にどの野菜について知りたいですか？ </speak>"
    )
    .userSays('MyVegetableIntent', {VegetableName: 'かぼちゃ', SeasonName: '旬'})
    .ssmlResponse
    .shouldEqual(
        "<speak> かぼちゃの旬は5月から8月です。。。他にどの野菜について知りたいですか？ </speak>",
        "<speak> 他にどの野菜について知りたいですか？ </speak>"
    )
    .userSays('MyVegetableIntent', {VegetableName: 'なす', SeasonName: '旬'})
    .ssmlResponse
    .shouldEqual(
        "<speak> なすの旬は6月から9月です。。。他にどの野菜について知りたいですか？ </speak>",
        "<speak> 他にどの野菜について知りたいですか？ </speak>"
    )
    .userSays('MyVegetableIntent', {VegetableName: 'ゴーヤ', SeasonName: '旬'})
    .ssmlResponse
    .shouldEqual(
        "<speak> ゴーヤの旬は7月から8月です。。。他にどの野菜について知りたいですか？ </speak>",
        "<speak> 他にどの野菜について知りたいですか？ </speak>"
    )
    .userSays('MyVegetableIntent', {VegetableName: 'とうもろこし', SeasonName: '旬'})
    .ssmlResponse
    .shouldEqual(
        "<speak> とうもろこしの旬は7月から8月です。。。他にどの野菜について知りたいですか？ </speak>",
        "<speak> 他にどの野菜について知りたいですか？ </speak>"
    )
    .userSays('MyVegetableIntent', {VegetableName: 'ズッキーニ', SeasonName: '旬'})
    .ssmlResponse
    .shouldEqual(
        "<speak> ズッキーニの旬は6月から8月です。。。他にどの野菜について知りたいですか？ </speak>",
        "<speak> 他にどの野菜について知りたいですか？ </speak>"
    )
    .userSays('MyVegetableIntent', {VegetableName: 'にんじん', SeasonName: '旬'})
    .ssmlResponse
    .shouldEqual(
        "<speak> にんじんの旬は4月から7月、11月から12月です。。。他にどの野菜について知りたいですか？ </speak>",
        "<speak> 他にどの野菜について知りたいですか？ </speak>"
    )
    .userSays('MyVegetableIntent', {VegetableName: 'じゃがいも', SeasonName: '旬'})
    .ssmlResponse
    .shouldEqual(
        "<speak> じゃがいもの旬は5月から6月、10月から2月です。。。他にどの野菜について知りたいですか？ </speak>",
        "<speak> 他にどの野菜について知りたいですか？ </speak>"
    )
    .userSays('MyVegetableIntent', {VegetableName: '玉ねぎ', SeasonName: '旬'})
    .ssmlResponse
    .shouldEqual(
        "<speak> 玉ねぎの旬は4月から6月、9月から12月です。。。他にどの野菜について知りたいですか？ </speak>",
        "<speak> 他にどの野菜について知りたいですか？ </speak>"
    )
    .userSays('MyVegetableIntent', {VegetableName: 'ぶなしめじ', SeasonName: '旬'})
    .ssmlResponse
    .shouldEqual(
        "<speak> ぶなしめじの旬は9月から11月です。。。他にどの野菜について知りたいですか？ </speak>",
        "<speak> 他にどの野菜について知りたいですか？ </speak>"
    )
    .userSays('MyVegetableIntent', {VegetableName: 'まいたけ', SeasonName: '旬'})
    .ssmlResponse
    .shouldEqual(
        "<speak> まいたけの旬は9月から11月です。。。他にどの野菜について知りたいですか？ </speak>",
        "<speak> 他にどの野菜について知りたいですか？ </speak>"
    )
    .userSays('MyVegetableIntent', {VegetableName: 'ごぼう', SeasonName: '旬'})
    .ssmlResponse
    .shouldEqual(
        "<speak> ごぼうの旬は3月から5月、10月から12月です。。。他にどの野菜について知りたいですか？ </speak>",
        "<speak> 他にどの野菜について知りたいですか？ </speak>"
    )
    .userSays('MyVegetableIntent', {VegetableName: 'さつまいも', SeasonName: '旬'})
    .ssmlResponse
    .shouldEqual(
        "<speak> さつまいもの旬は9月から11月です。。。他にどの野菜について知りたいですか？ </speak>",
        "<speak> 他にどの野菜について知りたいですか？ </speak>"
    )
    .userSays('MyVegetableIntent', {VegetableName: '里いも', SeasonName: '旬'})
    .ssmlResponse
    .shouldEqual(
        "<speak> 里いもの旬は9月から11月です。。。他にどの野菜について知りたいですか？ </speak>",
        "<speak> 他にどの野菜について知りたいですか？ </speak>"
    )
    .userSays('MyVegetableIntent', {VegetableName: '長ねぎ', SeasonName: '旬'})
    .ssmlResponse
    .shouldEqual(
        "<speak> 長ねぎの旬は11月から3月です。。。他にどの野菜について知りたいですか？ </speak>",
        "<speak> 他にどの野菜について知りたいですか？ </speak>"
    )
    .userSays('MyVegetableIntent', {VegetableName: '白菜', SeasonName: '旬'})
    .ssmlResponse
    .shouldEqual(
        "<speak> 白菜の旬は11月から2月です。。。他にどの野菜について知りたいですか？ </speak>",
        "<speak> 他にどの野菜について知りたいですか？ </speak>"
    )
    .userSays('MyVegetableIntent', {VegetableName: 'だいこん', SeasonName: '旬'})
    .ssmlResponse
    .shouldEqual(
        "<speak> だいこんの旬は10月から3月です。。。他にどの野菜について知りたいですか？ </speak>",
        "<speak> 他にどの野菜について知りたいですか？ </speak>"
    )
    .userSays('MyVegetableIntent', {VegetableName: 'ブロッコリー', SeasonName: '旬'})
    .ssmlResponse
    .shouldEqual(
        "<speak> ブロッコリーの旬は12月から3月です。。。他にどの野菜について知りたいですか？ </speak>",
        "<speak> 他にどの野菜について知りたいですか？ </speak>"
    )
    .userSays('MyVegetableIntent', {VegetableName: 'ほうれんそう', SeasonName: '旬'})
    .ssmlResponse
    .shouldEqual(
        "<speak> ほうれんそうの旬は11月から2月です。。。他にどの野菜について知りたいですか？ </speak>",
        "<speak> 他にどの野菜について知りたいですか？ </speak>"
    )
    .userSays('MyVegetableIntent', {VegetableName: '水菜', SeasonName: '旬'})
    .ssmlResponse
    .shouldEqual(
        "<speak> 水菜の旬は12月から2月です。。。他にどの野菜について知りたいですか？ </speak>",
        "<speak> 他にどの野菜について知りたいですか？ </speak>"
    )
    .userSays('MyVegetableIntent', {VegetableName: '菜の花', SeasonName: '旬'})
    .ssmlResponse
    .shouldEqual(
        "<speak> 菜の花の旬は2月から3月です。。。他にどの野菜について知りたいですか？ </speak>",
        "<speak> 他にどの野菜について知りたいですか？ </speak>"
    )
    .userSays('MyVegetableIntent', {VegetableName: '小松菜', SeasonName: '旬'})
    .ssmlResponse
    .shouldEqual(
        "<speak> 小松菜の旬は12月から2月です。。。他にどの野菜について知りたいですか？ </speak>",
        "<speak> 他にどの野菜について知りたいですか？ </speak>"
    )
    .userSays('MyVegetableIntent', {VegetableName: 'もやし', SeasonName: '旬'})
    .ssmlResponse
    .shouldEqual(
        "<speak> もやしの旬はオールシーズンです。。。他にどの野菜について知りたいですか？ </speak>",
        "<speak> 他にどの野菜について知りたいですか？ </speak>"
    )
    .userSays('MyVegetableIntent', {VegetableName: '青じそ', SeasonName: '旬'})
    .ssmlResponse
    .shouldEqual(
        "<speak> 青じその旬はオールシーズンです。。。他にどの野菜について知りたいですか？ </speak>",
        "<speak> 他にどの野菜について知りたいですか？ </speak>"
    )
    .userSays('MyVegetableIntent', {VegetableName: '豆苗', SeasonName: '旬'})
    .ssmlResponse
    .shouldEqual(
        "<speak> 豆苗の旬はオールシーズンです。。。他にどの野菜について知りたいですか？ </speak>",
        "<speak> 他にどの野菜について知りたいですか？ </speak>"
    )
    .userSays('AMAZON.CancelIntent')
    .ssmlResponse
    .shouldEqual(
        "<speak> また話しかけてくださいね。 </speak>"
    )
    .end();
