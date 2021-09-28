console.log('client.js sourced');

$( document ).ready( onReady );

function getJokes() {
    const outputDiv = document.getElementById('outputDiv');

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
    const whoseJokeInput = document.getElementById("whoseJokeIn").value;
    const questionInput = document.getElementById("questionIn").value;
    const punchLineInput = document.getElementById("punchlineIn").value;

//     $.post("demo_test_post.asp",
//   {
//     name: "Donald Duck",
//     city: "Duckburg"
//   },
//   function(data, status){
//     alert("Data: " + data + "\nStatus: " + status);
//   });

    const newJoke = {
        whoseJoke: whoseJokeInput,
        questionJoke: questionInput,
        punchLine: punchLineInput,
    }

    console.log({ newJoke })

    // $.post("/jokes", function(data, status){

    // })
}

function onReady() {
    console.log('DOM ready');
    getJokes()

    const addJokeButton = document.getElementById('addJokeButton');

    addJokeButton.onclick = addJoke;
}
