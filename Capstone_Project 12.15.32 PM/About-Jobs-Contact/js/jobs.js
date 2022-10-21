$(document).ready(function(){
  
    $('.jobs-title').animate({
      height: "35rem",
    },1000);
    
    $('.job-text-animation').animate({
      margin: "0rem",
    },1500);
    
    setTimeout(function(){
      $('.jobs-title').css({
        "z-index" : "-1"
      });
      
      
    },1501);
    
});

$('.send').on('click', function(){
  $('.jobs').append(`
  <div class="container-fluid text-center pt-5">
    <div class="alert alert-success alert-dismissible fade show">
    <button type="button" class="close" data-dismiss="alert">&times;</button>
    <strong>Sent!</strong> We will get back to you as soon as we can. Thanks!
    </div>
  </div>
  `);
});