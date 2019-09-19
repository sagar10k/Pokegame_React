import React, { Component } from 'react';
import './Pokedex.css';
import Pokecard from './Pokecard';

class Pokedex extends Component{
    static defaultProps = {
        data:[
            {id: 4, name: 'Charmander', type: 'fire', base_experience: 62},
            {id: 7, name: 'Squirtle', type: 'water', base_experience: 63},
            {id: 11, name: 'Metapod', type: 'bug', base_experience: 72},
            {id: 12, name: 'Butterfree', type: 'flying', base_experience: 178},
            {id: 25, name: 'Pikachu', type: 'electric', base_experience: 112},
            {id: 39, name: 'Jigglypuff', type: 'normal', base_experience: 95},
            {id: 94, name: 'Gengar', type: 'poison', base_experience: 225},
            {id: 133, name: 'Eevee', type: 'normal', base_experience: 65}
          ]
    }
    render(){
        return(
            <div className="Pokedex">
              <h3>Total exp: {this.props.exp}</h3>
              {this.props.isWinner ? <p className='Pokedex-Win'> Winner! </p>: <p className="Pokedex-loose"> Looser! </p>}
              {/* <p>{ this.props.isWinner? 'Winner' : 'Loser' }</p> */}
              { 
                this.props.data.map((i)=>{
                  return <Pokecard data={ i }/>
                }) 
              }
            </div>
        )
    }
}

export default Pokedex;