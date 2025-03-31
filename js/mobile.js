window.onload = function(){
	let getNavi = document.getElementById('navigation');

	let mobile = document.createElement("span");
	mobile.setAttribute("id","mobile-navigation");
	getNavi.parentNode.insertBefore(mobile,getNavi);

	// 設置第三方 Cookie (這是範例，會設置一個叫做 "user-preference" 的 cookie)
	function setThirdPartyCookie(name, value, days) {
		let expires = "";
		if (days) {
			let date = new Date();
			date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
			expires = "; expires=" + date.toUTCString();
		}
		document.cookie = name + "=" + (value || "") + expires + "; path=/; Secure; SameSite=None; domain=your-third-party-domain.com"; // 修改為你的第三方域名
	}

	// 當點擊菜單時設置第三方 cookies

	document.getElementById('mobile-navigation').onclick = function(){
		let a = getNavi.getAttribute('style');
		if(a){
			getNavi.removeAttribute('style');
			document.getElementById('mobile-navigation').style.backgroundImage='url(/images/mobile/mobile-menu.png)';
			// 在這裡設置第三方 Cookie
			setThirdPartyCookie('mobile-menu-state', 'closed', 7); // 記錄菜單狀態為關閉
		} else {
			getNavi.style.display='block';
			document.getElementById('mobile-navigation').style.backgroundImage='url(/images/mobile/mobile-close.png)';
			// 設置第三方 Cookie，記錄菜單狀態為開啟
			setThirdPartyCookie('mobile-menu-state', 'open', 7);
		}
	};
	let getElm = getNavi.getElementsByTagName("LI");
	for(let i=0;i<getElm.length;i++){
		if(getElm[i].children.length>1){
			var smenu = document.createElement("span");
			smenu.setAttribute("class","mobile-submenu");
			smenu.setAttribute("OnClick","submenu("+i+")");
			getElm[i].appendChild(smenu);
		};
	};
	submenu = function (i){
		let sub = getElm[i].children[1];
		let b = sub.getAttribute('style');
		if(b){
			sub.removeAttribute('style');
			getElm[i].lastChild.style.backgroundImage='url(/images/mobile/mobile-expand.png)';
			getElm[i].lastChild.style.backgroundColor='rgba(98, 0, 49, 0.91)';
		} else {
			sub.style.display='block';
			getElm[i].lastChild.style.backgroundImage='url(/images/mobile/mobile-collapse.png)';
			getElm[i].lastChild.style.backgroundColor='rgba(0, 0, 0, 0.91)';
		}
	};
};
