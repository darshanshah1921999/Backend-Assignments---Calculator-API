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
app.get("/home",(req,res)=>{
    res.send("Hello world!");
});

app.post("/add",(req,res)=>{

    let n1=req.body.num1;
    let n2=req.body.num2;
    let message,sum,status;
    if(typeof n1 !=="number" || n1===undefined || n2===undefined || typeof n2 !=="number"){
        message="invalid data types";
        status="error";
        res.send({status,message,sum});
        return;
    }
    if(Number(n1)>1000000||Number(n2)>1000000){
        message="Overflow";
        status="error";
        res.send({status,message,sum});
        return;
    }
    if(Number(n1)<-1000000||Number(n2)<-1000000){
        message="Underflow";
        status="error";
        res.send({status,message,difference});
        return;
    }
    message="the sum of given two numbers";
    sum=Number(n1)+Number(n2);
    status="success";
    res.send({status,message,sum});
    return;

});

app.post("/sub",(req,res)=>{

    let n1=req.body.num1;
    let n2=req.body.num2;
    let message,difference,status;
    if(typeof n1 !=="number" || n1===undefined || n2===undefined || typeof n2 !=="number"){
        message="invalid data types";
        status="error";
        res.send({status,message,sum});
        return;
    }
    if(Number(n1)>1000000||Number(n2)>1000000){
        message="Overflow";
        status="error";
        res.send({status,message,sum});
        return;
    }
    if(Number(n1)<-1000000||Number(n2)<-1000000){
        message="Underflow";
        status="error";
        res.send({status,message,difference});
        return;
    }
    message="the difference of given two numbers";
    difference=Number(n1)-Number(n2);
    status="success"
    res.send({status,message,difference});
    return;

});

app.post("/multiply",(req,res)=>{

    let n1=req.body.num1;
    let n2=req.body.num2;
    let message,result,status;
    if(typeof n1 !=="number" || n1===undefined || n2===undefined || typeof n2 !=="number"){
        message="invalid data types";
        status="error";
        res.send({status,message,sum});
        return;
    }
    if(Number(n1)>1000000||Number(n2)>1000000){
        message="Overflow";
        status="error";
        res.send({status,message,sum});
        return;
    }
    if(Number(n1)<-1000000||Number(n2)<-1000000){
        message="Underflow";
        status="error";
        res.send({status,message,difference});
        return;
    }
    message="The product of given numbers";
    result=Number(n1)*Number(n2);
    status="success"
    res.send({status,message,result});
    return;

});

app.post("/division",(req,res)=>{

    let n1=req.body.num1;
    let n2=req.body.num2;
    let message,result,status;
    if(typeof n1 !=="number" || n1===undefined || n2===undefined || typeof n2 !=="number"){
        message="invalid data types";
        status="error";
        res.send({status,message,sum});
        return;
    }
    if(Number(n1)>1000000||Number(n2)>1000000){
        message="Overflow";
        status="error";
        res.send({status,message,sum});
        return;
    }
    if(Number(n1)<-1000000||Number(n2)<-1000000){
        message="Underflow";
        status="error";
        res.send({status,message,difference});
        return;
    }
    if(Number(n2)===0){
        message="Cannot divide by zero";
        status="failure";
        res.send({status,message,result});
        return;
    }
    message="The division of given numbers";
    result=Number(n1)/Number(n2);
    status="success"
    res.send({status,message,result});
    return;

});

app.listen(port, () => console.log(`App listening on port ${port}!`))

module.exports = app;