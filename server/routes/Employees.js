const express = require('express');
const app = express();
const router = express.Router();
const { Employees, sequelize } = require('../models');

app.use(express.json());

router.post("/postEmployees", async(req, res) => {
    try{
        const employees = req.body;
        await Employees.create(employees);

        return res.json("Ok na boss"); 
    }catch(err){
        res.json(err + "Field to insert employee");
    }
});

router.get("/getEmployees", async(req, res) => {
    const employees = await Employees.findAll();
    res.json(employees);
});

module.exports = router;