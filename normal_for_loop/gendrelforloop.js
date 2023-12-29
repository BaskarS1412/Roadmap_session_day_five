

const URL = "https://restcountries.com/v3.1/all";

let xmlobject = new XMLHttpRequest();

xmlobject.open("GET", URL);

xmlobject.send();

xmlobject.onload = () => {
    var responceData = JSON.parse(xmlobject.response);
    for(let i = 0; i < responceData.length; i++){
        console.log(responceData[i]);
    }    
}
