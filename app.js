var input = document.querySelector("#txt-input");
var btn = document.querySelector("#btn-translate");
var output = document.querySelector("#txt-output");

var ApiURL="https://api.funtranslations.com/translate/valyrian.json";

function getURL(text){
    return ApiURL+"?"+"text="+text;
}

function errorHandler(error){
    console.log("Error Occured",error);
    alert("Please try again after some time")
}

function clickHandler(){
    var readInput = input.value;

    fetch(getURL(readInput))
    .then(response=>response.json())
    .then(json=>{
        var displaytxt = json.contents.translated;
        output.innerText = displaytxt;
    })
    .catch(errorHandler)
};


btn.addEventListener("click",clickHandler);

