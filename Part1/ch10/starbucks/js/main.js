const searchEl = document.querySelector('.search');
const searchInputEl = searchEl.querySelector('input');

searchEl.addEventListener('click', function(){
  // Logic..
  searchInputEl.focus();
});

searchInputEl.addEventListener('focus', function(){
  searchEl.classList.add('focused');
  searchInputEl.setAttribute('placeholder','통합검색');
});

searchInputEl.addEventListener('blur', function(){
  searchEl.classList.remove('focused');
  searchInputEl.setAttribute('placeholder','');
});



const badgeEl = document.querySelector('header .badges');
const toTopEl = document.querySelector('#to-top');

window.addEventListener('scroll', _.throttle(function(){
  console.log(window.scrollY);
  if (window.scrollY > 500) {
    //배지 숨기기
    // gsap.to(요소, 지속시간, 옵션);
    gsap.to(badgeEl, .6, {
      opacity: 0,
      display: 'none'
    });
    // 버튼 보이기
    gsap.to(toTopEl, .2, {
      x: 0
    });
  } else {
    gsap.to(badgeEl, .6, {
      opacity: 1,
      display: 'block'
    });
    // 버튼 숨기기
    gsap.to(toTopEl, .2, {
      x: 100
    });
  }
}, 300));
// _.throttle(함수, 시간(ms)


toTopEl.addEventListener('click', function(){
  gsap.to(window, .7, {
    scrollTo: 0
  });
});

const fadeEls = document.querySelectorAll('.visual .fade-in');
fadeEls.forEach(function (fadeEl, index) {
   // gsap.to(요소, 지속시간, 옵션);
  gsap.to(fadeEl, 1, {
    delay: (index + 1) * .7,
    opacity: 1
  });
});


// new Swiper (선택자, 옵션)
new Swiper('.notice-line .swiper-container', {
  direction: 'vertical',
  // autoplay: true,
  loop: true
});

 new Swiper('.promotion .swiper-container', {
  // direction의 기본값 horizontal
  direction: 'horizontal',
  slidesPerView: 3, // 한번에 보여줄 슬라이드 개수
  spaceBetween: 10, // 슬라이드 사이 여백
  centeredSlides: true, // 1번 슬라이드가 가운데 보이기
  loop: true,
  // autoplay: {
  //   delay: 3000
  // },
  pagination: {
    el: '.promotion .swiper-pagination', // 페이지 번호 요소 제어
    clickable: true // 사용자의 페이지 번호 요소 제어
  },
  navigation: {
    prevEl:'.promotion .swiper-prev',
    nextEl:'.promotion .swiper-next'
  }
});

// 다중요소 슬라이더
new Swiper('.awards .swiper-container', {
  // direction: 'horizontal', 수평 슬라이더 만들기 // 기본값이어서 생략
  autoplay: true,
  loop: true,
  spaceBetween: 30,
  slidesPerView: 5,
  navigation: {
    prevEl: 'awards .swiper-prev',
    nextEl: 'awards .swiper-next'
  }
})


const promotionEl = document.querySelector('.promotion');
const promotionToggleBtn = document.querySelector('.toggle-promotion');
let isHidePromotion = false;
promotionToggleBtn.addEventListener('click', function() {
  isHidePromotion = !isHidePromotion
  if (isHidePromotion) {
    //숨김처리
    promotionEl.classList.add('hide');
  }else {
    //보임처리
    promotionEl.classList.remove('hide');
  }
});

function random(min, max) {
  return parseFloat(Math.random() * (max - min) + min).toFixed(2)
}

function floatingObject (selector, delay, size) {
  // gsap.to (요소, 시간, 옵션); 
  gsap.to(
    selector, 
    // random(1.5, 2.5), 삭제하니까 작동, 옵셩 내부에 작성해도 작동
    {
      y: size,
      repeat: -1, 
      yoyo: true,
      // loop: true가 안되는 이유 gsap to 에서 지원을 하지 않음
      ease: Power1.easeInOut,
      delay: random(0, delay),
      deration: random(1.5, 2.5)
    });
 }

 floatingObject('.floating1', 1, 15);
 floatingObject('.floating2', .5, 15);
 floatingObject('.floating3', 1.5, 20);


 // 섹션 이미지 요소들 움직임 제어
 const spyEls = document.querySelectorAll('section.scroll-spy')
 spyEls.forEach(function(spyEl){
  new ScrollMagic
    .Scene({
      triggerElement: spyEl, //보여짐의 여부를 감시할 요소를 지정
      triggerHook: .8
    })
    .setClassToggle(spyEl, 'show')
    .addTo(new ScrollMagic.Controller());
 });

 const thisYear = document.querySelector('.this-year');
 thisYear.textContent = new Date().getFullYear(); // 해당연도의 숫자가 this-year에 들어간다