var React = require('react');
var ColorList = require('./ColorList');

var AddList = React.createClass({
	getInitialState: function () {
		return {
			listName: '',
			listColor: '',
		}
	},

	handleChange: function (e) {
		this.setState({
			listName: e.target.value
		})
	},

	handleSubmit: function (e) {
		e.preventDefault();
		this.props.add(this.state);
		this.setState({
			listName: '',
			listColor: '',
		});
	},

	addNewColor: function (color) {
		this.setState({
			listColor: color,
		});
	},

	render: function () {
		var styles = {
			colorIndicator: {
				background:  this.state.listColor,
				height: 15,
				width: 15,
				display: "inline-block",
			}
		}
		return (
			<form className="col-sm-6" onSubmit={this.handleSubmit}>
				<h3>Create New List</h3>
				<h4>List Name:</h4>
				<input type="text"
				 className="form-control"
				 value={this.state.listName}
				 placeholder="New List"
				 onChange={this.handleChange} /> <br />
				 <h4>Choose Color:</h4>
				 <span style={styles.colorIndicator}></span>
				 <ColorList chooseColor={this.addNewColor}/> <br />
				<button type="submit" className="btn btn-primary">Submit</button>
			</form>
		)
	}
});

module.exports = AddList;