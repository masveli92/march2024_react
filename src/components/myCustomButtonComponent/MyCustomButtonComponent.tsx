import React, {FC, useState} from "react";
import styles from './myCustomButtonComponent.module.css'

interface IProps {
    children: React.ReactNode;
    nameOfClass: string;
    label: string
}

const MyCustomButtonComponent:FC<IProps> = ({label, nameOfClass, children}) => {
    const [counter, setCounter] = useState<number>(0);

    const someClickHandler = () => {
        setCounter(counter+1);
    }

    return (
        <div>
            <span>{label}</span>
            <button
                className={[styles.btnBack, styles.btnFont].join(' ')}
                onClick={()=>{
                    someClickHandler();
                }
            }
            >
                {children} {counter}
            </button>
        </div>
    )
}

export {MyCustomButtonComponent}