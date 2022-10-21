
  $(document).ready(function(){
    var USERDATABASE = [{email:"email@email.com", password:"password"}];
    USERDATABASE = JSON.stringify(USERDATABASE);
    localStorage.setItem('DataBase', USERDATABASE);
    setTimeout(  function show(){
    $("[data-toggle='tooltip']").tooltip('show');
    },2000);
    setTimeout(function hide(){
      $("[data-toggle='tooltip']").tooltip('hide');
    },10000);
  });
  
  function getDatabase(){
    USERDATABASE = localStorage.getItem('DataBase');
    USERDATABASE = JSON.parse(USERDATABASE);
  }
  
  function CreateAuth(email){  USERDATABASE
    for(let i = 0; i < USERDATABASE.length; i++) {
      let object = USERDATABASE[i];
      for (const key in object) {
        if (object[key] === email) {
        alert('user has already been created');
        return false;
          }else if(object[key] !== email){
            console.log('account has not been created');
            return true;
          }
        }
      }
    }
  
  $('#create').on('click', function(){
    event.preventDefault();
    
    
    getDatabase();
    
    var name = $('#name').val();
    var email = $('#email1').val();
    var password = $('#password1').val();

  if(name === '' || email === '' || password === ''){
    event.stopPropagation();
  }else{
    
    $('#dont').remove();
    $('#create1').remove();
    
    function User(email, password, name){
      this.email = email;
      this.password = password;
      this.name = name;
    }
    
    CreateAuth(email);
    
    if(CreateAuth !== false){
      
    USERDATABASE.push(
        new User(
        email,
        password,
        name
        )
      );
    
    USERDATABASE = JSON.stringify(USERDATABASE);

    localStorage.setItem('DataBase', USERDATABASE);
    
    $(".form").append("<div class='container mt-3' id='alert'><div class='alert alert-success alert-dismissable fade show shadow'><button type='button' class='close' data-dismiss='alert'>&times;</button><strong>Success!</strong> Account Has Been Created!<br><strong>Welcome To Spark!</strong></div></div>");
    }else{
      alert("Account Has Already Been Created");
    }
  }
    
  });
  
  
    function auth(email){
      for(var i = 0; i < USERDATABASE.length; i++) {
        let object = USERDATABASE[i];
        for (const key in object) {
          if (object[key] === email) {
          authChoice = true;
            }
          }
        }
      }
      
    function authPass(password){
      for(var i = 0; i < USERDATABASE.length; i++) {
        let object = USERDATABASE[i];
        for (const key in object) {
          if (object[key] === password) {
          authChoicePass = true;
            }
          }
        }
      }
  
    var authChoice;
    var authChoicePass;
  
  $('#login-button').on('click', function(){
    event.preventDefault();
    getDatabase();

    var email = $('#email').val();
    var password = $('#password').val();
    
if(email == '' || password == ''){
    event.stopPropagation();
}else{
    auth(email);
    authPass(password);
   
   function advance(){
    if(authChoice === true && authChoicePass === true){
     $('.ca').animate({opacity:0},300);
     $('.success').animate({opacity:0},300);
     $('.whole').animate({opacity:0},500);
     setTimeout(function(){
       location.href = 'feed.html';
     },550);
    }else{
      let email = $('#email').val('');
      let password = $('#password').val('');
      $(".form").prepend("<div class='container mt-2'><div class='alert alert-danger alert-dismissible fade show shadow' id='alert'><button type='button'class='close'data-dismiss='alert'>&times;</button><strong>Try Again!</strong> Incorrect Email or Password</div></div>");
      
    }
    setTimeout(function (){
      $('.alert').fadeOut(1000);
    },2000);
   }
   advance();
  }
});
  let windowSize = window.innerWidth;
  
  console.log(windowSize);
  
  if(windowSize <= 500){
    $('#dont').remove();
    $('#form').removeClass('mt-5');
    $('#log').removeClass('pb-4');
    $('#for').removeClass('mt-5');
    $('#dont').removeClass('mt-5');
    $('#dont').addClass('mt-4');
    $('#form').addClass('mt-3');
  }