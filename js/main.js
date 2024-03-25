console.log("Hello Parcell!")

//async 비동기 함수만드는 문법
async function test() {
  //Promise
  const promise = Promise.resolve(123)
  // await
  console.log(await promise)
}

test()