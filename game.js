document.addEventListener('DOMContentLoaded', () => {
    const cardArray = 
    [
        {
        name:'1' ,
        img: 'd1.png',
        text: 'one'
        }, 
        {
        name:'2',
        img: 'd2.png',
        text: 'Two'
        }, 
        {
        name:'3' ,
        img: 'd3.png',
        text: 'Three'
        },
        {
            name:'4' ,
            img: 'd4.png',
            text: 'Four'
            }, 
            {
            name:'5',
            img: 'd5.png',
            text: 'Five'
            }, 
            {
            name:'6' ,
            img: 'd6.png',
            text: 'Six'
            },
            {
                name:'1' ,
                img: 'd1.png',
                text: 'one'
                }, 
                {
                name:'2',
                img: 'd2.png',
                text: 'Two'
                }, 
                {
                name:'3' ,
                img: 'd3.png',
                text: 'Three'
                },
                {
                    name:'4' ,
                    img: 'd4.png',
                    text: 'Four'
                    }, 
                    {
                    name:'5',
                    img: 'd5.png',
                    text: 'Five'
                    }, 
                    {
                    name:'6' ,
                    img: 'd6.png',
                    text: 'Six'
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
            card.setAttribute('data-id', i); 
            card.setAttribute('class', 'card');
            card.innerHTML +='<div class="card-text"><h3></h3> </div><img class="card-image" src=blank.jpg><div class="card-text"><h4><p></p></div></h4>'
            card.addEventListener('click', flipCard);
            grid.appendChild(card);
        }
    }

    function clearHtml(clearElement){
        clearElement.innerHTML = '';
    }
      //check for matches
  function checkForMatch() {
    const cards = document.getElementsByClassName('card');
    const optionOneId = cardsChosenId[0]
    const optionTwoId = cardsChosenId[1]
    
    if(optionOneId == optionTwoId) {
      clearHtml(cards[optionOneId]);
      clearHtml(cards[optionTwoId]);
      cards[optionOneId].innerHTML ='<div class="card-text"><h3></h3> </div><img class="card-image" src=blank.jpg><div class="card-text"><h4><p></p></div></h4>'
      cards[optionTwoId].innerHTML ='<div class="card-text"><h3></h3> </div><img class="card-image" src=blank.jpg><div class="card-text"><h4><p></p></div></h4>'
      alert('You have clicked the same image!')
    }
    else if (cardsChosen[0] === cardsChosen[1]) {
      alert('You found a match')
      clearHtml(cards[optionOneId]);
      clearHtml(cards[optionTwoId]);
      cards[optionOneId].innerHTML ='<div class="card-text"><h3></h3> </div><img class="card-image" src=white.jpg><div class="card-text"><h4><p></p></div></h4>'
      cards[optionTwoId].innerHTML ='<div class="card-text"><h3></h3> </div><img class="card-image" src=white.jpg><div class="card-text"><h4><p></p></div></h4>'
      cards[optionOneId].removeEventListener('click', flipCard)
      cards[optionTwoId].removeEventListener('click', flipCard)
      cardsWon.push(cardsChosen)
    } else {
        clearHtml(cards[optionOneId]);
        clearHtml(cards[optionTwoId]);
      cards[optionOneId].innerHTML ='<div class="card-text"><h3></h3> </div><img class="card-image" src=blank.jpg><div class="card-text"><h4><p></p></div></h4>'
      cards[optionTwoId].innerHTML ='<div class="card-text"><h3></h3> </div><img class="card-image" src=blank.jpg><div class="card-text"><h4><p></p></div></h4>'
      alert('Sorry, try again')
    }
    cardsChosen = []
    cardsChosenId = []
    resultDisplay.textContent = cardsWon.length
    if  (cardsWon.length === cardArray.length/2) {
      resultDisplay.textContent = 'Congratulations! You found them all!'
    }
  }

  //flip your card
  function flipCard() {
    let cardId = this.getAttribute('data-id')
    cardsChosen.push(cardArray[cardId].name)
    cardsChosenId.push(cardId)
    this.innerHTML ='<div class="card-text"><h3>' + cardArray[cardId].name + '</h3> </div><img class="card-image" src=' + cardArray[cardId].img + '><div class="card-text"><h4><p>' + cardArray[cardId].text + '</p></div></h4>'

    if (cardsChosen.length ===2) {
      setTimeout(checkForMatch, 500)
    }
  }
    intitGame();
});
