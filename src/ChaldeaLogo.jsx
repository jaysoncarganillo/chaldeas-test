import React from 'react';
import Logo from './chaldea.png';
import Down from './downarrow.png';

class ChaldeaLogo extends React.Component {

    render() {
		return (
		<div class="main" id="chaldeas">
                <img src={Logo} height="500" width="500"></img>
                <p>Chaldea Security Organization</p>
                <a href="#section1"><img id="down" src={Down} height="100" width="100"></img></a>
            </div>
		)
	}
}


export default ChaldeaLogo;