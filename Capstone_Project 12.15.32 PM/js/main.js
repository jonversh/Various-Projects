$(document).ready(function(){
  $('.button').toggleClass('liked');
  $('.button2').toggleClass('liked');
  $('.button3').toggleClass('liked');
  $('.button4').toggleClass('liked');
  $('.button5').toggleClass('liked');
  $('.button6').toggleClass('liked');
  $('body').animate({opacity:1},300);
  var card = $('#card-group');
  $(".custom-file-input").on("change", function() {
  var fileName = $(this).val().split("\\").pop();
  $(this).siblings(".custom-file-label").addClass("selected").html(fileName);
  });

  $('.to-top').on('click', function(){
      window.scroll({
        top: 10,
        behavior: 'smooth'
      });
  });
  
  var USERDATABASE = [];
  
  function getDatabase(){
    USERDATABASE = localStorage.getItem('DataBase');
    USERDATABASE = JSON.parse(USERDATABASE);
    return USERDATABASE;
  }
  
  function loggedin(){
    getDatabase();
    var name = USERDATABASE[1].name;
  $('#topnavbar').before('<div class="alert alert-secondary m-0 "><strong>'+name+'</strong> is currently logged in.</div>');
  $('#everything').before('<div class="mt-5 mr-3 ml-3 alert alert-success alert-dismissible fade show" id="alert"><button type="button" class="close" data-dismiss="alert">&times;</button><strong>'+name+', </strong> Welcome to Spark!</div>');
  
  setTimeout(function (){
    $('#alert').alert('close');
  },1500);
}
  
  loggedin();
  
  function getImage(){
      
    window.scroll({
      top: 10,
      behavior: 'smooth'
    });
    
    getDatabase();
      var name = USERDATABASE[1].name;
      
      var card = $('#card-group');
      
      let file = document.querySelector('input[type=file]').files[0];
      var reader = new FileReader();
      reader.addEventListener('load',function(){
        
      file = reader.result;
      
      var comment = $('#comment').val();
      
      var add = ('<div class="card m-4"> <div class="card-header"> <img class="profile-img rounded-circle" src="images/avatar-50.png"><span class="ml-2 text-left">'+name+'</span> <span class="float-right text-secondary small"> A few Mins Ago... </span> <div class="card-body"> <img class="card-img" src="'+file+'"></div> <div class="card-footer"> <p>'+comment+'</p> </div></div> </div> </div>');
      
      
      var addSpinner = ('<div class="text-center mt-5 mb-5 text-white h1" id="spinner"><i class="mr-2 fa fa-circle-o-notch fa-spin" id="spinner"></i></div>');
      card.prepend(addSpinner);
      setTimeout(function(){
        $('#spinner').remove();
        card.prepend(add);
        card.hide();
        card.fadeIn(800);
      },2000);
        },false);
    reader.readAsDataURL(file);
  }
  
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
  
  $('#post-link').on('click', function(){
    $('#bottom-nav').hide(200);
  });
  
  $('#close').on('click', function(){
    $('#bottom-nav').show(300);
  });
  
  $('#post').on('click', function(){
    event.preventDefault();
    getImage();
    $('#bottom-nav').show(450);
    
    
  });
  
  $('#postModal').on('click',function(){
    $('#bottom-nav').show(450);
  });

  
  $('#logout').on('click',function(){
    $('body').animate({opacity:0},300);
    setTimeout(function(){
      location.href = 'index.html';
    },300);
  });
  
  $('#profile').on('click',function(){
    $('body').animate({opacity:0},300);
    setTimeout(function(){
      location.href = 'profile.html';
    },300);
  });
  
  $('#trending').on('click',function(){
    $('body').animate({opacity:0},300);
    setTimeout(function(){
      location.href = 'trending.html';
    },300);
  });
  
  $('#message').on('click', function(){
    $('body').animate({opacity:0},300);
    setTimeout(function(){
      location.href='dm.html';
    },300);
  });
});