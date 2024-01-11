//콜백(Callback)
function timeout(cb) {
  setTimeout(() => {
    console.log('Heropy')
    cb()
  }, 3000)
}
timeout(() => {
  console.log('Done!')
})