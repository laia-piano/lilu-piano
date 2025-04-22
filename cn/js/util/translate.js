// this method takes effective
window.onload = function(){
		let arr = location.href.split('/');
		let fileName = arr[arr.length - 1];
		let insertDiv = document.getElementById("translate");
		  insertDiv.innerHTML = `<a href="../../../pianos/${fileName}">Switch to: English</a>`;
		let insertDivMobile = document.getElementById("translateMobile");
		  insertDivMobile.innerHTML = `<a href="../../../pianos/${fileName}" >Switch to: English</a>`;
		}