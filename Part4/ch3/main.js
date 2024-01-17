const str = `
010-1111-1111
theemail@email.com
"https://www.qwertwerqwrqer"
"http://www.erafadfefwafa"
The fox color is orang the fjlaethedk
` //따옴표는 줄바꿈 불가/백틱 사용하면 가능

console.log(
  str.match(/.{1,}(?=\@)/g)
  //@ 기호는 정규식에서 아무런 의미를 가지지 않는다. 따라서 \를 사용하지 않아도 된다.
)
console.log(
  str.match(/(?<=@).{1,}/g)
)