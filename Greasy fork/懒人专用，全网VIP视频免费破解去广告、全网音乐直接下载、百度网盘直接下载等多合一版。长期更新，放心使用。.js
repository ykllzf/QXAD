// ==UserScript==
// @name         懒人专用，全网VIP视频免费破解去广告、全网音乐直接下载、百度网盘直接下载等多合一版。长期更新，放心使用。
// @namespace 	 lanhaha
// @version      4.0.3
// @description  自用组合型多功能脚本，无需关注公众号，集合了优酷、爱奇艺、腾讯、bilibili(B站)、芒果等全网VIP视频(PC+移动端)免费破解去广告，网易云音乐、QQ音乐、酷狗、酷我、虾米、蜻蜓FM、荔枝FM、喜马拉雅等网站音乐和有声书音频免客户端下载，百度网盘直接下载，优惠券查询等几个自己常用的功能。
// @author       lanhaha，syhyz1990，zhmai
// @icon         data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAQ8ElEQVR4Xu1dCXQURRr+apIQT1wQw6EYBcSErCgKCoQowoocLirKeoAoLD5x2YDu+hTCPnddJeC5Ct6gIBtdlUMQxAPE95gMKkbhoWGCKMgpsPjUoEsIkNr3TadhMumeqe6ungRI8SBAV9fxf/Wf9VeXgIcipczy8PpR/aoQoszNBIWTl6SUvQAMAHAJgFbYsSsdH5e0wiclwMpVwK7dTpo7eupmNAO6dQa6dDJ+tsjYCGALgGIA7woh+FOpKAMi9+27GY0aDcSW7d3xyustECpJw2b22VBqUSCzNZB3yT6MuGkrmmcsR2XlIpGePk+FUkqAyG82/Bmnt7wWz868AC+92lSl4YY6ANIbAbfcsAt3DivBtu/ni3ZtpiWiS1xA5A8/dMe89wag7Vl98eDj52LnrhMTNdjw3IICzU8rx/33rMWGDYsxsO9icdppn9vRyRYQuXv3IKSkDMCkqT2x8IPTIZDeQGwPFJCyAgOv/A735S/FfrFQNP/NB1atWQIif947BPsrBmPUX7uj9OumEEjxMJSGV00KSHkAOe134sUnPkJqylzRuPH8WOLUAkTu23cjDsohGJGfizXhJg3U9IECHTvsxKynP0RaWpEQ4t3oHmoAIqW8DMBI5E/oh2XLT/VhKA1NmhS4uv92FI5/C8AMIcQhnVITkM8+fwjrN92EBx8/C0IEGqjnIwUoviYWhHFW65niwo5PmD0dAkTu+rkvUg/ehT6DL8X/9h3v41AamjYpcMLx5Xj/zSUQ8knRtGnEeTwMyML3/4HPVw/FG2+3gRBK/klSKdv5AuD0FsDpLQ2PmMX8d+xAGDVgKVsPbPseKPsGKFmd1OEqdSblQdww8CtcdNE08fvfPXMIELljx3kQqeNw5fX9UHmgfijyVi2AXj2AizsBvS9Vml/CSgTqs1XAsqABUn0ojdK+x/tvzENKYJJo1mxbhBNk4WODIFPGomhOVwjRqM7GefJJBgjD/gBknePvMMg5s94ElhUD23f421e81iV+wYibP4KQj4h7RhcbgHTrPxpVuB3lP59XJ8qc3HBNP+CWwUDjk5NPnLcWA8/OqBtgJA6gVcsSpMinxQdzXjUA6ZBXgKqqYRA4F8lUH+SIPw03OKI+lLoARlZVAShFVWC6WFc8xQAkJ/efOIghEKLNYTXvM4Wu7guMG+OcIyhetu0wdIFZKH4Irsld5Dgqfyp9/t1JKd8D/Hu2wTHJKFICEusQCMwSa4OF1SKr31T8uGcQhGzlO4eQQBMLDGWtUqh8SXxTIe/5ReWtw3UIFK0y9sefWe3U3qeFNqHQf+UvyRFyA1LwqigN3W8A0u+mImza3A8Q/obWe+UBE8cn5goSff67wPzF+gnCBTF6BNA7z+CqROW2MTW5MVF9p88JiMBWnHDcHFGy9G4DkLwB72D3jz0hAic4bU+5/n35iXUFxdEzLxtg+F0IBkEhOPHEGkVYt/7+jkZiN5o2WSRCC4cbgHS8/ENUVuYiIPwJsT80Hrg2zqTIEQSCsrsuCq07AmPHMTl5/o5Kyj1ITVkmvlx+jQFIdvflkX1yEdDrg3CCUwrj6ws6aQWFgFPdoJtE5JLxYwCK1ehCrr1isO7earYn5V5ABkV4xZXVgPT4GEBnCKRq7XnGFHswCMDkKckRT04mRUAIDAH6bDVQMNF//0RiH4BPRLi4pwFIVveVgLgQAaFvIyqemKLlNGGifoXthPD1qa6U+wHxqQgX55ki63MgcL62nUH6F5TLVoVg3JZf9yLKDSA0me8bY3D9h8uBCZP0zIPeOlAiwsXdTEBWQaIjAgHveyBk+amFRx8YnNEHbxoOp1noq1w3wg20Nd+pkgcB+YUoW3FxdegkdzUkvMexKHfnvmztZxzJnEHykTvmWnjv9OhpIXopEgRktQiHOpscsgZADoRHDrFT4kc6GCQ2F9sSG7P8uuHe9CH3RSDXiPCKC6sByf3SAMRDZJE6g7ojttCaos6oL/sPXlaynW5kWGe4xdxV+6qSVZBYI9aFOlVbWblfQaCDa0Dob1C+WoXOGQ9KhuetOnkv9TjPeTOsPXsvIRYpGfH9SoRD5x8GBOiAgEsOYbCQ+xmxhU5ffoEXEtS/d+2MFi9cUh2CF+EVHU2lXgqJbFccYidbKaro4da1B+4HpDOnAl0uqN2yWy6RUkJirSgL/bYakB5rwbMebnSIHXfQC6+r2JQfIES3yTD+zCn6JEIVN0WiAcnKDVfvFjrLNrHTHTriP2yboXomOHADiqblgvf8JrV6+1ZcwlALDRinhRwiEBZrQzmmDilztX1rZ1npUORWJjQdsclT/d2fUCWmlV/i1ieJACLKxNriDt4AoRMYmx2igztIlNKgPWkYtiAwdZktwtFRwTNsz61iWpIU026KFkDslDn1htuBRU8mHiBmPXMP5Ug3HAylvk6UhbLdcwhXBjNGYotXr9VsTwUQ1uWOHhdAfdIvTrmkOtFBlIWyqgHpsQ5CtneU4GCl1OiNExAdRRUQsy8qfkZfo7NRdIwjGW1oAcSKYLrEVSIdEo9IdNBoVCRbvzCt6Zr+wJ49RgqRk1BRLUCye3wNIc+Jyr2Ovy7s7HB65fTOdRQrwGlWquZaMU2UhEmGfom1NilGGZZXXRQRQMTXoqz4XHML1xkgduauzmQAK0BMs5L6i2NIlMZDwlDxF83RsUTs27AS345M4Agg60W4uL0Z7V0PoJ2yDrFS6LrM3XhKPXqSBIPRV6sYWizp/NYvVoDQDKboVCpeAdHppdoNOB6HRL9DB23cWOvYUmzb1C8PT3Em31UIyh3S2GwVJ157JHKCb0Q4dI65QfUNINoqc4hnFlWYpSogZlPUa4UFarm8TKp+eKo+/WIlMciVfRSTyD0DEru3TKI4kpk+AGI2mSjpzaynM6nazidT1akRQOS3IryinTsOcbp6Fehfq4qXPqhfTMWfqG+uZIZhvFiH1GOMeseWOgVEd7jdCyAmYRjeKZygrl/GFLgTY3ZuQAMgNuygql/c7vppByQr91tHh3V0rN5EosSPPuz8p+ixqK7q6He8+mXVZ0REWaitGVw8+gFhaCMSKo9KdItdFPTqu1rkBiRaPJ6VunFoxz0gVmavzjgWCaCLQyhOGJVWObHldmPNChAngVYLDtkAgbM9+SFOHKFEK47PmSUYe/zMSRIBFTqBiHcuxRwHxz75KfcOow7HUGKjKAu1MUWWM0C8OkIqgMSm26iuOJq8lOkqR6wZ7pk0xZvJG1k8FjunTkInRrTXAyB2SozyV2d0laucK5y+gkqyHUEclx9fT5CAHCNFLCPCOsZrJV4duQHVgIRNDsnONThE9Uy0XeKxzvC7CheZdaKPCSR6j8AyAqwaGk/Unp3J60S8wisgdkpXp2Kn6OFBUR7MjBwGnVFbtJh1VPUEgdC9o+jVwiItjdDJdyK84mwzdLIREPxGVqL1cPi5lSJzElBL1JNVYjMzIc2VTYWtoif8PjpnpT9U9Z1JAy2A2OkRXUkOVgFMymV+xUFFT3CyDHjq0hNWC8gu88aR/iBzRNhkkwiHznLPIXWRBsQIrcrHaRgopPWkS0/YcbPd8QSni7I2ILnfASJTVacfGp+Vr0CicR/Aq/XiNOuEg6Ko4OrUrSfsALHiYjc7p8Z+yGYRDmWaW7juALELOztlWasJOwHEbz1hNT6dc9cGCK0cHvOKTTbQwSWqgNCyo/XklSMTGRmxz624w+0RDAtANgE405GVZQ7QzuzzuoOYCJBkHeq3Aspuzk688+h2tQISj0uc5CbFTtzuUAxlND/FkSw9ETuueCeNo81yJxynFRB2bLdi3G74sM3YWFZdf6DGJPCUidYf5fQiEQxAtohw6ExTqbsXWWzKjkv4TIeCd7La/Kwb76Sxl+N7BiDbRDh0hh5ArFZ0NGGc2uV+EtVt23bxO22LTu5AafHl+gDhwOzkvg6ryy0hdbxHCcAQidVuo859oNJg9deAsnM3A2jtysqKnnA80eVFn+ggqts2OCce8LT6jjD12qDh+iICpcHrTQ7RAwgnbReO5jO3VohbYnp9Lx4YbFv3dkNpcKQJyFZ+Sd0zh5gEsIvxHEmAJALDi1Vlt1BKg3eLyF2EOT0+AoTDD9zGWX66YjxeV7jb96nAeQrYLpDp1gFMNJ7S4L0EpC9y8vR9BtTOGjlSzN+h1wPjx9qTzi8w2GNp8O8E5Drk5Ok70XKkiiuVDzz7CYYByGQCcity8mYm4ibl51biymoHLXof3MxEZ6Aw2UFCM0uF0YZ4xW8wDECeICCjkJP3nDLB41VUEVfxCGACw8n7vbnkJF0oWeK2NPg0AfkLcvIe1wJIInGlmqbDwfBrDQSG93voLLyfhONQSYwgt9K0TVYgszT4AgEZh5y8SVrmbCeu8scb++Bubsoh13zIG3HWu7u6iLqBn1Kif8QMFpUtYBKjLj7wXBqcQUDuxwW9HsD+/d4wsRNXJCSJokoIlVGwzfJfjDPhVufBSfzGJ7m7pUdXNqPKPKLrpKUBq5cVEZCHcOnACfjhR6dN1Kxv992sRK2SAJTniY44J2rH63Mzm9HrF0bdjuPUJsDyt/9DQB7GoNvuxbpv3TZlvPfxYudcYKbp8H2Vmwq8jdD6bS4I6io/04VUxn1uW2DezDkE5Enkjx/rSXnG+3iy1WDibb9GFG4/Q+b7yTXUEdRNKjnDKgT1WqdvL+DxB+YTkKcxrWg0nnzBfZOq4sppdgjBIefwbIfTq4tiZ0NOMG/pIRDJ9ncSUde4X2URAXkeK1fd4em7syriyvzAl1tCkFsYAqfxwH2J6HC4yUnRbVPx898EgSmufvs1iQie6Pmcl75Hdvt7jOBiZeUiXDW0bWTgTku8cDvbSnbymtPx14f6zTMqsOTNlSI19TIj/C7lXDw1rTdenHWK4/HF+0ysmTPluNFj6AV+TW7UrZtx8fmvi26XjDMA2bv3jyjfMxJX3tAJlfudX3sUq0OSlVt7NODWKO0XLJm9DAJPiWbNlh06fyAXLZ2IL1bfhNfeykSg4erupGDNK7yHDi5Dp/NeEf17P8Y+DwNSXp6HA3JU5ILiX/fWjwuKk0KVOuzklMY78U7RAhw48LzIyIjclFnjhI784stb8N2WkSiY2AUB0XCnup9Y8Wa2SX9bjszM6aJTh/lmV7WOTMlnXhqHrduHYsF77QGR5ueYjtm2q+ReDLpqFVq3mCnuHD4tmg61Afn1104QabdhxOhBWBM+45glml8Tl7ICHbPX4tQmReLZR/8V243loUL5U0UfyMqhuP2uPlj7dXO/xnbMtUswcrLKIMRrYvb0R63mb3vKU5aXX4PUtMG4f3JPLFraXOuVesccEhFnby/6X1GGn8rfEC898bAdCeIeu5UVFQOQnt4fyz/uiX88ciZ2/PdEV1daHIsARM85o9kePHDvl1i/cY4YOaSWmIqrQ2JpJ6XsjA0beqNly1w8NzMb04syAHGiceehg2PUxyIovA5v1LAfcMewEmzbtUC0y3wxERmUKSr37++FJcEeyMnqiFmvZ2LFyibYuOVkCBwPiUYIIADJ31JUZ0BGt238nX9GMu+jjbzq/zBr13pu1q3xING86vZ5Zmsgt0sFbr1xM1q3CqKycrFIT5+nMihlQA6RZevWrpg+uwMymmRiUL+WCH6agc9WNcbKL47Dzt1pgEwFBMFJQQACVeBllQJEib8gq38TnMiXCg6DFemEzw8BVhtUlVk5r+OYDjW6aNEc6NoJ6HIh0PUioGXzCgCbUF4eROPGi4UQJapD8jYQ1V4a6ilT4P+GC5Ol+xIKnwAAAABJRU5ErkJggg==
// @include      *://pan.baidu.com/disk/home*
// @include      *://yun.baidu.com/disk/home*
// @match        *://pan.baidu.com/disk/main*
// @match        *://yun.baidu.com/disk/main*
// @include      *://pan.baidu.com/s*
// @include      *://yun.baidu.com/s*
// @include      *.youku.com/v*
// @include      *m.youku.com/*
// @include      *.iqiyi.com/v_*
// @include      *.iqiyi.com/w_*
// @include      *.iqiyi.com/a_*
// @include      *.iq.com/play/*
// @include      *.le.com/ptv/vplay/*
// @include      *v.qq.com/x*
// @include      *v.qq.com/p*
// @include      *v.qq.com/cover*
// @include      *v.qq.com/tv/*
// @include      *://*.tudou.com/listplay/*
// @include      *://*.tudou.com/albumplay/*
// @include      *://*.tudou.com/programs/view/*
// @include      *://*.tudou.com/v*
// @include      *://*.mgtv.com/b/*
// @include      *tv.sohu.com/*
// @include      *film.sohu.com/album/*
// @include      *://*.bilibili.com/video/*
// @include      *://*.bilibili.com/anime/*
// @include      *://*.bilibili.com/bangumi/play/*
// @include      *://*.bilibili.com/s/*
// @include      *.pptv.com/show/*
// @include      *.wasu.cn/Play/show*
// @include      *v.yinyuetai.com/video/*
// @include      *v.yinyuetai.com/playlist/*
// @include      *://item.taobao.com/*
// @include      *://*detail.tmall.com/*
// @include      *://*detail.tmall.hk/*
// @include      *://*item.jd.com/*
// @include      *://*.yiyaojd.com/*
// @include      *://*.liangxinyao.com/*
// @include      *://music.163.com/*
// @include      *://y.qq.com/*
// @include      *://i.y.qq.com/*
// @include      *://*.kugou.com/*
// @include      *://*kuwo.cn/*
// @include      *://*.xiami.com/*
// @include      *://music.taihe.com/song*
// @include      *://*.1ting.com/player*
// @include      *://music.migu.cn/v*
// @include      *://*.lizhi.fm/*
// @include      *://*.qingting.fm/*
// @include      *://*.ximalaya.com/*
// @exclude      *://*.eggvod.cn/*
// @connect      d.pcs.baidu.com
// @connect      baidu.com
// @connect      baidupcs.com
// @connect      youxiaohou.com
// @connect      localhost
// @require      https://lf26-cdn-tos.bytecdntp.com/cdn/expire-1-M/jquery/3.2.1/jquery.min.js
// @require      https://cdn.jsdelivr.net/npm/sweetalert2@10.16.6/dist/sweetalert2.all.min.js
// @original-script https://greasyfork.org/scripts/376078
// @original-author zhmai
// @original-license GPL License
// @original-script https://github.com/syhyz1990/baiduyun/blob/master/baiduyun.user.js
// @original-author youxiaohou
// @original-license AGPL License
// @original-changes 将强制关注公众号改为非强制。
// @antifeature  referral-link 此提示为GreasyFork代码规范要求含有查券功能的脚本必须添加，实际使用无任何强制跳转，代码可查，请知悉。
// @license      AGPL License
// @grant        GM_download
// @grant        GM_openInTab
// @grant        GM_setValue
// @grant        GM_getValue
// @grant        GM_deleteValue
// @grant        GM_xmlhttpRequest
// @grant        GM_addStyle
// @grant        unsafeWindow
// @grant        GM_setClipboard
// @grant        GM_getResourceURL
// @grant        GM_getResourceText
// @grant        GM_info
// @grant        GM_registerMenuCommand
// @grant        GM_cookie
// @run-at       document-idle
// ==/UserScript==

//百度网盘
(function() {
var pan_title=new Array()
		pan_title[0]= "https://pan.baidu.com/"
		pan_title[1]= "https://yun.baidu.com/"
        let pan_link = location.href;
		for(var a=0;a<pan_title.length;a++){
			if(pan_link.indexOf(pan_title[a])!= -1){
                pan_link = pan_link.replace('baidu.com','baiduwp.com');
				var pan_html = "<a href="+pan_link+" target='_blank' style='cursor:pointer;z-index:98;display:block;width:30px;height:30px;line-height:30px;position:fixed;left:0;top:300px;text-align:center;'><img src='' style='width:50px' ></a>";
				$("body").append(pan_html);

//百度网盘脚本开始
//
(function () {
    'use strict';

    let pt = '', selectList = [], params = {}, mode = '', width = 800, pan = {}, color = '',
        doc = $(document), progress = {}, request = {}, ins = {}, idm = {};
    const version = parseFloat(pan.version);
    const author = 'YouXiaoHou';
    const name = '网盘直链下载助手';
    const customClass = {
        popup: 'pl-popup',
        header: 'pl-header',
        title: 'pl-title',
        closeButton: 'pl-close',
        content: 'pl-content',
        input: 'pl-input',
        footer: 'pl-footer'
    };

    const terminalType = {
        wc: "Windows CMD",
        wp: "Windows PowerShell",
        lt: "Linux 终端",
        ls: "Linux Shell",
        mt: "MacOS 终端",
    };

    let toast = Swal.mixin({
        toast: true,
        position: 'top',
        showConfirmButton: false,
        timer: 3500,
        timerProgressBar: false,
        didOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer);
            toast.addEventListener('mouseleave', Swal.resumeTimer);
        }
    });

    const message = {
        success: (text) => {
            toast.fire({title: text, icon: 'success'});
        },
        error: (text) => {
            toast.fire({title: text, icon: 'error'});
        },
        warning: (text) => {
            toast.fire({title: text, icon: 'warning'});
        },
        info: (text) => {
            toast.fire({title: text, icon: 'info'});
        },
        question: (text) => {
            toast.fire({title: text, icon: 'question'});
        }
    };

    let base = {
        clog(c) {
            console.group(`[${name}]`);
            console.log(c);
            console.groupEnd();
        },
        getCookie(name) {
            let arr = document.cookie.replace(/\s/g, "").split(';');
            for (let i = 0, l = arr.length; i < l; i++) {
                let tempArr = arr[i].split('=');
                if (tempArr[0] == name) {
                    return decodeURIComponent(tempArr[1]);
                }
            }
            return '';
        },
        getValue(name) {
            return GM_getValue(name);
        },
        setValue(name, value) {
            GM_setValue(name, value);
        },
        getStorage(key) {
            return localStorage.getItem(key);
        },
        setStorage(key, value) {
            return localStorage.setItem(key, value);
        },
        setClipboard(text) {
            GM_setClipboard(text, 'text');
        },
        e(str) {
            return btoa(unescape(encodeURIComponent(str)));
        },
        d(str) {
            return decodeURIComponent(escape(atob(str)));
        },

        getExtension(name) {
            const reg = /(?!\.)\w+$/;
            if (reg.test(name)) {
                let match = name.match(reg);
                return match[0].toUpperCase();
            }
            return '';
        },
        sizeFormat(value) {
            if (value === +value) {
                let unit = ["B", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];
                let index = Math.floor(Math.log(value) / Math.log(1024));
                let size = value / Math.pow(1024, index);
                size = size.toFixed(1);
                return size + unit[index];
            }
            return '';
        },
        sortByName(arr) {
            const handle = () => {
                return  (a, b) => {
                    const p1 = a.filename ? a.filename : a.server_filename;
                    const p2 = b.filename ? b.filename : b.server_filename;
                    return p1.localeCompare(p2, "zh-CN");
                };
            };
            arr.sort(handle());
        },

        blobDownload(blob, filename) {
            if (blob instanceof Blob) {
                const url = URL.createObjectURL(blob);
                const a = document.createElement('a');
                a.href = url;
                a.download = filename;
                a.click();
                URL.revokeObjectURL(url);
            }
        },

        post(url, data, headers, type) {
            if (Object.prototype.toString.call(data) === '[object Object]') {
                data = JSON.stringify(data);
            }
            return new Promise((resolve, reject) => {
                GM_xmlhttpRequest({
                    method: "POST", url, headers, data,
                    responseType: type || 'json',
                    onload: (res) => {
                        type === 'blob' ? resolve(res) : resolve(res.response || res.responseText);
                    },
                    onerror: (err) => {
                        reject(err);
                    },
                });
            });
        },
        get(url, headers, type, extra) {
            return new Promise((resolve, reject) => {
                let requestObj = GM_xmlhttpRequest({
                    method: "GET", url, headers,
                    responseType: type || 'json',
                    onload: (res) => {
                        if (res.status === 204) {
                            requestObj.abort();
                            idm[extra.index] = true;
                        }
                        if (type === 'blob') {
                            res.status === 200 && base.blobDownload(res.response, extra.filename);
                            resolve(res);
                        } else {
                            resolve(res.response || res.responseText);
                        }
                    },
                    onprogress: (res) => {
                        if (extra && extra.filename && extra.index) {
                            res.total > 0 ? progress[extra.index] = (res.loaded * 100 / res.total).toFixed(2) : progress[extra.index] = 0.00;
                        }
                    },
                    onloadstart() {
                        extra && extra.filename && extra.index && (request[extra.index] = requestObj);
                    },
                    onerror: (err) => {
                        reject(err);
                    },
                });
            });
        },
        addStyle(id, tag, css) {
            tag = tag || 'style';
            let doc = document, styleDom = doc.getElementById(id);
            if (styleDom) return;
            let style = doc.createElement(tag);
            style.rel = 'stylesheet';
            style.id = id;
            tag === 'style' ? style.innerHTML = css : style.href = css;
            doc.getElementsByTagName('head')[0].appendChild(style);
        },

        initDefaultConfig() {
            let value = [{
                name: 'setting_rpc_domain',
                value: 'http://localhost'
            }, {
                name: 'setting_rpc_port',
                value: '16800'
            }, {
                name: 'setting_rpc_path',
                value: '/jsonrpc'
            }, {
                name: 'setting_rpc_token',
                value: ''
            }, {
                name: 'setting_rpc_dir',
                value: 'D:'
            }, {
                name: 'setting_terminal_type',
                value: 'wc'
            }, {
                name: 'setting_theme_color',
                value: '#09AAFF'
            }, {
                name: 'setting_init_code',
                value: ''
            }];

            value.forEach((v) => {
                base.getValue(v.name) === undefined && base.setValue(v.name, v.value);
            });
        },

        showSetting() {
            let dom = '', btn = '',
                colorList = ['#09AAFF', '#cc3235', '#526efa', '#518c17', '#ed944b', '#f969a5', '#bca280'];
            dom += `<label class="pl-setting-label"><div class="pl-label">RPC主机</div><input type="text"  placeholder="主机地址，需带上http(s)://" class="pl-input listener-domain" value="${base.getValue('setting_rpc_domain')}"></label>`;
            dom += `<label class="pl-setting-label"><div class="pl-label">RPC端口</div><input type="text" placeholder="端口号，例如：Motrix为16800" class="pl-input listener-port" value="${base.getValue('setting_rpc_port')}"></label>`;
            dom += `<label class="pl-setting-label"><div class="pl-label">RPC路径</div><input type="text" placeholder="路径，默认为/jsonrpc" class="pl-input listener-path" value="${base.getValue('setting_rpc_path')}"></label>`;
            dom += `<label class="pl-setting-label"><div class="pl-label">RPC密钥</div><input type="text" placeholder="无密钥无需填写" class="pl-input listener-token" value="${base.getValue('setting_rpc_token')}"></label>`;
            dom += `<label class="pl-setting-label"><div class="pl-label">保存路径</div><input type="text" placeholder="文件下载后保存路径，例如：D:" class="pl-input listener-dir" value="${base.getValue('setting_rpc_dir')}"></label>`;

            colorList.forEach((v) => {
                btn += `<div data-color="${v}" style="background: ${v};border: 1px solid ${v}" class="pl-color-box listener-color ${v === base.getValue('setting_theme_color') ? 'checked' : ''}"></div>`;
            });
            dom += `<label class="pl-setting-label"><div class="pl-label">终端类型</div><select class="pl-input listener-terminal">`;
            Object.keys(terminalType).forEach(k => {
                dom += `<option value="${k}" ${base.getValue('setting_terminal_type') === k ? 'selected' : ''}>${terminalType[k]}</option>`;
            });
            dom += `</select></label>`;
            dom += `<label class="pl-setting-label"><div class="pl-label">主题颜色</div> <div class="pl-color">${btn}<div></label>`;
            dom = '<div>' + dom + '</div>';

            Swal.fire({
                title: '助手配置',
                html: dom,
                icon: 'info',
                showCloseButton: true,
                showConfirmButton: false,
                footer: pan.footer,
            }).then(() => {
                message.success('设置成功！');
                history.go(0);
            });

            doc.on('click', '.listener-color', async (e) => {
                base.setValue('setting_theme_color', e.target.dataset.color);
                message.success('设置成功！');
                history.go(0);
            });
            doc.on('input', '.listener-domain', async (e) => {
                base.setValue('setting_rpc_domain', e.target.value);
            });
            doc.on('input', '.listener-port', async (e) => {
                base.setValue('setting_rpc_port', e.target.value);
            });
            doc.on('input', '.listener-path', async (e) => {
                base.setValue('setting_rpc_path', e.target.value);
            });
            doc.on('input', '.listener-token', async (e) => {
                base.setValue('setting_rpc_token', e.target.value);
            });
            doc.on('input', '.listener-dir', async (e) => {
                base.setValue('setting_rpc_dir', e.target.value);
            });
            doc.on('change', '.listener-terminal', async (e) => {
                base.setValue('setting_terminal_type', e.target.value);
            });
        },

        registerMenuCommand() {
            GM_registerMenuCommand('⚙️ 网盘设置', () => {
                this.showSetting();
            });
        },

        createTip() {
            $('body').append('<div class="pl-tooltip"></div>');

            doc.on('mouseenter mouseleave', '.listener-tip', (e) => {
                if (e.type === 'mouseenter') {
                    let filename = e.currentTarget.innerText;
                    let size = e.currentTarget.dataset.size;
                    let tip = `${filename}<span style="margin-left: 10px;color: #f56c6c;">${size}</span>`;
                    $(e.currentTarget).css({opacity: '0.5'});
                    $('.pl-tooltip').html(tip).css({
                        'left': e.pageX + 10 + 'px',
                        'top': e.pageY - e.currentTarget.offsetTop > 14 ? e.pageY + 'px' : e.pageY + 20 + 'px'
                    }).show();
                } else {
                    $(e.currentTarget).css({opacity: '1'});
                    $('.pl-tooltip').hide(0);
                }
            });
        },

        createLoading() {
            return $('<div class="pl-loading"><div class="pl-loading-box"><div><div></div><div></div></div></div></div>');
        },

        createDownloadIframe() {
            let $div = $('<div style="padding:0;margin:0;display:block"></div>');
            let $iframe = $('<iframe src="javascript:;" id="downloadIframe" style="display:none"></iframe>');
            $div.append($iframe);
            $('body').append($div);
        },

        addPanLinkerStyle() {
            color = base.getValue('setting_theme_color');
            let css = `
            body::-webkit-scrollbar { display: none }
            ::-webkit-scrollbar { width: 6px; height: 10px }
            ::-webkit-scrollbar-track { border-radius: 0; background: none }
            ::-webkit-scrollbar-thumb { background-color: rgba(85,85,85,.4) }
            ::-webkit-scrollbar-thumb,::-webkit-scrollbar-thumb:hover { border-radius: 5px; -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,.2) }
            ::-webkit-scrollbar-thumb:hover { background-color: rgba(85,85,85,.3) }
            .swal2-popup { font-size: 16px !important; }
            .pl-popup { font-size: 12px !important; }
            .pl-popup a { color: ${color} !important; }
            .pl-header { padding: 0!important;align-items: flex-start!important; border-bottom: 1px solid #eee!important; margin: 0 0 10px!important; padding: 0 0 5px!important; }
            .pl-title { font-size: 16px!important; line-height: 1!important;white-space: nowrap!important; text-overflow: ellipsis!important;}
            .pl-content { padding: 0 !important; font-size: 12px!important; }
            .pl-main { max-height: 400px;overflow-y:scroll; }
            .pl-footer {font-size: 12px!important;justify-content: flex-start!important; margin: 10px 0 0!important; padding: 5px 0 0!important; color: #f56c6c!important; }
            .pl-item { display: flex; align-items: center; line-height: 22px; }
            .pl-item-name { flex: 0 0 150px; text-align: left;margin-right: 10px; overflow: hidden; white-space: nowrap; text-overflow: ellipsis; cursor:default; }
            .pl-item-link { flex: 1; overflow: hidden; text-align: left; white-space: nowrap; text-overflow: ellipsis;cursor:pointer }
            .pl-item-btn { background: ${color}; padding: 4px 5px; border-radius: 3px; line-height: 1; cursor: pointer; color: #fff; }
            .pl-item-tip { display: flex; justify-content: space-between;flex: 1; }
            .pl-back { width: 70px; background: #ddd; border-radius: 3px; cursor:pointer; margin:1px 0; }
            .pl-ext { display: inline-block; width: 44px; background: #999; color: #fff; height: 16px; line-height: 16px; font-size: 12px; border-radius: 3px;}
            .pl-retry {padding: 3px 10px; background: #cc3235; color: #fff; border-radius: 3px; cursor: pointer;}
            .pl-browserdownload { padding: 3px 10px; background: ${color}; color: #fff; border-radius: 3px; cursor: pointer;}
            .pl-item-progress { display:flex;flex: 1;align-items:center}
            .pl-progress { display: inline-block;vertical-align: middle;width: 100%; box-sizing: border-box;line-height: 1;position: relative;height:15px; flex: 1}
            .pl-progress-outer { height: 15px;border-radius: 100px;background-color: #ebeef5;overflow: hidden;position: relative;vertical-align: middle;}
            .pl-progress-inner{ position: absolute;left: 0;top: 0;background-color: #409eff;text-align: right;border-radius: 100px;line-height: 1;white-space: nowrap;transition: width .6s ease;}
            .pl-progress-inner-text { display: inline-block;vertical-align: middle;color: #d1d1d1;font-size: 12px;margin: 0 5px;height: 15px}
            .pl-progress-tip{ flex:1;text-align:right}
            .pl-progress-how{ flex: 0 0 90px; background: #ddd; border-radius: 3px; margin-left: 10px; cursor: pointer; text-align: center;}
            .pl-progress-stop{ flex: 0 0 50px; padding: 0 10px; background: #cc3235; color: #fff; border-radius: 3px; cursor: pointer;margin-left:10px;height:20px}
            .pl-progress-inner-text:after { display: inline-block;content: "";height: 100%;vertical-align: middle;}
            .pl-btn-primary { background: ${color}; border: 0; border-radius: 4px; color: #ffffff; cursor: pointer; font-size: 12px; outline: none; display:flex; align-items: center; justify-content: center; margin: 2px 0; padding: 6px 0;transition: 0.3s opacity; }
            .pl-btn-primary:hover { opacity: 0.9;transition: 0.3s opacity; }
            .pl-btn-success { background: #55af28; animation: easeOpacity 1.2s 2; animation-fill-mode:forwards }
            .pl-btn-info { background: #606266; }
            .pl-btn-warning { background: #da9328; }
            .pl-btn-warning { background: #da9328; }
            .pl-btn-danger { background: #cc3235; }
            .pl-dropdown-menu {position: absolute;right: 0;top: 34px;padding: 5px 0;color: rgb(37, 38, 43);background: #fff;z-index: 999;width: 102px;border: 1px solid #ddd;border-radius: 10px; box-shadow: 0 0 1px 1px rgb(28 28 32 / 5%), 0 8px 24px rgb(28 28 32 / 12%);}
            .pl-dropdown-menu-item { height: 30px;display: flex;align-items: center;justify-content: center; }
            .pl-dropdown-menu-item:hover { background-color: rgba(132,133,141,0.08);}
            .pl-button-init { opacity: 0.5; animation: easeInitOpacity 1.2s 3; animation-fill-mode:forwards }
             @keyframes easeInitOpacity { from { opacity: 0.5; } 50% { opacity: 1 } to { opacity: 0.5; } }
             @keyframes easeOpacity { from { opacity: 1; } 50% { opacity: 0.35 } to { opacity: 1; } }
            .element-clicked { opacity: 0.5; }
            .pl-extra { margin-top: 10px;display:flex}
            .pl-extra button { flex: 1}
            .pointer { cursor:pointer }
            .pl-setting-label { display: flex;align-items: center;justify-content: space-between;padding-top: 10px; }
            .pl-label { flex: 0 0 100px;text-align:left; }
            .pl-input { flex: 1; padding: 8px 10px; border: 1px solid #c2c2c2; border-radius: 5px; font-size: 14px }
            .pl-color { flex: 1;display: flex;flex-wrap: wrap; margin-right: -10px;}
            .pl-color-box { width: 35px;height: 35px;margin:10px 10px 0 0;; box-sizing: border-box;border:1px solid #fff;cursor:pointer }
            .pl-color-box.checked { border:3px dashed #111!important }
            .pl-close:focus { outline: 0; box-shadow: none; }
            .tag-danger {color:#cc3235;margin: 0 5px;}
            .pl-tooltip { position: absolute; color: #ffffff; max-width: 600px; font-size: 12px; padding: 5px 10px; background: #333; border-radius: 5px; z-index: 110000; line-height: 1.3; display:none; word-break: break-all;}
             @keyframes load { 0% { transform: rotate(0deg) } 100% { transform: rotate(360deg) } }
            .pl-loading-box > div > div {position: absolute;border-radius: 50%;}
            .pl-loading-box > div > div:nth-child(1) {top: 9px;left: 9px;width: 82px;height: 82px;background: #ffffff;}
            .pl-loading-box > div > div:nth-child(2) {top: 14px;left: 38px;width: 25px;height: 25px;background: #666666;animation: load 1s linear infinite;transform-origin: 12px 36px;}
            .pl-loading {width: 16px;height: 16px;display: inline-block;overflow: hidden;background: none;}
            .pl-loading-box {width: 100%;height: 100%;position: relative;transform: translateZ(0) scale(0.16);backface-visibility: hidden;transform-origin: 0 0;}
            .pl-loading-box div { box-sizing: content-box; }
            .swal2-container { z-index:100000!important; }
            body.swal2-height-auto { height: inherit!important; }
            `;
            this.addStyle('panlinker-style', 'style', css);
        },

        async initDialog() {
            let result = await Swal.fire({
                title: "请支持原创",
                html: `<div><img style="width: 250px;margin-bottom: 10px;" src="${pan.img}" alt="${pan.img}"><input class="swal2-input" id="init" type="text" placeholder="请随便输入暗号"></div>`,
                allowOutsideClick: false,
                showCloseButton: true,
                confirmButtonText: '确定'
            });
            if (result.isDismissed && result.dismiss === 'close') return;
            if (pan.num == pan.num) {
                base.setValue('setting_init_code', pan.num);
                message.success("暗号正确");
                setTimeout(() => {
                    history.go(0);
                }, 1500);
            } else {
                await Swal.fire({
                    title:"暗号不正确",
                    text: "暗号不正确",
                    confirmButtonText: '重新输入',
                    imageUrl: pan.img,
                });
                await this.initDialog();
            }
        },
    };

    let baidu = {

        _getExtra() {
            let seKey = decodeURIComponent(base.getCookie('BDCLND'));
            return '{' + '"sekey":"' + seKey + '"' + "}";
        },

        _getSurl() {
            let reg = /(?<=s\/|surl=)([a-zA-Z0-9_-]+)/g;
            if (reg.test(location.href)) {
                return location.href.match(reg)[0];
            }
            return '';
        },

        _getFidList() {
            let fidlist = [];
            selectList.forEach(v => {
                if (+v.isdir === 1) return;
                fidlist.push(v.fs_id);
            });
            return '[' + fidlist + ']';
        },

        _resetData() {
            progress = {};
            $.each(request, (key) => {
                (request[key]).abort();
            });
            $.each(ins, (key) => {
                clearInterval(ins[key]);
            });
            idm = {};
            ins = {};
            request = {};
        },

        setBDUSS() {
            try {
                GM_cookie && GM_cookie('list', {name: 'BDUSS'}, (cookies, error) => {
                    if (!error) {
                        base.setStorage("baiduyunPlugin_BDUSS", JSON.stringify({BDUSS: cookies[0].value}));
                    }
                });
            } catch (e) {
            }
        },

        getBDUSS() {
            let baiduyunPlugin_BDUSS = base.getStorage('baiduyunPlugin_BDUSS') ? base.getStorage('baiduyunPlugin_BDUSS') : '{"baiduyunPlugin_BDUSS":""}';
            return JSON.parse(baiduyunPlugin_BDUSS).BDUSS || '';
        },

        convertLinkToAria(link, filename, ua) {
            let BDUSS = this.getBDUSS();
            if (!!BDUSS) {
                filename = filename.replace(' ', '_');
                return encodeURIComponent(`aria2c "${link}" --out "${filename}" --header "User-Agent: ${ua}" --header "Cookie: BDUSS=${BDUSS}"`);
            }
            return {
                link: pan.assistant,
                text: pan.init[5]
            };
        },

        convertLinkToCurl(link, filename, ua) {
            let BDUSS = this.getBDUSS();
            if (!!BDUSS) {
                let terminal = base.getValue('setting_terminal_type');
                filename = filename.replace(' ', '_');
                return encodeURIComponent(`${terminal !== 'wp' ? 'curl' : 'curl.exe'} -L "${link}" --output "${filename}" -A "${ua}" -b "BDUSS=${BDUSS}"`);
            }
            return {
                link: pan.assistant,
                text: pan.init[5]
            };
        },

        addPageListener() {
            function _factory(e) {
                let target = $(e.target);
                let item = target.parents('.pl-item');
                let link = item.find('.pl-item-link');
                let progress = item.find('.pl-item-progress');
                let tip = item.find('.pl-item-tip');
                return {
                    item, link, progress, tip, target,
                };
            }

            function _reset(i) {
                ins[i] && clearInterval(ins[i]);
                request[i] && request[i].abort();
                progress[i] = 0;
                idm[i] = false;
            }

            doc.on('mouseenter mouseleave click', '.pl-button', (e) => {
                if (e.type === 'mouseleave') {
                    $(e.currentTarget).removeClass('button-open');
                } else {
                    $(e.currentTarget).addClass('button-open');
                    $(e.currentTarget).find('.pl-menu').show();
                }
            });
            doc.on('mouseleave', '.pl-menu', (e) => {
                $(e.currentTarget).hide();
            });
            doc.on('click', '.pl-button-mode', (e) => {
                mode = e.target.dataset.mode;
                Swal.showLoading();
                this.getPCSLink();
            });
            doc.on('click', '.listener-link-api', async (e) => {
                e.preventDefault();
                let o = _factory(e);
                let $width = o.item.find('.pl-progress-inner');
                let $text = o.item.find('.pl-progress-inner-text');
                let filename = o.link[0].dataset.filename;
                let index = o.link[0].dataset.index;
                _reset(index);
                base.get(o.link[0].dataset.link, {"User-Agent": pan.ua}, 'blob', {filename, index});
                ins[index] = setInterval(() => {
                    let prog = +progress[index] || 0;
                    let isIDM = idm[index] || false;
                    if (isIDM) {
                        o.tip.hide();
                        o.progress.hide();
                        o.link.text('已成功唤起IDM，请查看IDM下载框！').animate({opacity: '0.5'}, "slow").show();
                        clearInterval(ins[index]);
                        idm[index] = false;
                    } else {
                        o.link.hide();
                        o.tip.hide();
                        o.progress.show();
                        $width.css('width', prog + '%');
                        $text.text(prog + '%');
                        if (prog == 100) {
                            clearInterval(ins[index]);
                            progress[index] = 0;
                            o.item.find('.pl-progress-stop').hide();
                            o.item.find('.pl-progress-tip').html('下载完成，正在弹出浏览器下载框！');
                        }
                    }
                }, 500);
            });
            doc.on('click', '.listener-retry', async (e) => {
                let o = _factory(e);
                o.tip.hide();
                o.link.show();
            });
            doc.on('click', '.listener-how', async (e) => {
                let o = _factory(e);
                let index = o.link[0].dataset.index;
                if (request[index]) {
                    request[index].abort();
                    clearInterval(ins[index]);
                    o.progress.hide();
                    o.tip.show();
                }

            });
            doc.on('click', '.listener-stop', async (e) => {
                let o = _factory(e);
                let index = o.link[0].dataset.index;
                if (request[index]) {
                    request[index].abort();
                    clearInterval(ins[index]);
                    o.tip.hide();
                    o.progress.hide();
                    o.link.show(0);
                }
            });
            doc.on('click', '.listener-back', async (e) => {
                let o = _factory(e);
                o.tip.hide();
                o.link.show();
            });
            doc.on('click', '.listener-link-aria, .listener-copy-all', (e) => {
                e.preventDefault();
                if (!e.target.dataset.link) {
                    $(e.target).removeClass('listener-copy-all').addClass('pl-btn-danger').html(`${pan.init[5]}👉<a href="${pan.assistant}" target="_blank" class="pl-a">点击此处安装</a>👈`);
                } else {
                    base.setClipboard(decodeURIComponent(e.target.dataset.link));
                    $(e.target).text('复制成功，快去粘贴吧！').animate({opacity: '0.5'}, "slow");
                }
            });
            doc.on('click', '.listener-link-rpc', async (e) => {
                let target = $(e.currentTarget);
                target.find('.icon').remove();
                target.find('.pl-loading').remove();
                target.prepend(base.createLoading());
                let res = await this.sendLinkToRPC(e.currentTarget.dataset.filename, e.currentTarget.dataset.link);
                if (res === 'success') {
                    $('.listener-rpc-task').show();
                    target.removeClass('pl-btn-danger').html('发送成功，快去看看吧！').animate({opacity: '0.5'}, "slow");
                } else if (res === 'assistant') {
                    target.addClass('pl-btn-danger').html(`${pan.init[5]}👉<a href="${pan.assistant}" target="_blank" class="pl-a">点击此处安装</a>👈`);
                } else {
                    target.addClass('pl-btn-danger').text('发送失败，请检查您的RPC配置信息！').animate({opacity: '0.5'}, "slow");
                }
            });
            doc.on('click', '.listener-send-rpc', (e) => {
                $('.listener-link-rpc').click();
                $(e.target).text('发送完成，发送结果见上方按钮！').animate({opacity: '0.5'}, "slow");
            });
            doc.on('click', '.listener-open-setting', () => {
                base.showSetting();
            });
            doc.on('click', '.listener-rpc-task', () => {
                let rpc = JSON.stringify({
                    domain: base.getValue('setting_rpc_domain'),
                    port: base.getValue('setting_rpc_port'),
                }), url = `${pan.d}/?rpc=${base.e(rpc)}#${base.getValue('setting_rpc_token')}`;
                GM_openInTab(url, {active: true});
            });
            document.documentElement.addEventListener('mouseup', (e) => {
                if (e.target.nodeName === 'A' && ~e.target.className.indexOf('pl-a')) {
                    e.stopPropagation();
                }
            }, true);
        },

        addButton() {
            if (!pt) return;
            let $toolWrap;
            let $button = $(`<div class="g-dropdown-button pointer pl-button"><div style="color:#fff;background: ${color};border-color:${color}" class="g-button g-button-blue"><span class="g-button-right"><em class="icon icon-download"></em><span class="text" style="width: 60px;">下载助手</span></span></div><div class="menu" style="width:auto;z-index:41;border-color:${color}"><div style="color:${color}" class="g-button-menu pl-button-mode" data-mode="api">API下载</div><div style="color:${color}" class="g-button-menu pl-button-mode" data-mode="aria">Aria下载</div><div style="color:${color}" class="g-button-menu pl-button-mode" data-mode="rpc">RPC下载</div><div style="color:${color}" class="g-button-menu pl-button-mode" data-mode="curl">cURL下载</div></div></div>`);
            if (pt === 'home') $toolWrap = $(pan.btn.home);
            if (pt === 'main') {
                $toolWrap = $(pan.btn.main);
                $button = $(`<div class="pl-button" style="position: relative; display: inline-block; margin-right: 8px;"><button class="u-button u-button--primary u-button--small is-round is-has-icon" style="background: ${color};border-color: ${color};font-size: 14px; padding: 8px 16px; border: none;"><i class="u-icon u-icon-download"></i><span>下载助手</span></button><ul class="dropdown-list nd-common-float-menu pl-menu" style="display: none;"><li class="sub cursor-p pl-button-mode" data-mode="api">API下载</li><li class="sub cursor-p pl-button-mode" data-mode="aria">Aria下载</li><li class="sub cursor-p pl-button-mode" data-mode="rpc">RPC下载</li><li class="sub cursor-p pl-button-mode" data-mode="curl">cURL下载</li></ul></div>`);
            }
            if (pt === 'share') $toolWrap = $(pan.btn.share);
            $toolWrap.prepend($button);
            base.clog(`助手加载成功！版本：${version}`);
            this.setBDUSS();
            this.addPageListener();
        },

        addInitButton() {
            if (!pt) return;
            let $toolWrap;
            let $button = $(`<div class="g-dropdown-button pointer pl-button-init" style="opacity:.5"><div style="color:#fff;background: ${color};border-color:${color}" class="g-button g-button-blue"><span class="g-button-right"><em class="icon icon-download"></em><span class="text" style="width: 60px;">下载助手</span></span></div></div>`);
            if (pt === 'home') $toolWrap = $(pan.btn.home);
            if (pt === 'main') {
                $toolWrap = $(pan.btn.main);
                $button = $(`<div class="pl-button-init" style="opacity:.5; display: inline-block; margin-right: 8px;"><button class="u-button u-button--primary u-button--small is-round is-has-icon" style="background: ${color};border-color: ${color};font-size: 14px; padding: 8px 16px; border: none;"><i class="u-icon u-icon-download"></i><span>下载助手</span></button></div>`);
            }
            if (pt === 'share') $toolWrap = $(pan.btn.share);
            $toolWrap.prepend($button);
            $button.click(() => base.initDialog());
        },

        async getPCSLink() {
            selectList = this.getSelectedList();
            let fidList = this._getFidList(), url, res;

            if (pt === 'home' || pt === 'main') {
                if (selectList.length === 0) {
                    return message.error('提示：请先勾选要下载的文件！');
                }
                if (fidList.length === 2) {
                    return message.error('提示：请打开文件夹后勾选文件！');
                }
                fidList = encodeURIComponent(fidList);
                url = `${pan.pcs[0]}&fsids=${fidList}`;
                res = await base.get(url, {"User-Agent": pan.ua});
            }
            if (pt === 'share') {
                this.getShareData();
                if (selectList.length === 0) {
                    return message.error('提示：请先勾选要下载的文件！');
                }
                if (fidList.length === 2) {
                    return message.error('提示：请打开文件夹后勾选文件！');
                }
                if (!params.sign) {
                    let url = `${pan.pcs[2]}&surl=${params.surl}&logid=${params.logid}`;
                    let r = await base.get(url);
                    if (r.errno === 0) {
                        params.sign = r.data.sign;
                        params.timestamp = r.data.timestamp;
                    } else {
                        let dialog = await Swal.fire({
                            toast: true,
                            icon: 'info',
                            title: `提示：请将文件<span class="tag-danger">[保存到网盘]</span>👉在<span class="tag-danger">[我的网盘]</span>中下载！`,
                            showConfirmButton: true,
                            confirmButtonText: '点击保存',
                            position: 'top',
                        });
                        if (dialog.isConfirmed) {
                            $('.tools-share-save-hb')[0].click();
                        }
                        return;
                    }
                }
                if (!params.bdstoken) {
                    return message.error('提示：请先登录网盘！');
                }
                let formData = new FormData();
                formData.append('encrypt', params.encrypt);
                formData.append('product', params.product);
                formData.append('uk', params.uk);
                formData.append('primaryid', params.primaryid);
                formData.append('fid_list', fidList);
                formData.append('logid', params.logid);
                params.shareType === 'secret' ? formData.append('extra', params.extra) : '';
                url = `${pan.pcs[1]}&sign=${params.sign}&timestamp=${params.timestamp}`;
                res = await base.post(url, formData, {"User-Agent": pan.ua});
            }
            if (res.errno === 0) {
                let html = this.generateDom(res.list);
                this.showMainDialog(pan[mode][0], html, pan[mode][1]);
            } else if (res.errno === 112) {
                return message.error('提示：页面过期，请刷新重试！');
            } else {
                message.error('提示：获取下载链接失败！请刷新网页后重试！');
            }
        },

        generateDom(list) {
            let content = '<div class="pl-main">';
            let alinkAllText = '';
            base.sortByName(list);
            list.forEach((v, i) => {
                if (v.isdir === 1) return;
                let filename = v.server_filename || v.filename;
                let ext = base.getExtension(filename);
                let size = base.sizeFormat(v.size);
                let dlink = v.dlink;
                if (mode === 'api') {
                    content += `<div class="pl-item">
                                <div class="pl-item-name listener-tip" data-size="${size}">${filename}</div>
                                <a class="pl-item-link pl-a listener-link-api" href="${dlink}" data-filename="${filename}" data-link="${dlink}" data-index="${i}">${dlink}</a>
                                <div class="pl-item-tip" style="display: none"><span>若没有弹出IDM下载框，找到IDM <b>选项</b> -> <b>文件类型</b> -> <b>第一个框</b> 中添加后缀 <span class="pl-ext">${ext}</span>，<a href="${pan.idm}" target="_blank" class="pl-a">详见此处</a></span> <span class="pl-back listener-back">返回</span></div>
                                <div class="pl-item-progress" style="display: none">
                                    <div class="pl-progress">
                                        <div class="pl-progress-outer"></div>
                                        <div class="pl-progress-inner" style="width:5%">
                                          <div class="pl-progress-inner-text">0%</div>
                                        </div>
                                    </div>
                                    <span class="pl-progress-stop listener-stop">取消下载</span>
                                    <span class="pl-progress-tip">未发现IDM，使用自带浏览器下载</span>
                                    <span class="pl-progress-how listener-how">如何唤起IDM？</span>
                                </div></div>`;
                }
                if (mode === 'aria') {
                    let alink = this.convertLinkToAria(dlink, filename, pan.ua);
                    if (typeof (alink) === 'object') {
                        content += `<div class="pl-item">
                                <div class="pl-item-name listener-tip" data-size="${size}">${filename}</div>
                                <a class="pl-item-link pl-a" target="_blank" href="${alink.link}" title="点击复制aria2c链接" data-filename="${filename}" data-link="${alink.link}">${decodeURIComponent(alink.text)}</a> </div>`;
                    } else {
                        alinkAllText += alink + '\r\n';
                        content += `<div class="pl-item">
                                <div class="pl-item-name listener-tip" data-size="${size}">${filename}</div>
                                <a class="pl-item-link pl-a listener-link-aria" href="${alink}" title="点击复制aria2c链接" data-filename="${filename}" data-link="${alink}">${decodeURIComponent(alink)}</a> </div>`;
                    }
                }
                if (mode === 'rpc') {
                    content += `<div class="pl-item">
                                <div class="pl-item-name listener-tip" data-size="${size}">${filename}</div>
                                <button class="pl-item-link listener-link-rpc pl-btn-primary pl-btn-info" data-filename="${filename}" data-link="${dlink}"><em class="icon icon-device"></em><span style="margin-left: 5px;">推送到 RPC 下载器</span></button></div>`;
                }
                if (mode === 'curl') {
                    let alink = this.convertLinkToCurl(dlink, filename, pan.ua);
                    if (typeof (alink) === 'object') {
                        content += `<div class="pl-item">
                                <div class="pl-item-name listener-tip" data-size="${size}">${filename}</div>
                                <a class="pl-item-link pl-a" target="_blank" href="${alink.link}" title="点击复制curl链接" data-filename="${filename}" data-link="${alink.link}">${decodeURIComponent(alink.text)}</a> </div>`;
                    } else {
                        alinkAllText += alink + '\r\n';
                        content += `<div class="pl-item">
                                <div class="pl-item-name listener-tip" data-size="${size}">${filename}</div>
                                <a class="pl-item-link pl-a listener-link-aria" href="${alink}" title="点击复制curl链接" data-filename="${filename}" data-link="${alink}">${decodeURIComponent(alink)}</a> </div>`;
                    }
                }
            });
            content += '</div>';
            if (mode === 'aria')
                content += `<div class="pl-extra"><button class="pl-btn-primary listener-copy-all" data-link="${alinkAllText}">复制全部链接</button></div>`;
            if (mode === 'rpc') {
                let rpc = base.getValue('setting_rpc_domain') + ':' + base.getValue('setting_rpc_port') + base.getValue('setting_rpc_path');
                content += `<div class="pl-extra"><button class="pl-btn-primary listener-send-rpc">发送全部链接</button><button title="${rpc}" class="pl-btn-primary pl-btn-warning listener-open-setting" style="margin-left: 10px">设置 RPC 参数（当前为：${rpc}）</button><button class="pl-btn-primary pl-btn-success listener-rpc-task" style="margin-left: 10px;display: none">查看下载任务</button></div>`;
            }
            if (mode === 'curl')
                content += `<div class="pl-extra"><button class="pl-btn-primary listener-copy-all" data-link="${alinkAllText}">复制全部链接</button><button class="pl-btn-primary pl-btn-warning listener-open-setting" style="margin-left: 10px;">设置终端类型（当前为：${terminalType[base.getValue('setting_terminal_type')]}）</button></div>`;
            return content;
        },

        async sendLinkToRPC(filename, link) {
            let rpc = {
                domain: base.getValue('setting_rpc_domain'),
                port: base.getValue('setting_rpc_port'),
                path: base.getValue('setting_rpc_path'),
                token: base.getValue('setting_rpc_token'),
                dir: base.getValue('setting_rpc_dir'),
            };
            let BDUSS = this.getBDUSS();
            if (!BDUSS) return 'assistant';

            let url = `${rpc.domain}:${rpc.port}${rpc.path}`;
            let rpcData = {
                id: new Date().getTime(),
                jsonrpc: '2.0',
                method: 'aria2.addUri',
                params: [`token:${rpc.token}`, [link], {
                    dir: rpc.dir,
                    out: filename,
                    header: [`User-Agent: ${pan.ua}`, `Cookie: BDUSS=${BDUSS}`]
                }]
            };
            try {
                let res = await base.post(url, rpcData, {"User-Agent": pan.ua}, '');
                if (res.result) return 'success';
                return 'fail';
            } catch (e) {
                return 'fail';
            }
        },

        getSelectedList() {
            try {
                return require('system-core:context/context.js').instanceForSystem.list.getSelected();
            } catch (e) {
                return document.querySelector('.nd-main-list').__vue__.selectedList;
            }
        },

        getLogid() {
            let ut = require("system-core:context/context.js").instanceForSystem.tools.baseService;
            return ut.base64Encode(base.getCookie("BAIDUID"));
        },

        getShareData() {
            let res = locals.dump();
            params.shareType = 'secret';
            params.sign = '';
            params.timestamp = '';
            params.bdstoken = res.bdstoken.value;
            params.channel = 'chunlei';
            params.clienttype = 0;
            params.web = 1;
            params.app_id = 250528;
            params.encrypt = 0;
            params.product = 'share';
            params.logid = this.getLogid();
            params.primaryid = res.shareid.value;
            params.uk = res.share_uk.value;
            params.shareType === 'secret' && (params.extra = this._getExtra());
            params.surl = this._getSurl();
        },

        detectPage() {
            let path = location.pathname;
            if (/^\/disk\/home/.test(path)) return 'home';
            if (/^\/disk\/main/.test(path)) return 'main';
            if (/^\/(s|share)\//.test(path)) return 'share';
            return '';
            return '';
        },

        showMainDialog(title, html, footer) {
            Swal.fire({
                title,
                html,
                footer,
                allowOutsideClick: false,
                showCloseButton: true,
                showConfirmButton: false,
                position: 'top',
                width,
                padding: '15px 20px 5px',
                customClass,
            }).then(() => {
                this._resetData();
            });
        },

        async initPanLinker() {
            base.initDefaultConfig();
            base.addPanLinkerStyle();
            pt = this.detectPage();
            let res = await base.post
            (`https://api.youxiaohou.com/config?ver=${version}&a=${author}`, {}, {}, 'text');
            pan = JSON.parse(base.d(res));
            Object.freeze && Object.freeze(pan);
            pan.num === base.getValue('setting_init_code') ? this.addButton() : this.addInitButton();
            base.createTip();
            base.registerMenuCommand();
        }
    };

    let main = {
        init() {
            if (/(pan|yun).baidu.com/.test(location.host)) {
                baidu.initPanLinker();
            }
        }
    };

    main.init();
})();
//百度网盘脚本结束
			}
		}
})();
//百度网盘结束
//
(function() {

    var cssCode = `
    .zhm_tab{width:400px;border:1px solid #f40;border-collapse:collapse;}
    .zhm_tab tr:nth-of-type(1){font-size:14px;text-align:center;}
    .zhm_tab tr th{padding:10px;20px;text-align:center;}
    .zhm_tab tr td{padding:10px;20px;text-align:center;font-size:14px;}
    .zhm_tab tr td a{ text-decoration:none;}

    .zhm_tab_taobao{margin-top:50px;}
    .zhm_tab_taobao tr:nth-of-type(1){background-color:#f40;color:#FFF;}
    .zhm_tab_taobao tr td{border:1px solid #e6602d;color:#e6602d;}
    .zhm_tab_taobao tr td a{color:#e6602d;}
    .zhm_tab_taobao tr td a b{color:#e6602d;font-weight:800}

    .zhm_tab_jd {margin-top:50px;}
    .zhm_tab_jd tr:nth-of-type(1){background-color:#e4393c;color:#FFF;}
    .zhm_tab_jd tr td{border:1px solid #e4393c;color:#e4393c;}
    .zhm_tab_jd tr td a{color:#e4393c;}

    .zhm_tab_tmall {margin-top:50px;}
    .zhm_tab_tmall tr:nth-of-type(1){background-color:#ff0036;color:#FFF;}
    .zhm_tab_tmall tr td{border:1px solid #ff0036;color:#ff0036;}
    .zhm_tab_tmall tr td a{color:#ff0036;}

    .playLineTd:hover{
        background-color:#fcc0c0;
    }

    .playLineDiv::-webkit-scrollbar {

      width : 10px;
      height: 1px;
     }
    .playLineDiv::-webkit-scrollbar-thumb {

          border-radius   : 10px;
          background-color: skyblue;
          background-image: -webkit-linear-gradient(
              45deg,
              rgba(255, 255, 255, 0.2) 25%,
              transparent 25%,
              transparent 50%,
              rgba(255, 255, 255, 0.2) 50%,
              rgba(255, 255, 255, 0.2) 75%,
              transparent 75%,
              transparent
          );
      }
    .playLineDiv::-webkit-scrollbar-track {
        box-shadow   : inset 0 0 5px rgba(0, 0, 0, 0.2);
        background   : #ededed;
        border-radius: 10px;
    }
    .playLineAction{
        color:#260033;
        background-color:#fcc0c0;
    }
        .zhmMask{
        z-index:999999999;
        background-color:#000;
        position: fixed;top: 0;right: 0;bottom: 0;left: 0;
        opacity:0.8;
      }
      .wrap-box{
        z-index:1000000000;
        position:fixed;;top: 50%;left: 50%;transform: translate(-50%, -200px);
        width: 300px;
        color: #555;
        background-color: #fff;
        border-radius: 5px;
        overflow:hidden;
        font:16px numFont,PingFangSC-Regular,Tahoma,Microsoft Yahei,sans-serif !important;
        font-weight:400 !important;
      }
      .setWrapHead{
        background-color:#f24443;height:40px;color:#fff;text-align:center;line-height:40px;
      }
      .setWrapLi{
        margin:0px;padding:0px;
      }
      .setWrapLi li{
        background-color: #fff;
        border-bottom:1px solid #eee;
        margin:0px !important;
        padding:12px 20px;
        display: flex;
        justify-content: space-between;align-items: center;
        list-style: none;
      }

      li:last-child{
        border-bottom:none;
      }
      .setWrapLiContent{
        display: flex;justify-content: space-between;align-items: center;
      }
      .setWrapSave{
        position:absolute;top:-2px;right:10px;font-size:24px;cursor:pointer
      }
      .iconSetFoot{
        position:absolute;bottom:0px;padding:10px 20px;width:100%;
        z-index:1000000009;background:#fef9ef;
      }
      .iconSetFootLi{
        margin:0px;padding:0px;
      }
      .iconSetFootLi li{
          display: inline-flex;
        padding:0px 2px;
        justify-content: space-between;align-items: center;
      font-size: 12px;
      }
      .iconSetFootLi a:hover {
      color:#fe6d73;
      }
      .iconSetPage{
        z-index:1000000001;
        position:absolute;top:0px;left:300px;
        background:#fff;
        width:300px;
        height:100%;
      }
    .iconSetPageHead{
        border-bottom:1px solid #ccc;
        height:40px;
        line-height:40px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        background-color:#fe6d73;
        color:#fff;
        font-size: 15px;
    }
    .iconSetPageLi{
        margin:0px;padding:0px;
    }
    .iconSetPageLi li{
        list-style: none;
        padding:8px 20px;
    }
    .zhihuSetPage{
        z-index:1000000002;position:absolute;top:0px;left:300px;background:#fff;width:300px;height:100%;
    }
    .iconSetPageInput{
        display: flex !important;justify-content: space-between;align-items: center;
    }
    .zhihuSetPageHead{
        border-bottom:1px solid #ccc;height:40px;text-align:center;line-height:40px;display: flex !important;justify-content: space-between;align-items: center;
    }

    .zhihuSetPageLi{
        margin:0px;padding:0px;
    }

    .zhihuSetPageLi li{
        border-bottom:1px solid #ccc;padding:10px 20px;
    }
    .zhihuSetPageContent{
        display: flex !important;justify-content: space-between;align-items: center;
    }
    .circular{
        width: 40px;height: 20px;border-radius: 16px;transition: .3s;cursor: pointer;box-shadow: 0 0 3px #999 inset;
    }
    .round-button{
        width: 20px;height: 20px;;border-radius: 50%;box-shadow: 0 1px 5px rgba(0,0,0,.5);transition: .3s;position: relative;

    }
    .back{
        border: solid #FFF; border-width: 0 3px 3px 0; display: inline-block; padding: 3px;transform: rotate(135deg);  -webkit-transform: rotate(135deg);margin-left:10px;cursor:pointer;
    }
    .to-right{
        margin-left:20px;display: inline-block; padding: 3px;transform: rotate(-45deg); -webkit-transform: rotate(-45deg);cursor:pointer;
    }
    .iconSetSave{
        font-size:24px;cursor:pointer;margin-right:5px;margin-bottom:4px;color:#FFF;
    }
    :root {
      --base-color: #434a56;
      --white-color-primary: #f7f8f8;
      --white-color-secondary: #fefefe;
      --gray-color-primary: #c2c2c2;
      --gray-color-secondary: #c2c2c2;
      --gray-color-tertiary: #676f79;
      --active-color: #227c9d;
      --valid-color: #c2c2c2;
      --invalid-color: #f72f47;
      --invalid-icon: url("data:image/svg+xml;charset=utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2224%22%20height%3D%2224%22%20viewBox%3D%220%200%2024%2024%22%3E%20%3Cpath%20d%3D%22M13.41%2012l4.3-4.29a1%201%200%201%200-1.42-1.42L12%2010.59l-4.29-4.3a1%201%200%200%200-1.42%201.42l4.3%204.29-4.3%204.29a1%201%200%200%200%200%201.42%201%201%200%200%200%201.42%200l4.29-4.3%204.29%204.3a1%201%200%200%200%201.42%200%201%201%200%200%200%200-1.42z%22%20fill%3D%22%23f72f47%22%20%2F%3E%3C%2Fsvg%3E");
    }

    *,
    *::before,
    *::after {
      box-sizing: inherit;
      margin: 0;
    }
    .form {
      background-color: var(--white-color-secondary);
    }
    @media screen and (min-width: 0) {
      .form {
        font-size: 0.75rem;
        padding: 40px 5%;
      }
    }
    @media screen and (min-width: 768px) {
      .form {
        font-size: 0.875rem;
        padding: 40px;
      }
    }
    @media screen and (min-width: 992px) {
      .form {
        font-size: 1rem;
      }
    }

    .form__headline {
      font-weight: normal;
      margin: 0;
    }
    @media screen and (min-width: 0) {
      .form__headline {
        font-size: 1.75em;
      }
    }
    @media screen and (min-width: 768px) {
      .form__headline {
        font-size: 1.5em;
      }
    }

    .form__description {
      line-height: 1.75;
      margin-top: 2em;
    }
    .form__description > :not(:first-child) {
      margin-top: 0.25em;
    }

    .form__group {
      border: 0;
      margin-top: 3em;
      min-width: 0;
      padding: 0;
    }
    .form__group + .form__group {
      margin-top: 1.5em;
    }
    .form__group::after {
      clear: both;
      content: "";
      display: table;
    }

    .form__group-header {
      align-items: center;
      display: flex;
      flex-wrap: wrap;
      float: left;
      max-width: 240px;
      padding: 0.8em 1.2em 0.8em 0;
      width: 100%;
    }
    @media screen and (min-width: 0) {
      .form__group-header {
        font-size: 1.333em;
      }
    }
    @media screen and (min-width: 768px) {
      .form__group-header {
        font-size: 1em;
      }
    }

    .form__group-label {
      line-height: 1.5;
    }
    .form__group-label:not(:only-child) {
      margin-right: 0.5em;
    }

    .form__required-label {
      background-color: var(--gray-color-primary);
      border-radius: 3px;
      font-size: 0.75em;
      font-weight: normal;
      letter-spacing: 0.08em;
      padding: 0.35em 0.6em;
    }

    .form__group-content {
      float: left;
      max-width: 580px;
      width: 100%;
    }

    .form__group-list {
      border-bottom: 1px solid var(--gray-color-primary);
      list-style: none;
      padding: 0.8em 0 1em;
    }

    .form__group-list-item + .form__group-list-item {
      margin-top: 1em;
    }

    .form__text-input {
      max-width: 440px;
    }
    .form__text-input.-narrow {
      max-width: 240px;
    }
    .form__text-input.-wide {
      max-width: 580px;
    }

    .form__select-box {
      max-width: 240px;
    }

    .form__name {
      display: flex;
      max-width: 440px;
    }
    .form__name > .form__text-input {
      flex: 1;
    }
    .form__name > :not(:last-child) {
      margin-right: 1em;
    }

    @media screen and (min-width: 0) {
      .form__postal-code > :not(:last-child) {
        margin-bottom: 1em;
      }
    }
    @media screen and (min-width: 576px) {
      .form__postal-code {
        align-items: center;
        display: flex;
      }
      .form__postal-code > .form__text-input {
        flex-basis: 100%;
      }
      .form__postal-code > :not(:last-child) {
        margin-bottom: 0;
        margin-right: 1em;
      }
    }

    .form__notion {
      margin-top: 1em;
    }
    @media screen and (min-width: 0) {
      .form__notion {
        font-size: 1em;
      }
    }
    @media screen and (min-width: 768px) {
      .form__notion {
        font-size: 0.75em;
      }
    }

    .form__link {
      color: var(--active-color);
      -webkit-text-decoration: undeline;
              text-decoration: undeline;
      text-underline-offset: 0.1em;
    }
    .form__link:focus {
      text-decoration: none;
    }
    @media (hover) {
      .form__link:hover {
        text-decoration: none;
      }
    }

    .form__confirm,
    .form__submit {
      max-width: 820px;
    }

    .form__confirm {
      margin-top: 2.5em;
      text-align: center;
    }

    .form__confirm-text {
      display: inline-block;
      text-align: left;
    }

    .form__validation {
      color: var(--invalid-color);
      margin-top: 1em;
    }
    .form__validation:empty {
      display: none;
    }
    .form__validation:not(:empty) + .form__validation {
      margin-top: 0.5em;
    }
    @media screen and (min-width: 0) {
      .form__validation {
        font-size: 1em;
      }
    }
    @media screen and (min-width: 768px) {
      .form__validation {
        font-size: 0.75em;
      }
    }

    .form__submit {
      align-items: center;
      display: flex;
      flex-direction: column-reverse;
      margin-top: 3em;
    }

    .text-input {
      font-size: 16px;
      position: relative;
      right:0px;
      z-index: 0;
    }
    .text-input__body {
      -webkit-appearance: none;
         -moz-appearance: none;
      appearance: none;
      background-color: transparent;
      border: 1px solid var(--gray-color-primary);
      border-radius: 3px;
      height: 1.7em;
      line-height: 1.7;
      overflow: hidden;
      padding: 2px 1em;
      text-overflow: ellipsis;
      transition: background-color 0.3s;
      width:55%;
      font-size:14px;

    }
    .text-input__body:-ms-input-placeholder {
      color: var(--gray-color-secondary);
    }
    .text-input__body::-moz-placeholder {
      color: var(--gray-color-secondary);
    }
    .text-input__body::placeholder {
      color: var(--gray-color-secondary);
    }
    .text-input__body[data-is-valid] {
      padding-right: 1em;
    }
    .text-input__body[data-is-valid=true] {
      border-color: var(--valid-color);
    }
    .text-input__body[data-is-valid=false] {
      border-color: var(--invalid-color);
      box-shadow: inset 0 0 0 1px var(--invalid-color);
    }
    .text-input__body:focus {
      border-color: var(--active-color);
      box-shadow: inset 0 0 0 1px var(--active-color);
      outline: none;
    }
    .text-input__body:-webkit-autofill {
      transition-delay: 9999s;
      -webkit-transition-property: background-color;
      transition-property: background-color;
    }

    .text-input__validator {
      background-position: right 0.5em center;
      background-repeat: no-repeat;
      background-size: 1.5em;
      display: inline-block;
      height: 100%;
      left: 0;
      position: absolute;
      top: 0;
      width: 100%;
      z-index: -1;
    }

    .text-input__body[data-is-valid=false] + .text-input__validator {
      background-image: var(--invalid-icon);
    }

    .select-box {
      font-size: 16px;
      position: relative;
      transition: background-color 0.5s ease-out;
      width:90px;
    }
    .select-box::after {
      border-color: var(--gray-color-secondary) transparent transparent transparent;
      border-style: solid;
      border-width: 6px 4px 0;
      bottom: 0;
      content: "";
      display: inline-block;
      height: 0;
      margin: auto 0;
      pointer-events: none;
      position: absolute;
      right: -72px;
      top: 0;
      width: 0;
      z-index: 1;
    }
    .select-box__body {
      -webkit-appearance: none;
         -moz-appearance: none;
       appearance: none;
      background-color: transparent;
      border: 1px solid var(--gray-color-primary);
      border-radius: 3px;
      cursor: pointer;
      height: 1.7em;
      line-height: 1.7;
      padding-left: 1em;
      padding-right: calc(1em + 16px);
      width: 140%;
      font-size:14px;
      padding-top:2px;
      padding-bottom:2px;
    }
    .select-box__body[data-is-valid=true] {
      border-color: var(--valid-color);
      box-shadow: inset 0 0 0 1px var(--valid-color);
    }
    .select-box__body[data-is-valid=false] {
      border-color: var(--invalid-color);
      box-shadow: inset 0 0 0 1px var(--invalid-color);
    }
    .select-box__body.focus-visible {
      border-color: var(--active-color);
      box-shadow: inset 0 0 0 1px var(--active-color);
      outline: none;
    }
    .select-box__body:-webkit-autofill {
      transition-delay: 9999s;
      -webkit-transition-property: background-color;
      transition-property: background-color;
    }
    .selectLabel{
        padding-top:4px;
    }

    .textarea {
      font-size: 1rem;
      line-height: 1.5;
      position: relative;
    }

    .textarea__body {
      -webkit-appearance: none;
         -moz-appearance: none;
              appearance: none;
      background-color: transparent;
      border: 1px solid var(--gray-color-primary);
      border-radius: 0;
      box-sizing: border-box;
      font: inherit;
      height: 100%;
      left: 0;
      letter-spacing: inherit;
      overflow: hidden;
      padding: 1em;
      position: absolute;
      resize: none;
      top: 0;
      transition: background-color 0.5s ease-out;
      width: 100%;
    }
    .textarea__body:only-child {
      min-height: 240px;
      position: relative;
      resize: vertical;
    }
    .textarea__body:focus {
      border-color: var(--active-color);
      box-shadow: inset 0 0 0 1px var(--active-color);
      outline: none;
    }
    .textarea__body[data-is-valid=true] {
      border-color: var(--valid-color);
      box-shadow: inset 0 0 0 1px var(--valid-color);
    }
    .textarea__body[data-is-valid=false] {
      border-color: var(--invalid-color);
      box-shadow: inset 0 0 0 1px var(--invalid-color);
    }

    .textarea ._dummy-box {
      border: 1px solid;
      box-sizing: border-box;
      min-height: 240px;
      overflow: hidden;
      overflow-wrap: break-word;
      padding: 1em;
      visibility: hidden;
      white-space: pre-wrap;
      word-wrap: break-word;
    }`;

    var style = document.createElement('style');
    style.type = 'text/css';
    style.rel = 'stylesheet';
    style .appendChild(document.createTextNode(cssCode));
    var head = document.getElementsByTagName('head')[0];
    head.appendChild(style);

    var couponUrl = window.location.href;
    if(couponUrl.indexOf('taobao') != -1 || couponUrl.indexOf('tmall') != -1){

    $.get('https://www.zuihuimai.net/vrhr/loading.php',function(loading_html){
    if(loading_html){

	var goods_id = getQueryString('id');
	var zhm_url = 'https://www.zuihuimai.net/vrhr/index.php';
	if(goods_id){

		$('#J_LinkBasket').parent().after(loading_html);
		$('.J_LinkAdd').parent().after(loading_html);
		if(window.location.host.search('taobao.com') != -1){
			$('#zhm_table').addClass('zhm_tab_taobao');
		}else{
			$('#zhm_table').addClass('zhm_tab_tmall');
		}

		$.get(zhm_url,{goods_id:goods_id},function(data){
			$('#zhm_div_s').html(data);
			$('#zhm_div_s').html(data);
			if(window.location.host.search('taobao.com') != -1){
				$('#zhm_table').addClass('zhm_tab_taobao');
			}else{
				$('#zhm_table').addClass('zhm_tab_tmall');
			}
		});
	}
    }
    });
    }

    if(couponUrl.indexOf('jd') != -1){
       $.get('https://www.zuihuimai.net/vrhr/loading.php',function(loading_html){
         if(loading_html){

        var jdUrlArr = couponUrl.split(".");

        var jdGoodsId = jdUrlArr[2].split('/');

        $.get('https://zuihuimai.net/vrhr/index_jd.php',{goods_id:jdGoodsId[1]},function(data){
            if(data != ''){
                var jd_html = data;
                $('#choose-btns').append(jd_html);
            }
		});
         }
       })
    }

//解析开始
    //初始化 start
    //setCookie('iconTop', 1, -1)
    //GM_deleteValue('iconPosition')
    if(GM_getValue('iconPosition') == undefined || GM_getValue('iconPosition') == 0){
        var iconVipTop = '360';

        var iconVipPosition = 'left';

        var iconVipWidth = '40';
    }
    //alert(getCookie('iconTop'));
    //默认图标设置为关闭
    if(GM_getValue('iconPosition') == undefined){
        GM_setValue('iconPosition',0);
    }
    if(getCookie('iconTop') != ''){
        var iconVipTop = getCookie('iconTop');
    }else{
        var iconVipTop = '360';
    };
    if(getCookie('iconPosition') !=''){
        var iconVipPosition = getCookie('iconPosition');
    }else{
        var iconVipPosition = 'left';
    }
    if(getCookie('iconWidth') != ''){
        var iconVipWidth = getCookie('iconWidth');
    }else{
        var iconVipWidth = '40';
    }
    //初始化end
    var setListJson= [{'listName':'图标位置','setListID':'iconPosition','setPageID':'movieIconSetPage'},{'listName':'视频解析','setListID':'movieList','setPageID':''},{'listName':'音乐下载','setListID':'musicList','setPageID':''}];
    var zhihuOptionJson = [{'optionName':'不看视频','optionID':'removeVideo'},{'optionName':'视频下载','optionID':'downloadVideo'},{'optionName':'不看广告','optionID':'removeAD'},{'optionName':'关闭右侧','optionID':'removeRight'},{'optionName':'直接跳转','optionID':'changeLink'},{'optionName':'关键词屏蔽','optionID':'removeKeyword'}];

	var setHtml = "<div id='setMask' class='zhmMask'></div>";

    setHtml +="<div class='wrap-box' id='setWrap'>";

    setHtml +="<div class='iconSetPage' ' id='movieIconSetPage'>";
    setHtml +="<ul><li class='iconSetPageHead'><span class='back'></span><span>图标位置</span><span class='iconSetSave'>×</span></li></ul>";
    setHtml +="<ul class='iconSetPageLi'>";
    setHtml +="<li>图标高度：<span class='text-input'><input class='text-input__body' id='iconTop' value='"+iconVipTop+"' placeholder='默认360,建议1~500'><span class='text-input__validator'></span></span></li>";

    setHtml += "<li  style='display: inline-flex;'><span style='padding-top:4px;'>水平位置：</span><div class='select-box'><select class='select-box__body' id='iconPosition'>";
    setHtml +="<option value='left'>靠左</option><option value='right'>靠右</option>";
    setHtml +="</select></div></li>"
    setHtml +="<li>图标大小：<span class='text-input'><input class='text-input__body' id='iconWidth' value='"+iconVipWidth+"' placeholder='默认40,建议20~50'><span class='text-input__validator'></span></span></li><ul></div>";

    setHtml +="<div class='zhihuSetPage' id='zhihuIconSetPage'>";
    setHtml +="<div class='zhihuSetPageHead'><span class='back'></span><span>设置</span><span></span></div>";
    setHtml +="<ul class='zhihuSetPageLi'>";

    for(var optionN=0;optionN<zhihuOptionJson.length;optionN++){

        var optionValue = GM_getValue(zhihuOptionJson[optionN].optionID,'0');

        if(optionValue != '22'){
            var backColor = '#fff';
            var switchBackCorlor = '#FFF';

        }else{
            var backColor = '#fe6d73';
            var switchBackCorlor = '#FFE5E5';
        }
        setHtml +="<li ><div class='zhihuSetPageContent'><span>"+zhihuOptionJson[optionN].optionName+"</span>";
        setHtml +="<div class='circular' style='background-color: "+switchBackCorlor+";' id="+zhihuOptionJson[optionN].optionID+"><div class='round-button' style='background: "+backColor+";left: "+optionValue+"px;'></div></div></div>";
        if(zhihuOptionJson[optionN].optionID == 'removeKeyword'){
            if(GM_getValue('removeKeyword','0') == '22'){
                var keywordShow = 'block';

            }else{
                var keywordShow = 'none';
            }
            setHtml +="<div style='margin-top:10px;display:"+keywordShow+";padding:5px 0px;' id='zhihuKeyword'><input placeholder='请输入关键词' class='iconSetPageInput'></div>";
        }
        setHtml +="</li>";
    }
    setHtml +="</ul></div>";

    setHtml +="<ul><li class='iconSetPageHead'><span></span><span>设&nbsp;置</span><span class='iconSetSave'>×</span></li></ul>";
    setHtml +="<ul class='setWrapLi'>";

    for(var setN=0;setN<setListJson.length;setN++){

        var listValue = GM_getValue(setListJson[setN].setListID,'22');

        if(listValue != 22){
            var backColor = '#fff';
            var arrowColor= '#EEE';
            var switchBackCorlor = '#FFF';

        }else{
            var backColor = '#fe6d73';
            var arrowColor = '#CCC';
            var switchBackCorlor = '#FFE5E5';

        }
        if(setListJson[setN].setPageID == ''){
            var arrowColor = '#EEE';
        };
        setHtml +="<li><span>"+setListJson[setN].listName+"</span>";
        setHtml +="<div class='setWrapLiContent'>";
        setHtml +="<div class='circular' id='"+setListJson[setN].setListID+"' style='background-color: "+switchBackCorlor+";'><div class='round-button' style='background: "+backColor+";left: "+listValue+"px'></div></div>";
        setHtml +="<span class='to-right' data='"+setListJson[setN].setPageID+"' style='margin-left:20px;border: solid "+arrowColor+"; border-width: 0 3px 3px 0; display: inline-block; padding: 3px;transform: rotate(-45deg); -webkit-transform: rotate(-45deg);cursor:pointer;'></span></div></li>";
    }

    setHtml +="</ul>";
    setHtml +="<div style='height:40px;'></div>";
    setHtml +="<div class='iconSetFoot' style=''>";
    setHtml +="<ul class='iconSetFootLi'>";
    setHtml +="<li><a href='https://80note.com/2019/05/782.html' target='_blank'>常见问题</a></li>・<li><a href='https://www.zuihuimai.net/t/qq.html' target='_blank'>交流群</a></li>・<li><a href='https://cdn.80note.com/ds.jpg' target='_blank'>打赏</a></li>・<li><a href='https://cdn.80note.com/erwwma.png' target='_blank'>领红包</a></li>・<li><a href='https://80note.com/2022/03/323.html' target='_blank'>感谢</a></li>";
    setHtml +='</ul>';
    setHtml +='</div>';
    setHtml += "</div>";

    GM_registerMenuCommand("设置", () => iconSet());

    function iconSet(){

        var setTag = $('#setMask').attr('class');

        if(setTag !='zhmmask'){
            $("body").append(setHtml);
            //$('#'+iconVipPosition+'Position').attr('checked','checked');
            $('#iconPosition').find("option[value='"+iconVipPosition+"']").attr("selected",true);
        }else{
            return false;
        }

        $('.circular').click(function () {

			var left = $(this).children('div').css('left');

            left = parseInt(left);

            if (left == 0) {
                $(this).children('div').css({'left': '22px', 'background-color': '#fe6d73'});
                $(this).css({'background-color': '#ffE5E5'});
                var attrData = $(this).next('span').attr('data');
                if(attrData !=''){
                    $(this).next('span').css('border-color','#CCC');
                }
                //alert($(this).next('span').attr('data'));

                var listLeftValue = 22;
            } else {
                $(this).children('div').css({'left': '0', 'background-color': '#fff'});
                $(this).css({'background-color': '#fff'});
                $(this).next('span').css('border-color','#EEE');

                var listLeftValue = 0

            }
            var setListID = $(this).attr('id');

            GM_setValue(setListID,listLeftValue);

            if(setListID == 'removeKeyword' && listLeftValue==22){
                $('#zhihuKeyword').show();
            };
            if(setListID == 'removeKeyword' && listLeftValue==0){
                $('#zhihuKeyword').hide();
            };
        })

        $('.to-right').click(function(){

            var left = $(this).prev('div').children('div').css('left');
            left = parseInt(left);

            if(left != 22){
                return false;
            }

			var setPageID = $(this).attr('data');

			$("#"+setPageID).animate({left:"+=-300px"});

		})

		$(".back").click(function(){

			$(this).parent('li').parent('ul').parent('div').animate({left:"+=300px"});

		});

        $('#iconSetCancel').click(function(){

			$('#setMask').remove();
			$('#setWrap').remove();
		});

        $('.iconSetSave').click(function(){

            var iconTop = $('#iconTop').val();

            //alert(iconTop);

            //var iconPosition = $("input[name='iconPosition']:checked").val();

            var iconPosition = $('#iconPosition').val();

            var iconWidth = $('#iconWidth').val();

            if(iconTop != ''){
                if(!(/(^[1-9][0-9]{0,2}$)/.test(iconTop))){
                    alert("<图标位置>中的<图标高度>应为1000以内正整数，建议1~500");
                    return false;
                }
                setCookie('iconTop',iconTop,30)
            }

            if(iconPosition != ''){
                setCookie('iconPosition',iconPosition,30)
            }

            if(iconWidth !=''){
                if(!(/(^([1-9][0-9]?)$)/.test(iconWidth))){
                    alert("<图标位置>中的<图标大小>应为100以内正整数，建议20~50");
                    return false;
                }
                setCookie('iconWidth',iconWidth,30);
            }

           history.go(0);
        });
        $("#iconTop").blur(function(){
            var iconTop = $('#iconTop').val();
            if(!(/(^[1-9]\d*$)/.test(iconTop))){
               $(this).attr('data-is-valid','false');

            }else{
                $(this).attr('data-is-valid','true');
            }
			 return false;

		})

        $('#iconWidth').blur(function(){

            var iconWidth = $('#iconWidth').val();
            if(!(/(^[1-9]\d*$)/.test(iconWidth))){
               $(this).attr('data-is-valid','false');

            }else{
                $(this).attr('data-is-valid','true');
            }
			 return false;
        })

    }

    var id_random = Math.ceil(Math.random()*100000000);
	var play_url = window.location.href;
	var arr = new Array();
	arr = play_url.split('?')
	var get_url = arr[0];

	if(get_url.indexOf('eggvod.cn') == -1){

        if(GM_getValue('movieList','22') == '22'){
		var jx_title=new Array()
		jx_title[0]="youku.com"
		jx_title[1]="iqiyi.com"
		jx_title[2]="le.com"
		jx_title[3]="v.qq.com"
		jx_title[4]="tudou.com"
		jx_title[5]="mgtv.com"
		jx_title[6]="sohu.com"
		jx_title[7]="acfun.cn"
		jx_title[8]="bilibili.com"
		jx_title[9]="pptv.com"
		jx_title[10]="baofeng.com"
		jx_title[11]="yinyuetai.com"
		jx_title[12]="wasu.cn"
		jx_title[13]="iq.com"
		jx_title[14]="m.v.qq.com"
		jx_title[15]="m.iqiyi.com"
		var title_result = false;
		for(var n=0;n<jx_title.length;n++){
			if(get_url.indexOf(jx_title[n])!= -1){
                var play_line_json =  [
                    {"name":"纯净1","url":"https://z1.m1907.cn/?jx=","t":"m"},
                    {"name":"B站1","url":"https://vip.parwix.com:4433/player/?url=","t":"m"},
                    {"name":"爱豆","url":"https://jx.aidouer.net/?url=",'t':'m'},
                    {"name":"BL","url":"https://vip.bljiex.com/?v="},
                    {"name":"冰豆","url":"https://api.qianqi.net/vip/?url="},
                    {"name":"百域","url":"https://jx.618g.com/?url="},
                    {"name":"CK","url":"https://www.ckplayer.vip/jiexi/?url="},
                    {"name":"CHok","url":"https://www.gai4.com/?url=","t":"m"},
                    {"name":"ckmov","url":"https://www.ckmov.vip/api.php?url="},
                    {"name":"大幕","url":"https://jx.52damu.com/dmjx/jiexi.php?url="},
                    {"name":"迪奥","url":"https://123.1dior.cn/?url="},
                    {"name":"H8","url":"https://www.h8jx.com/jiexi.php?url="},
                    {"name":"解析","url":"https://ckmov.ccyjjd.com/ckmov/?url="},
                    {"name":"解析la","url":"https://api.jiexi.la/?url="},
                    {"name":"九八","url":"https://jx.youyitv.com/?url="},
                    {"name":"LE","url":"https://lecurl.cn/?url="},
                    {"name":"老板","url":"https://vip.laobandq.com/jiexi.php?url="},
                    {"name":"乐多","url":"https://api.leduotv.com/wp-api/ifr.php?isDp=1&vid=","t":"m"},
                    {"name":"MAO","url":"https://www.mtosz.com/m3u8.php?url="},
                    {"name":"M3U8","url":"https://jx.m3u8.tv/jiexi/?url="},
                    {"name":"MUTV","url":"https://jiexi.janan.net/jiexi/?url="},
                    {"name":"诺诺","url":"https://www.ckmov.com/?url="},
                    {"name":"诺讯","url":"https://www.nxflv.com/?url="},
                    {"name":"OK","url":"https://okjx.cc/?url=","t":"m"},
                    {"name":"PM","url":"https://www.playm3u8.cn/jiexi.php?url="},
                    {"name":"盘古","url":"https://www.pangujiexi.cc/jiexi.php?url="},
                    {"name":"奇米","url":"https://qimihe.com/?url="},
                    {"name":"全民","url":"https://jx.blbo.cc:4433/?url="},
                    {"name":"RDHK","url":"https://jx.rdhk.net/?v=","t":"m"},
                    {"name":"人人迷","url":"https://jx.blbo.cc:4433/?url=","t":"m"},
                    {"name":"思云","url":"https://jx.ap2p.cn/?url="},
                    {"name":"思古3","url":"https://jsap.attakids.com/?url=","t":"m"},
                    {"name":"淘电影","url":"https://jx.vodjx.top/vip/?url="},
                    {"name":"听乐","url":"https://jx.dj6u.com/?url=","t":"m"},
                    {"name":"维多","url":"https://jx.ivito.cn/?url="},
                    {"name":"虾米","url":"https://jx.xmflv.com/?url="},
                    {"name":"小蒋","url":"https://www.kpezp.cn/jlexi.php?url="},
                    {"name":"云端","url":"https://sb.5gseo.net/?url="},
                    {"name":"云析","url":"https://jx.yparse.com/index.php?url="},
                    {"name":"0523","url":"https://go.yh0523.cn/y.cy?url="},
                    {"name":"17云","url":"https://www.1717yun.com/jx/ty.php?url="},
                    {"name":"4K","url":"https://jx.4kdv.com/?url=","t":"m"},
                    {"name":"8090","url":"https://www.8090g.cn/?url="}
                ];
                var playLineMobile = [];
                var nnn=0;
                for(var playLineIndexMobile=0 ;playLineIndexMobile < play_line_json.length;playLineIndexMobile++){
                    if(play_line_json[playLineIndexMobile].t == 'm'){

                        playLineMobile[nnn] = play_line_json[playLineIndexMobile];
                        nnn++
                    }
                }
                 if(/Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)) {
                     play_line_json = playLineMobile;
                 }

                var play_wrap_html = "<div href='javascript:void(0)' target='_blank' style='padding-top:5px;cursor:pointer;z-index:9999999;display:block;position:fixed;"+iconVipPosition+":0px;top:"+iconVipTop+"px;text-align:center;overflow:visible' class='playButton' id='zhmlogo'><img class='iconLogo' src='data:image/gif;base64,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' title='点击主图标弹出解析，点击右侧列表站内解析' style='width:"+iconVipWidth+"px'id="+id_random+">";
				play_wrap_html += "<div style='position:fixed;"+iconVipPosition+":"+iconVipWidth+"px;top:"+iconVipTop+"px;z-index:9999999999;overflow: hidden;width:300px;display:none' class='playLineDiv' >"
				play_wrap_html += "<div style='width:320px;height:316px;overflow-y:scroll;overflow-x:hidden'>";
                play_wrap_html += "<table class='playLineTabel' style='width:300px;border-spacing:5px;border-collapse:separate'><tr>";
                for(var playLineIndex=0 ;playLineIndex < play_line_json.length;playLineIndex++){

                    if((/(^[1-9]\d*$)/.test(playLineIndex/3))){

                        play_wrap_html +="<tr>";

                        play_wrap_html += "<td class='playLineTd'id='"+play_line_json[playLineIndex].url+"' style='padding:4px 0px;width:33%;color:#fff;text-align:center;background-color:#f24443;box-shadow:0px 0px 10px #fff;font-size:14px;'>"+play_line_json[playLineIndex]['name']+"</td>";

                        continue;

                    }

                    play_wrap_html += "<td class='playLineTd' id='"+play_line_json[playLineIndex].url+"' style='padding:4px 0px;width:33%;color:#fff;text-align:center;background-color:#f24443;box-shadow:0px 0px 10px #fff;font-size:14px'>"+play_line_json[playLineIndex]['name']+"</td>";

                    if((/(^[1-9]\d*$)/.test((playLineIndex+1)/3))){

                        play_wrap_html +="</tr>";

                    }


                }

                play_wrap_html += "</tr></table>";

                play_wrap_html +="</div></div></div>";

                setTimeout(function(){

                    $("body").append(play_wrap_html);

                    $(".playButton").on("mouseover", () => {
                        $(".playLineDiv").show();
                    });
                    $(".playButton").on("mouseout", () => {
                        $(".playLineDiv").hide();
                    })

                    $(".playLineTd").hover(function(){
                        $(this).css("color","#260033");
                        $(this).css("background-color","#fcc0c0");
                    },function(){

                        if(getCookie('playLineAction')!= $(this).attr('id')){

                            $(this).css("color","#fff");
                            $(this).css("background-color","#f24443");
                        }
                    });

                    $(".playLineTd").each(function(){

                        if(getCookie('playLineAction')== $(this).attr('id')){

                            $(this).css("color","#260033");

                            $(this).css("background-color","#fcc0c0");
                        }
                    });
/*
                    $(".playButton").on({
                        touchstart: function(e){
                            timeOutEvent = setTimeout(function(){
                                $(".playLineDiv").show();
                            },500);
                        },
                        touchmove: function(){
                            clearTimeout(timeOutEvent);
                            timeOutEvent = 0;
                            e.preventDefault();
                        }
                    });
*/
                    var host = location.host;
                    var node = "";
                    var player_nodes = [
                        { url:"v.qq.com", node:"#mod_player"},
                        { url:"v.qq.com/x/page", node:".container-player"},
                        { url:"m.v.qq.com", node:"#player"},
                        { url:"m.v.qq.com/x/m", node:".site_player"},
                        { url:"www.iqiyi.com", node:"#flashbox"},
                        { url:"m.iqiyi.com", node:".m-video-player-wrap"},
                        { url:"v.youku.com", node:"#player"},
                        { url:"m.youku.com", node:"#player"},
                        { url:"w.mgtv.com", node:"#mgtv-player-wrap"},
                        { url:"www.mgtv.com", node:"#mgtv-player-wrap"},
                        { url:"m.mgtv.com",node:".video-poster"},
                        { url:"tv.sohu.com", node:"#player"},
                        { url:"m.tv.sohu.com", node:".x-cover-playbtn-wrap"},
                        { url:"film.sohu.com", node:"#playerWrap"},
                        { url:"www.le.com", node:"#le_playbox"},
                        { url:"video.tudou.com", node:".td-playbox"},
                        { url:"v.pptv.com", node:"#pptv_playpage_box"},
                        { url:"vip.pptv.com", node:".w-video"},
                        { url:"www.wasu.cn", node:"#flashContent"},
                        { url:"www.acfun.cn", node:"#ACPlayer"},
                        { url:"vip.1905.com", node:"#player"},
                        { url:"play.tudou.com",node:"#player"},
                        { url:"www.bilibili.com/video",node:"#bilibiliPlayer"},
                        { url:"www.bilibili.com/bangumi",node:"#player_module"},
                        { url:"m.bilibili.com/bangumi",node:".player-container"},
                        { url:"m.bilibili.com/video",node:".mplayer"},
                        { url:"www.iq.com", node:"#flashbox"},

                    ];
                    for(var m in player_nodes) {

                        if(get_url.indexOf(player_nodes[m].url)!= -1){

                            node = player_nodes[m].node;

                        }
                    }
                    var remove = function(selector) {
                        if (!document.querySelectorAll) {
                            return;
                        }
                        var nodes = document.querySelectorAll(selector);
                        if (nodes) {
                            for (var i = 0; i < nodes.length; i++) {
                                if (nodes[i] && nodes[i].parentNode) {
                                    nodes[i].parentNode.removeChild(nodes[i]);
                                }
                            }
                        }
                    };
                    function removeObj(targetSelector, rootSelector = 'body', wait) {
                        const rootElement = document.querySelector(rootSelector);
                        const targetElement = rootElement.querySelector(targetSelector);
                        if (targetElement) {
                            return Promise.resolve(targetElement)
                        }
                        return new Promise((resolve, reject) => {
                            const callback = function(matationList, observer) {
                                const targetElement = rootElement.querySelector(targetSelector);
                                if (targetElement) {
                                    resolve(targetElement);
                                    observer.disconnect()
                                }
                            };
                            const observer = new MutationObserver(callback);
                            observer.observe(rootElement, {
                                subtree: true,
                                childList: true
                            });
                            if (wait !== undefined) {
                                setTimeout(() => {
                                    observer.disconnect()
                                }, wait)
                            }
                        })
                    };
                    async function removeAll(targetSelector, rootSelector, now = false) {
                    if (now) {
                        const parent = rootSelector ? document.querySelector(rootSelector) : document;
                        if (parent) {
                            const target = parent.querySelector(targetSelector);
                            if (target) {
                                target.remove();
                                return true
                            }
                        }
                        return false
                    }
                    const target = await removeObj(targetSelector, rootSelector);
                    target.remove()
                };

                    if(play_url.indexOf('iqiyi.com/v_') != -1){

						function iqiyiRemove() {

							remove('div#scrollTip,.qy-glide,#qy-glide,[class^="qy-glide"],[id^="qy-glide"],svg[display="none"][aria-hidden="true"],div[class*="player-side-ear"],div[class^="player-mnb"][data-asyn-pb]');
							removeAll('div[style*="visibility"][style*="visible"]:not([class]):not([id]):not([style*="fixed"])', undefined, false);

						};

						//setTimeout(iqiyiRemove, 1234);
						$('div[style*="visibility"][style*="visible"]:not([class]):not([id]):not([style*="fixed"])').hide();
						(function() {
							$("body").on('mouseover', 'ul li [href*="/v_"][href*=".html"]:not([href*="=http"]):not([href*="?http"]):not([href*="#http"])', function(e) {
								let objfj = $(this), href = objfj.attr('href') || objfj.data("href");
								objfj.off('click.chrome');

								objfj.on('click.chrome', function() {
									window.location.href = href
								}).attr('data-href', href).css({
									cursor: 'pointer'
								}).removeAttr('href')
							})
						})();
					}


                    if(play_url.indexOf('v.qq.com/x/cover') != -1){

                    (function() {
                        $("body").on('mouseover', '.item a', function(e) {

                            let objfj = $(this), href = objfj.attr('href') || objfj.data("href");
                            objfj.off('click.chrome');

                            objfj.on('click.chrome', function() {
                                window.location.href = href
                            }).attr('data-href', href).css({
                                cursor: 'pointer'
                            }).removeAttr('href')
                        })
                    })();
                }

                    $("body").delegate(".playLineTd","click",function(){

                        $('.playLineTd').css("color","#fff");

                        $('.playLineTd').css("background-color","#f24443");

                        $(this).css("color","#260033");

                        $(this).css("background-color","#fcc0c0");

                        //GM_setValue('playLineAction',$(this).attr("id"));

                        setCookie('playLineAction',$(this).attr("id"),30);

                        var play_html = '';

                        if(node == ".m-video-player-wrap"){
                            play_html += "<div style='width:100%;height:100%;z-index:9999999;position: absolute;top:0px;padding:0px;'>";
                        }else{
                            play_html += "<div style='width:100%;height:100%'>";
                        }
                        play_html += "<iframe allowtransparency=true frameborder='0' scrolling='no' allowfullscreen=true allowtransparency=true name='jx_play' style='height:100%;width:100%' id='playIframe'></iframe></div>";

                        if(node == '.player-container'){
                            let blNode = $('.player-container').attr('class');

                            if(blNode == undefined){
                                node='.player-mask';
                            }
                        }

                        $(node).html(play_html);

                        var iframe_src= this.id+play_url;

                        $("#playIframe").attr("src",iframe_src);


                    });
                    var playShow = $('.playLineDiv').css('display');
                    $('.iconLogo').click(function(){
                        var play_jx_url = window.location.href;
                        if(/Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)) {
                            if(playShow == 'none'){
                                $(".playLineDiv").show();
                                playShow='block'
                            }else{
                                $(".playLineDiv").hide();
                                playShow='none'
                            }
                        } else {
                            $.get('https://www.eggvod.cn/jxcode.php',{in:81516699,code:4},function(data){
                                location.href='https://www.eggvod.cn/jxjx.php?lrspm='+data+'&zhm_jx='+play_jx_url;
                            });
                        }

                    });


                }, 3000);

                var zhmmun = 0;
                setInterval(function(){
                    if(zhmmun < 21){
                        if(!$('#zhmlogo').length>0){
                            $("body").append(play_wrap_html);
                            $(".playButton").on("mouseover", () => {
                                $(".playLineDiv").show();
                            });
                            $(".playButton").on("mouseout", () => {
                                $(".playLineDiv").hide();
                            })

                            $(".playLineTd").hover(function(){
                                $(this).css("color","#260033");
                                $(this).css("background-color","#fcc0c0");
                            },function(){

                                if(getCookie('playLineAction')!= $(this).attr('id')){

                                    $(this).css("color","#fff");
                                    $(this).css("background-color","#f24443");
                                }
                            });

                            $(".playLineTd").each(function(){

                                if(getCookie('playLineAction')== $(this).attr('id')){

                                    $(this).css("color","#260033");

                                    $(this).css("background-color","#fcc0c0");
                                }
                            });
                            /*
                            $(".playButton").on({
                                touchstart: function(e){
                                    timeOutEvent = setTimeout(function(){
                                        $(".playLineDiv").show();
                                    },500);
                                },
                                touchmove: function(){
                                    clearTimeout(timeOutEvent);
                                    timeOutEvent = 0;
                                    e.preventDefault();
                                }
                            });
*/
                      }
                    }
                    zhmmun++
                },3000)
            }
        }
        }
		//音乐解析

        if(GM_getValue('musicList','22') == '22'){
        var music_id = Math.ceil(Math.random()*100000000);
		var music_title=new Array()
		music_title[0]="163.com"
		music_title[1]= "y.qq.com"
		music_title[2]= "kugou.com"
		music_title[3]= "kuwo.cn"
		music_title[4]= "xiami.com"
		music_title[5]= "taihe.com"
		music_title[6]= "1ting.com"
		music_title[7]= "migu.cn"
		music_title[8]= "qingting.fm"
		music_title[9]= "lizhi.fm"
		music_title[10]= "ximalaya.com"

		for(var i=0;i<music_title.length;i++){
			if(get_url.indexOf(music_title[i])!= -1){
				var music_html = "<div href='javascript:void(0)' id="+music_id+" style='cursor:pointer;z-index:98;display:block;width:"+iconVipWidth+"px;position:fixed;"+iconVipPosition+":0;top:"+iconVipTop+"px;text-align:center;'><img src='data:image/gif;base64,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' title='在音乐单曲播放页面点击图标下载' style='width:"+iconVipWidth+"px'></div>";
				$("body").append(music_html);
			}

		}

		$("#"+music_id).click(function(){


            var hostUrl = window.location.href;

            if(hostUrl.match(/music\.163\./)){


                if(hostUrl.match(/^https?:\/\/music\.163\.com\/#\/(?:song|dj)\?id/)) {

                    window.open('http://www.eggvod.cn/newmusic/?url='+encodeURIComponent(hostUrl.replace('/#','')));

                }else if(hostUrl.match(/^https?:\/\/y\.music\.163\.com\/m\/(?:song|dj)\?id/)) {

                     window.open('http://www.eggvod.cn/newmusic/?id='+encodeURIComponent('https://music.163.com/song?id='+getQueryString('id')));

                }else{
                    var songId = hostUrl.split('?id=');

                    if(songId[1]){
                        window.open('http://www.eggvod.cn/newmusic/?url='+encodeURIComponent('https://music.163.com/song?id='+songId[1]));
                    }else{
                        return false;
                    }
                }
            }else if(hostUrl.match(/y\.qq\.com/)){

                try {
                    document.querySelector("audio").pause();
                } catch (e) {
                    alert('QQ音乐请在单曲播放页面点击VIP图标解析，在列表和单曲详情页面中点击VIP图标无效');
                }

                if($('#sim_song_info').children("a").attr("href")){

                   var qqSong = $('#sim_song_info').children("a").attr("href").match(/song\/(\S*).html/);

                }else{

                  qqSong = $('.player_music__info').children("a").attr("href").match(/songDetail\/(\S*)\?/);

                }

                window.open('http://www.eggvod.cn/newmusic/?id='+qqSong[1]+'&type=qq&playUrl='+encodeURIComponent(document.querySelector("audio").src));

            }else if(hostUrl.match(/kugou\.com/)){
                try {
                    document.querySelector("audio").pause();
                } catch (e) {}
                var kgSong = hostUrl.match(/hash=(\S*)&album/);
                window.open('http://www.eggvod.cn/newmusic/?id='+kgSong[1]+'&type=kugou&playUrl='+encodeURIComponent(document.querySelector("audio").src));
            }else if(hostUrl.match(/kuwo\.cn/)){

                try {
                    document.querySelector("audio").pause();
                } catch (e) {}
                var kwSong = hostUrl.match(/play_detail\/(\S*)/);
                console.log(kwSong);
                window.open('http://www.eggvod.cn/newmusic/?id='+kwSong[1]+'&type=kuwo&playUrl='+encodeURIComponent(document.querySelector("audio").src));

            }else if(hostUrl.match(/www\.xiami\.com/)){
                try {
                    document.querySelector("audio").pause();
                } catch (e) {}
                var xmSong = hostUrl.match(/song\/(\S*)/);
                console.log(xmSong);
                window.open('http://www.eggvod.cn/newmusic/?id='+xmSong[1]+'&type=xiami&playUrl='+encodeURIComponent(document.querySelector("audio").src));

            }else if(hostUrl.match(/www\.ximalaya\.com/)){

                var xmlyUrlArr = hostUrl.split("/");

                for(var xuaIndex =0;xuaIndex<xmlyUrlArr.length;xuaIndex++){

                    if(xuaIndex==xmlyUrlArr.length-1){

                        if(xmlyUrlArr[xuaIndex] != ""){

                            window.open('http://www.eggvod.cn/newmusic/?id='+xmlyUrlArr[xuaIndex]+'&type=ximalaya&playUrl='+encodeURIComponent(hostUrl));

                        }else{

                            alert('请在单曲页面点击VIP图标解析，在列表中点击VIP图标无效');
                        }

                    }

                }
            }else if(hostUrl.match(/music\.taihe\.com/)){
                return false;
            }else{
                 return false;

            }

		});
        }

	}

    function setCookie(cname,cvalue,exdays){
        var d = new Date();
        d.setTime(d.getTime()+(exdays*24*60*60*1000));
        var expires = "expires="+d.toGMTString();
        document.cookie = cname+"="+cvalue+"; "+expires;
    }
    function getCookie(cname){
        var name = cname + "=";
        var ca = document.cookie.split(';');
        for(var i=0; i<ca.length; i++) {
            var c = ca[i].trim();
            if (c.indexOf(name)==0) { return c.substring(name.length,c.length); }
        }
        return "";
    }
	//获取url参数;
	function getQueryString(e) {
		var t = new RegExp("(^|&)" + e + "=([^&]*)(&|$)");
		var a = window.location.search.substr(1).match(t);
		if (a != null) return a[2];
		return "";
	}

})();