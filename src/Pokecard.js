import React, { Component } from 'react';
import './Pokecard.css';

class Pokecard extends Component{
    render(){
        let data= this.props.data;
        let imgsrc= `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${ this.props.data.id}.png`
        // let imgsrc= imgLink(this.props.data.id);
        return(
            <div className="Pokecard">
                <h2>{ data.name }</h2>
                <img className="Pokecard-img" src= {imgsrc} />
                <p>Type: { data.type }</p>
                <h4>EXP: { data.base_experience }</h4>
            </div>
        )
    }
}

// function imgLink(id){
//     id= id.toString();
//     if(id.length === 3){
//         return `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${id}.png`
//     }else if(id.length === 2){
//         let num='0'+id;
//         return `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${num}.png`
//     }else{
//         let num='00'+id;
//         return `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${num}.png`
//     }
// }


export default Pokecard;