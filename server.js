const exp = require("constants");
const express = require("express");
const PORT = process.env.PORT || 3001;
const app = express();
const mysql = require('mysql2');
//NOW ADD MIDDLEWARE
app.use(express.urlencoded({extended: false}));
app.use(express.json());
// Connect to database
const db = mysql.createConnection(
    {
      host: 'localhost',
      // Your MySQL username,
      user: 'root',
      // Your MySQL password
      password: 'A1-Branch3idinI',
      database: 'election'
    },
    console.log('Connected to the election database.')
  );




db.query(`SELECT * FROM candidates`, (err, rows) => {
    console.log(rows);
});

//END OF FILE! THE FOLLOWING STATEMENTS MUST BE LAST
// Default response for any other request (Not Found)
app.use((req, res) => {
    res.status(404).end();
  });
//START SERVER
app.listen(PORT, () =>{
    console.log(`Server running on port ${PORT}`);
});