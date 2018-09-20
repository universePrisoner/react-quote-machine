import React from 'react';
import ReactDOM from 'react-dom';

class Social extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		let html = this.props.shareSocial.map( (social, key) => {
			return(
				<li className="social__item" key={ key }>
					<a style={ social.styles } target='_blank' href={ "https://twitter.com/share?text="+ this.props.quoteText + " - " + this.props.quoteAuthor + "&hashtags=" + social.hashtags } className="social__link">
						<i className={"social__icon " + social.icon}></i>
					</a>
				</li>
			);
		});

		return(<ul className="social">{ html }</ul>);
	};
}

export default Social;