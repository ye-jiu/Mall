window.onload = function() {
    var liArr = document.querySelectorAll(".inner li")
    var bar = document.querySelector(".bar")
    var olLis = bar.getElementsByTagName("li")
    var ul = document.querySelector(".ul")
    var box = document.querySelector(".box")
    var Liwidth = box.offsetWidth
    var left = document.getElementById("left")
    var right = document.getElementById("right")
    var timer = null;
    var index = olIndex = 0
    var flag = document.createDocumentFragment()
    for (var i = 0; i < liArr.length; i++) {
        var el = document.createElement("li")
        el.innerHTML = i
        flag.appendChild(el)
    }
    bar.appendChild(flag)
    olLis[0].classList.add("active")
    var newLi = box.querySelector("li").cloneNode(true)
    ul.appendChild(newLi)
    for (var i = 0; i < olLis.length; i++) {
        olLis[i].index = i;
        olLis[i].onclick = function() {
            index = olIndex = this.index
            tongbu(index, olIndex)
        }
    }

    function tongbu(index, olIndex) {
        for (var i = 0; i < olLis.length; i++) olLis[i].classList.remove("active")
        olLis[olIndex].classList.add("active")
        animate(ul, -index * Liwidth)
    }
    timer = setInterval(() => {
        auto()
    }, 2000);
    right.onclick = auto

    function auto() {
        index++;
        olIndex++
        if (olIndex > 4) {
            olIndex = 0
        }
        if (index > 5) {
            ul.style.left = 0;
            index = 1
        }
        tongbu(index, olIndex)
    }
    left.onclick = function() {
        index--;
        olIndex--;
        if (olIndex < 0) {
            olIndex = 4
        }
        if (index < 0) {
            ul.style.left = -5 * Liwidth + "px";
            index = 4
        }
        tongbu(index, olIndex)
    }
    box.onmouseenter = function() {
        clearInterval(timer)
    }
    box.onmouseleave = function() {
        timer = setInterval(() => {
            auto()
        }, 2000);
    }

    function animate(el, target) {
        clearInterval(el.timer)
        el.timer = setInterval(function() {
            var current = el.offsetLeft
            var step = (target - current) / 10
            step = step > 0 ? Math.ceil(step) : Math.floor(step)
            current += step
            if (Math.abs(target - current) < Math.abs(step)) {
                el.style.left = target + "px";
                clearInterval(el.timer)
            }
            el.style.left = current + "px"

        }, 15)
    }



    var obj = [{
        "src": "./img/43.webp",
        "url": "./Signin.html"
    }, {
        "src": "./img/35.webp",
        "url": "./Signin.html"
    }]

    var i = 0;
    var leftImg = document.querySelector(".them11-2-1-1");
    fn()
    setInterval(fn, 3000)

    function fn() {
        if (i > 1) {
            i = 0
        }
        leftImg.innerHTML = `
        <a href=${obj[i].url}>
            <img class="img_one" src=${obj[i].src}>
        </a>
        `
        i++;

    }

    setInterval("document.getElementById('datetime').innerHTML=new Date().toLocaleString();", 1000);


    // var tt = function youwu() {
    var wu = document.querySelector(".wu")
    var you = document.querySelector(".you")
    var them14 = document.querySelector(".them14-5-1")
    var them15 = document.querySelector(".them14-5")
    them15.onmouseenter = function() {
        them14.style.display = "block"
        if (window.localStorage.jrgwc) {

            let hehe = JSON.parse(window.localStorage.jrgwc)
            wu.style.display = "none"
            you.style.display = "block"
        } else {
            wu.style.display = "block"
            you.style.display = "none"
        }
    }
    them15.onmouseleave = function() {
        them14.style.display = "none"
    }

    // if (sum = 0) {
    //     wu.style.display = 'block';
    //     them14.style.display = 'block'
    // }
    // else {
    //     you.style.display = 'none';
    //     them14.style.display = 'block'
    // }
    // }

    // var date = new Date();
    // var now = date.getTime();
    // //设置截止时间  
    // var str = "2019/10/19 14:00:00";
    // var endDate = new Date(str);
    // var end = endDate.getTime();
    // //时间差  
    // var leftTime = end - now;
    // //定义变量 d,h,m,s保存倒计时的时间  
    // var d, h, m, s;
    // if (leftTime >= 0) {
    //     // d = Math.floor(leftTime / 1000 / 60 / 60 / 24);
    //     // if (d < 10) {
    //     //     d = "0" + d;
    //     // }
    //     h = Math.floor(leftTime / 1000 / 60 / 60);
    //     if (h < 10) {
    //         h = "0" + h;
    //     }
    //     m = Math.floor(leftTime / 1000 / 60 % 60);
    //     if (m < 10) {
    //         m = "0" + m;
    //     }
    //     s = Math.floor(leftTime / 1000 % 60);
    //     if (s < 10) {
    //         s = "0" + s;
    //     }
    //     setTimeout(onload, 1000);
    // }
    // // document.getElementById("_d").innerHTML = d + "天";
    // document.getElementById("_h").innerHTML = h + "时";
    // document.getElementById("_m").innerHTML = m + "分";
    // document.getElementById("_s").innerHTML = s + "秒";

}

// < script type = "text/javascript" >
//wd  查询关键字
//abc 返回函数 回调函数
let oInput = document.getElementById("search"),
    oList = document.getElementById("list");
oInput.oninput = function() {
    var _val = this.value; //oninput获取当前input框里的内容
    if (_val) {
        let oS = document.createElement("script"); //创造script标签
        oS.src = `https://www.baidu.com/sugrec?&prod=pc&wd=${_val}&cb=abc`;
        document.body.appendChild(oS);
        oS.onload = function() { //在script标签加载完后删除标签
            document.body.removeChild(oS);
        }
    } else {
        oList.innerHTML = "";
    }
};

function abc(data) {
    //data是后台发送过来的函数调用里的参数
    console.log(data);
    let arr = data.g, //获取联想词
        str = '';
    if (arr) {
        var len = arr.length
        for (let i = 0; i < len; i++) {
            str += `<li><a href="">${arr[i].q}</a></li>`
        }
    }
    oList.innerHTML = str;
}
// </script >

function a() {
    $('.them222').find('.them111').eq(0).appendTo($('.them222'));
}

var _content = []; //临时存储li循环内容
var moreload = {
    _default: 8, //默认显示图片个数
    _loading: 4, //每次点击按钮后加载的个数
    init: function() {
        var lis = $(".moreload .hidden li");
        $(".moreload ul.list").html("");
        for (var n = 0; n < moreload._default; n++) {
            lis.eq(n).appendTo(".moreload ul.list");
        }
        $(".moreload ul.list img").each(function() {
            $(this).attr('src', $(this).attr('realSrc'));
        })
        for (var i = moreload._default; i < lis.length; i++) {
            _content.push(lis.eq(i));
        }
        $(".moreload .hidden").html("");
    },
    loadMore: function() {
        var mLis = $(".moreload ul.list li").length;
        for (var i = 0; i < moreload._loading; i++) {
            var target = _content.shift();
            if (!target) {
                $('.moreload .more').html("<p>我是有底线的</p>");
                break;
            }
            $(".moreload ul.list").append(target);
            $(".moreload ul.list img").eq(mLis + i).each(function() {
                $(this).attr('src', $(this).attr('realSrc'));
            });
        }
    }
}
moreload.init();