// Get the express package 
const express = require('express');

const mariadb = require('mariadb');

// Instantiate an express (web) app
const app = express();

// Define a port number for the app to listen on
const PORT = 3000;

// Define database creds and function to connect to the database
const pool = mariadb.createPool({
    host: 'localhost',
    user:'root',
    password:'123',
    database: 'guestbook'
});

async function connect() {
    try {
        const conn = await pool.getConnection();
        console.log('Connected to the database');
        return conn;
    } catch (err) {
        console.log('Error connecting to the database: ' + err);
    }
}

// Tell the app to encode data into JSON format
app.use(express.urlencoded({ extended: false }));
app.use(express.static('public'));

// Set your view (templating) engine to "EJS"
// (We use a templating engine to create dynamic web pages)
app.set('view engine', 'ejs');

// Define a "default" route
app.get('/', (req, res) => {
    // Log message to the server's console
    console.log("Hello, world - server!");

    // Display the form page
    res.render('home');
});

app.get('/adminPage', async (req, res) => {
    const conn = await connect();

    const results = await conn.query (`SELECT * FROM guestbook ORDER BY date_submitted DESC`);

    console.log(results);

    res.render('adminPage', { guestbook : results});
});

app.post('/success', async (req, res) => {
    // Get the data from the form
    const data = req.body;
    console.log(data);

    // Connect to the database
    const conn = await connect();

    // Write to the database
    await conn.query(
        `INSERT INTO guestbook (fname, lname, job, company, linkedIn, email, met, other, message, mail_list, email_format)
        VALUES('${data.fname}','${data.lname}','${data.job}','${data.company}','${data.linkedIn}',
        '${data.email}','${data.met}','${data.other}','${data.message}','${data.mail_list}','${data.email_format}');`
    );

    //Render the success page, and pass the form data
    res.render('success', { details : data });

});

// Tell the app to listen for requests on the designated port
app.listen(PORT, () => {
    console.log(`Server running on port http://localhost:${PORT}`)
});
