import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Quote from './quote';
import Social from './social';

const API_URL	= 'https://talaikis.com/api/quotes/random/';
const COLOR 	= {
	'colorBackground1'	: '#43a3a6',
	'colorBackground2'	: '#ffffff',
	'colorButton1'		: '#ff69b7'
}

let styles = {
	'btn' : {
		color: '#ffffff',
		backgroundColor: COLOR.colorButton1,
		outline: 'none'
	}
}

class Card extends React.Component {
	constructor(prop) {
		super();

		this.state = {
			btn: {
				title: 'New Quote'
			},
			social: [
				{
					href: 'http://any.com',
					icon: 'fab fa-twitter',
					hashtags: 'quotes,freecodecamp,react_spa',
					styles: {
						color: '#1DA1F2'
					}
				}
			],
			quote: {
				author: '',
				quote: ''
			}
		}

		this.getNewQuote = this.getNewQuote.bind(this);
	}

	getNewQuote() {
		fetch( API_URL )
			.then(res => res.json() )
			.then(res => {
				this.setState({
					quote: {
						author: res.author,
						quote: res.quote
					}
			});
		});

	}

	componentDidMount() {
		this.getNewQuote();
	}

	render() {
		let html = (
			<div className="card" style={ {backgroundColor: COLOR.colorBackground2} }>
				<div className="card__quote-wrap">
					<Quote text={ this.state.quote.quote } author={ this.state.quote.author } />
				</div>	
				<div className="card__controls">
					<Social shareSocial={ this.state.social } quoteText={ this.state.quote.quote } quoteAuthor={ this.state.quote.author }/>
					<button className="btn btn--default" style={ styles.btn } onClick={ this.getNewQuote }>{ this.state.btn.title }  </button>
				</div>
			</div>
		);

		return(html);
	}
}

document.querySelector('body').style.backgroundColor = COLOR.colorBackground1;

ReactDOM.render(<Card />, document.getElementById('root'));