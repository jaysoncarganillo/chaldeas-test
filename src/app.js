import React from 'react';
import ReactDOM from 'react-dom';
import Logo from './chaldea.png';
import './app.css';

const App = () => {
    return(
        <div id="chaldeas">
            <img src={Logo} height="500" width="500"></img>
            <p>Chaldea Security Organization</p>
        </div>
    )
}

ReactDOM.render(<App/>, document.getElementById('root'));