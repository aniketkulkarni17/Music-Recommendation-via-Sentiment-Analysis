const relevanceDropDown = document.querySelector(".songs-dropdown");
const submitRelevanceButton = document.querySelector(".submit-relevance");
const newRelevanceDrp = document.querySelector("#select-profession");
const submitTest = document.querySelector("#submit-test");

function sendIrrelevantSong(songName) {
  let songInfo = {
    input: songName,
  };
  const request = new XMLHttpRequest();
  request.open("POST", `/processSongInfo/${JSON.stringify(songInfo)}`);
  request.onload = () => {
    const serverMessage = request.responseText;
    console.log(serverMessage);
  };
  request.send();
}

// submitRelevanceButton.addEventListener("click", () => {
//   let songName = relevanceDropDown.value;
//   sendIrrelevantSong(songName);
// });

submitTest.addEventListener("click", () => {
  let songName = newRelevanceDrp.value;
  sendIrrelevantSong(songName);
});
