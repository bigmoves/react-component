/** @jsx React.DOM */

jest.dontMock('../component');

describe('Component', function() {
  it('renders a header', function() {
    var TestUtils = require('react/addons').addons.TestUtils;
    var Component = require('../component');

    // Render the component into the document
    var component = TestUtils.renderIntoDocument(
      <Component />
    );

    // Verify that the component renders a header tag
    var header = TestUtils.findRenderedDOMComponentWithTag(
      component, 'h1');
    expect(header.getDOMNode().textContent).toEqual('React component');
  });
});
