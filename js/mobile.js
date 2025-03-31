window.onload = function(){
	let getNavi = document.getElementById('navigation');

	let mobile = document.createElement("span");
	mobile.setAttribute("id","mobile-navigation");
	getNavi.parentNode.insertBefore(mobile,getNavi);

	document.getElementById('mobile-navigation').onclick = function(){
		let a = getNavi.getAttribute('style');
		if(a){
			getNavi.removeAttribute('style');
			document.getElementById('mobile-navigation').style.backgroundImage='url(/images/mobile/mobile-menu.png)';
		} else {
			getNavi.style.display='block';
			document.getElementById('mobile-navigation').style.backgroundImage='url(/images/mobile/mobile-close.png)';
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
	const sharp = require('sharp');

	function resizeImage(inputPath, outputPath, width, height) {
		sharp(inputPath)
			.resize(width, height)
			.toFile(outputPath, (err, info) => {
				if (err) {
					console.error('Error resizing image:', err);
				} else {
					console.log('Image resized successfully:', info);
				}
			});
	}

	window.onload = function(){
		// 调整图片大小
		resizeImage('path/to/input/image.jpg', 'path/to/output/image.jpg', 300, 200);

		let getNavi = document.getElementById('navigation');
		// 其余代码保持不变
		// ...
	};
};
