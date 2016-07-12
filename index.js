import chalk from 'chalk';
import hideCursor from 'hide-terminal-cursor';
import showCursor from 'show-terminal-cursor';
import indentString from '@joegesualdo/indent-string';

// Constants
const defaultFrames = [
  '⣾',
  '⣽',
  '⣻',
  '⢿',
  '⡿',
  '⣟',
  '⣯',
  '⣷',
];
const defaultColor = 'white';

// Main
class TerminalSpinner {
  constructor({
    frames = defaultFrames,
    text = '',
    indent = 2,
    interval = 80,
    color = defaultColor,
  }) {
    this.text = text;
    this.frames = frames;
    this.onDone = (() => {});
    this.interval = interval;
    this.intervalFn = undefined;
    this.indent = indent;
    this.color = color;
  }

  on(type, fn) {
    if (type === 'done') {
      this.onDone = fn;
    }
  }

  begin() {
    return new Promise(resolve => {
      hideCursor();
      function onSigint() {
        showCursor();
        process.exit();
      }
      process.on('SIGINT', onSigint);
      let count = 0;
      this.intervalFn = setInterval(() => {
        process.stdout.clearLine();
        process.stdout.cursorTo(0);
        const color = chalk[this.color] === undefined ? defaultColor : this.color;
        process.stdout.write(
          indentString(
            `${chalk[color](this.frames[count % this.frames.length])} ${this.text}`,
            this.indent
          )
        );
        count++;
      }, this.interval);
      resolve();
    });
  }

  stop() {
    return new Promise(resolve => {
      clearInterval(this.intervalFn);
      const finishedText = this.onDone();
      process.stdout.clearLine();
      process.stdout.cursorTo(0);
      if (finishedText) {
        process.stdout.write(`${finishedText}\n`);
      }
      showCursor();
      resolve();
    });
  }

  changeText(text) {
    this.text = text;
  }
}

export default TerminalSpinner;
