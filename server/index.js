const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Credentials", "true");
    res.header("Access-Control-Allow_Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
app.use(express.json());
app.use(cors({origin: ["http://localhost:3000"]}))

const db = require('./models');

const Employees = require('./routes/Employees');
app.use("/", Employees);


const port = 3001;
db.sequelize.sync().then(() => {
    app.listen(port, () => {
        console.log("port is running on " + port);
    });
});