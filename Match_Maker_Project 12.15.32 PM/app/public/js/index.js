$(document).ready(function (){

    $.getJSON('/friends', function(friends){

        $('.jumbotron').after(`
        <div class="container text-center m-5">
            <h2>There are currently ${friends.length} people listed
        </div>
        `)

    })

});