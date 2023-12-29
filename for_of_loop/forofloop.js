
const url = "https://restcountries.com/v3.1/all";

let objXml = new XMLHttpRequest();
objXml.open("GET", url);
objXml.send();
objXml.onload = function(){
    let data = JSON.parse(objXml.response);
    for(let key of Object.values(data)){
        console.log(key);
    }
}

