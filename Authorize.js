'use strict'
const handleAuthorithation =(jsonDataFromUser,dataFromStorage)=>{

    let jsonDataFromStorage = JSON.parse(dataFromStorage); 

    let loginIndex = jsonDataFromStorage.userLogin.indexOf(jsonDataFromUser.login)
    if (loginIndex !== -1){
        if(jsonDataFromUser.password === jsonDataFromStorage.userPassword[loginIndex]){
            return {auth:true,info:""}
        }
        else{
            return {auth:false,info:"incorrect password"}
        }
    }
    else{
        return {auth:false,info:"there are no user with such login"}
    }
}
module.exports = handleAuthorithation;