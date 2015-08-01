var React = require('react');
var $ = require('jquery');

var ChatList = React.createClass({
  getInitialState: function () {
    return {
      chats: [],
    }
  },

  componentDidMount: function () {
    this.interval = setInterval(function() {
      this.getChats();
    }.bind(this), 1000)
  },

  componentWillUnmount: function() {
    clearInterval(this.interval);
  },

  propsTypes: {
    url: React.PropTypes.string.isRequired,
  },

  getDefaulProps: function () {
    return {
      url: "https://api.parse.com/1/classes/chat",
    }
  },

  getChats: function () {
    $.ajax({
      url: this.props.url,
      type: 'GET',
      beforeSend: function(request) {
        request.setRequestHeader("X-Parse-Application-Id", "WWkP77ujK2s5NGXEh0jnsLylJKcotyEc1FVLalrV");
        request.setRequestHeader("X-Parse-REST-API-Key", "Ozz7cFsXGE2ZxaK04MkOhB4H3YYFh2KdyWYB9qEK");
        request.setRequestHeader("Content-Type", 'application/json');
      },
      error: function () {
        console.log('error on getting chat');
      },
      success: function (data) {
        if (this.isMounted()) {
          this.setState({
            chats: data.results
          });
        }
      }.bind(this)
    });
  },


  render: function(){
    var list = this.state.chats.map(function (message, index) {
      return (
        <li key={message.objectId}
            className="list-group-item">
            {message.text}
        </li>
      )
    });

    return (
      <ul className="list-group">
        {list}
      </ul>
    )
  },
});

module.exports = ChatList;