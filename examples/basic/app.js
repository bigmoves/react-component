/** @jsx React.DOM */

var React = require('react');
var Component = require('../../lib/index');

var appElement = document.getElementById('example');

var App = React.createClass({
  render: function() {
    return (
      <div>
        <Component/>
      </div>
    );
  }
});

React.renderComponent(<App/>, appElement);
