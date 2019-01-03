const express = require('express');
const path = require('path');
const getDetails = require('./mock-data/topCompaniesInCity');  //added this things only for testing, we can use this structure to serve multiple data via this file
const getMajorIndustry = require('./mock-data/majorIndustryMockData');
const getCompanies = require('./mock-data/companies');
const app = express();
const port = process.env.PORT || 5000;

app.use(express.static(path.join(__dirname,'/build')));

// console.log that your server is up and running
app.listen(port, () => console.log(`Listening on port ${port}`));

// An api endpoint that returns a short list of items
/*app.get('/api/getList', (req, res) => {
    var list = ["item1", "item2", "item3"];
    res.send(list);
    console.log('Sent list of items');
});  

// An api endpoint that returns a short list of items
app.get('/api/top-8-comapnies-in-cities', (req,res) => {    //added this things only for testing, we can use this structure to serve multiple data via this file
    var list = getDetails();
    res.send(list);
    console.log('Sent treasure');
});

//serving data of sectors along with number of comanies under that category
app.get('/api/major-industry', (req,res) => {    //added this things only for testing, we can use this structure to serve multiple data via this file
    var list = getMajorIndustry();
    res.send(list);
    console.log('Sent list of major industry');
});*/

//serving data of sectors along with number of comanies under that category
app.get('/api/companies-list', (req,res) => {    //added this things only for testing, we can use this structure to serve multiple data via this file
    //var companies = getCompanies();
    var test = " data from json file";
    res.send(test);
    console.log('Sent list of companies');
});
