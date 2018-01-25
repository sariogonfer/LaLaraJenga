CHALLENGE_LIST = [
  "Bebete 1U a mi salud",
  "Bebete 2U a la salud de todos",
  "Beben los chicos. Si no hay, bebeis todas",
  "Beben las chicas. Si no hay, bebeis todos",
  "Antes de tu siguiente turno, debes girar 5 veces sobre tí mismo. Este efecto aplica a la siguiente partida en caso de que acabe antes.",
  "Elige un número del 1 al 5. Elige un color (sin tonalidad) del dado. Tira el dado. Si aciertas, mandas beber el número de U anterior (puedes repartirlos), si fallas, lo bebes tú.",
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
  var headerElem = document.createElement("div");
  headerElem.innerHTML = "SI FALLAS, BEBE 1U";
  quizElement.append(headerElem);
  xmlHttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      console.log(this.responseText);
      var res = JSON.parse(this.responseText).results[0];
      var question = res.question;
      var questionElem = document.createElement("p");
      questionElem.innerHTML = question;
      quizElement.append(questionElem);
      var correct = res.correct_answer;
      var answers = res.incorrect_answers.concat(correct);
      var answersElem = document.createElement("ul");
      quizElement.append(answersElem);
      while (answers.length > 0) {
        var i = Math.floor(Math.random() * answers.length);
        var li = document.createElement("li");
        li.innerHTML = answers.splice(i, 1);
        answersElem.append(li);
      };
      var button = document.createElement("input");
      button.setAttribute("type", "button");
      button.setAttribute("class", "resolve");
      button.value = "RESPUESTA";
      quizElement.append(button);
      button.onclick = function() {
        this.value = correct;
      }
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
  var genList = [generateQuizChallenge, generateChallengeFromList]
  return  genList[Math.floor(Math.random() * genList.length)];
}

function newChallenge() {
  setChallenge(getRandomGenerator()());
}

(function() {
  newChallenge();
})()
