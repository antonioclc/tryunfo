import React from 'react';
import PropTypes from 'prop-types';

class Filters extends React.Component {
  render() {
    const { filterText, filterRare, filterTrunfo, onInputChange } = this.props;
    return (
      <section className="filterList">
        <label htmlFor="filterByName">
          Filtro por nome
          <input
            name="filterText"
            value={ filterText }
            onChange={ onInputChange }
            data-testid="name-filter"
            id="filterByName"
            type="text"
          />
        </label>
        <label htmlFor="rarityFilter">
          Raridade
          <select
            name="filterRare"
            value={ filterRare }
            onChange={ onInputChange }
            data-testid="rare-filter"
            id="rarityFilter"
          >
            <option value="todas">todas</option>
            <option value="normal">normal</option>
            <option value="raro">raro</option>
            <option value="muito raro">muito raro</option>
          </select>
        </label>
        <label htmlFor="checkboxFilter">
          Super Trybe Trunfo
          <input
            name="filterTrunfo"
            checked={ filterTrunfo }
            onChange={ onInputChange }
            data-testid="trunfo-filter"
            id="checkboxFilter"
            type="checkbox"
          />
        </label>
      </section>
    );
  }
}

Filters.propTypes = {
  filterText: PropTypes.string.isRequired,
  filterRare: PropTypes.string.isRequired,
  filterTrunfo: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
};

export default Filters;
