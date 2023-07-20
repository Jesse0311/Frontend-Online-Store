var fullImgBox = document.getElementById("full-image-box");
var fullImg = document.getElementById("full-image-active");
var headerSection = document.getElementById("header-section")


function openFullImg(pic){
    fullImgBox.style.display = "flex";
    fullImg.src = pic;
}

function closeFullImg(){
    fullImgBox.style.display = "none"
}

function hideHeader(){
    headerSection.style.display = "none";
}

function showHeader(){
    headerSection.style.display = "contents"
}