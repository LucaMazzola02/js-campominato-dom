/*Consegna

Copiamo la griglia fatta ieri nella nuova repo e aggiungiamo la logica del gioco (attenzione: non bisogna copiare tutta la cartella dell'esercizio ma solo l'index.html, e le cartelle js/ css/ con i relativi script e fogli di stile, per evitare problemi con l'inizializzazione di git).

Il computer deve generare 16 numeri casuali nello stesso range della difficoltà prescelta: le bombe.
Attenzione: nella stessa cella può essere posizionata al massimo una bomba, perciò nell’array delle bombe non potranno esserci due numeri uguali.

In seguito l'utente clicca su una cella: se il numero è presente nella lista dei numeri generati - abbiamo calpestato una bomba - la cella si colora di rosso e la partita termina. Altrimenti la cella cliccata si colora di azzurro e l'utente può continuare a cliccare sulle altre celle.

La partita termina quando il giocatore clicca su una bomba o quando raggiunge il numero massimo possibile di numeri consentiti (ovvero quando ha rivelato tutte le celle che non sono bombe).
Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha cliccato su una cella che non era una bomba.*/


const buttonElement = document.querySelector('button');
buttonElement.addEventListener('click', function(){

    startNewGame();

});





function startNewGame(){

/*creation grid*/
    const gridElement = document.getElementById('grid');
     
/*level-difficult*/
    const level = parseInt(document.getElementById('level-difficult').value);

    let userScore = 0;
    let cellsNumber = 0;
    let cellsClass = "";
    let gameOver = false;


    if(level === 0){

        cellsNumber = 100;
        cellsClass = 'cell-easy';

    }else if(level === 1){

        cellsNumber = 81;
        cellsClass = 'cell-medium';

    }else{

        cellsNumber = 49;
        cellsClass = 'cell-hard';
    };




    const bombList = randomNumber(1, cellsNumber, 16);
    console.log(bombList);


    gridElement.innerHTML = "";



    
/*creazione celle*/
for (let index = 1; index <= cellsNumber; index++) {

    const actualCell =  document.createElement('div');
    actualCell.classList.add(cellsClass);
    
/*evento al click della cella*/
    actualCell.addEventListener('click', function(){


        if(!gameOver){   
        if(bombList.includes(index)){

            this.classList.add('disarm');
            alert('HAI PERSO :( , il tuo risultato è: ' + userScore);
            gameOver = true;

        }else{

            if(this.classList.contains('correct')){

                console.log(userScore, 'hai già cliccato su quella cella!');

            }else{

                console.log(userScore);
               userScore++;
               this.classList.add('correct'); 
            }

            
        };

        }else{

            alert('Inizia una nuova partita');

        };

    });



    

    gridElement.appendChild(actualCell);
 
};
};






function randomNumber(minNum, MaxNum, elements){

    const randomNumberList = [];

    if((MaxNum-minNum) < elements){
        return[]
    };

    while(randomNumberList < elements){

        const newRandomNumber = getRandomINt[minNum, MaxNum];

        if( !randomNumberList.includes(newRandomNumber)){
            randomNumberList.push(newRandomNumber);
        };
    };

    return randomNumberList;
};


function getRandomINt(minNumber, maxNumber){

    const singleNumber =  Math.floor(Math.random()*(maxNumber-minNumber)+minNumber);

    return singleNumber;

};