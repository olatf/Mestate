

document.documentElement.style.setProperty('--animate-duration', '2s');

function  Openp() {

const x= document.getElementById("finger")
const y= document.getElementById("neck")
const z= document.getElementById("short")

if ( y.style.display=== "block"){
    y.style.display="none"
    x.style.display= "block"
} else{
    y.style.display="block"
    x.style.display= "none"
}

}

const reviews = document.querySelectorAll(".review");
let currentReview = 0;

reviews[currentReview].classList.add('show');

document.querySelector('.prev').addEventListener('click', () =>{
    reviews[currentReview].classList.remove('show');
    currentReview--;
    if(currentReview < 0 ) currentReview = reviews.length-1;
    reviews[currentReview].classList.add('show');
});

document.querySelector('.next').addEventListener('click', () =>{
    reviews[currentReview].classList.remove('show');
    currentReview++;
    if(currentReview >=  reviews.length ) currentReview = 0;
    reviews[currentReview].classList.add('show');
});