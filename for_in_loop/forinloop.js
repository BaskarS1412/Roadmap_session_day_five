
const URL = "https://restcountries.com/v3.1/all";

let objXml = new XMLHttpRequest();

objXml.open("GET", URL);

objXml.send();

objXml.onload = function(){
    let resData = JSON.parse(objXml.response);
    for(let val in resData){
        console.log(resData[val].name);
    }
}




