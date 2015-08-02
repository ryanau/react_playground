var React = require('react')

var AddItem = React.createClass({
	getInitialState: function () {
		return {
			newItem: ''
		}
	},

	handleChange: function(e) {
		this.setState({
			newItem: e.target.value
		})
	},

	handleSubmit: function(e) {
		if (e.keyCode === 13 && e.target.value != "") {
			this.props.add(this.state.newItem);
			this.setState({
				newItem: ''
			});
		} else if (e.keyCode === 13 && e.target.value === "") {
			alert('Input cannot be blank!')
		};
	},

	render: function() {
		return (
			<div>
				<input type="text"
				 className="form-control"
				 value={this.state.newItem}
				 placeholder="New Item"
				 onKeyDown={this.handleSubmit}
				 onChange={this.handleChange} />
			</div>
		);
	},
});

module.exports = AddItem;