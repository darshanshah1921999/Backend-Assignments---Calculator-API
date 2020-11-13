const express = require('express')
const app = express()
const bodyParser = require("body-parser");
const port = 3000
app.use(express.urlencoded());

// Parse JSON bodies (as sent by API clients)
app.use(express.json());


app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json())
// your code goes here
app.get("/home", (req, res) => {
    res.send("Hello world!");
})

app.post("/add", (req, res) => {
    const { num1, num2 } = req.body;
    let message = "the sum of given two numbers";
    let sum = num1 + num2;
    const successObj = { status: "success" };
    const errorObj = { status: "error" };
    const failureObj = { status: "failure" };
    let obj = {
        message: message,
        sum: sum
    };
    if (typeof num1 !== 'number' || typeof num2 !== 'number') {
        obj.message = "invalid data types";
        res.status(400).send({ ...errorObj, ...obj });
    }
    else if (num1>1000000 || num2>1000000 || sum > 1000000) {
        obj.message = "Overflow";
        res.status(400).send({ ...errorObj, ...obj });
    }
    else if (num1<(-1000000) || num2<(-1000000) || sum <(-1000000)) {
        obj.message = "Underflow";
        res.status(400).send({ ...errorObj, ...obj });
    }
    res.status(200).send({ ...successObj, ...obj });
    res.status(404).send({ ...failureObj, ...obj });
})

app.post("/sub", (req, res) => {
    const { num1, num2 } = req.body;
    let message = "the difference of given two numbers";
    let sub = num1 - num2;
    const successObj = { status: "success" };
    const errorObj = { status: "error" };
    const failureObj = { status: "failure" };
    let obj = {
        message: message,
        difference: sub
    };
    if (typeof num1 !== 'number' || typeof num2 !== 'number') {
        obj.message = "invalid data types";
        res.status(400).send({ ...errorObj, ...obj });
    }
    else if (num1>1000000 || num2>1000000 || sub > 1000000) {
        obj.message = "Overflow";
        res.status(400).send({ ...errorObj, ...obj });
    }
    else if (num1<(-1000000) || num2<(-1000000) || sub <(-1000000)) {
        obj.message = "Underflow";
        res.status(400).send({ ...errorObj, ...obj });
    }
    res.status(200).send({ ...successObj, ...obj });
    res.status(404).send({ ...failureObj, ...obj });
})

app.post("/mul", (req, res) => {
    const { num1, num2 } = req.body;
    let message = "The product of given numbers";
    let mul = num1 * num2;
    const successObj = { status: "success" };
    const errorObj = { status: "error" };
    const failureObj = { status: "failure" };
    let obj = {
        message: message,
        result: mul
    };
    if (typeof num1 !== 'number' || typeof num2 !== 'number') {
        obj.message = "invalid data types";
        res.status(400).send({ ...errorObj, ...obj });
    }
    else if (num1>1000000 || num2>1000000 || mul > 1000000) {
        obj.message = "Overflow";
        res.status(400).send({ ...errorObj, ...obj });
    }
    else if (num1<(-1000000) || num2<(-1000000) || mul <(-1000000)) {
        obj.message = "Underflow";
        res.status(400).send({ ...errorObj, ...obj });
    }
    res.status(200).send({ ...successObj, ...obj });
    res.status(404).send({ ...failureObj, ...obj });
})

app.post("/div", (req, res) => {
    const { num1, num2 } = req.body;
    let message = "The division of given numbers";
    let obj = {};
    const successObj = { status: "success" };
    const errorObj = { status: "error" };
    const failureObj = { status: "failure" };
    if(num2===0){
        obj.message = "Cannot divide by zero";
        obj.result = 0;
        res.status(400).send({ ...errorObj, ...obj });
    }
    let div = num1 / num2;
    obj = {
        message: message,
        result: div
    };
    
    if (typeof num1 !== 'number' || typeof num2 !== 'number') {
        obj.message = "invalid data types";
        res.status(400).send({ ...errorObj, ...obj });
    }
    else if (num1>1000000 || num2>1000000 || div > 1000000) {
        obj.message = "Overflow";
        res.status(400).send({ ...errorObj, ...obj });
    }
    else if (num1<(-1000000) || num2<(-1000000) || div <(-1000000)) {
        obj.message = "Underflow";
        res.status(400).send({ ...errorObj, ...obj });
    }
    res.status(200).send({ ...successObj, ...obj });
    res.status(404).send({ ...failureObj, ...obj });
})


app.listen(port, () => console.log(`App listening on port ${port}!`))

module.exports = app;