// this method takes effective
window.onload = function(){

	
		let arr = location.href.split('/');
		let fileName = arr[arr.length - 1];

		let path = "";

		switch (fileName) {
			case "contact.html":
				path = "../../../contact.html"; // correct path
				break;
		
			default:
				path = `../../../pianos/${fileName}`;
				break;
		}

		let insertDiv = document.getElementById("translate");
		insertDiv.innerHTML = `<a href="${path}">Switch to: English</a>`;
		let insertDivMobile = document.getElementById("translateMobile");
		insertDivMobile.innerHTML = `<a href="${path}" >Switch to: English</a>`;
		}