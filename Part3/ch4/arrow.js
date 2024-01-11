const timer = {
  name: 'Heropy',
  thimout: function () {
    setTimeout(() => {
      console.log(this.name)
      //화살표함수/ 범위:line3/this->function->timer
    }, 2000)
//setTimeout, setInterval을 사용할 때에는 화살표 함수를 사용하는게 활용도가 높다.
  }
}
timer.thimout() 