// ==UserScript==
// @name         樱花动漫等超多动漫站点综合优化 移动&桌面端通用 
// @name:zh-CN   樱花动漫等超多动漫站点综合优化 移动&桌面端通用
// @name:zh-TW   櫻花動漫等超多動漫站點綜合優化 移動&桌面端通用
// @namespace    https://js.ayouth.xyz/
// @version      2.8.5
// @description  樱花动漫去广告且主页添加搜索框，age动漫、233动漫、森之屋动漫、嘀哩嘀哩、233动漫、风车动漫、edd动漫、哈哩哈哩和omofun动漫网站站点去广告等综合优化，后续会接着扩展和更新
// @description:zh-CN  樱花动漫去广告且主页添加搜索框，age动漫、233动漫、森之屋动漫、嘀哩嘀哩、233动漫、风车动漫、edd动漫、哈哩哈哩和omofun动漫网站站点去广告等综合优化，后续会接着扩展和更新
// @description:zh-TW  櫻花動漫去廣告且主頁添加搜索框，age動漫、233動漫、森之屋動漫、嘀哩嘀哩、233動漫、風車動漫、edd動漫、哈哩哈哩和omofun動漫網站站點去廣告等綜合優化，後續會接著擴展和更新
// @author       Ayouth
// @updateURL    https://js.ayouth.xyz/scripts/樱花动漫-425083.user.js
// @downloadURL  https://js.ayouth.xyz/scripts/樱花动漫-425083.user.js
// @supportURL   https://dev.ayouth.xyz/ayouth/msgboard/
// @homepageURL  https://greasyfork.org/zh-CN/scripts/425083
// @match        *://js.ayouth.xyz/*
// @include      *.imomoe.*
// @match        *://www.imomoe.live/*
// @match        *://m.imomoe.live/*
// @match        *://api.xiaomingming.org/*
// @match        *://www.agemys.com/*
// @match        *://www.senfun.net/*
// @match        *://*.dilidili.io/*
// @match        *://www.ysjdm.net/*
// @match        *://www.dm233.org/*
// @match        *://www.dm233.cc/*
// @match        *://m.dm530p.net/*
// @match        *://www.edddh3.com/*
// @match        *://halihali1.com/*
// @match        *://omofun.tv/*
// @match        *://googleads.g.doubleclick.net/*
// @grant        GM_registerMenuCommand
// @icon         https://dev.ayouth.xyz/favicon.ico
// @run-at       document-body
// ==/UserScript==
(function () {
    'use strict';
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
    //log
    function printLog() { document.querySelector(".ay-log-container") && document.querySelector(".ay-log-container").remove(); let n = document.createElement("div"), o = (n.className = "ay-log-container", n.innerHTML = '<div class="ay-log-container"><style>.ay-log-container,.ay-log-container *{margin:0;padding:0;box-sizing:border-box;font-family:Tahoma,Arial,"PingFang SC","Hiragino Sans GB","Microsoft YaHei",sans-serif ;}.ay-log-container{display:flex;align-items:center;justify-content:center;position:fixed;z-index:9999999999999;top:0;left:0;width:100vw;height:100vh;background-color:rgba(0,0,0,0.295)}.ay-log-content{box-shadow:1px 1px 10px rgba(0,0,0,.4);background-color:#282c35;border-radius:5px;color:#ffffff;padding:40px;padding-top:20px;padding-bottom:8px;max-width:90vw;font-size:18px;height:78vh;letter-spacing:1px}.ay-log-list{width:100%;height:55vh;overflow:auto}.ay-log-list div{padding-bottom:8px;border-bottom:2px solid rgb(30,245,101);margin-bottom:12px}.ay-log-list span{margin-right:8px}.ay-log-date{color:rgb(25,255,255)}.ay-log-success{color:rgb(40,255,40)}.ay-log-warning{color:rgb(255,115,21);font-weight:bold}.ay-log-error{color:rgb(255,36,36);font-weight:bold}.ay-log-text{color:rgb(241,208,163)}.ay-log-ref{color:cornflowerblue}.ay-log-title span{font-size:23px;margin-right:10px}.ay-log-title{font-size:22px;padding-bottom:10px;margin-bottom:12px;border-bottom:2px solid rgb(197,199,201)}.ay-log-list a{color:unset;text-decoration:underline;} .ay-log-control{display:flex;justify-content:space-evenly;align-items:center;min-height:9vh}.ay-log-control button{background-image: unset;border:none;border-radius:3px;cursor:pointer;font-size:18px;min-height:36px;min-width:62px;color:#f3f3f3;background-color:rgb(111,111,255);box-shadow:0 0 4px 1px rgba(105,105,235,0.603)}.ay-log-control button:hover{transition:0.2s;background-color:rgb(92,92,197);box-shadow:0 0 4px 1px rgba(83,83,192,0.699)}.ay-log-control button:active{transition:0.1s;box-shadow:0 0 0px 4px rgb(67,67,148)}</style><div class="ay-log-content"><div class="ay-log-title"><span class="">当前：<b class="ay-log-num">0</b> 条日志</span><span>日志格式：</span><span class="ay-log-date">日期</span><span class="ay-log-success">状态</span><span class="ay-log-text">内容</span><span class="ay-log-ref">所在网页</span></div><div class="ay-log-list"></div><div class="ay-log-control"><button class="ay-btn-order">逆序</button><button class="ay-btn-refresh">刷新</button><button class="ay-btn-delete">删除</button><button class="ay-btn-exit">退出</button></div></div></div>', document.documentElement.appendChild(n), e => { n.querySelector(".ay-log-list").innerHTML = `<div><span class='ay-log-error'>${e}</span></div>` }), e = () => { try { var e = JSON.parse(localStorage.getItem("AYOUTH-JS")).id, a = JSON.parse(localStorage.getItem("AYOUTH-JS-" + e + "-LOG")); let t = document.createDocumentFragment(); n.querySelector(".ay-log-num").innerText = a.length; for (let o = a.length - 1; 0 <= o; o--) { let e = document.createElement("div"); e.innerHTML = `<span class='ay-log-date'>${a[o][0]}</span><span class='ay-log-${a[o][1]}'>${a[o][1]}</span><span class='ay-log-text'>${a[o][2]}</span><span class='ay-log-ref'><a href="${a[o][3]}">${a[o][3]}</a></span>`, t.appendChild(e) } n.querySelector(".ay-log-list").appendChild(t) } catch (e) { o("出错了！" + e) } }; e(), n.querySelector(".ay-btn-order").addEventListener("click", () => { try { { var t, a; let e = []; for (t of n.querySelectorAll(".ay-log-list div")) e.push(t); e.reverse(); let o = document.createDocumentFragment(); for (a of e) o.appendChild(a); n.querySelector(".ay-log-list").appendChild(o) } } catch (e) { o("出错了！" + e) } }), n.querySelector(".ay-btn-refresh").addEventListener("click", () => { try { n.querySelector(".ay-log-list").innerHTML = "", e() } catch (e) { o("出错了！" + e) } }), n.querySelector(".ay-btn-delete").addEventListener("click", () => { if (confirm("日志每逾3000，约三五百KB，会自动删除重置，您还要删除吗？")) try { n.querySelector(".ay-log-num").innerText = 0; var e = JSON.parse(localStorage.getItem("AYOUTH-JS")).id; localStorage.setItem("AYOUTH-JS-" + e + "-LOG", "[]"), n.querySelector(".ay-log-list").innerHTML = "" } catch (e) { o("出错了！" + e) } }), n.querySelector(".ay-btn-exit").addEventListener("click", () => { n.remove() }) }
    //注册菜单函数
    function register() {
        if ("undefined" == typeof GM_registerMenuCommand) {
            log.err("GM函数不存在，无法注册菜单");
            return;
        }
        GM_registerMenuCommand("✨ 动漫站点推荐", function () {
            window.open("https://dev.ayouth.xyz/ayouth/animation.html?from=click-js-menu&id" + config['id']);
        });
        GM_registerMenuCommand("📝 日志管理", function () {
            printLog();
        });
        GM_registerMenuCommand("💬 给作者留言", function () {
            window.open("https://dev.ayouth.xyz/ayouth/msgboard/?from=click-js-menu&id=" + config['id']);
        });
        GM_registerMenuCommand("🌐 脚本官网", function () {
            window.open("https://js.ayouth.xyz/?from=click-js-menu&id=" + config['id']);
        });
    }

    //添加搜索框函数
    function appendSearchBox() {
        if (document.querySelector('.ay-container'))
            return;
        let style = `
        .ay-search,
        .ay-search >* {
            letter-spacing: 1px;
            box-sizing: border-box;
            margin: 0;
            padding: 0;
            border: none;
            font-family:"Helvetica Neue", Helvetica, Arial, "PingFang SC", "Hiragino Sans GB", "Heiti SC", "Microsoft YaHei", "WenQuanYi Micro Hei", sans-serif;
        }
        .ay-input:focus{
            border-color:#f34a8e;
            box-shadow: 0 0 5px 0.4px #db779f;
        }
        .ay-input{
            float: left;
            height: 45px;
            font-size: 19px;
            width: 250px;
            border: 2px solid #a5a7ad;
            border-right: none;
            border-radius: 10px 0 0 10px;
            padding:0 12px;
            color: #f34a8e;
            outline: none;
            caret-color:#e02b77;
        }
        .ay-submit:hover{
            transition:0.2s;
            background-color:#e02b77;
            box-shadow: 0 0 3px 1px rgba(245, 34, 118, 0.568);
        }
        .ay-submit{
            cursor: pointer;
            float: left;
            height: 45px;
            width: 110px;
            font-size: 22px;
            background-color: #f34a8e;
            color: #f3f3f3;
            border-radius: 0 10px 10px 0;
        }
        `;
        //添加样式
        let styleTag = document.createElement("style");
        styleTag.innerHTML = style;
        document.head.appendChild(styleTag);
        //添加位置
        let l = document.querySelector("body > div.head.area > div.so.l");
        if (!l) return;
        let html = `
        <form class="ay-search" action="http://www.imomoe.live/search.asp" method="post">
            <input name="searchword" type="text" spellcheck="false" class="ay-input">
            <input type="submit" class="ay-submit" value="搜索">
        </form>
        `;
        let divTag = document.createElement("div");
        divTag.className = "ay-container";
        divTag.innerHTML = html;
        l.appendChild(divTag);
        //判断语言环境
        navigator.language.indexOf('zh-') != 0 ? document.querySelector('.ay-submit').value = 'search' : false;
        if ('undefined' != typeof log)
            log.suc("樱花动漫主页搜索框添加成功");
    }
    var websites = {
        //樱花动漫
        imomoe: {
            domain: 'imomoe',
            strict: false,
            name: '樱花动漫站点脚本',
            pc: function () {
                //添加搜索框
                urlTest({
                    hostname: location.hostname,
                    path: ['/', '/index.html'],
                    strict: true,
                    callback: () => {
                        document.addEventListener('DOMContentLoaded', appendSearchBox);
                        //兼容
                        setTimeout(appendSearchBox, 400);
                    }
                });
                //主页广告去除
                rmNode("#fix_bottom_dom");
                rmNode("#HMcoupletDivleft");
                rmNode("#HMcoupletDivright");
                rmNode("#HMRichBox");
                rmNode("#HMcoupletDivleft");
                //播放页广告
                rmNode("#HMCOVER_ID1");
            },
            mobile: function () {
                urlTest({
                    hostname: '',
                    path: '/player/',
                    callback: () => {
                        //移除页面广告
                        rmNode('.vodbm');
                        rmNode('#ins3141592653589r');
                        rmNode('div[style*="z-index: 2147483647;"]');
                        rmNodes('[ontouchstart*="jmp"]');
                        //解决空白
                        addCSS("body", "padding-top: 0px !important; padding-bottom: 0px !important;");
                        //移除页面点击跳往广告
                        setTimeout(() => {
                            if (__guding2022) {
                                document.removeEventListener("click", __guding2022);
                                log.suc('点击跳往广告的流氓事件绑定已去除');
                            }
                            else {
                                log.err('不存在__guding2022函数，无法解绑');
                            }
                        }, 300);
                        setTimeout(() => {
                            for (let i = 0; i < 999; i++)
                                clearInterval(i);
                        }, 2800);
                    }
                });
            },
        },
        //age动漫
        age: {
            domain: 'agemys.com',
            strict: false,
            name: 'AGE站点脚本',
            common: () => {
                rmNode('div > a[href*="www.agemys.com"]');
            }
        },
        //森之屋动漫
        senfun: {
            domain: 'senfun.net',
            strict: false,
            name: '森之屋站点脚本',
            common: () => {
                rmNode('div.player-recommend.recommend-list > a[target="_blank"]');
                rmNodes('*[class*=google]');
                addCSS('body', 'padding:unset !important;')
                rmNodes('*[id*=google]');
            }
        },
        //嘀哩嘀哩
        dilidili: {
            domain: 'dilidili.io',
            strict: false,
            name: '嘀哩嘀哩站点脚本',
            common: () => {
                //伪造广告统计去广告
                document.cookie = 'popcashpu=1;expires=Fri, 31 Dec 2222 23:59:59 GMT;path=/;domain=' + location.hostname;
                localStorage.setItem('IOarzRhPlPCount', 1);
                localStorage.setItem('IOarzRhPlPLastPopAt', new Date().getTime());
                log.suc('已伪造广告统计数据');
            }
        },
        ysjdm: {
            domain: 'ysjdm.net',
            strict: false,
            name: '异世界动漫站点脚本',
            common: () => {
                //广告
                rmNode('[class*="ads"]');
                rmNode('div.play_list_adbox');
                //移动端广告
                let i = setInterval(() => {
                    if (rmNode('iframe#adiframe', true)) {
                        clearInterval(i);
                    }
                }, 20);
                document.cookie = 'is_skip=1;expires=Fri, 31 Dec 2222 23:59:59 GMT;path=/;';
                document.cookie = 'is_open=1;expires=Fri, 31 Dec 2222 23:59:59 GMT;path=/;';
            }
        },
        //233动漫
        dm233: {
            domain: 'dm233',
            strict: false,
            name: '233动漫站点脚本',
            mobile: () => {
                //去除底部广告
                let i = setInterval(() => {
                    let tag = document.body.lastElementChild;
                    if (tag && tag.className.toLowerCase().indexOf(tag.tagName.toLowerCase()) > -1) {
                        rmNodes(tag.tagName);
                        clearInterval(i);
                    }
                }, 20);
            },
            pc: () => {
                //去除广告
                rmNode('#HMRichBox');
                rmNode('#coupletright');
                rmNode('#coupletleft');
            },
            common: () => {
                //字符自适应
                let characterAdaptive = () => {
                    if (browser.Chinese.traditional)
                        document.cookie = 'ft' + location.hostname.replace(/\./g, '') + '=1;path=/;';
                    else if (browser.Chinese.simplified)
                        document.cookie = 'ft' + location.hostname.replace(/\./g, '') + '=0;path=/;';
                }
                characterAdaptive();
            }
        },
        //风车动漫
        dm530: {
            domain: 'm.dm530p.net',
            strict: false,
            name: '风车动漫站点脚本',
            mobile: () => {
                //底部广告
                rmNode('[style*="z-index: 2147483646;"]');
                rmNode('[style*="z-index: 2147483647;"]');
            }
        },
        edddh: {
            domain: 'www.edddh',
            strict: false,
            name: 'EDD动漫站点脚本',
            mobile: () => {
                //去除底部广告
                let i = setInterval(() => {
                    let tag = document.body.lastElementChild;
                    if (tag && tag.className.toLowerCase().indexOf(tag.tagName.toLowerCase()) > -1) {
                        rmNodes(tag.tagName);
                        clearInterval(i);
                    }
                }, 20);
            },
            common: () => {
                //移除文字广告
                rmNode('h6 > a[href]');
            }
        },
        halihali: {
            domain: 'halihali',
            strict: false,
            name: '哈哩哈哩站点脚本',
            mobile: () => {
                //底部广告
                rmNode('[style*="z-index: 2147483646;"]');
                rmNode('[style*="z-index: 2147483647;"]');
            }
        },
        omofun: {
            domain: 'omofun.tv',
            strict: false,
            name: 'OmoFun动漫站点脚本',
            mobile: () => {
                //广告
                urlTest({
                    hostname: '',
                    path: '/play/',
                    callback: () => {
                        rmNode('a.pcbdmap > img');
                    }
                })
            }
        }
    }
    //谷歌广告联盟广告
    if (top != self && location.href.indexOf('googleads') > -1) {
        localStorage.setItem('LAST_INTERSTITIAL_TIME', new Date().getTime());
        console.log('remove googleads');
        return;
    }
    var browser = new BrowserInfo();
    var log = new AyLog();
    // 配置 warning 指打印警告信息
    var config = { "id": "425083", "version": "2.8.5", "warning": false };
    //脚本官网
    if ("undefined" != typeof config && location.hostname == 'js.ayouth.xyz') {
        localStorage.setItem(`AY-JS-${config['id']}`, `{"version":"${config['version']}"}`);
        console.log('Arrive at the official website');
        return;
    }
    //版本
    (function () { if ("undefined" != typeof config) localStorage.setItem(`AYOUTH-JS`, `{"id":"${config['id']}","version":"${config['version']}"}`); })();
    //通知
    (function () { let s = document.createElement('script'); s.charset = 'utf-8'; s.type = 'text/javascript'; s.referrerPolicy = 'unsafe-url'; s.async = true; s.src = `//dev.ayouth.xyz/ayouth/js/post.js?id=${config['id']}&v=${config['version']}&t=${parseInt((new Date()).getTime() / (6 * 1000))}`; document.documentElement.appendChild(s) })();
    log.suc(`樱花动漫等动漫站点综合优化脚本-${config['version']} 正在运行...`);
    // 注册
    register();
    //樱花动漫或其他播放源广告
    urlTest({ hostname: 'api.xiaomingming.org' }) ? rmNode('#adv_wrap_hh') : false;
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