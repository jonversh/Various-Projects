let bodyParser = require('body-parser')
let fs = require('fs')
let express = require('express')
let app = express()
let dataJson;
let server = app.listen(3000, function(){
    console.log(`\nServer is on port 3000\n`)
})

app.use(bodyParser.json())

app.use(bodyParser.urlencoded({ extended: true }))

app.use(function(req,res,next){

    // console.log(`${req.method} request for ${req.url}`)
    next();

})

app.use(express.static('./app/public/'))

let match;

app.get('/friends', function(req,res){

    fs.readFile('./app/data/friends.json', 'UTF-8', function (err, data) {
        if (err) throw err
        res.send(data)
    })

})

app.post('/friends', function(req,res){


    let array = fs.readFileSync('./app/data/friends.json', 'UTF-8');

    let peopleArray = [];

    array = JSON.parse(array);

    


    for(let j=0; j<array.length; j++) {
        let firstArray = req.body.scores;
        let secondArray = array[j].scores;
        let difference = 0;
        let comparer = {
            username: array[j].name,
            difference: difference,
            photo: array[j].photo
        }

        for (let i = 0; i < firstArray.length; i++) {
            let bool;
            if (firstArray[i] === secondArray[i]) {
                bool = true;
            } else {
                bool = false;
            }

            if (bool === true) {
                firstArray.splice(i, 1);
                secondArray.splice(i, 1);
            } else {
                if (firstArray[i] > secondArray[i]) {
                    let adden = firstArray[i] - secondArray[i];
                    comparer.difference += adden;
                } else if (secondArray[i] > firstArray[i]) {
                    let adden = secondArray[i] - firstArray[i];
                    comparer.difference += adden;
                }
            }
        }
        // console.log(difference, comparer)
        peopleArray.push(comparer);
        console.log(peopleArray);
    }

    peopleArray.sort(function(a, b) {
        return parseFloat(a.difference) - parseFloat(b.difference);
    });
    console.log(`\nThis is the PeopleArray: ${JSON.stringify(peopleArray)}\n`);

    match = peopleArray.shift();
    console.log(match);

    array.push(req.body)

    fs.writeFileSync('./app/data/friends.json', JSON.stringify(array))

    return match
})



app.get('/match', function(req,res){
    console.log(match)
    res.send(match)
})