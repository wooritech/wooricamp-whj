let a = 1
let b = 4
console.log(a, b, a === b) //a와 b가 바라보고있는 메모리 주소가 달라서 false
b = a
console.log(a, b, a === b) //a와 b가 동일한 메모리 주소를 보고있다. true
a = 7
console.log(a, b, a === b)
let c = 1 //c에 할당된 1이 기본 메모리에 있는 데이터 1을 바라본다.
console.log(b, c, b === c) 


let d = { k: 1 }
let e = { k: 1 }
console.log( d, e, d === e)
d.k = 7
e = d
console.log(d, e, d === e)
d.k = 2
console.log(d, e, d === e)
let f = e
console.log(d, e,f, d === f)
a.k = 9
console.log(d, e, f, d === f)