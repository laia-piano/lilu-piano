window.onload = function(){
		let arr = location.href.split('/');
		let fileName = arr[arr.length - 1];
		let insertDiv = document.getElementById("translate");
		  insertDiv.innerHTML = `<a href="../${fileName}">Switch to：English</a>`;
		}