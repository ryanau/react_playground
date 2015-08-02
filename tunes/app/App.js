var React = require('react');
var SearchItunes = require('./SearchItunes');
var Griddle = require('griddle-react');

var ImageComponent = React.createClass({
  render: function () {
    return (
      <img src={this.props.src} />
    );
  },
});

var UrlComponent = React.createClass({
  render: function () {
    return (
      <a href={this.props.url}>
        {this.props.rowData.trackName}
      </a>
    );
  },
});

var App = React.createClass({
  getInitialState: function () {
    return {
      data: "",
    };
  },

  updateState: function (info) {
    this.setState({
      data: info,
    })
  },

  render: function(){
    var heading = this.state.data === '' ? 'Make a Search' : 'Your Search Results';
    console.log(heading);
    var griddleMeta = [
      {columnName: 'trackName',displayName: 'Name'},
      {columnName: 'artistName',displayName: 'Artist'},
      {columnName: 'primaryGenreName',displayName: 'Genre'},
      {columnName: 'artworkUrl100',displayName: 'Artwork',customComponent: ImageComponent},
      {columnName: 'trackPrice',displayName: 'Price'},{columnName: 'kind',displayName: 'Type'},
      {columnName: 'trackViewUrl',displayName: 'Online Link',customComponent: UrlComponent}
    ];

    var styles = {
      cushion: {
        margin: 7,
      },
      topCushion: {
        marginTop: 49,
        borderRadius: 0,
      },
    };

    return (
      <span>
        <div className="navbar navbar-default navbar-fixed-top" role="navigation">
          <div className="container">
            <div className="row">
              <div className="col-sm-6">
                <SearchItunes cb={this.updateState} />
              </div>
            </div>
          </div>
        </div>
        <div className="panel panel-default" >
          <div className="panel-heading">
            
          </div>
           <Griddle
            results={this.state.data}
            tableClassName="table"
            columnMetadata={griddleMeta}
            columns={["trackName", "artistName", "primaryGenreName", "artworkUrl100", "trackPrice", "kind", "trackViewUrl"]} />
        </div>
      </span>
    );
  },
});

React.render(
  <App />,
  document.getElementById('app')
);
