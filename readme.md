## terminal-spinner [![Build Status](https://travis-ci.org/joegesualdo/terminal-spinner-node.svg?branch=master)](https://travis-ci.org/joegesualdo/terminal-spinner-node)
> Loading spinners in the terminal.

## Install
```
$ npm install --save @joegesualdo/terminal-spinner-node
```

![demo](https://github.com/joegesualdo/terminal-spinner-node/raw/master/demo.gif)

## Usage
```javascript
import TerminalSpinner from '@joegesualdo/terminal-spinner-node';

let spinner = new TerminalSpinner({
  text: 'Loading',
  color: 'green',
})
spinner.on('done', () => {
  return '\n  One Down!'
})
spinner.begin()
```

## Test
```
$ npm test
```
## API
### `TerminalSpinner([options])`
> Creates an instance

#### Options
| Name | Type | Default |Description | 
|------|------|-------------|----------|
| text | `String` | ` ` | The loading text that will follow the spinner |
| color | `String` | `white` | Color of the spinner (`white`, `red`, `green`, `yellow`,`blue`, `magenta`, `cyan`, `gray`) |

```javascript
import TerminalSpinner from '@joegesualdo/terminal-spinner-node';

let spinner = new TerminalSpinner({
  text: 'Loading',
  color: 'green',
})
```

### `terminalSpinner.begin()`
> Starts the spinner

```javascript
import TerminalSpinner from '@joegesualdo/terminal-spinner-node';

let spinner = new TerminalSpinner()
spinner.begin()
```

### `terminalSpinner.stop()`
> Stops the spinner
```javascript
import TerminalSpinner from '@joegesualdo/terminal-spinner-node';

let spinner = new TerminalSpinner()
spinner.begin()
spinner.stop()
```

### `terminalSpinner.on(event, fn)`
> Intercepts the spinner a life-cycles

| Name | Type | Description |
|------|------|-------------|
| event | `String` | The lifecycle event. Supports: `done` |
| fn | `Function` | Function you want to run at the life-cycle |

```javascript
import TerminalSpinner from '@joegesualdo/terminal-spinner-node';

let spinner = new TerminalSpinner()

spinner.on('done', () => {
  return '\n  One Down!'
})

spinner.begin()
```
## Build
```
$ npm run build
```

## Related
- [example-package]() - Add description of the example package here.

## License
MIT © [undefined]()
