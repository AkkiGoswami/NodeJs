import mysql from "mysql";
const conUri={
    host:"localhost",
    user:"root",
    password:"ankit123",
    database:"customermanagement"
}
const connection=mysql.createConnection(conUri);
connection.connect((err)=>{
    if(!err){
        console.log("connect with database");
    }
    else{
        console.log(err);
    }
})
export default connection;