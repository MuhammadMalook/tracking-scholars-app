const express=require('express')
const route=express.Router()
const con=require('./connection')   //Import connection from connection.js


route.post('/' , (req , res)=>{

    const fullName=req.body.Name
    const address=req.body.Ronin_Address

    con.getConnection(function(err){
        if(err){
            return console.error("ERROR " + err)
        }
    con.query(`INSERT INTO users VALUES(?,?)`,[fullName, address],(error, row, column)=>{

        if(error)
            return res.send("ERROR OCCURED")
        
        res.send({message:"Added to Users"})
    })        
        
    }
   
    )   
})

module.exports=route