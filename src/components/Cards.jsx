import Card from './Card.jsx';
import React from 'react'
import style from './Cards.module.scss'

export default function Cards({pokes, onClose, showDetails}){
    if(pokes){
        return (
            <div className={style.cards}>
              {pokes.map((poke, i) => <Card
                  key={i}
                  id={poke.id}
                  name={poke.name}
                  order={poke.order}
                  height = {poke.height}
                  weight = {poke.weight}
                  // img={city.weather[0].icon}
                  showDetails={showDetails}
                  onClose ={onClose}
                  img={poke.img}
                /> )}
            </div>
          );
    }
    else{
        return(
            <div>No hay pokes</div>
        )
    }
}