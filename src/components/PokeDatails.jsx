import {NavLink} from 'react-router-dom';
import style from './PokeDetails.module.scss';

export default function PokeDetails({poke}){
    console.log(poke)
    return poke ?
    (
        <div className={style.name}>
            <h1>{poke.name}</h1>
            <div className={style.info}>
                <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/${poke.id}.gif`} alt=""/>
                <div>Order : {poke.order}</div>
                <div>Weight : {poke.weight}</div>
                <div>Height : {poke.height}</div>
            </div>
        </div>
    ): <div>Pokemon no encontrado</div>;
}
// https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/1.gif