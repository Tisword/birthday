// 霸都丶傲天 2019年10月10日 https://github.com/AJLoveChina/birthday
var config = {
    // 句子的长度可以任意， 你可以写十句话， 二十句话都可以
    // 每句话尽量不要超过15个字,不然展示效果可能不太好
    texts: [
        "这个礼物",
        "送给一只",      //这里,每句话结尾的最后一个逗号必须是英文的哦!! 很重要哦!!
        "不要脸的🐟",  // 同上...
        "今天是你活在世上的第16年",
        "祝你福如东海，寿比南山",
        "这个8月说起来还挺倒霉的",
        "毕竟遇到了你这个臭妹妹",
        "不过有一说一",
        "没有你出现的话",
        "这个月估计会挺无聊的吧",
        "算算日子，不知不觉中",
        "已经和你瞎bb快有一个月了",
        "这段时光",
        "和你一起听这首《Darling》",
        "和你一起看禁忌女孩",
        "和你一起打王者",
        "虽然你经常坑得不行",
        "笑~",
        "当然怎么能少了",
        "让我们相遇的光遇",
        "第一次听你弹晴天",
        "第一次和你去千鸟城",
        "第一次和你一起戴上🦊面具",
        "第一次带你拿金人",
        "第一次和你翱翔在重生路",
        "第一次和你坐在星河...",
        "感谢你这段时光给我带来的快乐",
        "今天是你的生日",
        "也是你开学的日子",
        "有时候真的希望",
        "时间能够走慢些呢",
        "但是有些事，又不得不面对",
        "无论是我面对毕业",
        "还是你面对升学...",
        "或许以后我们",
        "相处的时光变少了",
        "经历的事情更多了",
        "就会从对方的的记忆中",
        "慢慢褪色消失",
        "但是共同经历过的事",
        "是无法磨灭的",
        "只希望这个过程能够慢些吧"
        "最后希望你能",
        "在初三认真学习",
        "少玩手机多看书",
        "努力考上西交附中",
        "相信你未来可期~~",
        "最后的最后",
        "愿你一生努力 ，一生被爱",
        "想要的都拥有，得不到的都释怀",
        "只愿你被这世界温柔相待",
        "——帅哥空 2020.9.1",      
    ],
    /**
     * imgs 可以不填, 但是如果要填写的话必须遵循下面的格式
     * "对应上面的文字, 要完全一样" : "图片地址, 可以把图片放在imgs文件夹中"
     * 例如
     * "心爱的小可爱": "./imgs/xiaokeai.jpg"
     *
     * 如果不要图片的话, 直接在每行开头写两个斜杠注释即可, 例如下面的 "今天是你的生日" 的图片就不会展示了:)
     * Tip: 图片最好用正方形or接近正方形, 看起来效果更好
     */
    imgs: {
        "不要脸的🐟": "./img/xiaokeai.png",
        "和你一起听歌的时候": "./img/xiaokeai.png",
        // "今天是你的生日": "./imgs/birthday.jpg",
    },
    // 按钮文字描述, 以下是默认的按钮文字，英文的，您可以改成你喜欢的文字
    desc: {
        turn_on: "给👴点这",
        play: "音乐走起",
        bannar_coming: "来个横幅",
        balloons_flying: "整点气球",
        cake_fadein: "上个蛋糕",
        light_candle: "点根蜡烛",
        wish_message: "🐟🐶16岁大寿快乐",
        story: "想对你说的话",
    }
};
