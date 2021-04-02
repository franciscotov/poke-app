import SearchBar from './SearchBar.jsx';
import style from './Nav.module.scss';
import {NavLink} from 'react-router-dom';

export default function Nav({onSearch}){
    return(
        <nav className ={style.nav}>
            <NavLink to='/' className={style.navlink}>
                <div>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/9/98/International_Pok%C3%A9mon_logo.svg" alt=""/>
                </div>
            </NavLink>
            <div className ={style.search}>
                <SearchBar onSearch={onSearch}/>
            </div>
        </nav>
    );
}