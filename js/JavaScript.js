/* Read More/Less */
myBtn = document.getElementById(“moreBtn”);
myBtn.addEventListener(‘click’,readMore);

function readMore() {
    var dots = document.getElementById(“dots”);
    var moreText = document.getElementById(“more”);
    
    if (dots.style.display === “none”) {
        dots.style.display = “inline”;
        moreText.style.display = “none”
        myBtn.innerHTML = “Read more”;
    } else {
        dots.style.display = “none”;
        myBtn.innerHTML = “Read less”;
        moreText.style.display = “inline”;
    }
}