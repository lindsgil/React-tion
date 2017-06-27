import React from 'react'
import ReactDOM from 'react-dom'
import myTitle from './myTitle'

var div = React.DOM.div;

var myTitleFactory = React.createFactory(myTitle);

var myFirstComponent = React.createClass({
  render: function() {
    return(
      div(null,
        myTitleFactory({ title: 'props are best', color: 'red'}),
        myTitleFactory({ title: 'hehehe', color: 'blanchedalmond'}),
        myTitleFactory({ title: 'jklolwut', color: 'rebeccapurple'}),
        myTitleFactory({ title: 'hereee we go', color: 'aquamarine'})
      )
    );
  }
});

ReactDOM.render(React.createElement(myFirstComponent), document.getElementById('app'));
