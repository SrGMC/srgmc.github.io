// Language
var currentLanguage = localStorage.getItem("language");
currentLanguage = currentLanguage == null ? (navigator.language.toLowerCase().includes("es") ? "es" : "en") : currentLanguage;
function toggleLanguage(lang) {
    document.querySelector("html").classList.remove("en");
    document.querySelector("html").classList.remove(currentLanguage);
    document.querySelector("html").classList.add(lang);
    currentLanguage = lang;
    localStorage.setItem("language", lang);
}

toggleLanguage(currentLanguage);

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
