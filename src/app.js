import React from 'react';
import ReactDOM from 'react-dom';
import ScrollableAnchor from 'react-scrollable-anchor';
import Logo from './chaldea.png';
import Card from './card-temp.png';
import './app.css';

const App = () => {
    return(
        <div id="main">
            <div class="main" id="chaldeas">
                <img src={Logo} height="500" width="500"></img>
                <p>Chaldea Security Organization</p>
                <a href="#section1">Master ID</a>
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