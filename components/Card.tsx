import axios from "axios";
import { useEffect, useState } from "react";
import styles from '../styles/Card.module.css';
import { pokemonType } from "../types";
import Button from "./styled/Button/Button";

type CardData = {
    img: string,
    height: number,
    weight:number,
    stats:[],
    types:[],
    abilities:[]
}

const Card = ({name,url}:pokemonType):JSX.Element => {


    const [data, setData] = useState<CardData>({
        img:'',
        height: 0,
        weight:0,
        stats:[],
        types:[],
        abilities:[]
    })
    const { img,height, weight,stats,types,abilities} = data;

    const init = async() => {
        try{
            const { data} = await axios({
                method:'GET',
                url:url
            })
            // console.log(data);
            setData((prevState) => ({
                ...prevState,
                img: data.sprites.back_default,
                height: +(data.height/10).toFixed(1),
                weight: +(data.weight/10).toFixed(1),
                stats: data.stats,
                types: data.types,
                abilities:data.abilities
            }))
        }catch(err){
            console.log(err);
        }
    }

    useEffect(() => {
        init();
    },[])
    return(
        <div className={styles.main}>
            <div className={styles.card}>
                <div className={styles.img}>
                    <img src={img} alt={name} width={100} />
                </div>
                <h2>{name}</h2>
                <p>Seed Pokemon</p>
                <div className={styles.char}>
                    {
                        types.map((type:any) => (
                            <h3 key={type.type.name}>{type.type.name}</h3>
                        ))
                    }
                </div>
                <div className={styles.prop}>
                    {
                        abilities.map((ability:any) => (
                            <h4 key={ability.ability.name}>{ability.ability.name}</h4>
                        ))
                    }
                </div>
            </div>
            <div className={styles.info}>
            <table >
                {
                stats.map((stat:any) => (
                    <tr key={stat.stat.name} >
                    <td>{stat.stat.name.toUpperCase()}</td>
                    <td style={{fontWeight:'600',color:'gray' }}>{stat.base_stat}</td>
                    <td>
                    <div
                    style={{borderColor:'orange',
                    height:12, width:200,borderWidth:1, borderStyle:'solid',borderRadius:3}}
                    >
                        <div style={{height:11,width:((stat.base_stat/200)*100),backgroundColor:'orange'}}></div>
                    </div>
                    </td>
                    </tr>
                ))
                }
            </table>
            </div>
            <div className={styles.info2}>
                <Button>SHOW DETAILS</Button>
            </div>
        </div>
    )
}

export default Card;