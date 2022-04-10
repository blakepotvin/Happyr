require('dotenv').config();
const id = process.env.MONGO_API;
const fs = require('fs');

const express = require('express')
const fs = require('fs');
const app = express()
const axios = require('axios')
const port = 3000
const mongo = require('./mongo.js');
const { MongoClient, ServerApiVersion } = require('mongodb');

const uri = id;
const cli = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
const TWILIO_AUTH_TOKEN = process.env.TWILIO_AUTH_TOKEN;
const TWILIO_ACCOUNT_SID = process.env.TWILIO_ACCOUNT_SID;
const db_name = "test";
const collection_name = "test";

var m = new mongo(cli, db_name, collection_name);

async function db_insert(phone_num) {
    await m.init();
    
    const doc = {
        phone: phone_num
    }

    await m.add(doc);
    await m.close();
}

async function db_find(phone_num) {
    await m.init();

    const doc = {
        phone: phone_num
    }

    let arr;
    try {
        arr = await m.find(doc);
    } finally {
        for (const doc of arr) {
            console.log(doc);
        }
    }

    await m.close();
}

async function db_del(phone_num) {
    if (phone_num == undefined) {
        await m.init();
        await m.cleardb();
    } else {
        await m.init();

        doc = {
            phone: phone_num
        }
    
        await m.delete(doc);
    }

    await m.close();

    

    // console.log("Successfully deleted " + result.deletedCount + " documents");
}


app.get('/test', (req, res) => {
    res.send('Hello World!')
})

app.get('/insert', (req, res) => {
    try {
        phone = req.query.phone;
        // console.log(phone);
        db_insert('+' + phone);
    } finally {
        res.redirect('http://prodxgy.github.io/SpartaHack/');
    }
    // res.send('Appended ' + phone + ' to MongoDB!');
    // res.redirect('..');
})

app.get('/find', (req, res) => {
    phone = req.query.phone;
    db_find(phone);
})

app.get('/delete', (req, res) => {

    try {
        phone = req.query.phone;
        db_del(phone);
    } finally {
        res.redirect('http://prodxgy.github.io/SpartaHack/');
    }

})

app.get('/clear', (req, res) => {
    try {
        // phone = req.query.phone;
        db_del();
    } finally {
        res.redirect('http://prodxgy.github.io/SpartaHack/');
    }
})

app.get('/test', (req, res) => {
    try{
        eval(fs.readFileSync('twilio.js', 'utf8'));
    }
    finally{
        res.redirect('http://prodxgy.github.io/SpartaHack/');
    }
})


app.listen(port, () => {
    console.log(`Express is listening on port ${port}`)
  })

