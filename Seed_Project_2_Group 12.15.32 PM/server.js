const express = require(`express`);
const app = express();
const port = 3000;
const server = app.listen(port, function (err) {
    if (err) throw err;
    console.log(`listening to requests on port ${port}`)
});
const router = express.Router()
const bodyParser = require(`body-parser`);
const mongoose = require(`mongoose`);
const path = require(`path`)
const account = require(`./db/models/accountModel`)
let io = require('socket.io').listen(server);
let count = 100000
let db = require(`./db/db`)
let item = require(`./db/models/itemModel`)

// ================================================= 
// MONGO:
// =================================================

mongoose.Promise = global.Promise;

mongoose.connect(`mongodb://localhost/ayd`, { useNewUrlParser: true, useUnifiedTopology: true });

mongoose.connection.on('open', function () {
    item.find({}, (err, result) => {
        if (result.length > 0) {

        } else {
            item.insertMany(db, (err, docs) => {
                if (err) throw err;
            });
        }
    });
    console.log(`Connected to MongoDB`);
}).on(`error`, function (err) {
    console.log(`connection err:`, err);
});

// =================================================
// APP MIDDLEWARE:
// =================================================

app.use(express.static('app'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true, limit: '150mb' }));


// =================================================
// POST REQUESTS
// =================================================

app.post(`/newUser`, (req, res) => {
    let newAccount = new account({
        name: req.body.name,
        password: req.body.password,
        email: req.body.email
    })

    if (newAccount.password === req.body.cPassword) {
        account.find({ email: req.body.email })
            .then(result => {
                if (result.length === 0) {
                    newAccount.save()
                        .then(result => {
                            res.status(200).send(result)
                        })
                        .catch(() => {
                        })
                } else if (result.length > 0) {
                    res.status(400).send(`acccountExists`)
                }
            })
            .catch(() => {
            })
    } else {
        res.status(400).send(`passMissMatch`)
    }

})

app.post(`/login`, (req, res) => {
    account.find({ email: req.body.email, password: req.body.password })
        .then(result => {
            if (result.length > 0) {
                res.status(200).send(result)
            } else if (result.length === 0) {
                res.status(400).send(`accountNotFoud`)
            }
        })
        .catch(() => {
        })
})

app.post(`/cart`, (req, res) => {
    account.findById(req.body._id)
        .then(result => {
            res.send(result.cart)
        })
        .catch(() => {
        })
})

// =================================================
// SOCKET CONNECTION
// =================================================

io.sockets.on('connection', function (socket) {
    setInterval(() => {
        count++
        io.sockets.emit(`countUpdated`, count)
    }, (Math.random() * 1.5) * 1000)
});

// =================================================
// DELETE REQUESTS:
// =================================================

process.on('SIGINT', () => {
    mongoose.connection.dropDatabase()
        .then(result => {
            console.log(result);
            process.exit(1);
        })
        .catch(() => {
        })
});