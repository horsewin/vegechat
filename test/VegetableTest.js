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
    .userSays('MyVegetableOnlyIntent', {VegetableName: 'セロリ', SeasonName: ''})
    .ssmlResponse
    .shouldEqual(
        "<speak> セロリの旬は4月から7 月、11月から12月です。購入後は葉と茎の間の節で切り離し、それぞれ新聞紙で包んでからビニール袋に入れて、冷蔵庫の野菜室で保存します。このとき、茎は立てておくようにしましょう。また、葉は刻んでから冷凍しておくと、場所をとらずに長持ち。 薬味としても重宝します。。他にどの野菜について知りたいですか？ </speak>",
        "<speak> 他にどの野菜について知りたいですか？ </speak>"
    )
    .userSays('MyVegetableOnlyIntent', {VegetableName: 'スナップエンドウ', SeasonName: ''})
    .ssmlResponse
    .shouldEqual(
        "<speak> スナップエンドウの旬は4月から6月です。保存する場合は、ビニール袋に入れてから冷蔵庫へいれてください。1-2日で食べるようにしましょう。冷凍の場合は、固めにゆで、ビニール袋に重ならないように並べて冷凍しましょう。。他にどの野菜について知りたいですか？ </speak>",
        "<speak> 他にどの野菜について知りたいですか？ </speak>"
    )
    .userSays('MyVegetableOnlyIntent', {VegetableName: 'クレソン', SeasonName: ''})
    .ssmlResponse
    .shouldEqual(
        "<speak> クレソンの旬は4月から5月です。水辺育ちのクレソンは水を好むので、保存するときにはコップに水を入れて茎をさし、ビニール袋をかぶせて冷蔵庫で保存しましょう。水はこまめに取り換え、葉についた水分は拭き取ることが、鮮度を保つポイントです。 時間が経つと香りが失われるので、早めに食べきるようにしましょう。。他にどの野菜について知りたいですか？ </speak>",
        "<speak> 他にどの野菜について知りたいですか？ </speak>"
    )
    .userSays('MyVegetableOnlyIntent', {VegetableName: 'たけのこ', SeasonName: ''})
    .ssmlResponse
    .shouldEqual(
        "<speak> たけのこの旬は3月から5月です。時間がたつとえぐみが強くなるので、購入後は早めにゆでましょう。ゆでるときには、米ぬかと赤唐辛子をいっしょにいれると、えぐみがぬけて、おいしく仕上がります。ゆでた後に保存する場合は、ゆで汁ごと容器に入れて冷蔵庫へ。2日間くらいを目安に食べきるようにしましょう。。他にどの野菜について知りたいですか？ </speak>",
        "<speak> 他にどの野菜について知りたいですか？ </speak>"
    )
    .userSays('MyVegetableOnlyIntent', {VegetableName: 'そら豆', SeasonName: ''})
    .ssmlResponse
    .shouldEqual(
        "<speak> そら豆の旬は4月から6月です。そら豆は、「おいしいのは3日間」といわれるほど新鮮第一。購入後はすぐに食べてしまうのがおすすめです。また、豆が空気に触れるとどんどん風味が落ちるので、さやから出すのは調理する直前がよいでしょう。食べきらない場合は、固めにゆでて、ビニール袋に並べて、冷凍しましょう。。他にどの野菜について知りたいですか？ </speak>",
        "<speak> 他にどの野菜について知りたいですか？ </speak>"
    )
    .userSays('MyVegetableOnlyIntent', {VegetableName: 'さやえんどう', SeasonName: ''})
    .ssmlResponse
    .shouldEqual(
        "<speak> さやえんどうの旬は4月から6月です。さやえんどうは、長く空気に触れているとしおれてしまうので、購入後はなるべく早く調理するのがおすすめ。保存する場合は、湿らせたペーパータオルなどで包んでから、ビニール袋に入れて冷蔵庫へ入れましょう。冷凍する場合は、固めにゆでてから冷凍します。。他にどの野菜について知りたいですか？ </speak>",
        "<speak> 他にどの野菜について知りたいですか？ </speak>"
    )
    .userSays('MyVegetableOnlyIntent', {VegetableName: 'レタス', SeasonName: ''})
    .ssmlResponse
    .shouldEqual(
        "<speak> レタスの旬は3月から4月、7月から8月です。日持ちが悪く、鮮度が落ちると苦味が強くなるので、なるべく早く使い切りましょう。余分な水分があると傷みやすいので、保存する場合は、水気をよく切り、ビニール袋に入れるかラップに包んで冷蔵庫で保存します。芯に水を含ませたキッチンペーパーを当てるなど芯だけ濡らした状態で保存すると長持ちします。一度に使い切らない場合は外側から葉をはがして使いましょう。冷凍する場合は、洗って水気をよく切り、適当な大きさにちぎったものをポリ袋に入れ、保存します。。他にどの野菜について知りたいですか？ </speak>",
        "<speak> 他にどの野菜について知りたいですか？ </speak>"
    )
    .userSays('MyVegetableOnlyIntent', {VegetableName: 'トマト', SeasonName: ''})
    .ssmlResponse
    .shouldEqual(
        "<speak> トマトの旬は3月から4月、6月から8月です。真っ赤に熟しているものは、袋に入れるかラップをして冷蔵庫の野菜室で保存しましょう。まだ青みの残っているものは、カゴなどに入れ常温で保存すると自然に熟して赤くなりますので、追熟させてから冷蔵庫へ。冷凍して保存するなら、水洗いして水気をしっかりふき取り、丸ごとラップで包み、さらにビニール袋に入れて冷凍庫で保存しましょう。。他にどの野菜について知りたいですか？ </speak>",
        "<speak> 他にどの野菜について知りたいですか？ </speak>"
    )
    .userSays('MyVegetableOnlyIntent', {VegetableName: 'きゅうり', SeasonName: ''})
    .ssmlResponse
    .shouldEqual(
        "<speak> きゅうりの旬は5月から9月です。熱にも水にも弱い野菜なので、ラップやビニール袋に入れて保存しましょう。また急激な温度変化、特に低温には弱く、冷やし過ぎるとビタミンCが壊れるので、10-15度で冷蔵庫の野菜室に立てて入れれば、4-5日は保存可能です。寒い冬場には冷蔵庫で保存せずに、風通しの良い冷暗所で保管するのが最適です。。他にどの野菜について知りたいですか？ </speak>",
        "<speak> 他にどの野菜について知りたいですか？ </speak>"
    )
    .userSays('MyVegetableOnlyIntent', {VegetableName: 'ピーマン', SeasonName: ''})
    .ssmlResponse
    .shouldEqual(
        "<speak> ピーマンの旬は4月から9月です。水気は禁物。ていねいにふいて、ポリ袋に入れて密封し、冷蔵庫の野菜室に入れましょう。まとめて保存する場合、1個でも傷んでくると他に伝染してしまいます。傷んだ部分は捨てて、早めに使うようにしましょう。また、使いかけのものは、傷みやすいヘタと種を取り除き、ラップに包んで冷蔵庫で保存し、2-3日で使い切りましょう。。他にどの野菜について知りたいですか？ </speak>",
        "<speak> 他にどの野菜について知りたいですか？ </speak>"
    )
    .userSays('MyVegetableOnlyIntent', {VegetableName: 'かぼちゃ', SeasonName: ''})
    .ssmlResponse
    .shouldEqual(
        "<speak> かぼちゃの旬は5月から8月です。。。他にどの野菜について知りたいですか？ </speak>",
        "<speak> 他にどの野菜について知りたいですか？ </speak>"
    )
    .userSays('MyVegetableOnlyIntent', {VegetableName: '', SeasonName: ''})
    .ssmlResponse
    .shouldEqual(
        "<speak> の旬はです。。。他にどの野菜について知りたいですか？ </speak>",
        "<speak> 他にどの野菜について知りたいですか？ </speak>"
    )
    .userSays('MyVegetableOnlyIntent', {VegetableName: '', SeasonName: ''})
    .ssmlResponse
    .shouldEqual(
        "<speak> の旬はです。。。他にどの野菜について知りたいですか？ </speak>",
        "<speak> 他にどの野菜について知りたいですか？ </speak>"
    )
    .userSays('MyVegetableOnlyIntent', {VegetableName: '', SeasonName: ''})
    .ssmlResponse
    .shouldEqual(
        "<speak> の旬はです。。。他にどの野菜について知りたいですか？ </speak>",
        "<speak> 他にどの野菜について知りたいですか？ </speak>"
    )
    .userSays('MyVegetableOnlyIntent', {VegetableName: '', SeasonName: ''})
    .ssmlResponse
    .shouldEqual(
        "<speak> の旬はです。。。他にどの野菜について知りたいですか？ </speak>",
        "<speak> 他にどの野菜について知りたいですか？ </speak>"
    )
    .userSays('MyVegetableOnlyIntent', {VegetableName: '', SeasonName: ''})
    .ssmlResponse
    .shouldEqual(
        "<speak> の旬はです。。。他にどの野菜について知りたいですか？ </speak>",
        "<speak> 他にどの野菜について知りたいですか？ </speak>"
    )
    .userSays('MyVegetableOnlyIntent', {VegetableName: '', SeasonName: ''})
    .ssmlResponse
    .shouldEqual(
        "<speak> の旬はです。。。他にどの野菜について知りたいですか？ </speak>",
        "<speak> 他にどの野菜について知りたいですか？ </speak>"
    )
    .userSays('MyVegetableOnlyIntent', {VegetableName: '', SeasonName: ''})
    .ssmlResponse
    .shouldEqual(
        "<speak> の旬はです。。。他にどの野菜について知りたいですか？ </speak>",
        "<speak> 他にどの野菜について知りたいですか？ </speak>"
    )
    .userSays('MyVegetableOnlyIntent', {VegetableName: '', SeasonName: ''})
    .ssmlResponse
    .shouldEqual(
        "<speak> の旬はです。。。他にどの野菜について知りたいですか？ </speak>",
        "<speak> 他にどの野菜について知りたいですか？ </speak>"
    )
    .userSays('MyVegetableOnlyIntent', {VegetableName: '', SeasonName: ''})
    .ssmlResponse
    .shouldEqual(
        "<speak> の旬はです。。。他にどの野菜について知りたいですか？ </speak>",
        "<speak> 他にどの野菜について知りたいですか？ </speak>"
    )
    .userSays('AMAZON.CancelIntent')
    .ssmlResponse
    .shouldEqual(
        "<speak> また話しかけてくださいね。 </speak>"
    )
    .end();
