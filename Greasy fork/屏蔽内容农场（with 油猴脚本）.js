// ==UserScript==
// @name         屏蔽内容农场（with 油猴脚本）
// @namespace    http://tampermonkey.net/
// @version      0.3.3
// @description  利用 JavaScript/CSS 屏蔽「内容农场」在谷歌搜索结果中的呈现，顺便在清除谷歌搜索结果中的Adsense广告，还你清爽的 Google 中文搜索体验！
// @author       limbopro
// @license MIT
// @match        https://www.google.com/search*
// @match        https://www.google.com.hk/search*
// @match        https://www.bing.com/search*
// @match        https://www.bing.com/?FORM*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=google.com.hk
// @run-at document-end
// @grant        none
// ==/UserScript==

// 仅限于屏蔽内容农场在谷歌搜索中出现
// https://limbopro.com/Adguard/contentFarm/contentFarm.js 实时更新
// https://raw.githubusercontent.com/limbopro/Adblock4limbo/main/Adguard/contentFarm/contentFarm.js push 后更新
// 脚本安装后可自行更改脚本URL路径

var javaScript = document.createElement("script");
javaScript.src = 'https://limbopro.com/Adguard/contentFarm/contentFarm.js';
document.body.appendChild(javaScript);

var ads_host_custom = [
"csdn"
];

var search_results_css_custom = [
"div[data-sokoban-grid]", // 通用
"div[class='g'][data-hveid]", // 这是谷歌PC端搜索结果页的 style
"div[class='mnr-c g'][data-hveid]", // 这是谷歌手机端搜索结果页的 style
"div[class][data-sokoban-container]"// 最后一个选择器也不需要逗号结尾
]

var i,x;
for (i = 0; i < ads_host_custom.length; i++){
var ads_host_custom_css = "[href*='" + ads_host_custom[i] + "']";
var huge_custom = document.querySelectorAll( search_results_css_custom );
for (x = 0; x < huge_custom.length; x++){
if (huge_custom[x].querySelectorAll( ads_host_custom_css ).length > 0){
huge_custom[x].style.display = "none";
}
}
}
打开调试