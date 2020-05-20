new Vue({
    el: "#App",
    data: {
        sum: 0,
        aaa: true,
        list: [{
                url: "./img/30.webp",
                p: "上衣+休闲裤两件套女买买买上衣+休闲裤两件套女买买买",
                dd: "￥99.9",
                urr: "./img/555.png"
            },
            {
                url: "./img/65.webp",
                p: "夏季新款小个子原宿系带雪纺衬衫显瘦压褶阔腿休闲裤套装两件套女",
                dd: "￥46",
                urr: "./img/555.png"
            },
            {
                url: "./img/59.webp",
                p: "新款吊带V领多层蛋糕裙连衣裙女森系打底裙+时尚牛仔外套两件套",
                dd: "￥29.9",
                urr: "./img/555.png"
            },
            {
                url: "./img/60.webp",
                p: "秋冬新款韩版字母印花宽松套头卫衣+阔腿长裤时尚休闲两件套装女",
                dd: "￥109",
                urr: "./img/555.png"
            },
            {
                url: "./img/61.webp",
                p: "新款法式假两件格子气质显瘦连衣裙女收腰显瘦很仙的气质小众夏",
                dd: "￥59",
                urr: "./img/555.png"
            }, {
                url: "./img/62.webp",
                p: "夏季新款气质时尚长裙赫本小黑裙飘逸网纱两件套显瘦黑色连衣裙",
                dd: "￥49",
                urr: "./img/555.png"
            }, {
                url: "./img/63.webp",
                p: "三件套新款韩版小个子毛呢西装外套+高领打底衫+高腰直筒牛仔裤",
                dd: "￥82",
                urr: "./img/555.png"
            }, {
                url: "./img/64.webp",
                p: "初秋款新款连衣裙长袖219新款秋季高腰中长款修身针织裙子女",
                dd: "￥59.5",
                urr: "./img/555.png"
            }
        ],
        lista: [{
            url: "./img/23.webp",
            p: "上衣+休闲裤两件套女买买买",
            dd: "￥9",
            ee: "￥19"
        }, {
            url: "./img/66.webp",
            p: "复古V领格子中长款连衣裙买买",
            dd: "￥19",
            ee: "￥29"
        }, {
            url: "./img/67.webp",
            p: "御姐风时尚两件套装裙女买买",
            dd: "￥29",
            ee: "￥39"
        }, {
            url: "./img/68.webp",
            p: "男女童秋季哪吒连帽卫衣买买",
            dd: "￥39",
            ee: "￥49"
        }],
        lists: [{
            url: "./img/69.webp",
            p: "秋季收腰毛呢绑带连衣裙",
            dd: "￥49",
            ee: "￥59"
        }, {
            url: "./img/66.webp",
            p: "复古V领格子中长款连衣裙买买",
            dd: "￥59",
            ee: "￥69"
        }, {
            url: "./img/67.webp",
            p: "御姐风时尚两件套装裙女买买",
            dd: "￥69",
            ee: "￥79"
        }, {
            url: "./img/68.webp",
            p: "男女童秋季哪吒连帽卫衣买买",
            dd: "￥79",
            ee: "￥89"
        }],
        listss: [{
            url: "./img/70.webp",
            p: "粗花呢外套半身裙两件套",
            dd: "￥89",
            ee: "￥99"
        }, {
            url: "./img/71.webp",
            p: "复古V领格子中长款连衣裙买买",
            dd: "￥99",
            ee: "￥109"
        }, {
            url: "./img/72.webp",
            p: "御姐风时尚两件套装裙女买买",
            dd: "￥109",
            ee: "￥119"
        }, {
            url: "./img/73.webp",
            p: "男女童秋季哪吒连帽卫衣买买",
            dd: "￥119",
            ee: "￥129"
        }],
        listsss: [{
            url: "./img/74.webp",
            p: "上衣+休闲裤两件套女买买买",
            dd: "￥129",
            ee: "￥139"
        }, {
            url: "./img/75.webp",
            p: "复古V领格子中长款连衣裙买买",
            dd: "￥139",
            ee: "￥149"
        }, {
            url: "./img/76.webp",
            p: "御姐风时尚两件套装裙女买买",
            dd: "￥149",
            ee: "￥159"
        }, {
            url: "./img/77.webp",
            p: "男女童秋季哪吒连帽卫衣买买",
            dd: "￥159",
            ee: "￥169"
        }],
        listssss: [{
            url: "./img/78.webp",
            p: "上衣+休闲裤两件套女买买买",
            dd: "￥169",
            ee: "￥179"
        }, {
            url: "./img/79.webp",
            p: "复古V领格子中长款连衣裙买买",
            dd: "￥179",
            ee: "￥189"
        }, {
            url: "./img/80.webp",
            p: "御姐风时尚两件套装裙女买买",
            dd: "￥189",
            ee: "￥199"
        }, {
            url: "./img/81.webp",
            p: "男女童秋季哪吒连帽卫衣买买",
            dd: "￥199",
            ee: "￥199.9"
        }],
        olist: []
    },
    methods: {
        jrgwc(index) {
            var obj = []
            obj = index
                // console.log(obj);      
            if (window.localStorage.jrgwc) {
                var array = JSON.parse(window.localStorage.jrgwc)
            } else {
                array = []
            }
            array.push(index)
            window.localStorage.jrgwc = JSON.stringify(array)
            var dataaa = JSON.parse(window.localStorage.jrgwc)
            this.sum = dataaa.length
            this.olist = JSON.parse(window.localStorage.jrgwc);
        },
    },
    created() {
        if (window.localStorage.jrgwc) {
            var dataaa = JSON.parse(window.localStorage.jrgwc)
            this.sum = dataaa.length
            this.olist = dataaa
        }
    },

});