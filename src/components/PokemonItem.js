import React from 'react';

export default class PokemonItem extends React.Component {
    render() {
      const {pokemon} = this.props;
      return(
        <li>
          <img src={pokemon.img} alt='' height='60' width='60'/>
          <span>{pokemon.name}</span>
          <span>{pokemon.height}</span>
          <span>{pokemon.weight}</span>
        </li>
      )
    }
  }