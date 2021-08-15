const mysql=require('mysql')    //npm i mysql

const conStr= mysql.createPool({
    host:"localhost",
    user:"root",
    password:"",
    database:"scholars"
}
)
module.exports=conStr;