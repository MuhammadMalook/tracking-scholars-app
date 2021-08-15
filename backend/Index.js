const express=require('express')
var mysql = require('mysql');
const cron = require('node-cron');
const app=express()
const cors=require('cors');
const fetch = require('node-fetch')
const PORT=5000

app.use(cors())             //Allow Cross origin access to resources
app.use(express.json());    //Used to access the values coming in body of post i.e req.body

//Get routes defined in routes folder

const addRoute=require('./routes/add')
const searchRoute=require('./routes/search')
const getGraph = require('./routes/graph')

app.use('/add',addRoute)
app.use('/search',searchRoute)
app.use('/graph',getGraph)


var task = cron.schedule('17 01 * * *', () => {

 
    var con = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "",
        database:"scholars"
      });
      
      // con.connect(function(err) {
      //     if (err) throw err;
      //     con.query("SELECT * FROM employees limit 2", function (err, result, fields) {
      //       if (err) throw err;
      //       console.log(result);
      //     });
      //   });
     
        con.connect(function(err) {
          if (err) throw err;
          console.log("Connected!");
          fetch("https://api.lunaciarover.com/stats/0x005ded4cf72a6642be48c8833c84444f150d66b0").then(res=>res.json()).then(res=>{
            var sql = "INSERT INTO cron (total_slp,date) VALUES ('"+res.total_slp+"', '"+new Date().toISOString().slice(0, 19).replace('T', ' ')+"')";
            con.query(sql, function (err, result) {
              if (err) throw err;
              console.log("1 record inserted");
            });
          })
         
        });
}, {
	scheduled: false,
    timezone:"Asia/Karachi"
});
task.start();



app.listen(PORT, ()=>{
    console.log(`SERVER IS LISTENING @ PORT ${PORT}`)
})
