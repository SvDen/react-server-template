var React = require('react');
var ListItem = require('./ListItem.jsx');
var fetch = require('node-fetch');

let serverUrl = 'http://localhost:6069/ingredients';

var List = React.createClass({
	getInitialState() {
		return {
			ingredients: []
		}
	},
	componentWillMount() {
		fetch(serverUrl)
			.then(response => response.json())
			.then(ingredients => {
				this.setState({ingredients})
			})
	},
	render() {
		var listItems = this.state.ingredients.map((item) => <ListItem key={item.id} ingredient={item.text}/>);
		return (<ul>{listItems}</ul>);
	}
});

module.exports = List;
