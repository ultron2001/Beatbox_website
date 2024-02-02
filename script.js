function adjustFontSize() {
    var screenWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

    if (screenWidth <= 600) {
        document.body.style.fontSize = '6px';
    } else if (screenWidth <= 700) {
        document.body.style.fontSize = '18px';
    } else if (screenWidth <= 800) {
        document.body.style.fontSize = '20px';
    } else {
        document.body.style.fontSize = '40px';
    }
}

// Call the function on page load and window resize
window.addEventListener('load', adjustFontSize);
window.addEventListener('resize', adjustFontSize);