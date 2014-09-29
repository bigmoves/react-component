# A Boilerplate for React Components

## Running tests

```bash
$ npm test
```

## Build component

```bash
$ npm run build
```

## Build examples

```bash
$ npm run build-examples
```
## Use with Webpack

Note: requires `css-loader` to include component styles

```javascript
var ReactComponent = require('react-component');

require('react-component/dist/react-component.css');

var App = React.createClass({
  render: function() {
    return (
      <div>
        <ReactComponent/>
      </div>
    );
  }
});
```
