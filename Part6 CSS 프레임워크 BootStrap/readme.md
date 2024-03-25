# 부트 스트랩

- 5.0.2 버전 기준

## 부트 스트랩이란?

- html, css, js 프레임워크이다. 즉, 웹페이지를 쉡게 만드 수 잇게 해주는 도구들의 모임이다.
- scss 스타일 시트를 기반으로 하며, 재사용이 가능한 컴포넌트(버튼, 드롭다운, 탭, 라벨 등)가 있다.
- 컴포넌트들은 css가 사전에 지정되어있어 코드가 단순해진다.

### 트리 쉐이킹

- 단일 번들을 최적화할 때 사용되는 필요하지 않은 코드를 제거하는 기술
- 부트스크랩 5버전부터 적용 

## 부트 스트랩 설치 방법

- html에 아래 코드 추가

```html
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>
```

### 컨포넌트를 프로그램에서 사용하는 방법

- 부트 스트랩 페이지의 components에서 원하는 내용을 복사해서 파일에 붙여넣기한다.
- index.html 파일 참조

### popper.js란

- 팝업을 조금 더 쉽게 만들게 해주는 js 패키지

## 부트 스트랩의 버튼

- 부트 스트랩 사이트 "https://getbootstrap.kr/docs/5.0/components/buttons/"
- button.html 참조
- class로 버튼의 이름을 작성하면 자동으로 그러한 스타일을 가지는 버튼이 완성된다.
- Outline buttons, button group, sizes, disabled state 등의 속성 추가 해서 기능 추가 가능
- 예시 코드

```html
<butten type="butten" class="btn btn-primary">Primary</butten>
```
- 프로젝트에서 공통으로 사용될 css 생성
```css
.btn {
  /* 공통으로 사용될 내용 */
}
/*gold에 원하는 이름 입력*/
.btn.btn--gold { 
  /* 공통 내용에서 변경될 사항 */
}
```

## 드롭다운과 리스트

- 부트스트랩 드롭다운 참조 "https://getbootstrap.kr/docs/5.0/components/dropdowns/"
- index.html 참조

### split button 

- 버튼을 왼쪽과 오른쪽으로 구분
- 왼쪽은 일반 버튼 오른쪽을 드롭다운 버튼이 된다.
- hr class="dropdown-divider"을 사용하면 특정 메뉴를 다른 메뉴와 구분

## 입력 양식

- 개요 "https://getbootstrap.kr/docs/5.0/forms/overview/"
- 폼 컨트롤 "https://getbootstrap.kr/docs/5.0/forms/form-control/"
- 입력 그룹 "https://getbootstrap.kr/docs/5.0/forms/input-group/"

## 모달

- 사용자의 이목을 집중 시키기 위한 그래픽 인터페이스 창
- 하나의 페이지에 다른 하나의 작은 창을 띄워 해당 페이지가 종료 되기 전까지 부모 페이지로 돌아가지 못하게 만드는 창
- "https://getbootstrap.com/docs/5.0/components/modal/"
- html의 class="modal-body" 부분에 원하는 내용을 코딩한다.

## 툴팁

- 어떤 버튼에 마우스를 가져갈 경우 나오는 추가 설명
- "https://getbootstrap.com/docs/5.3/components/tooltips/"

### overview

- 툴팁의 경우 단일 요소 혹은 몇가지 다수 요소가 아니라 굉잔히 많은 부분에서 사용되기 때문에 초기화를 하고 사용할 기능을 명시하여야 한다.
- 초기화 방법: 아애 코드를 js에 입력
```js
var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
})
```

## npm 프로젝트 생성

- 터미널에 작성하기
1. npm init -y
2. npm i -D parcel-bundler

- package.json 수정하기
1. devDependencies에 parcel-bundler 설치 확인
2. scripts의 내용 삭제
3. 해당 위치에 "dev": "parcel 해당 html이름.html" 작성
4. 아래 추가로 "build": "parcel build 해당 html이름.html" 작성

- 터미널에 부트스트랩 설치
1. 부트스트랩 홈페이지에서 Installation에서 코드 가져오기
   - npm install bootstrap@next

- package.json에서 확인하기
1. dependencies에 bootstrap 추가 확인하기

- 새로운 scss 폴더 생성
- 폴더 내부에 scss 파일 생성후 해당 html이름.html에 연결
- scss에 원하는 내용 작성
- npm run dev로 개발 서버 열기

## 커스텀마이징

### 색상

- "https://getbootstrap.com/docs/5.0/customize/color/"
- sass 항목에서 필수 코드 가져오기
```js
@import "../node_modules/bootstrap/scss/functions";
@import "../node_modules/bootstrap/scss/variables";
@import "../node_modules/bootstrap/scss/mixins";
```

## 트리 쉐이킹(성능 최적화)

### optimize

#### lean sass imports

- 최대한 간결히 사용할수있는 scss의 기능을 가져와 사용

#### lean javascript

- js에서 재공하는 lean sass imports와 동일한 기능
- 초기화 필요 (필요하지 않은 컴포넌트도 있다. 부트스크랩 홈페이지에서 js에 관한 내용이 없는 컴포넌트들이 이에 해당)
- default exports (기본 내보내기)

```js
// modal 기능을 받아서 내보내기
import Modal from 'bootstrap/js/dist/modal'
// 생성자 함수로 사용할 modal 요소를 지정해서 초기화
const modal = new Modal(document.getElementById('myModal'))
```

- 개별 기능을 가져와 사용할 경우 popperjs를 별도로 설치해야한다.
1. npm i @popperjs/core

- 모달 컴포턴트 초기화 코드 
```js
var myModal = new bootstrap.Modal(document.getElementById('myModal'), options)"
```
- 아래처럼 모달 종료 방식을 설정 할 수 있다.
```js
var myModal = new bootstrap.Modal(document.getElementById('myModal'), {
  backdrop: 'static'
})
```

ㄹㄴㅁㅇㄹㅁㅇㄹㅁㄹㅁ