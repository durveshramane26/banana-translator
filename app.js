var inputText = document.querySelector("#input-text");
var outputText = document.querySelector("#output-text");
var eventBtn = document.querySelector(".btn-primary");

// eventBtn.addEventListener("click", (e) => {
//     e.preventDefault();

//     var serverUrl = "https://api.funtranslations.com/translate/minion.json" + "?" + "text=" + inputText.value;

//     function errorHandler(error) {
//         alert("something wrong happen! please try again later.", error);
//     }

//     fetch(serverUrl)
//         .then((res) => {
//             return res.json();
//     })
//     .then((data) => {
//         var translatedText = data.contents.translated;
//         outputText.innerHTML = translatedText;
//     })
//     .catch(errorHandler);
// });

const serverurl = "https://api.funtranslations.com/translate/minion.json?text="

function generateURL(text) {
    return serverurl + text ;
}

function clickHandler () {
    
    if(inputText.value === undefined || inputText.value === "") {
        window.alert('Empty input!! Please enter text to get its translation');
    }

    else {
        fetch(generateURL(inputText.value))
        .then(response => response.json())
        .then(json => {outputText.innerHTML = json.contents.translated});

    }
}

eventBtn.addEventListener('click', clickHandler);