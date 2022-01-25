const db = require('mysql');
var cnn = db.createConnection({
    host:"127.0.0.1",
    user:"root",
    password:"",
    database:'api'
})
cnn.connect(function(err){
    if(err)
    {
        throw err
    }
    else{
        console.log("Connected!");
        cnn.query("insert into api_user values (2,'prakash@gmail.com','prakash',0987654321);",function(err,res){
            if(err)
            {
                console.log(err);
            }else{
                console.log(res)
            }
        })
        // cnn.query("select * from api_user",function(err,res){
        //     if(err)
        //     {
        //         console.log(err)
        //     }else{
        //     console.log(res)
        //     }
        // })
    }

})