let Spinner = require('./dist').default

let spinner = new Spinner({
  text: 'Loading',
  color: 'green'
})
// spinner.on('done', () => {
//   return '\n  One Down!'
// })
spinner.begin()
setTimeout(() => {
  spinner.changeText('Things')
}, 9000)
setTimeout(() => {
  spinner.changeText('are')
}, 10000)
setTimeout(() => {
  spinner.changeText(`happening`)
}, 11000)
setTimeout(() => {
  // spinner.stop()
  // .then(() => {
  //   let loadingLine = new Spinner(a, 'Loading')
  //   loadingLine.on('done', () => {
  //     return 'Two Down!'
  //   })
  //   loadingLine.begin()
  //   setTimeout(() => {
  //     spinner.stop()
  //   }, 2000)
  // })
}, 20000)
