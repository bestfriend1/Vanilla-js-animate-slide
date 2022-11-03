"use strict";
const slide = document.querySelectorAll('.slide');
let slideIndex = 0;
const leftBtn = document.getElementById('left');
const rightBtn = document.getElementById('right');
let lastSlideIndex = 0;
/***
 * Slide Indicator
 * nextSlide()
 * prevSlide()
 * slideShow()
 */
function slideShow(s){
    // condition slide controll with indicator
    if(s > slide.length-1){
        slideIndex = 0;
    }
    if(s < 0){
        slideIndex = slide.length-1;
    }
    //initial all slide-text and img inactive class add
    for(let i = 0; i < slide.length; i++){
        
        slide[i].querySelector('.banner-img').classList.add('inactive-slide');
        slide[i].querySelector('.banner-img').classList.remove('active-banner');
        slide[i].querySelector('.slide-text').classList.add('slide-text-inactive');
        slide[i].querySelector('.slide-text').classList.remove('slide-text-active');

    }
    // //slide img
    slide[slideIndex].querySelector('.banner-img').classList.remove('inactive-slide');
    slide[slideIndex].querySelector('.banner-img').classList.add('active-banner');
    slide[slideIndex].querySelector('.slide-text').classList.remove('slide-text-inactive');
    slide[slideIndex].querySelector('.slide-text').classList.add('slide-text-active');
}
slideShow();

function nextSlide(){
    slideShow(slideIndex = slideIndex + 1);
}

function prevSlide(){
    slideShow(slideIndex = slideIndex - 1);
}

if(false){
    setInterval(() =>{
        nextSlide();
    },4000);
}else{
    leftBtn.onclick = function(){
        prevSlide();
    }
    
    rightBtn.onclick = function(){
        nextSlide();
    }
}
