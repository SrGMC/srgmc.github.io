// Hide header
if(window.innerWidth < 600) {
    window.onscroll = function (){
        var header = document.querySelector('header');
	    if(window.pageYOffset > 80){
	        header.classList.remove('fadeInDown');
	        header.classList.add('fadeOutUp');
	    }
	    if(window.pageYOffset < 80){
		    header.classList.remove('fadeOutUp');
	        header.classList.add('fadeInDown');
	    }
    };
}

// Projects functions
function fadeBackground() {
    document.getElementById('fade').style["opacity"] = "1";
}

function unfadeBackground() {
    document.getElementById('fade').style["opacity"] = "0";
}

function showIcon(name) {
    document.getElementById('header-icon').src = "/assets/images/" + name + ".png";
}

function hideIcon(name) {
    document.getElementById('header-icon').src = "";
}
