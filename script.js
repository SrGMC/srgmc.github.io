// Hide header
if (window.innerWidth < 600) {
    window.onscroll = function () {
        var header = document.querySelector("header");
        if (window.pageYOffset > 80) {
            header.classList.remove("fadeInDown");
            header.classList.add("fadeOutUp");
        }
        if (window.pageYOffset < 80 && header.classList.contains('fadeOutUp')) {
            header.classList.remove("fadeOutUp");
            header.classList.add("fadeInDown");
        }
    };
}

// Show analytics banner
// if (localStorage.getItem("hideAnalytics") != "true") {
//     if (window.location.href.includes("/es")) {
//         console.log("es");
//         document.querySelector("body").innerHTML +=
//             '<div class="analytics">¡Hola! Estoy recogiendo datos anónimos para mejorar este sitio web. Puedes revisar en cualquier momento lo que la web recoge en el <a href="/es/transparency">siguiente enlace</a>. <a href="javascript:void" onclick="closeBanner(this);">Cerrar</a>.</div>';
//     } else {
//         console.log("en");
//         document.querySelector("body").innerHTML +=
//             '<div class="analytics">Hey! I\'m collecting anonymous data to improve this website. You can review at any time what the web collects in <a href="/en/transparency">this link</a>. <a href="javascript:void" onclick="closeBanner(this);">Close</a>.</div>';
//     }
// }

// Projects functions
function fadeBackground() {
    document.getElementById("fade").style["opacity"] = "1";
}

function unfadeBackground() {
    document.getElementById("fade").style["opacity"] = "0";
}

function showIcon(name) {
    document.getElementById("header-icon").src = "/assets/images/" + name + ".png";
}

function hideIcon(name) {
    document.getElementById("header-icon").src = "";
}

function closeBanner(e) {
    e.parentElement.style.display = "none";
    localStorage.setItem("hideAnalytics", "true");
}
