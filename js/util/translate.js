// this method only takes effective
window.onload = function(){
		let arr = location.href.split('/');
		let fileName = arr[arr.length - 1];
		let path = "";

		switch (fileName) {
			case "contact.html":
				path = "../../cn/contact.html"; // correct path
				break;
			case "pianos.html":
				path = "../../cn/pianos.html"; 
				break;
			case "ahout.html":
				path = "../../cn/ahout.html"; 
				break;
		
			default:
				path = `../../cn/pianos/${fileName}`;
				break;
		}

		let insertDiv = document.getElementById("translate");
		insertDiv.innerHTML = `<a href="${path}" >切换：中文(简体)</a>`;
		let insertDivMobile = document.getElementById("translateMobile");
			insertDivMobile.innerHTML = `<a href="${path}" >切换：中文(简体)</a>`;
		}

/**
 * filename = ""
 * 
 * switch  case 
 * 	 contact -> path to contact.html
 *   index
 *   ..
 * 	 defatul -> ../../cn/pianos/${fileName}
 */