let inputText=document.querySelector("#input-text-area");
let btnTranslate=document.querySelector("#button-to-translate");
let outputText=document.querySelector("#output-text-area");
let serviceUrl="https://api.funtranslations.com/translate/navi.json";
const ClickHandler=()=>{
    let userText=inputText.value;
    fetch(getTranslatorUrl(userText))
    .then(response =>response.json())
    .then(json => {
    let translatedText=json.contents.translated;
    outputText.innerText=translatedText;
    })
    .catch(errorHandler);
    }
btnTranslate.addEventListener("click", ClickHandler,false);
const getTranslatorUrl=input=> serviceUrl+"?text="+input ;
const errorHandler=error=> alert("something wrong with server ! try again with some time");