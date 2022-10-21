$(document).ready(function(){

    let array = []

    $('#submit').on('click', function (event) {
        event.preventDefault();

        console.log('clicked')

        let dogs = $('input[name="dog"]:checked').val();

        let work = $('input[name="work"]:checked').val();

        let movie = $('input[name="movie"]:checked').val();

        let beach = $('input[name="beach"]:checked').val();

        let game = $('input[name="game"]:checked').val();

        let eat = $('input[name="eat"]:checked').val();

        let workOut = $('input[name="workOut"]:checked').val();

        let name = $('#name').val()

        array.push(dogs, work, movie, beach, game, eat, workOut);
        console.log(array, name);

        let reader = new FileReader();
        let file = document.querySelector('input[type=file]').files[0];
        console.log(reader.readAsDataURL(file))
        reader.addEventListener('load', function (file) {
        console.log('started loading')
        file = reader.result;
        let profileImg = file
        console.log(array, name, profileImg)
        
        $.post('/friends', {name:name, photo:profileImg, scores:array})

        $.getJSON('/match', function(data){
            console.log(data)
            $('#questions').replaceWith(`
            <div class="container text-center">
                <p class="text-center">You've Been Matched With:</p>
                <hr>
                <h2>${data.username}</h2>
                <img class="mx-auto" src="${data.photo}">
            </div>
            `)
        })
    });

    });

});