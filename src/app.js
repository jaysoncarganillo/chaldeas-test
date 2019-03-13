import React from 'react';
import ReactDOM from 'react-dom';
import ScrollableAnchor from 'react-scrollable-anchor';
import Logo from './chaldea.png';
import Card from './card-temp.png';
import Down from './downarrow.png';
import ENSupp from './en.jpg'
import JPSupp from './jp.png'
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
                    <a href="#section2"><h2>Support List EN</h2></a>
                    <a href="#section3"><h2>Support List JP</h2></a>
                </div>
            </ScrollableAnchor>
            <ScrollableAnchor id="section2">
                <div class="main" id="support-list-holder">
                    <img src={ENSupp} class="supp"></img>
                </div>
            </ScrollableAnchor>
            <ScrollableAnchor id="section3">
            <div class="main" id="support-list-holder2">
                    <img src={JPSupp} class="supp"></img>
                </div>
            </ScrollableAnchor>
        </div>
    )
}

ReactDOM.render(<App/>, document.getElementById('root'));