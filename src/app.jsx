import React from 'react';
import ReactDOM from 'react-dom';
import ScrollableAnchor from 'react-scrollable-anchor';
import Logo from './chaldea.png';
import Down from './downarrow.png';
import Card from './CardContainer.jsx';
import ENSupp from './ENSupportContainer.jsx';
import JPSupp from './JPSupportContainer.jsx';
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
                <Card></Card>
            </ScrollableAnchor>
            <ScrollableAnchor id="section2">
                <ENSupp></ENSupp>
            </ScrollableAnchor>
            <ScrollableAnchor id="section3">
                <JPSupp></JPSupp>
            </ScrollableAnchor>
        </div>
    )
}

ReactDOM.render(<App/>, document.getElementById('root'));