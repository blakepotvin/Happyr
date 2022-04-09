require('dotenv').config();
const id = process.env.TWILIO_ACCOUNT_SID;

const token = process.env.TWILIO_AUTH_TOKEN;
const twilio = require('twilio');
const client = new twilio(id, token);
const axios = require('axios')
const utf8 = require('utf8');
const mongo = require('./mongo.js');
const { MongoClient, ServerApiVersion } = require('mongodb');

const uri = "mongodb+srv://prathik:asdf@spartahack.c84ow.mongodb.net/test?retryWrites=true&w=majority";
const cli = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
const db_name = "test";
const collection_name = "test";

var m = new mongo(cli, db_name, collection_name);

async function db() {
    await m.init();
    await m.add({name: "test"});
    await m.find();
    // await m.cleardb();
    await m.close();
}

// db();
run();


async function getquote() {
    let quote;

    try {
        await axios
        .get('https://www.cheermeup.net/quote')
        .then(response => {
            // console.log(response.data);
            quote = [response.data['text'], response.data['author']];
            // console.log(quote);
        })
        .catch(err => {
            console.error(err);
        })
    } finally {
        return quote;
    }

    
}

async function addphones() {
    await m.add({phone: '+12485252323'});
    await m.add({phone: '+12487704817'});
}

async function run() {

    // console.log('before')

    // console.log(await getquote());

    await m.init();
    await m.cleardb();
    await addphones();
    let arr;
    try {
        arr = await m.find();
    } finally {
        // console.log(arr);
    }

    for (const record of arr) {
        await sendText(client, record['phone'], await getquote());
    }

    await m.close();

    // console.log(arr);
    

    // await sendText(client, '+12485252323', await getquote());
}


// let nums = ['+12485252323', '+12489998888', '+10001112222'];

// for (const num of nums) {
//     sendText(client, num);
// }



async function sendText(client, phone, quote) {
    let text = quote[0];
    let author = quote[1];

    const greetingArr = [
        "Good morning! 🎉🎉",
        "It's a new day !! ✨",
        "Rise and grind 🔥🔥",
        "Howdy 🤠",
        "The sun rose again, and you know what that means...😏"
    ]

    const transitArr = [
        "Here's your inspirational quote of the day:",
        "Here's the quote of the day:",
        "It's time for the quote of the day:",
        "quote quote quote:",
        "woo new quote woo:"
    ]

    const endArr = [
        "We hope you have a great day ! :)",
        "Today's gonna be a great day, we just know it ! :)",
        "You got this !!",
        "Have a great day ! :)",
        "woo woo woo",
        "new day new you !!"
    ]

    let greeting = greetingArr[Math.floor(Math.random() * greetingArr.length)];
    let transit = transitArr[Math.floor(Math.random() * transitArr.length)];
    let end = endArr[Math.floor(Math.random() * endArr.length)];

    text = greeting + " " + transit + "\n\n" + text + "\n\n" + author + "\n" + end;


    console.log(text);
    client.messages
    .create({
        body: text,
        to: phone,
        from: '+18778214016',
    })
    .then((message) => console.log(message.sid));
    console.log(phone)
}


