export default class Deck {
  constructor(cards) {
    this.cards = cards;
  }
}

/* shuffles the deck */
/*
 * the shuffles deck can be accessed
 * through cards
 *
 */
Deck.prototype.shuffle = function shuffle() {
  for (let i = this.cards.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * this.cards.length);
    let OneChange = this.cards[i];
    let TwoChange = this.cards[j];

    this.cards[i] = TwoChange;
    this.cards[j] = OneChange;
  }
  return this;
}; //end of shuffle prototype

/* deals seven cards to number of players */
Deck.prototype.dealSeven = function dealSeven(players) {}; //end of deal seven prototype

/* deals five cards to number of players */
Deck.prototype.dealFive = function dealFive(players) {}; //end of deal five prototype

/* draws one card to player */
Deck.prototype.drawOne = function drawOne(player) {}; //end of draw one prototype

/* draws two cards to player */
Deck.prototype.drawTwo = function drawTwo(player) {}; //end of draw two prototype

/* draws three cards to player */
Deck.prototype.drawThree = function drawThree(player) {}; // end of draw three prototype

/* cuts the deck to reveal a card */
Deck.prototype.cutDeck = function cutDeck(player) {}; // end of cut deck prototype
