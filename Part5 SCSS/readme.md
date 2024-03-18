# SCSS(sass) = CSS 전처리 도구

- 학습시 sassmeister.com이 유용 (scss <=> css 변환 내용 바로 확인 가능)
- 프로젝트에서 scss를 사용하기 위해서는 기본 프로젝트를 npm 프로젝트로 변경해야된다.
1. 터미널에 npm init -y
2. npm install -D parcel-bundler
3. package.json에 parcel-bundler 적용 된것을 확인
4. css 확장자를 scss로 변경
5. package.json에 scripts의 내용을 제거 후 아래 코드를 작성
  - "dev": "parcel index.html",
  - "build": "parcel build index.html"

## sass 문법이 기존의 css와 호완이 안되는 문제를 해결하기 위해서 SCSS 문법을 새로 만들었다.

- sass와 scss의 문법적 차이

1. sass의 경우 문장의 끝에 세미콜론이 없고 선택자 뒤에 중괄호도 존재하지 않는다.
2. sass의 경우 코드가 전부 들여쓰기 형태로 구분을 해서 해석된다. 
3. scss의 @mixin은 sass에서 = 기호
4. scss의 @include는 sass에서 + 기호

## scss를 사용하는 이유 

- css에서 조상요소 선택자를 전부 써야되는 불편함을 sass의 중첩기능을 사용하면 해결 가능
- 특정 색상을 변수로 만들어서 재활용

## scss가 css로 적용 되는 과정

- scss로 작성한 코드가 파슬 번들러를 통해서 css로 변환되어 동작한다.

## 코드펜 scss 사용법

- css 측변 톱니바퀴 -> css preprocessor에서 scss 선택 -> 저장

## 주석

- /* */
- // js 식 주석 처리 사용 가능 css로 변경할 경우 해당 라인 사라짐

## 중첩

- 예시 코드

```scss
.class {
  .class {
    #id {

    }
    li {

    }
  }
}
```

## 상위 선택자 참조

- & 기호
- 자신이 포함된 영역의 상위 선택자를 참조
- 예시 코드

```scss
.btn {
  position: absolute;
  &.active {
    color: red;
  }
}

.list {
  li {
    &:last-child {
      margin-right: 0;
    }
  }
}

.fs {
  &-small { font-size: 12px; }
  &-large { font-size: 14px; }
}
```
가

```css
.btn {
  position: absolute;
}
.btn.active {
  color: red;
}

.list li:last-child {
  margin-right: 0;
}

.fs-small {
  font-size: 12px;
}
.fs-large {
  font-size: 16px;
}
```

## 중첩된 속성

- 예시 코드

```scss
.box {
  /*네임스페이스 => 이름의 범위, 아래에서는 font-가 이에 해당*/
  font: {
    weight: bold;
    size: 10px;
    family: sans-serif;
  };
}
```
는 css로 아래와 같이 표현된다.

```css
.box {
  font-weight: bold;
  font-size: 10px;
  font-family: sans-serif;
}
```

## 변수 (Variables)

### scss에서 변수 선언 방법

- js에서 const와 let은 $로 대체
- = 기호는 : 기호로 대체
- 사용시 $변수명으로 사용

### 변수의 유효범위

- 중괄호 외부에서 선언 = 전체영역에서 사용 가능
- 중괄호 내부에서 선언 = 내부에서만 사용 가능
- 변수가 재할당 되면 그 아래쪽 코드에서는 변수의 값이 재할당된 값이로 적용된다

## 산술 연산

- +, -, *, /, %
- /는 다른 연산자들과 다르게 단축속성에서 사용하는 /와 분류하여 인식하기 위해서 방법이 필요하다.
1. 연산하는 부분은 소괄호로 묶는다. 예) margin: (10px/2);
2. 변수로 선언한 값에다가 연산자를 사용한다. 예) margin: $변수명 / 2;
3. /연산자를 사용할때 다른 연산자를 같이 사용한다. 예) margin: 10px * 20px / 2;

- 산술 연산할 경우 단위가 동일하여야 한다.
- css에서는 calc 함수를 사용하면 다른 단위여도 연산가능 예) width: calc(100% - 200px);

## 재활용 (@mixin)

- 재활용 가능한 코드 만들기
- @mixin은 css의 모음으로 생각하면 된다.
- 코드 생성은 @mixin 원하는 이름 {}
- 코드 사용은 @include 위에서 정한 이름;
- 인수 선언 가능

- 예시 코드
```scss
/*인수 size의 기본값 100px */
/*기본값 설정하지 않을 경우 모든 @include에 원하는 값을 설정해야된다.*/
/*복수의 인수 선언 가능*/
@mixin center($size: 100px, $color: tomato) {
  width: $size;
  height: 100px;
  background-color: $color;
}
.container {
  @include center(200px, red);
  .item {
    @include center($color: green);
  }
}
.box {
  @include center;
}
```
```css
.container {
  width: 200px;
  height: 100px;
  background-color: red;
}
.container .item {
  width: 100px;
  height: 100px;
  background-color: green;
}
.box {
  width: 100px;
  height: 100px;
  background-color: tomato;
}
```

## 재활용(@content)

- @mixin에 연게해서 사용한다.
- @mixin으로 작성한 부분을 재활용 할 경우에 추가로 작성하고자 하는 내용이있으면 중괄호로 열고 작성하면 된다.
- 예시 코드
```scss
@mixin left-top {
  position: absolute;
  top: 0;
  left: 0;
  @content;
}
.container {
  width: 100px;
  height: 100px;
  @include left-top;
}
.box {
  width: 100px;
  height: 100px;
  @include left-top {
    bottom: 200px
  }
}
```
```scss
.container {
  width: 100px;
  height: 100px;
  position: absolute;
  top: 0;
  left: 0;
}
.box {
  width: 100px;
  height: 100px;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 200px
}
```

## 반복문(@for)

```scss
/*반복문 @for 변수 $i*/
@for $i from 1 through 10 {
  /*반복할 코드*/
  /*보간은 #{}를 사용하여 작성 (js에서는 ${}을 사용)*/
  .box:nth-child(#{$i}) {
    width: 100px * $i;
  }
}
```

## 반복문(@each)

- $list 데이터 혹은 $map 데이터를 사용하기 위해 사용한다.
- 코드 예시
```scss
$list: orange, royalblue, yellow;

@each $c in $list {
  .box {
    color: $c;
  }
}
```
```css
.box {
  color: orange;
}
.box {
  color: royalblue;
}
.box {
  color: yellow;
}
```
```scss
$map: (
  o: orange,
  r: royalblue,
  y: yellow
)

@each $key, $value in $map {
  .box-#{$key} {
    color: $value;
  }
}
```
```css
.box-o {
  color: orange;
}
.box0r {
  color: royalblue;
}
.box-y {
  color: yellow;
}
```

## 함수

- @mixin은 css의 모음으로 생각하면 된다.
- @function 함수는 어떤 값을 연산해서 반환하기 위함이다. (js의 function과 유사)

- 예시코드

```scss
@function ratio($size, $ratio) {
  @return $size * $ratio
}

.box {
  $width: 100px;
  width: $width;
  height: ratio($width, 1/2);
}
```
=
```css
.box {
  width: 100px;
  height: 50px;
}
```

## 색상 내장 함수

- scss문법 안에서 만들어져 있어서 언제든지 호출해서 사용 가능하다.

- mix(인수1, 인수2); 두 인수의 색상을 섞는다.
- lighten(인수1, 퍼센트) 퍼센트 많큼 색상을 밝게 만든다.
- darken(인수1, 퍼센트) 퍼센트 많큼 어둡게 만든다.
- saturate(인수1, 퍼센트) 퍼센트 많큼 채도를 올린다.
- desaturate(인수1, 퍼센트) 퍼센트 많큼 채도를 내린다.
- grayscale(인수1) 주어진 색상을 회색으로 만든다.
- invert(인수1) 색상 반전
- rgba(인수1, 투명도) 인수1의 색상에 0~1 범위의 투명도 부여

- 예시 코드

```scss
.box {
  $color: red;
  .container {
    background-color: mix($color, green)
    background-color: ($color, 10%)
    background-color: ($color, 10%)
    background-color: ($color, 10%)
    background-color: ($color, 10%)
    background-color: ($color)
    background-color: ($color)
    background-color: ($color, .5)
  }
}
```

## 가져오기

- @import url ("주소.확장자") 방식 (css와 동일)
- @import "주소" 방식 scss에서는 url과 확장자를 명시하지 않아도 정상 작동 

## 데이터의 종류

- $number: 1; // .5, 100px, lem = 숫자 데이터
- $string: bold; // relative, "../images/a.png" = 문자 데이터
- $color: red; // blue, #FFF, rgbs(0,0,0,.5) = 색상 데이터
- $boolean: true; // false = 불린 데이터
- $null: null;
- $list: orange, royalblue, yellow; = 배열 데이터와 유사, 리스트 데이터
```scss
$map: (
  o: orange,
  r: royalblue,
  y: yellow
); // 맵 데이터 = 객체 데이터와 유사, 키와 벨류 형태로 구성, 객체 데이터가 {}로 영역을 표시하는것과 다르게 ()를 사용
```


