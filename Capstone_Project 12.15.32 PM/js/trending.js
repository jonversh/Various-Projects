$(document).ready(function(){
  $('.button').toggleClass('liked');
  $('.button2').toggleClass('liked');
  $('.button3').toggleClass('liked');
  $('body').animate({opacity:1},300);
  $('body').scrollspy({target: ".navbar", offset: 50});
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

  function getDatabase(){
    USERDATABASE = localStorage.getItem('DataBase');
    USERDATABASE = JSON.parse(USERDATABASE);
    return USERDATABASE;
  }
  
  function loggedin(){
    getDatabase();
    var name = USERDATABASE[1].name;
  $('#topnavbar').before('<div class="alert alert-secondary m-0 "><strong>'+name+'</strong> is currently logged in.</div>');
  }
  
  loggedin();
  
  function getImage(){
      let file = document.querySelector('input[type=file]').files[0];
      var reader = new FileReader();
      reader.addEventListener('load',function(){
      file = reader.result;
      var comment = $('#comment').val();
      var add = ('<div class="card shadow m-4"> <div class="card-header"> <img class="profile-img border border-dark rounded-circle" src="images/avatar-50.png"><span class="ml-2 text-left">Name</span> <span class="float-right text-secondary small"> A few Mins Ago... </span> <div class="card-body"> <img class="card-img" src="'+file+'"></div> <div class="card-footer"> <p>'+comment+'</p> </div> </div> </div> </div> ');
      var addSpinner = ('<div class="container text-center mt-5 mb-5" id="spinner"><div class="spinner-grow spinner-grow-lg text-dark" id="spinner"></div></div>');
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
  
    $('.feed').on('click',function(){
    $('body').animate({opacity:0},300);
    setTimeout(function(){
      location.href = 'feed.html';
    },300);
  });
  
  $('#message').on('click', function(){
    $('body').animate({opacity:0},300);
    setTimeout(function(){
      location.href='dm.html';
    },300);
  });
});