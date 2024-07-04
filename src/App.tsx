import React, {FC} from 'react';
import './App.css';

import {MyCustomButtonComponent} from "./components/myCustomButtonComponent/MyCustomButtonComponent";




const App: FC = () => {
    return (
        <>
        <MyCustomButtonComponent label={"first button "} nameOfClass={'btn'}>First click count</MyCustomButtonComponent>
        <MyCustomButtonComponent label={"second button "} nameOfClass={'btn'}>Second click count</MyCustomButtonComponent>

    </>
  );
}

export default App;
