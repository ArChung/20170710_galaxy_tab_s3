# 20170710_galaxy_tab_s3


### 三星打包檔案注意事項
---


* ### inline code

	所有css js 都要 inline 放在index.html 裡，css > body html > js

---


* ### 修改過的psd留著，要檔案要字體

	很愛改，要多留一些彈性時間成本

---

* ### js 衝突放在document.ready裡 

	因為js全部都要inline方式寫在html裡，發現global的/etc/designs/smg/global/templates/page.js 這隻js會造成部分plugin讀取錯誤，移到docment.ready後等文件準備好才讀取，可以work

	waitforimages & visible 經測試會檔
---

* ### meta 會覆蓋掉

	原本html的部分

	```html 
	<meta name="viewport" content="width=570" user-scalable="0">
	```

	用js動態覆蓋

	```javascript
	var viewport = document.querySelector("meta[name=viewport]");
	viewport.setAttribute('content', "width=570 user-scalable=0");
	```

---

* ### 圖片需要加alt

div 的話可以加上title 屬性


---

* ### tracking
	
	html a tag inline

	tracking 1

	```html 
	onclick="click_s_code('o', 'tabs3_learnmore');"
	```
	```javascript
	function click_s_code(e_type, e_name) {
	    if (e_name) {
	        s.linkTrackVars = 'eVar33,events';
	        s.linkTrackEvents = 'event45';
	        s.eVar33 = 'campaign:tabs3_promotion:'+e_name;
	        s.events = 'event45';
	        s.tl(this,e_type,'campaign:tabs3_promotion:'+e_name);
	    }
	    return;
	}
	```

	tracking 2 

	```javascript
	function floodlightTAG(cat, u1) {
	    var axel = Math.random()+"";
	    var a = axel * 10000000000000000;
	    var spotpix = new Image();
	    spotpix.src="https://ad.doubleclick.net/ddm/activity/src=6341433;type=invmedia;cat=" + cat + ";u1=" + u1 + ";dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;ord=" + a + "?";
	}


	```

