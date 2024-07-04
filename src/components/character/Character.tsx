import {ICharacter} from "../../models/ICharacter";
import React, {FC, ReactNode} from "react";
import styles from "./character.module.css"

type IProps = {character: ICharacter} & {children?: ReactNode}
const Character:FC<IProps> = ({character}) =>{
    const {age, info, surname, photo, name} = character

    return (<div>
        <h2 className={styles.title}> {name}  {surname} {age} </h2>
        <img className={styles.image} src={photo} alt={name}/>
        <p className={styles.text}>{info}</p>
    </div>)
}
export default Character