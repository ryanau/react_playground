var React = require('react');

var AddList = React.createClass({
	getInitialState: function () {
		return {
			listName: '',
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
		});
	},

	render: function () {
		return (
			<div>
				<form className="col-sm-6" onSubmit={this.handleSubmit}>
					<h3>Create New List</h3>
					<input type="text"
					 className="form-control"
					 value={this.state.listName}
					 placeholder="New List"
					 onChange={this.handleChange} />
					<button type="submit" className="btn btn-primary">Submit</button>
				</form>
			</div>
		)
	}
});

module.exports = AddList;