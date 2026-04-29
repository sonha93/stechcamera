
// SLIDER
let i = 0;
const slides = document.getElementById("slides");

function show(){
if(!slides) return;
slides.style.transform = `translateX(-${i*100}%)`;
}

function next(){
i = (i+1)%3;
show();
}

function prev(){
i = (i-1+3)%3;
show();
}

setInterval(next,4000);
show();


// POPUP
function spec(t){
document.getElementById("popup").style.display="flex";
document.getElementById("text").innerText=t;
}

function closeSpec(){
document.getElementById("popup").style.display="none";
}


// ZOOM
function zoom(src){
document.getElementById("zoom").style.display="flex";
document.getElementById("img").src=src;
}

function closeZoom(){
document.getElementById("zoom").style.display="none";
}