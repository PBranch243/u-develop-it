const exp = require("constants");
const express = require("express");
const PORT = process.env.PORT || 3001;
const app = express();
//NOW ADD MIDDLEWARE
app.use(express.urlencoded({extended: false}));
app.use(express.json());






//END OF FILE! THE FOLLOWING STATEMENTS MUST BE LAST
// Default response for any other request (Not Found)
app.use((req, res) => {
    res.status(404).end();
  });
//START SERVER
app.listen(PORT, () =>{
    console.log(`Server running on port ${PORT}`);
});