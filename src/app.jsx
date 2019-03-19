import React from 'react';
import ReactDOM from 'react-dom';
import ScrollableAnchor from 'react-scrollable-anchor';
import Card from './CardContainer.jsx';
import ChaldeaLogo from './ChaldeaLogo.jsx';
import ENSupp from './ENSupportContainer.jsx';
import JPSupp from './JPSupportContainer.jsx';
import './app.css';


const App = () => {
    return(
        <div id="main">
            <ChaldeaLogo></ChaldeaLogo>
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