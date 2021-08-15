const express=require('express')
const route=express.Router()
const con=require('./connection')   //Import connection from connection.js

route.get('/' , (req , res)=>{
   
    con.getConnection(function(err){
      
        if(err){
            return console.error("ERROR ")
        }
    con.query(`SELECT * FROM cron order by date DESC LIMIT 7`,(error, row, column)=>{
        if(error)
            return res.send("ERROR OCCURED")
        
        res.send(JSON.stringify({row}))
    })        
        
    })       
})

module.exports=route