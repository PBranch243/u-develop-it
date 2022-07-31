const exp = require("constants");
const express = require("express");
const PORT = process.env.PORT || 3001;
const app = express();
const db = require('./db/connection.js');
const apiRoutes = require('./routes/apiRoutes');
//This imports the inputcheck function used in the route to create new candidates
const inputCheck = require('./utils/inputCheck');
//NOW ADD MIDDLEWARE
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use('/api', apiRoutes);




//END OF FILE! THE FOLLOWING STATEMENTS MUST BE LAST
// Default response for any other request (Not Found)
app.use((req, res) => {
  res.status(404).end();
});
//START SERVER
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});