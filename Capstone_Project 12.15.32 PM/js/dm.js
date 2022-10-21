  $(document).ready(function() {
    $('body').animate({opacity:1},300);
    
  $('.left-menu').hover(
    function() {
		$(this).stop().animate(
		{
			left: '0'
		},
		500,
		'easeInSine'
		); // end animate
	 },
	 function() {
		$(this).stop().animate(
		{
			left: '-325px'
		},
		1000
		); // end animate
	 }
  ); // end hover
  $('.toast').toast('show');
}); // end ready

$(".messages").animate({
scrollTop: $(
'html, body').get(0).scrollHeight
}, 1500);
  
var USERDATABASE = [];
function getDatabase(){
    USERDATABASE = localStorage.getItem('DataBase');
    USERDATABASE = JSON.parse(USERDATABASE);
    return USERDATABASE;
  }
  
function alert(){
getDatabase();
var name = USERDATABASE[1].name;
$('.topnavbar').before('<div class="alert alert-secondary show m-3 useralert text-center"><strong>'+name+'</strong> is currently logged in </div>');
}
alert();

$('#message-send').on('click', function(e){
  e.preventDefault();
  
  getDatabase();
  var name = USERDATABASE[1].name;
  
  let messageinput = $('#message-input').val();
  
if(messageinput === ''){
    event.stopPropagation();
  }else{
  
  $('#message-input').val('');
  
  var now = new Date();
  var hours = now.getHours();
  var minutes = now.getMinutes();
  var seconds = now.getSeconds();
  
  
  $('#messages').append('<div class="toast customtoast fade show ml-auto" data-autohide="false"><div class="toast-header">You <span class="ml-auto">'+hours+':'+minutes+'</span> </div><div class="toast-body">'+messageinput+'</div></div>');
  
  $(".messages").animate({
    scrollTop: $(
    '.messages').get(0).scrollHeight
}, 1000);

}
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