const str = 'hello world'
console.log(str.indexOf('wo'))
console.log('hello'.indexOf('0'))
console.log(str.indexOf('w') !== -1)

const num = '0123'
console.log(num.length)
console.log('1 2'.length)

console.log(str.slice(0, 3))

console.log(str.replace('world', 'HEROPY'))
console.log(str.replace(' world', ''))
console.log(num.replace(01, 45))

const trim = '    hello world   '
console.log(str.trim())

const id = 'whj9910@gmail.com'
console.log(id.match(/.+(?=@)/)[0])//정규표현식