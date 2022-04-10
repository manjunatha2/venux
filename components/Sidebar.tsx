import React from "react";
import styles from "../styles/Sidebar.module.css";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setActivePokemonType, setPokemonTypes } from "../redux/pokemon/pokemon.actions";
import { StoreState, tType } from "../types";

const Sidebar = (): JSX.Element => {
  const dispatch = useDispatch();
  const { types, activeType } = useSelector(
    (state: StoreState) => state.pokemon
  );
  const getdata = async () => {
    try {
      const { data } = await axios({
        method: "GET",
        url: `https://pokeapi.co/api/v2/type`,
      });
      dispatch(setPokemonTypes(data.results));
    } catch (err) {
      console.log(err);
    }
  };
  React.useEffect(() => {
    getdata();
  }, []);

  const randomColor = ():string => "#" + (0x1000000 + Math.random() * 0xffffff).toString(16).substr(1, 6);
  const selectHandler = (name:string):void => {
    dispatch(setActivePokemonType(name));
  }
  return (
    <div className={styles.main}>
        <div
          style={{ color: 'all' === activeType ? "#fff" : randomColor() , backgroundColor:'all' === activeType ? 'gray':''}}
          className={styles.type}
          onClick={() => selectHandler('all')}
        >
          ALL
        </div>
      {types.map((t: tType) => (
        <div
          key={t.name}
          style={{ color: t.url === activeType ? "#ffffff" : randomColor() , backgroundColor:t.url === activeType ? 'gray':''}}
          className={styles.type}
          onClick={() => selectHandler(t.url)}
        >
          {t.name.toUpperCase()}
        </div>
      ))}
    </div>
  );
};

export default Sidebar;
