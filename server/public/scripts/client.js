console.log('client.js sourced');

$( document ).ready( onReady );

function onReady(){
    getJokes();
    $(`#addJokeButton`).on('click', addJoke);
}

function getJokes() {
    $.ajax({
        method: 'GET',
        url: '/jokes'
    }).then(function (response) {
        console.log ( 'return:', response.jokes );
        let el = $( '#jokesReturn' );
        el.empty();
        response.jokes.forEach(response => {
            el.append( `<li> ${response.whoseJoke} ${response.jokeQuestion} ${response.punchLine}<li>`);
        })
    }).catch( function ( err ){
        alert( 'error getJokes' );
        console.log( err );
    })
}


function addJoke() {
    let objectToSend = {
        whoseJoke: $(`#whoseJokeIn`).val(),
        jokeQuestion: $(`#questionIn`).val(),
        punchLine: $(`#punchlineIn`).val()
    }
console.log(objectToSend);

$.ajax({
    method: `POST`,
    url: `/jokes`,
    data: objectToSend
})
.then(function (response){
    console.log( 'post return', response );
    $(`#whoseJokeIn`).val('');
    $(`#questionIn`).val('');
    $(`#punchlineIn`).val('');
    getJokes();
})
.catch( function (err){
    alert ( 'error in addJoke' );
    console.log( err )
})
}

