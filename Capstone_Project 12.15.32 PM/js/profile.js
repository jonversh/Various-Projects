$(document).ready(function(){
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
      var ProfilePicture = $('#profilePic');
      ProfilePicture.fadeOut(200);
      $("#bio").fadeOut(200);
      setTimeout(function(){
        $("#Biography").before("<div class='spinner-border text-muted' id='spinner'></div>");
      },100);
      setTimeout(function(){
        $("#spinner").remove();
        ProfilePicture.replaceWith("<img class='card-img' id='profilePic' src='"+file+"'>");
        $("#bio").replaceWith(comment);
      },800);
        },false);
    reader.readAsDataURL(file);
  }
  
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