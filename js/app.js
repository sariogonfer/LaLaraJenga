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
  return "<p>" + getRandomChallengeFromList(CHALLENGE_LIST) + "</p>";
}

function getChallengeElement() {
  return document.getElementById("challenge");
}

function setChallenge(htmlChallenge) {
  getChallengeElement().innerHTML = htmlChallenge;
}

(function() {
  setChallenge(generateChallengeFromList());
})()
