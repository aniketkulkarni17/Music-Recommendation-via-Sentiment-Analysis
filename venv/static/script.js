function renderPages(res) {
  if (res === 1 || res == 2) {
    let value = Math.floor(Math.random() * 3);
    if (value == 1 || value == 2)
      window.location.href = "http://127.0.0.1:5000/sad";
    else window.location.href = "http://127.0.0.1:5000/sad2";
  } else if (res === 4 || res === 5)
    window.location.href = "http://127.0.0.1:5000/happy";
  else if (res === 10) window.location.href = "http://127.0.0.1:5000/episodes";
  else if (res == 20) window.location.href = "http://127.0.0.1:5000/curated2";
}

function sendUserInfo(userText) {
  let userInfo = {
    input: userText,
  };
  const request = new XMLHttpRequest();
  request.open("POST", `/processUserInfo/${JSON.stringify(userInfo)}`);
  request.onload = () => {
    const flaskMessage = request.responseText;
    console.log(`Sentiment computed: ${flaskMessage}`);
    res = parseInt(flaskMessage);
    result = res;
    renderPages(res);
  };
  request.send();
}

console.warn = () => {};
const button = document.querySelector("#submit-input");
let userInput = document.querySelector("#name");

button.addEventListener("click", (event) => {
  event.preventDefault();
  let userText = getInput();
  if (userText == 0) return;
  console.log(userText);
  var loading = document.querySelector(".loading");
  var main = document.querySelector("main");
  var footer = document.querySelector("footer");
  footer.style.display = "none";
  main.style.display = "none";
  loading.style.display = "";
  sendUserInfo(userText);
});

userInput.addEventListener("keyup", function (event) {
  event.preventDefault();
  if (event.keyCode === 13) {
    button.click();
    console.log("Enter click");
  }
});

function getInput(event) {
  let userInput = document.querySelector("#name").value;
  var format = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>?~]/;
  if (userInput == "") {
    alert("Please enter valid input!");
    return 0;
  } else return userInput;
}
