console.log('client.js sourced');

$( document ).ready( onReady );
const outputDiv = document.getElementById('outputDiv')

function getJokes() {
    $.get("/jokes", function(data, status){
        const jokesList = document.createElement('UL');
        const jokeItemElements =  data.map((joke) => {
            const jokeItem = document.createElement('LI');

            const whoseJokeElement = document.createElement('P');
            whoseJokeElement.innerText = joke.whoseJoke;

            const jokeQuestionElement = document.createElement('P');
            jokeQuestionElement.innerText = joke.jokeQuestion;

            const punchLineElement = document.createElement('P');
            punchLineElement.innerText = joke.punchLine;

            jokeItem.append(whoseJokeElement, jokeQuestionElement, punchLineElement);
            return jokeItem;
        })

        jokesList.append(...jokeItemElements);
        outputDiv.appendChild(jokesList)
    });
}

function addJoke() {
    const whoseJokeInput = document.getElementById("whoseJokeIn")
    const questionInput = document.getElementById("questionIn")
    const punchLineInput = document.getElementById("punchlineIn")

    
}

function onReady() {
    console.log('DOM ready');
    getJokes()
}
