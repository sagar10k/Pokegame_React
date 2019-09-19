import React, { Component } from 'react';
import './Pokegame.css'
import Pokedex from './Pokedex'

class Pokegame extends Component{
    render(){
      const arr=[
        {id: 4, name: 'Charmander', type: 'fire', base_experience: 62},
        {id: 7, name: 'Squirtle', type: 'water', base_experience: 63},
        {id: 11, name: 'Metapod', type: 'bug', base_experience: 72},
        {id: 12, name: 'Butterfree', type: 'flying', base_experience: 178},
        {id: 25, name: 'Pikachu', type: 'electric', base_experience: 112},
        {id: 39, name: 'Jigglypuff', type: 'normal', base_experience: 95},
        {id: 94, name: 'Gengar', type: 'poison', base_experience: 225},
        {id: 133, name: 'Eevee', type: 'normal', base_experience: 65}
      ];
      let team1=[];
      let team2=[...arr];
      while(team1.length < team2.length){
        let indx=Math.floor(Math.random()*team2.length);
        let poke= team2.splice(indx,1)[0]
        team1.push(poke);
      }
      let exp1=0;
      let exp2=0;
      team1.forEach((el)=>{
        exp1+=el.base_experience;
      })
      team2.forEach((el)=>{
        exp2+=el.base_experience;
      })

      return(
        <div>
          <h1>Team1</h1>
          <Pokedex data={team1} isWinner={ exp1 > exp2} exp={exp1}/>
          <h1>Team2</h1>
          <Pokedex data={team2} isWinner={ exp2 > exp1} exp={exp2}/>
        </div>
      )
    }
}

// function RandomNum(){
//  return Math.floor(Math.random()*8+1);
// }
export default Pokegame;