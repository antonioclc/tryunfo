import React from 'react';
import Form from './components/Form';
import Card from './components/Card';

class App extends React.Component {
  constructor() {
    super();

    this.onInputChange = this.onInputChange.bind(this);
    this.onSaveButtonClick = this.onSaveButtonClick.bind(this);
    this.hasTrunfo = this.hasTrunfo.bind(this);
    this.getCard = this.getCard.bind(this);

    this.state = {
      cardName: '',
      cardDescription: '',
      cardAttr1: '',
      cardAttr2: '',
      cardAttr3: '',
      cardImage: '',
      cardRare: 'normal',
      cardTrunfo: false,
      hasTrunfo: false,
      isSaveButtonDisabled: true,
      savedCards: [],
    };
  }

  onInputChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    }, () => this.buttonChange());
  }

  onSaveButtonClick() {
    const { cardName, cardDescription,
      cardAttr1, cardAttr2, cardAttr3,
      cardImage, cardRare, cardTrunfo, savedCards } = this.state;
    const addCard = {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
    };
    savedCards.push(addCard);
    this.setState({
      cardName: '',
      cardDescription: '',
      cardAttr1: '0',
      cardAttr2: '0',
      cardAttr3: '0',
      cardImage: '',
      cardRare: 'normal',
    }, () => this.hasTrunfo());
  }

  getCard() {
    const { savedCards } = this.state;
    return savedCards.map((card) => <Card key={ card.cardName } { ...card } />);
  }

  buttonChange() {
    const { cardName, cardDescription,
      cardAttr1, cardAttr2, cardAttr3,
      cardImage, cardRare } = this.state;
    const inputsLength = [
      cardName.length, cardDescription.length, cardImage.length, cardRare.length];
    const verifyCard = inputsLength.every((inputLength) => inputLength > 0);
    const attrValues = [cardAttr1,
      cardAttr2, cardAttr3].map((number) => Number(number));
    const maxAttr = 90;
    const sumAttr = 210;
    const verify1Attr = attrValues.every((attr) => attr >= 0 && attr <= maxAttr);
    const verify2Attr = attrValues.reduce((acc, cur) => acc + cur) <= sumAttr;
    if (verifyCard && verify1Attr && verify2Attr) {
      this.setState({
        isSaveButtonDisabled: false,
      });
    } else {
      this.setState({
        isSaveButtonDisabled: true,
      });
    }
  }

  hasTrunfo() {
    const { savedCards } = this.state;
    const verifyTrunfo = savedCards.some((card) => card.cardTrunfo);
    this.setState({
      hasTrunfo: verifyTrunfo,
    }, () => this.getCard);
  }

  render() {
    return (
      <div>
        <header>Tryunfo</header>
        <section className="app">
          <Form
            createCheckbox={ this.createCheckbox }
            hasTrunfo={ this.hasTrunfo }
            onSaveButtonClick={ this.onSaveButtonClick }
            onInputChange={ this.onInputChange }
            { ...this.state }
          />
          <Card onInputChange={ this.onInputChange } { ...this.state } />
        </section>
        <section>
          {
            this.getCard()
          }
        </section>
      </div>
    );
  }
}

export default App;
