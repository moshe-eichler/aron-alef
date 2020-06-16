const mysql = require('mysql');

const pool = mysql.createPool({
    connectionLimit: 100,
    host     : 'localhost',
    user     : 'root',
    password : '',
    database : 'movies',
    debug    :  false
});

function addRows(data){
    let insertQuery = "INSERT INTO ?? (??, ??, ??, ??, ??, ??, ??, ??, ??, ??, ??) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
    let query = mysql.format(insertQuery, ["users", "email", "first_name", "last_name", "status", "password_hash", "salt", "creation_date", "city", "country", "phone_number", "videos", data.email, data.first_name, data.last_name, data.status, data.password_hash, data.salt, data.creation_date, data.city, data.country, data.phone_number, data.videos]);
    pool.query(query, (err, response) => {
        if (err) {
            console.log(err);
            return;
        }
        console.log(response.insertId);
    });
}

setTimeout(() => {
    addRows({
        "email": "123456@123456",
        "first_name": "meshune",
        "last_name": "od masheu",
        "status": "1",
        "password_hash": "123456789",
        "salt": "123",
        "creation_date": "2020-06-11",
        "city": "jerusalem",
        "country": "isr",
        "phone_number": "0548597760",
        "videos": "1,2,3"
    });
}, 5000);