import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Quote from './quote';
import Social from './social';

class Card extends React.Component {
	constructor(prop) {
		super();

		this.state = {
			quote: [
				{
					text: 'Some long  textSome long  textSome long  textSome long  textSome long  textSome long  textSome long  textSome long  text',
					author: {
						link: 'https://somewhere.com',
						name: 'John Dawg'
					}
				},
				{
					text: 'Hi',
					author: {
						link: 'https://somewhere.com',
						name: 'Me'
					}
				},
				{
					text: 'Hi 2',
					author: {
						link: 'https://somewhere.com',
						name: 'M3 0'
					}
				},
				{
					text: 'hi3',
					author: {
						link: 'https://somewhere.com',
						name: 'John Dawg'
					}
				},
				{
					text: 'Hi4',
					author: {
						link: 'https://somewhere.com',
						name: 'Me'
					}
				},
				{
					text: 'Hi 5',
					author: {
						link: 'https://somewhere.com',
						name: 'M3 0'
					}
				},
				{
					text: 'Hi 6',
					author: {
						link: 'https://somewhere.com',
						name: 'M3 0'
					}
				},
				{
					text: 'hi 7',
					author: {
						link: 'https://somewhere.com',
						name: 'John Dawg'
					}
				},
				{
					text: 'Hi 8',
					author: {
						link: 'https://somewhere.com',
						name: 'Me'
					}
				},
				{
					text: 'Hi 9',
					author: {
						link: 'https://somewhere.com',
						name: 'M3 0'
					}
				},
				{
					text: 'Hi 10',
					author: {
						link: 'https://somewhere.com',
						name: 'M3 0'
					}
				}
			],
			btn: {
				title: 'New Quote'
			},
			social: [
				{
					href: 'http://any.com',
					icon: 'fab fa-twitter',
					hashtags: 'quotes,freecodecamp,react_spa'
				}
			],
			numberOfQuote: 0
		}

		this.getQuote = this.getQuote.bind(this);
	}

	getQuote() {
		let len = this.state.quote.length;
		let randomQuoteNumber = Math.ceil( Math.random() *  10);

		this.setState({
			numberOfQuote: randomQuoteNumber
		});
	}

	render() {
		let shadowColor = function() {
			let rgb = {
				'r' : Math.floor( Math.random() * 255 ) + 1,
				'g' : Math.floor( Math.random() * 255 ) + 1,
				'b' : Math.floor( Math.random() * 255 ) + 1
			}

			return 'rgb(' + rgb.r + ', ' + rgb.g + ', ' + rgb.b + ")";
		}

		let styles = {
			'card' : {
				boxShadow: '0 0 6px ' + shadowColor(),
				transition: 'all .3s ease'
			}
		}

		let html = (
			<div className="card" style={ styles.card}>
				<div className="card__quote-wrap">
					<Quote quote={ this.state.quote[ this.state.numberOfQuote ]  } />
				</div>	
				<div className="card__controls">
					<Social shareSocial={ this.state.social } public={ this.state.quote[ this.state.numberOfQuote ] }/>
					<button className="btn btn--default" onClick={ this.getQuote }>{ this.state.btn.title }</button>
				</div>
			</div>
		);

		return(html);
	}
}

ReactDOM.render(<Card />, document.getElementById('root'));