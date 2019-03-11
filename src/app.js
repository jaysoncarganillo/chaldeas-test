import React from 'react';
import ReactDOM from 'react-dom';
import ScrollableAnchor from 'react-scrollable-anchor';
import Logo from './chaldea.png';
import Card from './card-temp.png';
import Down from './downarrow.png';
import './app.css';

const App = () => {
    return(
        <div id="main">
            <div class="main" id="chaldeas">
                <img src={Logo} height="500" width="500"></img>
                <p>Chaldea Security Organization</p>
                <a href="#section1"><img id="down" src={Down} height="100" width="100"></img></a>
            </div>
            <ScrollableAnchor id="section1">
                <div class="main" id="card">
                    <img id="cardo" src={Card}></img>
                </div>
            </ScrollableAnchor>
        </div>
    )
}

ReactDOM.render(<App/>, document.getElementById('root'));