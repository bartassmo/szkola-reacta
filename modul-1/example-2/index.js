let prompt = require('./node_modules/prompt');

let schema = {
    properties: {
        number: {
            description: 'Podaj liczbę z zakresu 1-10: '
        }
    }
};

const random = Math.floor(Math.random() * 10) + 1;

function guessNumber() {

    prompt.start();

    prompt.get(schema, function (err, result) {
        if(parseInt(result.number) !== random) {
            console.log(`Niestety nie jest to ${result.number}. \nSpróbuj ponownie:`);
            guessNumber();
        } else {
            console.log(`Gratulacje! Moja liczba to ${parseInt(result.number)}!`);
        }
    });

  }

guessNumber();





