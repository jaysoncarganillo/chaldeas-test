import React from 'react';
import Card from './card-temp.png';

class CardContainer extends React.Component {

    render() {
		return (
			<div class="main" id="card">
        <img id="cardo" src={Card}></img>
        <a href="#section2"><h2>Support List EN</h2></a>
        <a href="#section3"><h2>Support List JP</h2></a>
      </div>
		)
	}
}


export default CardContainer;