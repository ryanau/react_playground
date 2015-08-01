var React = require('react');
var ListContainer = require('./ListContainer');
var AddList = require('./AddList');


var App = React.createClass({
	getInitialState: function () {
		return {
			lists: [],
		}
	},

	addNewList: function (newList) {
		this.setState ({
			lists: this.state.lists.concat([{newTitle: newList.listName, index: this.state.lists.length, bg: newList.listColor}])
		});
	},

	handleRemoveList: function (index) {
		var newLists = this.state.lists;
		newLists.splice(index, 1);
		this.setState ({
			lists: newLists,
		})
	},

	render: function() {
		var componentList = this.state.lists.map(function (item, index) {
			return <ListContainer title={item.newTitle} key={item.index} index={index} remove={this.handleRemoveList} bgColor={item.bg} />
		}.bind(this));

		return (
			<div className="container">
				<div className="row">
					<AddList add={this.addNewList} />
					{componentList}
				</div>
			</div>
		);
	},
});

React.render(
	<App />,
	document.getElementById('app')
)