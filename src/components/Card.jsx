import { NavLink } from 'react-router-dom'
import style from './Card.module.scss'
export default function Card({id, order, name, img, onClose}){
    return(
        // al hacer click vamos al link dado por la base y la propiedad to
        <div className ={style.card}>
            <div className={style.close} onClick ={()=> onClose(id)}>
                X
            </div>
            <NavLink to={`/details/${id}`} className={style.navLink}>
                <div className={style.name}>
                    <span>{name}</span>
                </div>
            </NavLink>
            <div className={style.img}>
                <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`} alt="" width='120' height='120'/>
            </div>
        </div>
    );
}
// url de gif
// https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/1.gif