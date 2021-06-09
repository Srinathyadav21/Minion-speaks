var TranslateBtn = document.querySelector("#translate-btn")
var inputTxt = document.querySelector("#txt-input")
var outputDiv = document.querySelector("#output")
// outputDiv.innerText="i am srinath"
var serverURL = "	https://api.funtranslations.com/translate/minion.json";

function Userinput(text) {
    return serverURL + "?" + "text=" + text;
}


function clickEventHandler() {
    var textinput = inputTxt.value;
    fetch(Userinput(textinput))
        .then(response => response.json())
        .then(json => {
            var translatedtext = json.contents.translated;
            outputDiv.innerText = translatedtext;
        })


}
TranslateBtn.addEventListener("click", clickEventHandler)