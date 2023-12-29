

const URL = "https://restcountries.com/v3.1/all";

let xmlObj = new XMLHttpRequest();
xmlObj.open("GET", URL);
xmlObj.send();
xmlObj.onload = function(){
    let resData = JSON.parse(xmlObj.response);
    resData.forEach(element => {
        console.log(element.name);
    });
}

