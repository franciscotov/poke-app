import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect} from 'react';
import Cards from './components/Cards.jsx';
import Nav from './components/Nav.jsx';
import {Route} from 'react-router-dom';
import PokeDetails from './components/PokeDatails';

function App() {
  const [state, setState] = useState([]);
  useEffect(()=>{
    // usamos una funcion asincrona para esperar los datos de fetch, cargamos 20 datos
    async function chargeFirstTwenty(l){
      while(true){
        let dato = await fetch(`https://pokeapi.co/api/v2/pokemon/${++l}`)
        .then(response => response.json());
        dato = {
          id: dato.id,
          name : dato.name,
          order: dato.order,
          weight: dato.weight,
          height: dato.height,
          img : dato.sprites.front_default,
        };
        // dato = JSON.stringify(dato)
        // arr.push(dato)
        setState(prev => [...prev, dato]);
        if (l >= 10) break;
      }
    }
    // si no hay datos en el estado cargamos algunos
    if(state.length==0) chargeFirstTwenty(state.length);
    console.log(state);
    
  },[]);

  function onSearch(id){
    let arr = state.filter(poke => poke.id == id);
    // vamos a la api para pedir un pokemon en especial
    id && arr.length == 0 ? fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
    .then(response => response.json())
    .then(data => {
      if(data){
        console.log(data, 'hallllaaa')
        let pokeData = {
          id: data.id,
          weight: data.weight,
          height: data.height,
          name : data.forms[0].name,
          order: data.order,
          // img : data.sprites.front_default,
        };
        // agregamos la data del nuevo pokemon
        console.log(pokeData)
        setState(prev => [...prev, pokeData]);
      }
      else alert('Error');
    }) : alert('error id no valido o pokemon ya se encuentra agregado');
  }
  const onClose = (id) =>{
    // e.preventDefault();
    console.log('clcik');
    setState(prev => [...(prev.filter(poke => poke.id != id))]);
  }
  const showDetails = (id) => {
    // console.log(id, 'lllllll')
    let card = state.filter(poke => poke.id == id)[0];
    // console.log(card, '000000')
    return card ? card : null;
    // return card ? card: null;
  }
  return (
    <div className="App">
      {/* {state} */}
      <Route path='/'
        render ={() => <Nav onSearch={onSearch}/>}
      />
      {/* </Route> */}
      <Route path='/'>
        <Cards pokes = {state} onClose ={onClose} showDetails={showDetails}/>
      </Route>
      {/* <div onClick={handleClick}>Click</div> */}
      <Route path='/details/:id'
        render={
          ({match, location, history}) =>
          <PokeDetails poke={showDetails(match.params.id)} />
        } 
      />
    </div>
  );
}

export default App;
/*
<header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
*/