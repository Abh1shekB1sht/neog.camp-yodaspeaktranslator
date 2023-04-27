var button_Clicked = document.querySelector("#button-Translate");
var txtInput = document.querySelector("#txt-input");
var output = document.querySelector("#output-Div");

var serverURL = "https://api.funtranslations.com/translate/yoda.json";

function getTranslationURL(input) {
  return serverURL + "?" + "text=" + input;
}

// function errorOccured(error){
//   console.log("error" , error)
//   alert("An error has occured, plz come back after some time.")
// }

function btnclickhandler() {
  var inputText = txtInput.value;

  fetch(getTranslationURL(inputText))
    .then((response) => response.json())
    .then((json) => {
      var translatedText = json.contents.translated;
      output.innerText = translatedText;
    });
  // .catch(errorOccured())
}

button_Clicked.addEventListener("click", btnclickhandler);
