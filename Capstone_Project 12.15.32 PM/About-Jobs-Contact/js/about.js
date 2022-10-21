$(document).ready(function(){
  $('.jumbo').animate({
    height: "30rem"
  },1500);
  setTimeout(function(){
  $('.bomb').css({
    width: '9rem'
  });
  $('.title').css({
    fontSize : "3rem",
  });
  $('.title2').css({
    fontSize: "2rem"
  });
  },1500);
  $('.button').toggleClass('liked');
  $('.button2').toggleClass('liked');
  $('.button3').toggleClass('liked');
  $('.button4').toggleClass('liked');
  $('.button5').toggleClass('liked');
  $('.button6').toggleClass('liked');
  $('body').animate({opacity:1},300);
});

$('.button').on('click', function(){
    $('.button').toggleClass('liked');
  });
  
  $('.button2').on('click', function(){
    $('.button2').toggleClass('liked');
  });
  
  $('.button3').on('click', function(){
    $('.button3').toggleClass('liked');
  });
  
  $('.button4').on('click', function(){
    $('.button4').toggleClass('liked');
  });
  
  $('.button5').on('click', function(){
    $('.button5').toggleClass('liked');
  });
  
  $('.button6').on('click', function(){
    $('.button6').toggleClass('liked');
  });

let scroll = window.requestAnimationFrame || function(callback){
  window.setTimeout(callback,100/60);
};

let elementsToShow = document.querySelectorAll('.show-on-scroll');

function loop(){
  elementsToShow.forEach(function (element){
    if(isElementInViewport(element)){
      element.classList.add('is-visible');
    }else{
      element.classList.remove('is-visible');
    }
  });
  scroll(loop);
}

loop();

function isElementInViewport(el){
  if(typeof jquery === 'function' && el instanceof jQuery){
    el = el[0];
  }
  let rect = el.getBoundingClientRect();
  return(
    (rect.top <= 0
    && rect.bottom >= 0)
    ||
    (rect.bottom >= (window.innerHeight || document
    .documentElement.clientHeight) &&
    rect.top <= (window.innerHeight || document.documentElement
    .clientHeight))
    ||
    (rect.top >= 0 &&
    rect.bottom <= (window.innerHewight ||document
    .documentElement.clientHeight))
    );
}