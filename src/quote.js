import React from 'react';
import ReactDOM from 'react-dom';

class Quote extends React.Component {
	constructor(props) {
		super();
	}

	render() {
		let html = (
			<div className="quote">
				<h3 className="card__quote">{ this.props.text }</h3>
				<span className="card__quote-author">- { this.props.author }</span>
			</div>
		);

		return(html);
	}
}

export default Quote;