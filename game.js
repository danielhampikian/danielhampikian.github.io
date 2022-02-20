document.addEventListener('DOMContentLoaded', () => {
    const cardArray = 
    [
        {
        name:'Fire' ,
        img: 'flame.jpg',
        text: 'It burns'
        }, 
        {
        name:'Fire',
        img: 'flame.jpg',
        text: 'It burns'
        }, 
        {
        name:'Fire' ,
        img: 'flame.jpg',
        text: 'It burns'
        },
        {
            name:'Fire' ,
            img: 'flame.jpg',
            text: 'It burns'
            }, 
            {
            name:'Fire',
            img: 'flame.jpg',
            text: 'It burns'
            }, 
            {
            name:'Fire' ,
            img: 'flame.jpg',
            text: 'It burns'
            }, 
            {
            name:'Fire' ,
            img: 'flame.jpg',
            text: 'It burns'
            }
            
    ]

    const grid = document.querySelector('.card-grid');
    const resultDisplay = document.querySelector('#score');
    cardArray.sort(() => 0.5 - Math.random());
    let cardsChosen = []
    let cardsChosenId = []
    let cardsWon = []

    function intitGame() {
        for (let i = 0; i< cardArray.length; i++) {
            var card = document.createElement('div');
            card.setAttribute('id', i); 
            card.setAttribute('class', 'card');
            card.innerHTML +='<div class="card-text"><h3>' + cardArray[i].name + '</h3> </div><img class="card-image" src=' + cardArray[i].img + '><div class="card-text"><h4><p>' + cardArray[i].text + '</p></div></h4>'
            card.addEventListener('click', clickedCard);
            card-grid.appendChild(card);
        }
    }
        
    function checkForMatch() {
        const cards = document.querySelectorAll('div');
        const optionOneId= cardsChosenId[0]
        const optionTwoId = cardsChosenId[1]

        if (optionOneId == optionTwoId) {
            cards[optionOneId].setAttribute('src', 'water.jpg');
            cards[optionTwoId].setAttribute('src', 'water.jpg');
            alert('clicked same image');
        }
        else if (cardsChosen[0] ===cardsChosen[1])
    }
    function clickedCard() {
        
        var cardId = this.getAttribute('id');
        this.setAttribute('class', 'card-zoom');
        console.log("Card clicked " + cardId);
    }
    
    intitGame();
});
