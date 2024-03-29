import React from 'react';
import PropTypes from 'prop-types';
import CheckTrunfo from './CheckTrunfo';

class Form extends React.Component {
  render() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      // cardTrunfo,
      hasTrunfo,
      isSaveButtonDisabled,
      onInputChange,
      onSaveButtonClick,
    } = this.props;

    return (
      <section className="form">
        <label htmlFor="name">
          Nome
          <input
            name="cardName"
            value={ cardName }
            onChange={ onInputChange }
            data-testid="name-input"
            id="name"
            type="text"
          />
        </label>
        <label htmlFor="description">
          Descrição
          <textarea
            name="cardDescription"
            value={ cardDescription }
            onChange={ onInputChange }
            data-testid="description-input"
            id="description"
          />
        </label>
        <label htmlFor="attr1">
          Attr01
          <input
            name="cardAttr1"
            value={ cardAttr1 }
            onChange={ onInputChange }
            data-testid="attr1-input"
            type="number"
            id="attr1"
            max="90"
            min="0"
          />
        </label>
        <label htmlFor="attr2">
          Attr02
          <input
            name="cardAttr2"
            value={ cardAttr2 }
            onChange={ onInputChange }
            data-testid="attr2-input"
            type="number"
            id="attr2"
            max="90"
            min="0"
          />
        </label>
        <label htmlFor="attr3">
          Attr03
          <input
            name="cardAttr3"
            value={ cardAttr3 }
            onChange={ onInputChange }
            data-testid="attr3-input"
            type="number"
            id="attr3"
            max="90"
            min="0"
          />
        </label>
        <label htmlFor="img-input">
          Imagem
          <input
            name="cardImage"
            value={ cardImage }
            onChange={ onInputChange }
            data-testid="image-input"
            id="img-input"
            type="text"
          />
        </label>
        <label htmlFor="rare">
          Raridade
          <select
            name="cardRare"
            value={ cardRare }
            onChange={ onInputChange }
            data-testid="rare-input"
            id="rare"
          >
            <option value="normal">normal</option>
            <option value="raro">raro</option>
            <option value="muito raro">muito raro</option>
          </select>
        </label>
        { hasTrunfo
          ? <p>Você já tem um Super Trunfo em seu baralho</p>
          : <CheckTrunfo { ... this.props } />}
        <button
          disabled={ isSaveButtonDisabled }
          onClick={ onSaveButtonClick }
          data-testid="save-button"
          type="submit"
        >
          Salvar
        </button>
      </section>
    );
  }
}

Form.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
  hasTrunfo: PropTypes.bool.isRequired,
  isSaveButtonDisabled: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
};

export default Form;
