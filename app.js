let inputText=document.querySelector("#input-text-area");
let btnTranslate=document.querySelector("#button-to-translate");
let outputText=document.querySelector("#output-text-area");
let serviceUrl="https://api.funtranslations.com/translate/navi.json";


btnTranslate.addEventListener("click", ClickHandler,false);



//function url process
function getTranslatorUrl(input){
return serviceUrl+"?text="+input ;
}

//function for error handling 
function errorHandler(error){
console.log("Error occured ",error);
alert("something wrong with server ! try again with some time");
}        
//funtion handler
function ClickHandler(){
let userText=inputText.value;

//calling server api url
fetch(getTranslatorUrl(userText))
.then(response =>response.json())
.then(json => {
let translatedText=json.contents.translated;
outputText.innerText=translatedText;
})
.catch(errorHandler);
}