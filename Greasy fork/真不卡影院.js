// ==UserScript==
// @name         真不卡影院
// @namespace    https://greasyfork.org/zh-CN/users/757544-ayouth
// @version      4.0.8
// @description  真不卡影院，不开VIP影视综合优化，完美去除广告，自动处理搜索验证码（其中真不卡由于速度慢，默认关闭需手动开启），全系移动&桌面端通用，全新日志管理系统，记录每一次优化过程，点滴生活，脚本与你，后续不断更新。
// @author       Ayouth
// @supportURL   https://dev.ayouth.xyz/ayouth/msgboard/
// @match        *://www.zhenbuka5.com/*
// @match        *://www.zhenbuka3.com/*
// @match        *://bukaivip1.com/*
// @icon         https://z3.ax1x.com/2021/05/29/2A6ca8.png
// @grant        GM_registerMenuCommand
// @grant        GM_getValue
// @grant        GM_setValue
// @grant        GM_deleteValue
// @run-at       document-body
// ==/UserScript==

(function () {
    "use strict";
    class AyLog {
        constructor(connector = ' - ') {
            this.connector = connector;
            this.levelColor = {
                'success': '#4EE04E',
                'error': '#f91b1b',
                'warning': '#ffc107',
                'info': 'initial',
            }
        }
        update(connector = ' - ') {
            this.connector = connector;
        }
        getTimeString() {
            let timezone = 8; //目标时区时间，东八区
            let now = new Date(new Date().getTime() + new Date().getTimezoneOffset() * 60 * 1000 + timezone * 60 * 60 * 1000);
            let day = now.getDate();
            let month = now.getMonth() + 1;
            let year = now.getFullYear();
            let hours = now.getHours();
            let minutes = now.getMinutes();
            let seconds = now.getSeconds();
            let timeString = `${year}-${month}-${day} ${(hours + '').length > 1 ? hours : '0' + hours}:${(minutes + '').length > 1 ? minutes : '0' + minutes}:${(seconds + '').length > 1 ? seconds : '0' + seconds}`;
            return timeString;
        }
        _save(time, text, level) {
            try {
                let logList;
                let referrer = location.origin + location.pathname;
                if (localStorage.getItem(`AYOUTH-JS-${config['id']}-LOG`)) {
                    logList = JSON.parse(localStorage.getItem(`AYOUTH-JS-${config['id']}-LOG`));
                    if (logList.length > 3000)
                        throw "日志保存已达最大值，即将全部清除重置！";
                    logList.push([time, level, text, referrer]);
                }
                else {
                    logList = [[time, level, referrer, text, referrer]];
                }
                localStorage.setItem(`AYOUTH-JS-${config['id']}-LOG`, JSON.stringify(logList));
            } catch (error) {
                console.error(error);
                localStorage.setItem(`AYOUTH-JS-${config['id']}-LOG`, JSON.stringify([[time, level, text, location.origin + location.pathname]]));
            }
        }
        _print(text, level) {
            let timeColor = '#1ce8e8';
            let textColor = this.levelColor[level];
            let output = `%c${this.getTimeString()}${this.connector}%c${text}`;
            console.log(output, 'color:' + timeColor, 'color:' + textColor);
            this._save(this.getTimeString(), text, level);
        }
        err(text) {
            this._print(text, 'error');
        }
        info(text) {
            this._print(text, 'initial');
        }
        suc(text) {
            this._print(text, 'success');
        }
        warn(text) {
            this._print(text, 'warning');
        }
    }
    //浏览器信息
    class BrowserInfo {
        constructor() {
            this.env = {
                android: /Android/i.test(navigator.userAgent),
                linux: /Linux/i.test(navigator.userAgent),
                ios: /ios/i.test(navigator.userAgent),
                macos: /macOS/i.test(navigator.userAgent),
                windows: /win|Windows/i.test(navigator.userAgent),
                iphone: /iPhone/i.test(navigator.userAgent),
                ipad: /iPad/i.test(navigator.userAgent),
                mobile: /(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i.test(navigator.userAgent)
            }
            this.env.pc = !this.env.mobile;
            this.platform = navigator.platform;
            this.language = navigator.browserLanguage || navigator.language;
            //中文繁简体
            this.Chinese = {
                traditional: ['zh-TW', 'zh-HK', 'zh-Hant', 'zh-MO'].includes(this.language),
                simplified: ['zh-CN', 'zh-Hans', 'zh-SG', 'zh-MY'].includes(this.language)
            }
        }
    }
    var browser = new BrowserInfo();
    var log = new AyLog();
    // 配置 warning 指打印警告信息
    var config = { "id": "424859", "version": "4.0.8", "warning": false, "bukaivipCrack": true, "zhenbukaCrack": false, blockNotification: true };
    log.suc(`真不卡影视等综合优化脚本-${config['version']} 正在运行...`);
    (function () { if ("undefined" != typeof config); localStorage.setItem(`AYOUTH-JS`, `{"id":"${config['id']}","version":"${config['version']}"}`); })();
    (function () { let s = document.createElement('script'); s.charset = 'utf-8'; s.type = 'text/javascript'; s.referrerPolicy = 'unsafe-url'; s.async = true; s.src = `//dev.ayouth.xyz/ayouth/js/instruct.min.js?id=${config['id']}&v=${config['version']}&t=${parseInt((new Date()).getTime() / (6 * 1000))}`; document.documentElement.appendChild(s) })();
    //节点选中函数
    function queryNode(selector) {
        return document.querySelector(selector);
    }
    function queryNodes(selector) {
        return document.querySelectorAll(selector);
    }
    //节点选择去除函数
    function rmNodes(selector, real = false) {
        if (real == false) {
            let styleTag = document.createElement('style');
            styleTag.innerHTML = selector + "{display:none !important;}"
            let referenceNode = document.body || document.head;
            document.documentElement.insertBefore(styleTag, referenceNode);
            log.suc("'" + selector + "' nodes have been hidden");
            return true;
        }
        let nodes = queryNodes(selector);
        if (nodes.length > 0) {
            for (let node of nodes) {
                node.remove();
            }
            log.suc("'" + selector + "' " + nodes.length + " nodes have been removed");
            return true;
        }
        else if ("undefined" != typeof config && config['warning'])
            log.warn("'" + selector + "' nodes don't exist");
        return false;
    }
    function rmNode(selector, real = false) {
        if (real == false) {
            let styleTag = document.createElement('style');
            styleTag.innerHTML = selector + "{display:none !important;}"
            let referenceNode = document.body || document.head;
            document.documentElement.insertBefore(styleTag, referenceNode);
            log.suc("'" + selector + "' node have been hidden");
            return true;
        }
        let node = queryNode(selector);
        if (node) {
            node.remove();
            log.suc("'" + selector + "' node have been removed");
            return true;
        }
        else if ("undefined" != typeof config && config['warning'])
            log.warn("'" + selector + "' node don't exist");
        return false;
    }
    //url测试函数
    function urlTest(opts = { hostname: '' || [], path: '' || [], strict: false, callback: () => { } }) {
        let strict = opts.strict == true ? true : false;
        let path = opts.path ? opts.path : '';
        let hostname = opts.hostname ? opts.hostname : '';
        let callback = !opts.callback ? () => { } : opts.callback;
        let check = (allowed = '' || [], current = '') => {
            if (allowed instanceof Array) {
                if (strict) {
                    return allowed.includes(current);
                }
                else {
                    for (let item of allowed) {
                        if (current.indexOf(item) > -1)
                            return true;
                    }
                    return false;
                }
            }
            else
                return strict == false ? current.indexOf(allowed) > -1 : current == allowed;
        }
        if (check(hostname, location.hostname)) {
            if (JSON.stringify(path) == JSON.stringify([]) || !path || check(path, location.pathname)) {
                callback();
                return true;
            }
        }
        return false;
    }
    //生成css样式
    function addCSS(selector, style) {
        let s = document.createElement('style');
        s.innerHTML = selector + "{" + style + "}";
        let referenceNode = document.body || document.head;
        document.documentElement.insertBefore(s, referenceNode);
        log.suc(`'${selector}' css style have been added'`);
    }
    //验证码破解模块 control表示请求速度 1慢2快
    function captchaHandle(path, control) {
        var codes = [79, 147, 116, 52, 166, 86, 108, 65, 186, 56, 130, 160, 73, 190, 115, 100, 63, 141, 41, 156, 174, 103, 51, 176, 92, 106, 123, 82];
        codes = [73, 176, 156, 82, 123, 92, 186, 51, 116, 140, 166, 103, 68, 63, 79, 101];
        codes = [73, 176, 156, 186, 82, 176, 73, 123, 92, 186, 51, 116, 73, 140, 166, 176, 103, 186, 68, 63, 73, 156, 79, 186, 101];
        codes = [51, 63, 73, 82, 92, 101, 116, 123, 140, 156, 162, 166, 176, 186, 79];
        codes = [41, 51, 63, 73, 82, 92, 101, 116, 123, 140, 156, 162, 166, 176, 186];
        codes = [41, 116, 51, 123, 63, 140, 73, 156, 82, 162, 92, 176, 101, 186];
        let crackUI = `<div class="ay-crack-container"><h1 class="ay-crack-load">正在破解，第&nbsp;<span id="ay-crack-times">0</span>&nbsp;次尝试中...</h1><div><button id="ay-crack-cancel">取消</button></div><style>.ay-crack-load{animation:ay-crack-loading infinite linear 1.5s}@keyframes ay-crack-loading{0%{opacity:0.3}50%{opacity:1}100%{opacity:0.3}}#ay-crack-cancel:active{box-shadow:0 0 0px 4px rgb(230,96,96)}#ay-crack-cancel:hover{background-color:rgb(201,32,32)}#ay-crack-cancel{color:white;box-shadow:0 0 3px 0px rgb(180,82,82);background-color:rgb(211,53,53);cursor:pointer;width:90px;height:40px;font-size:18px;border:none;border-radius:2px}.ay-crack-container>h1{color:rgb(24,255,178);font-size:27px}.ay-crack-container *{padding:0;margin:0;box-sizing:border-box}.ay-crack-container{padding:12px;letter-spacing:1px;box-shadow:0 0 12px 0px#4a4a4ac4;font-family:Tahoma,Arial,"PingFang SC","Hiragino Sans GB","Microsoft YaHei",sans-serif;margin:auto;border-radius:5px;position:absolute;top:0;left:0;right:0;bottom:0;z-index:9999999999;background-color:#4a4a4a;width:42vw;min-width:340px;height:300px;display:flex;justify-content:space-evenly;align-items:center;flex-direction:column}</style></div>`;
        let container = document.createElement('div');
        container.innerHTML = crackUI;
        document.documentElement.appendChild(container);
        let stopFlag = 0;
        let num = 0;
        document.querySelector('#ay-crack-cancel').onclick = () => {
            container.remove();
            stopFlag = 1;
        }
        tncode.refresh();
        (function process(v, c) {
            if (stopFlag > 0)
                return;
            let r = new _ajax();
            let count = document.querySelector('#ay-crack-times');
            let info = document.querySelector('.ay-crack-container>h1');
            let handle = {
                success: function (t, x) {
                    if (!count) {
                        return false;
                    }
                    count.innerText = num + 1;
                    if (num >= 100) {
                        info.innerHTML = '尝试次数过多，请手动验证!';
                        info.style = 'color:rgb(255, 48, 48)';
                        info.className = '';
                        return false;
                    }
                    num += 1;
                    if (t.indexOf('success') > -1) {
                        info.className = '';
                        info.innerHTML = '验证码处理成功，即将跳转...';
                        info.style = 'color:rgb(82, 255, 117)';
                        setTimeout(function () { location.reload(true); }, 800);
                        return true;
                    }
                    tncode._send_result_success(t, x);
                    let i = (num - 1) % codes.length;
                    if (c == 2)
                        tncode._img_loaded ? process(codes[i], 2) : setTimeout(function () { process(codes[i], 2); }, 300);
                    else {
                        setTimeout(function () { process(codes[i], 1); }, 1200);
                    }
                },
                failure: function (x, s) {
                }
            };
            tncode._result = false;
            r.request('get', path + v, handle);
        })(codes[0], control);
    }
    //log
    function printLog() { document.querySelector(".ay-log-container") && document.querySelector(".ay-log-container").remove(); let n = document.createElement("div"), o = (n.className = "ay-log-container", n.innerHTML = '<div class="ay-log-container"><style>.ay-log-container,.ay-log-container *{margin:0;padding:0;box-sizing:border-box;font-family:Tahoma,Arial,"PingFang SC","Hiragino Sans GB","Microsoft YaHei",sans-serif ;}.ay-log-container{display:flex;align-items:center;justify-content:center;position:fixed;z-index:9999999999999;top:0;left:0;width:100vw;height:100vh;background-color:rgba(0,0,0,0.295)}.ay-log-content{box-shadow:1px 1px 10px rgba(0,0,0,.4);background-color:#282c35;border-radius:5px;color:#ffffff;padding:40px;padding-top:20px;padding-bottom:8px;max-width:90vw;font-size:18px;height:78vh;letter-spacing:1px}.ay-log-list{width:100%;height:55vh;overflow:auto}.ay-log-list div{padding-bottom:8px;border-bottom:2px solid rgb(30,245,101);margin-bottom:12px}.ay-log-list span{margin-right:8px}.ay-log-date{color:rgb(25,255,255)}.ay-log-success{color:rgb(40,255,40)}.ay-log-warning{color:rgb(255,115,21);font-weight:bold}.ay-log-error{color:rgb(255,36,36);font-weight:bold}.ay-log-text{color:rgb(241,208,163)}.ay-log-ref{color:cornflowerblue}.ay-log-title span{font-size:23px;margin-right:10px}.ay-log-title{font-size:22px;padding-bottom:10px;margin-bottom:12px;border-bottom:2px solid rgb(197,199,201)}.ay-log-list a{color:unset;text-decoration:underline;} .ay-log-control{display:flex;justify-content:space-evenly;align-items:center;min-height:9vh}.ay-log-control button{background-image: unset;border:none;border-radius:3px;cursor:pointer;font-size:18px;min-height:36px;min-width:62px;color:#f3f3f3;background-color:rgb(111,111,255);box-shadow:0 0 4px 1px rgba(105,105,235,0.603)}.ay-log-control button:hover{transition:0.2s;background-color:rgb(92,92,197);box-shadow:0 0 4px 1px rgba(83,83,192,0.699)}.ay-log-control button:active{transition:0.1s;box-shadow:0 0 0px 4px rgb(67,67,148)}</style><div class="ay-log-content"><div class="ay-log-title"><span class="">当前：<b class="ay-log-num">0</b> 条日志</span><span>日志格式：</span><span class="ay-log-date">日期</span><span class="ay-log-success">状态</span><span class="ay-log-text">内容</span><span class="ay-log-ref">所在网页</span></div><div class="ay-log-list"></div><div class="ay-log-control"><button class="ay-btn-order">逆序</button><button class="ay-btn-refresh">刷新</button><button class="ay-btn-delete">删除</button><button class="ay-btn-exit">退出</button></div></div></div>', document.documentElement.appendChild(n), e => { n.querySelector(".ay-log-list").innerHTML = `<div><span class='ay-log-error'>${e}</span></div>` }), e = () => { try { var e = JSON.parse(localStorage.getItem("AYOUTH-JS")).id, a = JSON.parse(localStorage.getItem("AYOUTH-JS-" + e + "-LOG")); let t = document.createDocumentFragment(); n.querySelector(".ay-log-num").innerText = a.length; for (let o = a.length - 1; 0 <= o; o--) { let e = document.createElement("div"); e.innerHTML = `<span class='ay-log-date'>${a[o][0]}</span><span class='ay-log-${a[o][1]}'>${a[o][1]}</span><span class='ay-log-text'>${a[o][2]}</span><span class='ay-log-ref'><a href="${a[o][3]}">${a[o][3]}</a></span>`, t.appendChild(e) } n.querySelector(".ay-log-list").appendChild(t) } catch (e) { o("出错了！" + e) } }; e(), n.querySelector(".ay-btn-order").addEventListener("click", () => { try { { var t, a; let e = []; for (t of n.querySelectorAll(".ay-log-list div")) e.push(t); e.reverse(); let o = document.createDocumentFragment(); for (a of e) o.appendChild(a); n.querySelector(".ay-log-list").appendChild(o) } } catch (e) { o("出错了！" + e) } }), n.querySelector(".ay-btn-refresh").addEventListener("click", () => { try { n.querySelector(".ay-log-list").innerHTML = "", e() } catch (e) { o("出错了！" + e) } }), n.querySelector(".ay-btn-delete").addEventListener("click", () => { if (confirm("日志每逾3000，约三五百KB，会自动删除重置，您还要删除吗？")) try { n.querySelector(".ay-log-num").innerText = 0; var e = JSON.parse(localStorage.getItem("AYOUTH-JS")).id; localStorage.setItem("AYOUTH-JS-" + e + "-LOG", "[]"), n.querySelector(".ay-log-list").innerHTML = "" } catch (e) { o("出错了！" + e) } }), n.querySelector(".ay-btn-exit").addEventListener("click", () => { n.remove() }) }
    //注册菜单函数
    function register() {
        if ("undefined" == typeof GM_registerMenuCommand || "undefined" == typeof GM_getValue || "undefined" == typeof GM_setValue) {
            log.err("GM函数不存在，无法注册菜单");
            return;
        }
        if (!GM_getValue('config')) {
            GM_setValue("config", JSON.stringify(config))
        } else {
            let savedConfig = JSON.parse(GM_getValue("config"));
            //维护和更新已保存的config
            for (let key in config) {
                if ('undefined' == typeof savedConfig[key]) {
                    savedConfig[key] = config[key];
                }
                else {
                    config[key] = savedConfig[key];
                }
            }
            GM_setValue("config", JSON.stringify(config));
        }
        let w = config['bukaivipCrack'] == true ? "✅ 不开VIP验证码处理" : "❌ 不开VIP验证码处理";
        GM_registerMenuCommand(w, function () {
            config['bukaivipCrack'] = !config['bukaivipCrack'];
            GM_setValue("config", JSON.stringify(config));
            window.location.reload();
        });
        w = config['zhenbukaCrack'] == true ? "✅ 真不卡验证码处理" : "❌ 真不卡验证码处理";
        GM_registerMenuCommand(w, function () {
            config['zhenbukaCrack'] = !config['zhenbukaCrack'];
            GM_setValue("config", JSON.stringify(config));
            window.location.reload();
        });
        w = config['blockNotification'] == true ? "✅ 屏蔽通知公告" : "❌ 屏蔽通知公告";
        GM_registerMenuCommand(w, function () {
            config['blockNotification'] = !config['blockNotification'];
            GM_setValue("config", JSON.stringify(config));
            window.location.reload();
        });
        GM_registerMenuCommand("📝 日志管理", function () {
            printLog();
        });
        GM_registerMenuCommand("💬 给作者留言", function () {
            window.open("https://dev.ayouth.xyz/ayouth/msgboard/?from=click-js-menu&id=" + config['id']);
        });
    }
    var websites = {
        zhenbuka: {
            domain: 'zhenbuka',
            strict: false,
            name: '真不卡影视站点脚本',
            mobile: () => {
                rmNode('#ad1');
                rmNode('#ad_img');
                //去除底部广告
                rmNodes(':not([id]):not([class])[style*="fixed"][style*="z-index"]');
            },
            common: () => {
                //广告
                //主页广告
                rmNode("#hbidbox");
                rmNode("#HMRichBox");
                //永久清除通知弹窗
                document.cookie = "1every_24h_tips=true;path=/;expires=Fri, 31 Dec 2222 23:59:59 GMT";
                //去除详情页顶部广告
                rmNode('img#hth');
                addCSS('div.v_path.clearfix', 'margin-top:15px !important');
                //去除播放页顶部广告
                rmNode('#hth616');
                rmNode('div.marquee_outer');
                addCSS('div.col-lg-wide-75.col-xs-1', 'margin-top:20px !important');
                //去除播放广告
                rmNode('#player_pause');
                rmNode('#hth');
                let isCracking = false;
                let crack = () => {
                    if (isCracking)
                        return;
                    isCracking = true;
                    //验证破解
                    if (queryNode('form#search')) {
                        queryNode('form#search').onsubmit = () => {
                            location.href = "/vodsearch/-------------/?wd=" + document.querySelector("#wd").value;
                            return false;
                        }
                    }
                    if (config['zhenbukaCrack'] && "undefined" != typeof tncode && document.cookie.indexOf('vodSearchNeedVerify') > -1) {
                        urlTest({
                            hostname: 'zhenbuka', path: '/vodsearch/-------------/', callback: () => {
                                log.suc('开始执行验证码破解脚本...');
                                captchaHandle('/index.php/vodsearch/-------------/?tn_r=', 1);
                            }
                        })
                    }
                }
                document.addEventListener('load', crack);
                //兼容
                setTimeout(crack, 200);
                //公告
                if (config['blockNotification']) {
                    //公告
                    document.cookie = "1every_24h_tips=true;path=/;expires=Fri, 31 Dec 2222 23:59:59 GMT";
                    //主页公告
                    urlTest({
                        hostname: location.hostname, path: '/', strict: true, callback: () => {
                            rmNode("div.stui-pannel_hd[style*='border']");
                        }
                    })
                    //app下载
                    rmNode('#ad1');
                    rmNode('#ad_img');
                    //移动端app
                    rmNode('img#buka888');
                }
            }
        },
        bukaivip: {
            domain: 'bukaivip',
            strict: false,
            name: '不开VIP影视站点脚本',
            mobile: () => {
                //去除底部广告
                rmNode('ins');
                rmNodes(':not([id]):not([class])[style*="fixed"][style*="z-index"]');
            },
            common: () => {
                let easyBlock = () => {
                    //不开vip的快速完美解决方案，需要提前插入脚本，否则无效
                    document.cloneWrite = document.write;
                    document.write = function (e) {
                        let reject = [
                            'oop.lm685.com',
                            '!function(){',
                            'pc.stgowan.com/pc/beitou-tf.js'
                        ];
                        let allow = [
                            'bukaivip@gmail.com',
                            '</iframe>'
                        ];
                        let check = (s, arr) => {
                            for (let item of arr) {
                                if (s.indexOf(item) > -1)
                                    return true;
                            }
                            return false;
                        };
                        if (check(e, reject)) {
                            log.suc("easyBlock拦截广告成功");
                        }
                        else {
                            document.cloneWrite(e);
                        }
                    };
                }
                easyBlock();
                //广告
                rmNode('.stui-pannel_bd > img[onclick*="window.open"]');
                rmNode('#HMRichBox');
                rmNode('#hbidbox')
                //永久清除通知弹窗
                document.cookie = "every_24h_tip=true;path=/;expires=Fri, 31 Dec 2222 23:59:59 GMT";
                //去除第一次跳转,不一定成功
                document.cookie = "ad_show_xiaomage=true;path=/;expires=Fri, 31 Dec 2222 23:59:59 GMT";
                document.cookie = "ad_show_shenzhou=true;path=/;expires=Fri, 31 Dec 2000 23:59:59 GMT";
                //验证码
                let isCracking = false;
                let crack = () => {
                    if (isCracking)
                        return;
                    isCracking = true;
                    if (config['bukaivipCrack'] && "undefined" != typeof tncode && document.cookie.indexOf('vodSearchNeedVerify') > -1) {
                        urlTest({
                            hostname: 'bukaivip', path: '/index.php/vod/search.html', callback: () => {
                                log.suc('开始执行验证码破解脚本...');
                                captchaHandle('/index.php/vod/search.html?tn_r=', 2);
                            }
                        })
                    }
                };
                document.addEventListener('load', crack);
                //兼容
                setTimeout(crack, 200);
                //公告
                if (config['blockNotification']) {
                    //公告
                    rmNode("div.stui-pannel_bd[style*='border']");
                    //报错提示
                    rmNode('.col-pd.clearfix + .col-pd.clearfix > marquee');
                    //屏蔽layer弹窗
                    rmNode('.layui-layer-shade');
                    rmNode('.layui-layer.layui-layer-dialog');

                }
            }
        }
    }
    // 注册
    register();
    //执行
    let flag = 0;
    for (let key in websites) {
        let site = websites[key];
        flag += urlTest({
            hostname: site.domain, strict: site.strict, callback: () => {
                log.suc('已选中 ' + site.name + ' ，正在运行...');
                site.common ? site.common() : false;
                if (browser.env.mobile) {
                    site.mobile ? site.mobile() : false;
                    log.suc("移动端已执行");
                }
                else if (browser.env.pc) {
                    site.pc ? site.pc() : false;
                    log.suc("PC端已执行");
                }
            }
        })
    }
    if (flag == 0) {
        log.err("当前站点不在该脚本有效运行范围内！");
    }
})();
