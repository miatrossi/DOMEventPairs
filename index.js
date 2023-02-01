let cookieCounter = 0;
let cookieText = document.getElementById("cookietext")
let cookieImage = document.getElementById("cookie1")
cookieImage.addEventListener("click", function(){
    cookieCounter++
    cookieText.innerHTML = cookieCounter
})


