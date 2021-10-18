import React from 'react';
import PropTypes from 'prop-types';

class Filters extends React.Component {
  render() {
    const { filterText, onInputChange } = this.props;
    return (
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
    );
  }
}

Filters.propTypes = {
  filterText: PropTypes.string.isRequired,
  onInputChange: PropTypes.func.isRequired,
};

export default Filters;
