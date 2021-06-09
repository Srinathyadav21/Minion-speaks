var TranslateBtn = document.querySelector("#translate-btn")
var inputTxt=document.querySelector("#txt-input") 
var outputDiv = document.querySelector("#output") 
// outputDiv.innerText="i am srinath"
var serverURL=""


function clickEventhandler(){
    console.log("clicked")
    console.log(inputTxt)
}
TranslateBtn.addEventListener("click", clickEventhandler)