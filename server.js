const express = require("express");
const bodyParser =  require("body-parser");

const app = express();
const port = process.env.PORT || 5000;
const employeeRoutes = require('./src/routes/employee.routes');
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());


app.use('/api/v1/employees', employeeRoutes)

app.listen(port, ()=>{
    console.log(`Server is listening to the port ${port}`);
});