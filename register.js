const fs = require('fs');


// This must run inside a function marked `async`:
const handleRegister =(jsonDataFromUser,dataFromStorage)=>{
    let jsonDataFromStorage = JSON.parse(dataFromStorage); 

    let loginIndex = jsonDataFromStorage.userLogin.indexOf(jsonDataFromUser.login)
    if (loginIndex === -1){
        if(jsonDataFromUser.login.length > 0 && jsonDataFromUser.password.length > 0){
            
            jsonDataFromStorage.userLogin.push(jsonDataFromUser.login);
            jsonDataFromStorage.userPassword.push(jsonDataFromUser.password);
            jsonDataFromStorage = JSON.stringify(jsonDataFromStorage);
            fs.writeFile('./users.json', jsonDataFromStorage,(err) => {
                if (err) return console.log(err);
                else {
                    console.log({auth:true,info:"now registreted"});
                    return {auth:true,info:"now registreted"};
                }
            });
        }
        else{
            return {auth:false,info:"incorrect password or login"}
        }
    }
    else{
        return {auth:false,info:"already have such login"}
    }
    

}

module.exports = handleRegister;