CHALLENGE_LIST = [
  "Bebete 1U a mi salud",
  "Bebete 2U a la salud de todos",
  "Beben los chicos. Si no hay, bebeis todas",
  "Beben las chicas. Si no hay, bebeis todos"
]

function getRandomChallengeFromList(list) {
  var i = Math.floor(Math.random() * list.length);
  return list[i];
}

function generateChallengeFromList() {
  var itemElement = document.createElement("p");
  var text = document.createTextNode(getRandomChallengeFromList(CHALLENGE_LIST));
  itemElement.appendChild(text);
  return itemElement;
}

function generateQuizChallenge() {
  var apiUri = "https://opentdb.com/api.php?amount=1";
  var xmlHttp = new XMLHttpRequest();
  var quizElement = document.createElement("div");

  xmlHttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      quizElement.innerText = this.responseText;
    }
  };

  xmlHttp.open("GET", apiUri, true);
  xmlHttp.send();

  return quizElement
}

function getChallengeElement() {
  return document.getElementById("challenge");
}

function setChallenge(elemChallenge) {
  var elem = getChallengeElement();
  elem.innerHTML = '';
  getChallengeElement().appendChild(elemChallenge);
}

function getRandomGenerator() {
  return  generateQuizChallenge;
}

function newChallenge() {
  setChallenge(getRandomGenerator()());
}

(function() {
  newChallenge();
})()
