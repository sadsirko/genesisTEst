'use strict'
function sendInfo(method,url,info){
  return new Promise(function(resolve,rejected){
    let xml = new XMLHttpRequest();

    xml.onload = function(){
      if (this.status === 200 )
      resolve(xml.response)
      else
      rejected(Error(xml.statusText0))
    }
    xml.open(method, url);    
    xml.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    xml.send(info);
  })
}
window.onload=()=>{

function sendFields(){
  let json={"login":logField.value,"password":passField.value}
  json = JSON.stringify(json)
  let prom = sendInfo("POST","/user/trycreate",json)
  prom.then( (res)=>{
    console.log(res)
  }).catch((err)=>{console.log(err)})
}

let logField = document.getElementById("loginField");
let passField = document.getElementById("passwordField");
let logInButton = document.getElementById("regB")

logInButton.addEventListener('click',sendFields)
}
  
