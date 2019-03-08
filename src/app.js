import React from 'react';
import ReactDOM from 'react-dom';
import Logo from './chaldea.png';

const App = () => {
    return(
        <div>
            <img src={Logo} height="500" width="500"></img>
        </div>
    )
}

ReactDOM.render(<App/>, document.getElementById('root'));