# DOM API

- Document Object Model
  - DIV, SPAN, INPUT
- Application Programming Interface
  - 웹사이트가 동작하기 위한 명령들

- body의 내용을 찾지 못하면 head의 script src 사이에 defer 속성을 부여하던지 해당 script를 찾으려는 body 내용 하단에 작성해야 한다.

## HTML 요소 1개 검색하기

- const boxEl = `document.querySelector('')`;

### HTML 요소에 특정한 상황이 생기면 함수를 실행하는 메소드

- boxEl.`addEventListener`('상황',function () {함수=핸들러; });

### 요소의 클래스 정보 객체 활용

- boxEl.`classList`.add('active'); //boxEl에 active를 추가
- boxEl.`classList`.remove('active'); //boxEl에 active를 삭제

- console.log(boxEl.classList.contains('active')); //추가 삭제 적용 여부 확인하기 true, false로 확인 가능

## HTML 요소 전부 검색하기

- const boxEls  `document.querySelectorAll('')`;

### 찾은 요소들을 반복해서 실행, 익명 함수 인수 추가

- boxEls.`forEach`(function (반복 중인 요소,반복 중인 번호){});

### 값을 얻고 지정하는 API

- textContent 문자만