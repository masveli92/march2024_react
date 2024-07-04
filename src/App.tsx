import React, {FC} from 'react';
import './App.css';

import {simpsons} from "./data";
import Character from "./components/character/Character";
import {ICharacter} from "./models/ICharacter";

const App: FC = () => {
  return (
    <>
      {
        simpsons.map((character:ICharacter)=> <Character character={character}/>)
      }
    </>
  );
}

export default App;
