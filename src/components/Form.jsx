import React from 'react';

class Form extends React.Component {
  render() {
    return (
      <section className="form">
        <label htmlFor="name">
          Nome
          <input data-testid="name-input" id="name" type="text" />
        </label>
        <label htmlFor="description">
          Descrição
          <textarea data-testid="description-input" id="description" />
        </label>
        <label htmlFor="attr1">
          Attr01
          <input data-testid="attr1-input" type="number" id="attr1" />
        </label>
        <label htmlFor="attr2">
          Attr02
          <input data-testid="attr2-input" type="number" id="attr2" />
        </label>
        <label htmlFor="attr3">
          Attr03
          <input data-testid="attr3-input" type="number" id="attr3" />
        </label>
        <label htmlFor="img-input">
          Imagem
          <input data-testid="image-input" id="img-input" type="text" />
        </label>
        <label htmlFor="rare">
          Raridade
          <select data-testid="rare-input" name="" id="rare">
            <option value="normal">normal</option>
            <option value="raro">raro</option>
            <option value="muito raro">muito raro</option>
          </select>
        </label>
        <label htmlFor="checkbox">
          Super Trybe Trunfo
          <input data-testid="trunfo-input" id="checkbox" type="checkbox" />
        </label>
        <button data-testid="save-button" type="submit">Salvar</button>
      </section>
    );
  }
}

export default Form;
