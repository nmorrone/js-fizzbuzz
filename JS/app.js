/* Esercizio FizzBuzz
stampare in console n da 1 a 100
multipli 3 = Fizz
multipli 5 = 5
multipli 3e5 = FizzBuzz */

//apro il ciclo con le condizioni
//assegno una variabile che incrementerà fino al numero 100

for (let counter = 1; counter <= 100; counter++) {

    /*definisco la variabile RESTO che
    mi servirà per capire se ci sono multipli di? in base al resto */

    let resto = counter % 3

    let restoCinque = counter % 5


    //aggiungo le condizioni indicate

    //condizione multiplo di 3 e 5
    /* inserisco 3 e 5 prima delle condizioni singole perché
    sennò mi prende in automatico le singole prima e non 
    mi stamperà FizzBuzz mai */

    if ((resto == 0) && (restoCinque == 0)) {

        console.log('FizzBuzz')
    }

    //successivamente inserisco quelle singole
    //condizione multiplo di 3
    else if (resto == 0) {
        console.log('Fizz')
    }
    //condizione multiplo di 5
    else if (restoCinque == 0) {
        console.log('Buzz')
    }

    //stampo in console
    else {
        console.log(counter)

    }

}