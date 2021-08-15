// var mysql = require('mysql');
// const cron = require('node-cron');
// const express = require('express');
// app = express();
// // Schedule tasks to be run on the server.
// var task = cron.schedule('08 13 * * *', () => {

 
//     var con = mysql.createConnection({
//         host: "localhost",
//         user: "root",
//         password: "",
//         database:"hr"
//       });
      
//       // con.connect(function(err) {
//       //     if (err) throw err;
//       //     con.query("SELECT * FROM employees limit 2", function (err, result, fields) {
//       //       if (err) throw err;
//       //       console.log(result);
//       //     });
//       //   });
      
//         con.connect(function(err) {
//           if (err) throw err;
//           console.log("Connected!");
//           var sql = "INSERT INTO jobs (job_id, job_title) VALUES ('3333', 'afc')";
//           con.query(sql, function (err, result) {
//             if (err) throw err;
//             console.log("1 record inserted");
//           });
//         });
// }, {
// 	scheduled: false,
//     timezone:"Asia/Karachi"
// });
// task.start();
// app.listen(3000);