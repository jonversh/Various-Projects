$(document).ready(function(){
  $('.jumbo').animate({
    height: "20rem"
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
  
  $('.jumbo').after(`
      <div class="p-5">
      
    <div class="row">
    <div class="col-md pr-5-md">
      <h3 class="text-center font-weight-light p-5 m-0">Upcoming Events</h3>
      <div id="accordion">
      <!--October Events-->
        <div class="card">
          <div class="card-header">
            <a class="card-link" data-toggle="collapse" href="#collapseOne" aria-expanded="true">
              October Events
            </a>
            <span class="badge badge-primary badge-pill ml-1">4</span>
          </div>
          <div id="collapseOne" class="collapse" data-parent="#accordion" style="">
            <div class="card-body p-5">
              
              <div id="accordion1">

              <div class="card">
                <div class="card-header d-flex">
                  <a class="card-link collapsed" data-toggle="collapse" href="#firstevent" aria-expanded="false">
                    Oct 18
                  </a>
                  <span class="ml-auto">Future</span>
                </div>
                <div id="firstevent" class="collapse" data-parent="#accordion1" style="">
                  <div class="card-body row">
                    <img class="mx-auto rounded col-md album-img" src="../images/future.jpeg">
                    <p class="text-center pl-3 pr-3 col-md">Future - Oct 18 - 9:00pm</p>
                    <p class="col-md">Location: Staples Center - Los Angeles, CA</p>
                    <div class="container row m-0">
                      <button type="button" class="btn btn-lg btn-outline-light text-dark m-3 col" data-toggle="modal" data-target="#fakePaypal">
                      Purchase Tickets
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            
              <div class="card">
                <div class="card-header d-flex">
                  <a class="card-link collapsed" data-toggle="collapse" href="#secondevent" aria-expanded="false">
                    Oct 20
                  </a>
                  <span class="ml-auto">Black Sabbath</span>
                </div>
                <div id="secondevent" class="collapse" data-parent="#accordion1" style="">
                  <div class="card-body row">
                    <img class="mx-auto rounded col-md album-img" src="../images/download(1).jpeg">
                    <p class="text-center pl-3 pr-3 col-md">Black Sabbath - Oct 20 - 7:00pm</p>
                    <p class="col-md">Location: The Wiltern - Los Angeles, CA </p>
                    <div class="container row m-0">
                      <button type="button" class="btn btn-lg btn-outline-light text-dark m-3 col" data-toggle="modal" data-target="#fakePaypal">
                      Purchase Tickets
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            
              <div class="card">
                <div class="card-header d-flex">
                  <a class="card-link" data-toggle="collapse" href="#thirdevent" aria-expanded="true">
                    Oct 29
                  </a>
                  <span class="ml-auto">Drake</span>
                </div>
                <div id="thirdevent" class="collapse" data-parent="#accordion1" style="">
                  <div class="card-body row">
                    <img class="mx-auto rounded col-md album-img" src="../images/Drake.jpeg">
                    <p class="text-center pl-3 pr-3 col-md">Drake - Oct 29 - 8:00pm</p>
                    <p class="col-md">Location: Hollywood Palladium - Hollywood, CA </p>
                    <div class="container row m-0">
                      <button type="button" class="btn btn-lg btn-outline-light text-dark m-3 col" data-toggle="modal" data-target="#fakePaypal">
                      Purchase Tickets
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              
              <div class="card">
                <div class="card-header d-flex">
                  <a class="collapsed card-link" data-toggle="collapse" href="#forthevent">
                    Oct 31
                  </a>
                  <span class="ml-auto">InFusion</span>
                </div>
                <div id="forthevent" class="collapse" data-parent="#accordion1">
                  <div class="card-body row">
                    <img class="mx-auto rounded col-md album-img" src="../images/images (1).jpeg">
                    <p class="text-center pl-3 pr-3 col-md">InFusion - Oct 31 - 8:00pm</p>
                    <p class="col-md">Location: Hollywood Palladium - Hollywood, CA </p>
                    <div class="container row m-0">
                      <button type="button" class="btn btn-lg btn-outline-light text-dark m-3 col" data-toggle="modal" data-target="#fakePaypal">
                      Purchase Tickets
                      </button>
                    </div>
                  </div>
                </div>
              </div>

            </div>
              
            </div>
          </div>
        </div>
      
        <div class="card">
          <div class="card-header">
            <a class="collapsed card-link" data-toggle="collapse" href="#collapseTwo">
              November Events
            </a>
            <span class="badge badge-primary badge-pill ml-1">1</span>
          </div>
          <div id="collapseTwo" class="collapse" data-parent="#accordion">
            <div class="card-body">
              
              <div id="accordion2">

                <div class="card">
                  <div class="card-header">
                    <a class="card-link" data-toggle="collapse" href="#Nov1">
                      Thanks 4 Musik Festival
                    </a>
                  </div>
                  <div id="Nov1" class="collapse" data-parent="#accordion2">
                    <div class="card-body">
                  <div class="card-body row">
                    <img class="mx-auto rounded col-md album-img" src="../images/music-event-ii.jpeg">
                    <p class="text-center pl-3 pr-3 col-md">Thanks 4 Musik Festival - Nov 21 - 9:00pm</p>
                    <p class="col-md">Location: The Wiltern - Los Angeles, CA </p>
                    <div class="container row m-0">
                      <button type="button" class="btn btn-lg btn-outline-light text-dark m-3 col" data-toggle="modal" data-target="#fakePaypal">
                      Purchase Tickets
                      </button>
                    </div>
                  </div>
                    </div>
                  </div>
                </div>
              
              </div>
              
            </div>
          </div>
        </div>
      
        <div class="card">
          <div class="card-header">
            <a class="collapsed card-link" data-toggle="collapse" href="#collapseThree">
              December Events
            </a>
            <span class="badge badge-primary badge-pill ml-1">4</span>
          </div>
          <div id="collapseThree" class="collapse" data-parent="#accordion">
            <div class="card-body">
            
            <div id="accordion3">

              <div class="card">
                <div class="card-header d-flex">
                  <a class="card-link collapsed" data-toggle="collapse" href="#decfirstevent" aria-expanded="false">
                    Dec 1
                  </a>
                  <span class="ml-auto">Boys 2 Men</span>
                </div>
                <div id="decfirstevent" class="collapse" data-parent="#accordion3" style="">
                  <div class="card-body row">
                    <img class="mx-auto rounded col-md album-img" src="../images/images 2.jpeg">
                    <p class="text-center pl-3 pr-3 col-md">Boys 2 Men &amp; <span class="small">Fayth</span> - Dec 1 - 5:00pm</p>
                    <p class="col-md">Location: Staples Center - Los Angeles, CA</p>
                    <div class="container row m-0">
                      <button type="button" class="btn btn-lg btn-outline-light text-dark m-3 col" data-toggle="modal" data-target="#fakePaypal">
                      Purchase Tickets
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            
              <div class="card">
                <div class="card-header d-flex">
                  <a class="card-link collapsed" data-toggle="collapse" href="#decsecondevent" aria-expanded="false">
                    Dec 8
                  </a>
                  <span class="ml-auto">Migos</span>
                </div>
                <div id="decsecondevent" class="collapse" data-parent="#accordion3" style="">
                  <div class="card-body row">
                    <img class="mx-auto rounded col-md album-img" src="../images/migos.jpg">
                    <p class="text-center pl-3 pr-3 col-md">Migos - Dec 8 - 8:00pm</p>
                    <p class="col-md">Location: Hollywood Palladium - Hollywood, CA </p>
                    <div class="container row m-0">
                      <button type="button" class="btn btn-lg btn-outline-light text-dark m-3 col" data-toggle="modal" data-target="#fakePaypal">
                      Purchase Tickets
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            
              <div class="card">
                <div class="card-header d-flex">
                  <a class="card-link" data-toggle="collapse" href="#decthirdevent" aria-expanded="true">
                    Dec 12
                  </a>
                  <span class="ml-auto">Travis Scott</span>
                </div>
                <div id="decthirdevent" class="collapse" data-parent="#accordion3" style="">
                  <div class="card-body row">
                    <img class="mx-auto rounded col-md album-img" src="../images/MJ.jpeg">
                    <p class="text-center pl-3 pr-3 col-md">Travis Scott - Dec 12 - 9:00pm</p>
                    <p class="col-md">Location: Garden Grove Ampthitheater - Garden Grove, CA </p>
                    <div class="container row m-0">
                      <button type="button" class="btn btn-lg btn-outline-light text-dark m-3 col" data-toggle="modal" data-target="#fakePaypal">
                      Purchase Tickets
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              
              <div class="card">
                <div class="card-header d-flex">
                  <a class="collapsed card-link" data-toggle="collapse" href="#decforthevent">
                    Dec 30
                  </a>
                  <span class="ml-auto">A V R I L A V I G N E</span>
                </div>
                <div id="decforthevent" class="collapse" data-parent="#accordion3">
                  <div class="card-body row">
                    <img class="mx-auto rounded col-md album-img" src="../images/images.jpeg">
                    <p class="text-center pl-3 pr-3 col-md">A V R I L A V I G N E - Dec 30 - 7:00pm</p>
                    <p class="col-md">Location: Glass House - Pomona, CA </p>
                    <div class="container row m-0">
                      <button type="button" class="btn btn-lg btn-outline-light text-dark m-3 col" data-toggle="modal" data-target="#fakePaypal">
                      Purchase Tickets
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            </div>
            </div>
          </div>
        </div>
      </div>
        <div class="col-md">
        <div class="container d-flex col pt-4">
          <h3 class="text-center font-weight-light p-4">VIP Access and Exclusive Meet & Greet</h3>
        </div>
        <hr>
        <div class="container d-flex col">
          <img class="rounded-circle flex-fill col fayth my-auto" src="../images/pexels-photo-2101839.jpeg">
          <div class="col flex-fill">
            <h4 class="font-weight-light">Fayth</h4>
            <button type="button" class="btn btn-link text-left p-0" data-toggle="modal" data-target="#winModal">Come and meet Sparks very own up and coming artist Fayth. Go as a VIP and get access to an exclusive Meet & Greet after the show!</button>
          </div>
          </div>
          <hr>
        <div class="container d-flex col">
          <img class="rounded-circle flex-fill col fayth my-auto" src="../images/Drake.jpeg">
          <div class="col flex-fill">
            <h4 class="font-weight-light">Drake</h4>
            <button type="button" class="btn btn-link text-left p-0" data-toggle="modal" data-target="#winModal">Want lounge access? Make sure you purchase a VIP package and get the perks you deserve!</button>
          </div>
          </div>
          <div class="container">
              <h3 class="font-weight-light pt-5">Don't Want The Hassle of Parking?</h3>
              <h4 class="font-weight-light">Get To and From Our Events Safe</h4>
              <div class="container d-flex justify-content-center">
              <button type="button" data-toggle="modal" data-target="#lyftModal" class="btn lyft-button m-5"><img src="css/svg/brands/lyft.svg"></button>
              <button type="button" data-toggle="modal" data-target="#uberModal" class="btn uber-button m-5"><img src="css/svg/brands/uber%20(1).svg"></button>
              </div>
            </div>
          </div>
        </div>
      </div>
    
      
    <!--Footer-->
    
    <footer class="bg-secondary container-fluid m-0 mt-5 text-white p-5 row">
      
        <div class="col-md text-center p-3">
          <p class="h5 font-weight-light">Follow Us !</p>
          <a class="text-white" href="#"><i class="fa fa-facebook p-2" data-toggle="modal" data-target="#facebookModal"></i></a>
          <a class="text-white" href="#"><i class="fa fa-twitter p-2" data-toggle="modal" data-target="#twitterModal"></i></a>
          <a class="text-white" href="#"><i class="fa fa-instagram p-2" data-toggle="modal" data-target="#instaModal"></i></a>
          <a class="text-white" href="#"><i class="fa fa-snapchat-ghost p-2" data-toggle="modal" data-target="#snapchatModal"></i></a>
        </div>
        
        <div class="col-md text-center p-3">
          <p class="h5 font-weight-light">Links</p>
          <p><a class="text-white" href="../index.html">Sign In</a> <br> <a class="text-white" href="about.html">About</a> | <a href="events.html" class="text-white">Events</a> <br> <a class="text-white" href="jobs.html">Jobs</a> | <a class="text-white" href="contact-us.html">Contact Us</a></p>
        </div>
        
        <div class="col-md text-center p-3">
          <p class="h5 text-center font-weight-light">Contact Us</p>
          <p>Email: info@spark.com</p>
          <p>Phone: 123-123-1234</p>
        </div>
        
        <div class="col-md text-center p-3">
          <p class="h5 font-weight-light">Our Location</p>
          <p>123 Somewhere Rd <br> SomeCity, SomeState 12345</p>
        </div>
        
      </footer>
  `);
  
  },1500);
  
  $('#submit1').on('click', function( event ) {
    event.preventDefault();
    let name = $('#name').val();
    let email = $('#email1').val();
    let eventSelected = $('input[type=radio][name=radio]:checked').val();
    
    $('#winModal').modal('hide');
    
    window.scroll({
        top: 10,
        behavior: 'smooth'
      });
    
    $('.jumbotron').after(`
    <div class="alert alert-success alert-dismissible fade show m-5 shadow">
      <button type="button" class="close" data-dismiss="alert">&times;</button>
      Thanks <strong>${name}!</strong> An email will be sent to: <strong>${email}</strong> letting you know if you've won. You selected the <strong>${eventSelected}</strong> event.
    </div>
    `);
  });
});