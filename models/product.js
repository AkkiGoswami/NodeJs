import sql from "./db.js";
export  default class RepoManager{
    constructor(){
       
    }
   
    getAll(){
        return new Promise(resolve=>{
            let command= "select * from customer";
            console.log(command);
            sql.query(command,(err, rows, fields)=>{
                resolve(rows);
            })
        });
    }
        getById(Id){
            return new Promise(resolve=>{
                let command= "select * from customer where customerid="+Id;
                console.log(command);
                sql.query(command,(err, rows, fields)=>{
                    resolve(rows);
                })
            })
        }
        post(){
            return new Promise(resolve=>{
                let command= "Insert into customer values('${req.firstname}', '${req.lastame}','${req.phone}' ,'${req.emailid}')";
                console.log(command);
                sql.query(command,(err, rows, fields)=>{
                    resolve(rows);
                })
            })
        }
    };