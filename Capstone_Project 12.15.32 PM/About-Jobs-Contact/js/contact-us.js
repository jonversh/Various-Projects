function submitValidation(){
            let nameArr = [];
            let name = $('#name').val();
            nameArr.push(name);
            let namepopped = nameArr.pop();
            // console.log(namepopped.length);
            
            let nameBoolean;
            
            let email = $('#email1').val();
            let number = $('#number').val();
            let message = $('#message').val();
            
            if(namepopped.length >= 1){
              $('#name').removeClass('is-invalid');
              $('#name').addClass('is-valid');
              nameBoolean = true;
            }else if(namepopped.length <= 1 ){
              $('#name').removeClass('is-valid');
              $('#name').addClass('is-invalid');
              nameBoolean = false;
            }
            
            let emailinclude;
            
            let emailBoolean;
            
            if(email === ''){
              $('#email1').removeClass('is-valid');
              $('#email1').addClass('is-invalid');
              emailBoolean = false;
            }else{
              emailinclude = email.includes('@');
            }
            
            if(emailinclude === true){
              $('#email1').removeClass('is-invalid');
              $('#email1').addClass('is-valid');
              emailBoolean = true;
            }else if(emailinclude === false){
              $('#email1').removeClass('is-valid');
              $('#email1').addClass('is-invalid');
              emailBoolean = false;
            }
            
            let numberArr = [];
            numberArr.push(number);
            let numberpopped = numberArr.pop();
            
            let numberBoolean;
            
            if(numberpopped.length >= 10){
              $('#number').removeClass('is-invalid');
              $('#number').addClass('is-valid');
              numberBoolean = true;
            }else if(numberpopped.length <= 10){
              $('#number').removeClass('is-valid');
              $('#number').addClass('is-invalid');
              numberBoolean = false;
            }
            
            let messageArr = [];
            messageArr.push(message);
            let messagepopped = messageArr.pop();
            
            let messageBoolean;
            
            console.log(messagepopped.length);
            
            if(messagepopped.length >= 30){
              $('#message').removeClass('is-invalid');
              $('#message').addClass('is-valid');
              messageBoolean = true;
            }else if(messagepopped.length <= 30){
              $('#message').removeClass('is-valid');
              $('#message').addClass('is-invalid');
              messageBoolean = false;
            }
            
            
            if(nameBoolean === true && emailBoolean === true && numberBoolean === true && messageBoolean === true){
               $('#name1').after(`
               <p> ${name} </p>
               <hr>
              `);
              $('#email2').after(`
              <p>${email}</p>
              <hr>
              `);
              $('#number1').after(`
              <p>${number}</p>
              <hr>
              `);
              $('#message1').after(`
              <p>${message}</p>
              `);
              $("#myModal").modal();
            }
            
}

$('#submit').on('click', function(event){
  
  event.preventDefault();

  submitValidation();

  
});

$('#submit2').on('click', function(){
    $('#form1').fadeOut( "slow", function() {
  });
  
  $('.form').append(`
  <div class="alert alert-success alert-dismissible fade show">
    <button type="button" class="close" data-dismiss="alert">&times;</button>
      <strong>Sent!</strong> We will respond within <strong>two</strong> business days. We are working around the clock helping someone find their Spark!
  </div>
  `);
  
});