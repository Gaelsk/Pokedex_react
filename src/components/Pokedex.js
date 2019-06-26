import React from 'react';
import PokemonList from './PokemonList';
import Loader from './Loader';

export default class Pokedex extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
        pokemons: [],
        pokemonList: [],
        isLoading: false
      }
    }

    componentDidMount() {
      this.setState({isLoading: true})
      const url = 'https://raw.githubusercontent.com/Biuni/PokemonGO-Pokedex/master/pokedex.json';
      const pokemonList = [];
      fetch(url)
      .then(res => res.json())
      .then(data => {
        pokemonList.push(...data.pokemon)
        this.setState({
          pokemonList,
          pokemons: pokemonList,
          isLoading: false
        })
      })
    }
    /*
    pokemons: liste des pokemons à afficher en fonction de l'entrée(recherche)
    pokemonList: liste complète des pokemons
    */
    handleSearch = () => {
      const input = this.refs.poke.value;
      const result = this.findPokemon(input, this.state.pokemonList)
      /*
      result contient tous les pokemons renvoyés par findPokemon dans la liste complète
      puis on met à jour pokemons avec les pokémon de result
      */
      this.setState({pokemons:result})
    }

    findPokemon = (search, pokemons) => {
      return pokemons.filter(pokemon => {
        const regex = new RegExp(search, 'gi');
        return pokemon.name.match(regex) || pokemon.type.find(type => type.match(regex))
      })
    }

    render() {
      let content;
      if (this.state.isLoading) {
        content = <Loader />
      } else if (!this.state.pokemons.length) {
        content = <p className='none'>Aucun Pokémon trouvé :(</p>
      } else {
        content = <PokemonList pokemons={this.state.pokemons} />
      }
      return(
          <form>
            <h1>Pokédex</h1>
            <input type='text' ref='poke' placeholder='Recherche de Pokémon' onChange={this.handleSearch} onKeyUp={this.handleSearch} className='w3-input w3-bottombar w3-border-cyan' />
            <ul>
            {content}
           </ul>
          </form>
      )
    }
  }
