window.onload = function(){
		let arr = location.href.split('/');
		let fileName = arr[arr.length - 1];
		let insertDiv = document.getElementById("translate");
		  insertDiv.innerHTML = `<a href="cn/${fileName}" >切换：中文(简体)</a>`;
		let insertDivMobile = document.getElementById("translateMobile");
		  insertDivMobile.innerHTML = `<a href="cn/${fileName}" >切换：中文(简体)</a>`;
		}