import React from 'react';
import PropTypes from 'prop-types';

class CheckTrunfo extends React.Component {
  render() {
    const { cardTrunfo, onInputChange } = this.props;
    return (
      <label htmlFor="checkbox">
        Super Trybe Trunfo
        <input
          name="cardTrunfo"
          checked={ cardTrunfo }
          onChange={ onInputChange }
          data-testid="trunfo-input"
          id="checkbox"
          type="checkbox"
        />
      </label>
    );
  }
}

CheckTrunfo.propTypes = {
  cardTrunfo: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
};

export default CheckTrunfo;
