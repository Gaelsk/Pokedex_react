import React from 'react';
import PokemonItem from './PokemonItem';

export default class PokemonList extends React.Component {

    render() {
      return(
        <React.Fragment>
          {this.props.pokemons.map((pokemon) => (
            <PokemonItem
             key={pokemon.id}
             pokemon={pokemon}
           />
          ))}
        </React.Fragment>
      )
    }
  }