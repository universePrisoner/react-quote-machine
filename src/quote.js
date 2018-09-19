import React from 'react';
import ReactDOM from 'react-dom';

class Quote extends React.Component {
	constructor(props) {
		super();
	}

	render() {
		let html = (
			<div className="quote">
				<h3 className="card__quote">{ this.props.quote.text }</h3>
				<a href={"" + this.props.quote.author.link} className="card__quote-author">- { this.props.quote.author.name }</a>
			</div>
		);

		return(html);
	}
}

export default Quote;