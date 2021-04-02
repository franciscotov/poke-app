import { useState } from "react";
import style from './SearchBar.module.scss';

export default function SearchBar({onSearch}){
    const [poke, setPoke] = useState("");
    return(
      <div className={style.search}>
        <form onSubmit={(e) => {
            e.preventDefault();
            onSearch(poke);
            setPoke('');
          }} 
          
          >
            <input
              type="text"
              placeholder="Pokemon..."
              value={poke}
              onChange={e => setPoke(e.target.value)}
              className={style.input}
            />
            <input type="submit" value="Agregar" className={style.button}/>
          </form>
      </div>
    );
}