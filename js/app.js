function getChallengeElement() {
  return document.getElementById("challenge");
}

function setChallenge(htmlChallenge) {
  getChallengeElement().innerHTML = htmlChallenge;
}

(function() {
  setChallenge("<p>LaLaraJenga</p>");
})()
