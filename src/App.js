import React, { Component } from "react";
import playingCards from "./js/playingCards/playingCardsMain";
import cardImage from "./js/playingCards/cardImageLookup";
import "./css/index.css"
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loaded: false,
      deck: {}
    };
    this.onHandleShuffle = this.onHandleShuffle.bind(this);
    this.onHandleFlip = this.onHandleFlip.bind(this);
  }
  componentDidMount() {
    let cards = playingCards();
    this.setState({
      deck: cards,
      loaded: true
    });
  }

  onHandleShuffle() {
    let newDeck = this.state.deck.shuffle();

    this.setState({
      deck: newDeck
    });
  }

  onHandleFlip(card) {
    let deck = this.state.deck;

    deck.cards[card].isFront = !deck.cards[card].isFront;

    this.setState({
      deck: deck
    });
  }

  render() {
    return (
      <div>
        <div className="button" onClick={this.onHandleShuffle}>
          Shuffle
        </div>
        <div className="holder">
          {this.state.loaded &&
            this.state.deck.cards.map((x, i, arr) => {
              return (
                <div
                  className="playing-card"
                  key={x.name + x.frontImage}
                  onClick={() => this.onHandleFlip(i)}
                >
                  {x.isFront ? cardImage(x.frontImage) : cardImage(x.backImage)}
                </div>
              );
            })}
        </div>
      </div>
    );
  }
}

export default App;
