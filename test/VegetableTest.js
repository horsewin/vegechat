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
        "<speak> かぼちゃの旬は5月から8月です。丸ごとの場合は、風通しのよい涼しいところで1-2ヶ月保存が可能です。切った場合は、種とワタの部分から傷むので、必ずきれいに取り除いてからラップをし、冷蔵庫の野菜室で保存し、１週間くらいで使い切りましょう。。他にどの野菜について知りたいですか？ </speak>",
        "<speak> 他にどの野菜について知りたいですか？ </speak>"
    )
    .userSays('MyVegetableOnlyIntent', {VegetableName: 'なす', SeasonName: ''})
    .ssmlResponse
    .shouldEqual(
        "<speak> なすの旬は6月から9月です。なすは水分が蒸発しやすく、特に、風に当たると早くしなびてしまいます。保存するときは、水分が逃げないように1個ずつラップに包んで冷蔵庫の野菜室に入れましょう。保存温度が5℃以下になると身が縮んでしまうので、冷しすぎに注意。購入してから3-4日で食べてしまうのがベストです。長く保存する場合は、煮物や炒め物など、調理をしてから密閉容器に入れ、冷凍保存します。。他にどの野菜について知りたいですか？ </speak>",
        "<speak> 他にどの野菜について知りたいですか？ </speak>"
    )
    .userSays('MyVegetableOnlyIntent', {VegetableName: 'ゴーヤ', SeasonName: ''})
    .ssmlResponse
    .shouldEqual(
        "<speak> ゴーヤの旬は7月から8月です。水気と乾燥が大敵で、常温で置いておくと実が黄色になり、味や品質も落ちてしまいます。表面をふいてからポリ袋やラップでくるみ、冷蔵庫の野菜室に立てて保存しましょう。。他にどの野菜について知りたいですか？ </speak>",
        "<speak> 他にどの野菜について知りたいですか？ </speak>"
    )
    .userSays('MyVegetableOnlyIntent', {VegetableName: 'とうもろこし', SeasonName: ''})
    .ssmlResponse
    .shouldEqual(
        "<speak> とうもろこしの旬は7月から8月です。収穫後急速に栄養価が落ちますので、極力買ったらその日のうちに食べることをおすすめします。保存する場合は、皮付きのままラップで包み野菜室へ。すぐに食べない場合はゆでてからラップで包み冷蔵庫に入れれば2-3日は保存可能です。。他にどの野菜について知りたいですか？ </speak>",
        "<speak> 他にどの野菜について知りたいですか？ </speak>"
    )
    .userSays('MyVegetableOnlyIntent', {VegetableName: 'ズッキーニ', SeasonName: ''})
    .ssmlResponse
    .shouldEqual(
        "<speak> ズッキーニの旬は6月から8月です。乾燥しやすく、水分が抜けてしまうと味が落ちやすいので、ラップや新聞紙に包んで冷蔵庫の野菜室で保存しましょう。 冷凍して保存するには、輪切りや角切りにしてかために加熱し、トレイなどに並べ、くっつかないようにし、完全に凍ったら保存袋に移しましょう。。他にどの野菜について知りたいですか？ </speak>",
        "<speak> 他にどの野菜について知りたいですか？ </speak>"
    )
    .userSays('MyVegetableOnlyIntent', {VegetableName: 'にんじん', SeasonName: ''})
    .ssmlResponse
    .shouldEqual(
        "<speak> にんじんの旬は4月から7月、11月から12月です。湿気に弱いので冷蔵庫に丸のまま保存する際には新聞紙などで包みましょう。冬など寒い季節は新聞紙にくるんだり、箱のまま冷暗所においておいても大丈夫です。切った物は切り口から傷み始めるので、ぴったりとラップで包んで冷蔵庫に入れておき、3日-4日位で使い切るようにしましょう。。他にどの野菜について知りたいですか？ </speak>",
        "<speak> 他にどの野菜について知りたいですか？ </speak>"
    )
    .userSays('MyVegetableOnlyIntent', {VegetableName: 'じゃがいも', SeasonName: ''})
    .ssmlResponse
    .shouldEqual(
        "<speak> じゃがいもの旬は5月から6月、10月から2月です。冷蔵庫には入れず、風通しのよい冷暗所で保存しましょう。ただし、日に当てると芽に含まれる毒素・ソラニンが生成されるので注意です。りんごと一緒にポリ袋に入れておくと、りんごから出る成分が芽の成長を抑え、芽が出にくくなるという効果があります。冷凍で保存も可能ですが、生のまま冷凍してしまうと組織が壊れ、解凍した時に水分が抜けてフカフカの状態になってしまい美味しくなくなってしまいます。冷凍で長期保存したい場合は、一度電子レンジにかけるか、茹でるか蒸して完全に火を通し、潰して小分けにしましょう。。他にどの野菜について知りたいですか？ </speak>",
        "<speak> 他にどの野菜について知りたいですか？ </speak>"
    )
    .userSays('MyVegetableOnlyIntent', {VegetableName: '玉ねぎ', SeasonName: ''})
    .ssmlResponse
    .shouldEqual(
        "<speak> 玉ねぎの旬は4月から6月、9月から12月です。黄玉ねぎは、湿度が高いと腐敗が早く進みますので、冷蔵庫ではなく、風通しのよい冷暗所で保存しましょう。ただし、新玉ねぎは、水分が多く、痛みやすいので袋に入れ野菜庫に入れるか、風通しの良い涼しいところにおいておきましょう。また、切って使いかけの物は切り口が乾燥しないようにラップして冷蔵するようにしましょう。。他にどの野菜について知りたいですか？ </speak>",
        "<speak> 他にどの野菜について知りたいですか？ </speak>"
    )
    .userSays('MyVegetableOnlyIntent', {VegetableName: 'ぶなしめじ', SeasonName: ''})
    .ssmlResponse
    .shouldEqual(
        "<speak> ぶなしめじの旬は9月から11月です。使い残したぶなしめじはラップに包んで冷蔵庫で保存し、なるべく3-4日で使い切るように心掛けましょう。また、水けが付いていると傷みやすいので要注意。冷凍する場合は、石づきを切り落として小房に分け、袋に入れて冷凍庫で約1ヶ月保存可能です。。他にどの野菜について知りたいですか？ </speak>",
        "<speak> 他にどの野菜について知りたいですか？ </speak>"
    )
    .userSays('MyVegetableOnlyIntent', {VegetableName: 'まいたけ', SeasonName: ''})
    .ssmlResponse
    .shouldEqual(
        "<speak> まいたけの旬は9月から11月です。ラップに包んで冷蔵庫で保存し、なるべく3-4日で使い切るように心掛けましょう。また、水気がついていると傷みやすいので要注意です。冷凍する場合は、石づきを切り落とし小房に分け、袋に入れて冷凍庫で約1ヶ月保存可能です。。他にどの野菜について知りたいですか？ </speak>",
        "<speak> 他にどの野菜について知りたいですか？ </speak>"
    )
    .userSays('MyVegetableOnlyIntent', {VegetableName: 'ごぼう', SeasonName: ''})
    .ssmlResponse
    .shouldEqual(
        "<speak> ごぼうの旬は3月から5月、10月から12月です。泥付きの場合は、そのまま新聞紙に包んで風通しのよい涼しいところで保存してください。洗ってあるごぼうはポリ袋などに密封して、冷蔵庫の野菜室で保存しましょう。。他にどの野菜について知りたいですか？ </speak>",
        "<speak> 他にどの野菜について知りたいですか？ </speak>"
    )
    .userSays('MyVegetableOnlyIntent', {VegetableName: 'さつまいも', SeasonName: ''})
    .ssmlResponse
    .shouldEqual(
        "<speak> さつまいもの旬は9月から11月です。寒さに弱いので、冷蔵庫には入れず、新聞紙に包んで常温で保存しましょう。保存は約2週間くらいが目安で、ほどよい水気と乾燥に注意しましょう。。他にどの野菜について知りたいですか？ </speak>",
        "<speak> 他にどの野菜について知りたいですか？ </speak>"
    )
    .userSays('MyVegetableOnlyIntent', {VegetableName: '里いも', SeasonName: ''})
    .ssmlResponse
    .shouldEqual(
        "<speak> 里いもの旬は9月から11月です。乾燥と低温に弱い食材です。冷蔵庫での保存は避け、ぬらした新聞紙に包んで、日の当たらない風通しの良い場所で保存してください。泥が洗ってあるものは、長期保存に向いていないので買ってきたら2-3日程度で食べきりましょう。。他にどの野菜について知りたいですか？ </speak>",
        "<speak> 他にどの野菜について知りたいですか？ </speak>"
    )
    .userSays('MyVegetableOnlyIntent', {VegetableName: '長ねぎ', SeasonName: ''})
    .ssmlResponse
    .shouldEqual(
        "<speak> 長ねぎの旬は11月から3月です。「根深ねぎ」は新聞紙で包み、冷暗所で立てて保存します。使いかけの場合は、白と緑の部分で切り分けてからビニール袋に入れ、冷蔵庫の野菜室で保存しましょう。「葉ねぎ」は、湿らせた新聞紙に包んで冷蔵庫の野菜室で保存します。また、両方とも、みじん切りや小口切りにして冷凍しておけば1ヶ月くらい持ちます。。他にどの野菜について知りたいですか？ </speak>",
        "<speak> 他にどの野菜について知りたいですか？ </speak>"
    )
    .userSays('MyVegetableOnlyIntent', {VegetableName: '白菜', SeasonName: ''})
    .ssmlResponse
    .shouldEqual(
        "<speak> 白菜の旬は11月から2月です。新聞紙に包んで、冷暗所に立てて保存しましょう。丸ごとなら、冬場は3-4週間は長持ちします。外葉からはがして使う場合は、芯に切り込みを入れて水を含んだ新聞紙をはさみ、ラップで包んで冷蔵庫の野菜室で立てて保存しましょう。一方、カットした白菜は傷みやすいので、ラップで包んで冷蔵庫で保存し、早めに使い切りましょう。。他にどの野菜について知りたいですか？ </speak>",
        "<speak> 他にどの野菜について知りたいですか？ </speak>"
    )
    .userSays('MyVegetableOnlyIntent', {VegetableName: 'だいこん', SeasonName: ''})
    .ssmlResponse
    .shouldEqual(
        "<speak> だいこんの旬は10月から3月です。葉がついている場合は、葉が根の養分を吸い上げてしまうので、切り落として別々に保存しましょう。水分たっぷりの大根は乾燥させないことが大切なので、切り口はラップや湿らせた新聞紙などでくるみ、冷蔵庫の野菜室へ入れましょう。。他にどの野菜について知りたいですか？ </speak>",
        "<speak> 他にどの野菜について知りたいですか？ </speak>"
    )
    .userSays('MyVegetableOnlyIntent', {VegetableName: 'ブロッコリー', SeasonName: ''})
    .ssmlResponse
    .shouldEqual(
        "<speak> ブロッコリーの旬は12月から3月です。日もちがせず、黄色く変色しやすいので、すぐに食べ切ることがおすすめです。買ったらすぐにビニール袋に入れて、冷蔵庫の野菜室で立てて保存し、4-5日で使い切りましょう。それ以上保存する場合は、小房に分けて硬めにゆでてから冷凍庫へ入れましょう。。他にどの野菜について知りたいですか？ </speak>",
        "<speak> 他にどの野菜について知りたいですか？ </speak>"
    )
    .userSays('MyVegetableOnlyIntent', {VegetableName: 'ほうれんそう', SeasonName: ''})
    .ssmlResponse
    .shouldEqual(
        "<speak> ほうれんそうの旬は11月から2月です。ぬらした新聞紙で包み、ビニール袋に入れて、冷蔵庫の野菜室で立てて保存します。長持ちさせるなら、かためにゆで、冷水に取ってから水気をよくしぼり、ラップに包んで冷凍しましょう。。他にどの野菜について知りたいですか？ </speak>",
        "<speak> 他にどの野菜について知りたいですか？ </speak>"
    )
    .userSays('MyVegetableOnlyIntent', {VegetableName: '水菜', SeasonName: ''})
    .ssmlResponse
    .shouldEqual(
        "<speak> 水菜の旬は12月から2月です。日もちがしないので、購入後はできるだけ早めに使い切るのがポイントです。 葉がやわらかく傷みやすいので、冷蔵庫に入れるときはぬらした新聞紙で包んでからビニール袋に入れ、冷蔵庫の野菜室に立てて保存しましょう。。他にどの野菜について知りたいですか？ </speak>",
        "<speak> 他にどの野菜について知りたいですか？ </speak>"
    )
    .userSays('MyVegetableOnlyIntent', {VegetableName: '菜の花', SeasonName: ''})
    .ssmlResponse
    .shouldEqual(
        "<speak> 菜の花の旬は2月から3月です。保存する場合は、しめらせた新聞紙などで全体を包み、ビニール袋に入れて立てて冷蔵庫の野菜室に保存します。固めにゆでラップに包み、冷蔵の場合は2-3日程度の保存ができます。長持ちさせたいときには、固めにゆでて水気をしぼってからラップで包み、冷凍しましょう。。他にどの野菜について知りたいですか？ </speak>",
        "<speak> 他にどの野菜について知りたいですか？ </speak>"
    )
    .userSays('MyVegetableOnlyIntent', {VegetableName: '小松菜', SeasonName: ''})
    .ssmlResponse
    .shouldEqual(
        "<speak> 小松菜の旬は12月から2月です。傷みやすく、1-2日程度で葉がしおれてくるので、できるだけ早め使いましょう。保存する場合は、湿らせた新聞紙やペーパータオルで包み、立てて冷蔵庫に入れれば2-3日程度はもちます。 冷凍するなら、水洗いして水分をしっかりふき取り、食べやすい長さに切って保存袋に入れ、空気をしっかり抜いて冷蔵庫へ入れましょう。。他にどの野菜について知りたいですか？ </speak>",
        "<speak> 他にどの野菜について知りたいですか？ </speak>"
    )
    .userSays('MyVegetableOnlyIntent', {VegetableName: 'もやし', SeasonName: ''})
    .ssmlResponse
    .shouldEqual(
        "<speak> もやしの旬はオールシーズンです。あまり保存がきかないので、できるだけ買ってきたらすぐに使い切ることがおすすめです。もし保存する場合は、湯通しして細菌の繁殖を防いだうえでポリ袋に入れて保存しましょう。ポリ袋につま楊枝などで穴をあけて保存することをおすすめします。。他にどの野菜について知りたいですか？ </speak>",
        "<speak> 他にどの野菜について知りたいですか？ </speak>"
    )
    .userSays('MyVegetableOnlyIntent', {VegetableName: '青じそ', SeasonName: ''})
    .ssmlResponse
    .shouldEqual(
        "<speak> 青じその旬はオールシーズンです。乾燥に弱いのでラップに包んで野菜室で保存するのがおすすめです。湿らせたペーパータオルで包むとより長持ちします。また、調理前に水につけると蘇生して、パリッとなるためおすすめです。。他にどの野菜について知りたいですか？ </speak>",
        "<speak> 他にどの野菜について知りたいですか？ </speak>"
    )
    .userSays('MyVegetableOnlyIntent', {VegetableName: '豆苗', SeasonName: ''})
    .ssmlResponse
    .shouldEqual(
        "<speak> 豆苗の旬はオールシーズンです。袋詰めのままで封を開けていない場合は、野菜室で立てて保存することがおすすめです。根をカットして保存する場合は、冷蔵庫の中がおすすめです。ただし冷気が直接あたると葉が傷みますので、あたらない場所を選びなるべく早く使い切るようにしましょう。。他にどの野菜について知りたいですか？ </speak>",
        "<speak> 他にどの野菜について知りたいですか？ </speak>"
    )
    // .userSays('MyVegetableOnlyIntent', {VegetableName: '', SeasonName: ''})
    // .ssmlResponse
    // .shouldEqual(
    //     "<speak> の旬はです。。。他にどの野菜について知りたいですか？ </speak>",
    //     "<speak> 他にどの野菜について知りたいですか？ </speak>"
    // )
    .userSays('AMAZON.CancelIntent')
    .ssmlResponse
    .shouldEqual(
        "<speak> また話しかけてくださいね。 </speak>"
    )
    .end();
