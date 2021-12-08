const express = require ('express');
const apiRouter = require ('./routes');
var cors = require('cors')

const app = express();


const bodyParser = require("body-parser");
const router = express.Router();


//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

router.post('/handle',(request,response) => {
//code to perform particular action.
//To access POST variable use req.body()methods.
console.log(request.body);
});

// add router in the Express app.
app.use("/", router);


app.use(cors());
 
// app.get('/posts/:id', function (req, res, next) {
//   res.json({msg: ['This is CORS-enabled for all origins!']})
// });
 
app.listen(80, function () {
  console.log('CORS-enabled web server listening on port 80')
});

app.use(express.json());

app.use('/', apiRouter);

app.listen(process.env.PORT || '3000', () => {
    console.log(`Server is running on port ${process.env.PORT || '3000'}`)
});


