var React = require('react');
var $ = require('jquery');

var SearchItunes = React.createClass({
  propsTypes: {
    cb: React.PropTypes.func.isRequired,
  },

  formatUrl: function() {
    var searchInput = this.refs.searchInput.getDOMNode().value;
    var selectInput = this.refs.selectInput.getDOMNode().value;
    return "https://itunes.apple.com/search?term=" + searchInput + "&entity=" + selectInput;
  },

  handleSubmit: function () {
    var url = this.formatUrl();
    $.ajax ({
      url: url,
      dataType: 'JSONP',
      error: function (error) {
        console.log('error on submitting');
      },
      success: function (data) {
        this.props.cb(data.results);
      }.bind(this),
    })
  },

  render: function(){
    return (
      <div className="row">
        <div className="col-sm-12">
          <div className="input-group-inline col-sm-4">
            <input
              type="text"
              placeholder="Search here..."
              ref="searchInput"
              className="form-control" />
          </div>
          <div className="input-group-inline col-sm-4">
            <select className="form-control" ref="selectInput">
              <option value="musicTrack">Music</option>
              <option value="movie">Movie</option>
            </select>
          </div>
          <div className="input-group-inline col-sm-4">
            <button className="btn btn-primary"
                    onClick={this.handleSubmit}>
                    Search
            </button>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = SearchItunes;