# React JS 기초

## 리엑트 기본 배우기

- 리액트를 사용하는 이유
  - 상대적으로 `배우기 쉬운 라이브러리`
  - 여러 기능들을 위해 이미 `만들어져 있는 라이브러리 환경`
  - 많은 기업들의 사용으로 `검증된` 라이브러리
- `라이브러리`란 어떠한 기능을 `모듈화` 해놓은 것
- `프래임워크`는 복수의 `라이브러리`들의 묶음
- `리엑트`는 사용자 인터페이스를 만들기 위한 `JS의 라이브러리`

### 리액트 생태계

- 리액트는 뷰에만 관여하기 때문에 `다른` 라이브러리에게서 도움을 받는다.
  - 라우팅(페이지 이동)
    - react-router-dom
  - 상태 관리
    - redux
    - mobx
    - recoil
  - 테스트
    - Jest
    - Mocha

### 리액트 컴포넌트

- 리액트로 만들어진 앱을 이루는 최소한의 단위
- 리액트는 여러 컴퍼넌트 조각으로 이루어져있다.
  - 예를 들어 화면에서 검색창을 구성하는 `검색 컴퍼넌트`, 프로필 정보를 나타내는 `프로필 컴퍼넌트` 등으로 분류된다

#### 클래스형 컴포넌트

```js
class App extends Component {
  render() {
    return <h1>안녕하세요.</h1>;
  }
}
```

#### 함수형 컴포넌트

```js
function App() {
  return <h1>안녕하세요.</h1>;
}
```

### Node.js

- 리액트 설치시 노드.js가 필요한 이유
  - 리액트 앱은 웹 브라우저에서 실행되는 코드여서 노드.js와 직접적인 연관은 없지만 프로젝트를 개발하는데 주요 도구들이 노드.js를 사용하기 때문에 필요합니다.

### 브라우저가 그려지는 원리 및 가상돔

- 작은 앱이면 괜찮지만 많은 인터랙션이 있는 웹에서는 돔을 굉장히 많이 조작하기 때문에 비용이 너무 크게 된다를 문제를 보완하기 위해 가상돔이라는 개념이 나왔다.
- 가상돔이란 실제 돔을 메모리에 복사해준것이다.
- 재조정(reconciliation) = 데이터가 변하면 가상돔에 렌더링 되고 가상돔의 이전 데이터와 비교하여 바뀐 부분만 찾는 `딥핑`을 걸쳐서 실제 돔에 적용 시킨다.
- 

https://velog.io/@junmieee_/%EB%B8%8C%EB%9D%BC%EC%9A%B0%EC%A0%80%EA%B0%80-%EA%B7%B8%EB%A0%A4%EC%A7%80%EB%8A%94-%EC%9B%90%EB%A6%AC-%EB%B0%8F-%EA%B0%80%EC%83%81%EB%8F%94

https://velog.io/@so960225/%EB%B8%8C%EB%9D%BC%EC%9A%B0%EC%A0%80%EA%B0%80-%EA%B7%B8%EB%A0%A4%EC%A7%80%EB%8A%94-%EC%9B%90%EB%A6%AC%EC%99%80-%EA%B0%80%EC%83%81%EB%8F%94

### 리액트 설치

- npx create-react-app ./

<h4> 주의 사항

- 폴더 이름이 npm 규칙에 맞지 않을 경우 에러 발생

1. 영어는 소문자 사용
2. 숫자로 시작 불가
3. 특수 문자 제한
4. 공백은 언더바 혹은 대쉬로 대체

- 폴더 내부에 readme.md 파일이 있을 경우 출돌 발생

## 설치된 리액트 들여다 보기

### 이름이 수정되면 안되는 파일

1. public/index.html => 페이지 템플릿
2. src/index.js => 자바스크립트 시작점

### src 폴더

js와 css 파일들을 넣으면 된다.
webpack은 여기에 있는 파일만 본다. (외부 파일은 webpack에 의해 처리되지 않는다.)
대부분의 리액트 소스 코드들은 이곳에 작성하면 된다.

### package.json 파일

- 해당 프로젝트에 대한 정보들이 들어있다.
- dependencies => 필요한 라이브러리의 목록과 버전이 명시되어있다.
- scripts => 리액트 앱 실행, 빌드, 테스트 등의 스크립트가 명시되어있다.
- eslintConfig => 소스 코드 입력시 문법이나 코드 포맷을 체크해주는 설정을 명시해 준다.

### react app 실행해보기

- npm run start로 실행
- src/App.js의 내용이 화면에 출력된다.

### SPA(Single Page Application)

- 단일 페이지 어플리케이션
- 어떤 웹사이트의 전체 페이지를 하나의 페이지에 담아 동적으로 화면을 변경해 표시하는 기술

#### History API

| 메소드 | 설명 |
|------|------|
History.back()|세션 기록의 바로 뒤 페이지로 이동하는 비동기 메서드 (브라우저의 뒤로가기 버튼과 동일한 효과)
History.forward()|세션 기록의 바로 앞 페이지로 이동하는 비동기 메서드 (브라우저의 앞으로 가기 버튼과 동일한 효과)
History.go()|특정 세션기록으로 이동해 주는 비동기 메서드 1을 넣으면 바로 앞 페이지로, -1을 넣으면 바로 뒤 페이지로 이동한다.
History.pushState()|주어진 데이터를 세션 기록 스택에 넣는다. 직렬화 가능한 모든 js객체를 저장하는 것이 가능하다.
History.replaceState()|최근 세션 기록 스택의 내용을 주어진 데이터로 교체한다.

### JSX 문법

- JSX 컴포넌트에 여러 엘리먼트 요소가 있다면 반드시 부모 요소 하나로 감싸줘야한다.

```JSX
//잘못된 코드
funtion hello() {
  return (
    <div>hello</div>
    <div>alskdei</div>
  )
}
//올바른 코드
funtion hello() {
  return <div>
    <div>hello</div>
    <div>alskdei</div>
    </div>;
}
```

### ES7 React

- 스니펫(snippet) 제공
  - 재사용 가능한 소스 코드

- rce => 클래스 컴포넌트 생성
- rcc => 클래스 컴포넌트 생성
- rfce => 함수형 컴포넌트 생성

## 리액트 계산기 앱 만들기

- 부모 컴포넌트에서 자식 컴포넌트로 정보를 전달할 때는 props를 이용 한다.

```js
//부모(APpp)에서 자식(ExpenseList)으로 보낼때
<ExpenseList
  initialExpenses={this.initialExpenses}
/>
//자식(ExpenseList)이 부모에게서 전달 받을때
export class ExpenseList extends Component {
  render() {
    console.log(this.props.initialExpenses);
  }
}
```

### map 메소드를 사용한 지출 목록 나열

- map() 메소드란?
  - 배열 내의 모든 요소 각각에 대하여 주어진 함수를 호출한 결과를 모아 새로운 배열을 반환한다.

- JSX의 key 속성
  - 리액트에서 요소의 리스트를 나열할 때 Key를 넣어줘야합니다.
  - 키는 리액트가 변경, 추가 또는 제거된 항목을 식별하는데 도움이 됩니다.
  - key에는 유니크한 값을 넣어줘야 한다 (index는 비추천: 리스트가 추가 되거나 제거되면 해당 리스트들의 key값이 바뀌게 된다)

### 버튼 클릭시 상호작용하기

```js
<button 
className='clear-btn' onClick={() =>
console.log(`${this.props.expense.id} clicked`)}>
<MdDelete/>
</button>
```
### 클릭이벤트 발생시 함수 호출하기

```js
//
<butten
  className="clear-btn"
  onClick={() => 지우는 함수 호출 (this.props,expense.id)}
>
<MdDelete/>
</butten>
```

### filter 메소드

- 주어진 함수의 테스트를 통과한 모든 요소를 모아 새로운 배열로 반환합니다.

### React State

- 컴포넌트의 렌더링 결과물에 영향을 주는 데이터를 가지고있는 객체
- State 생성하기
