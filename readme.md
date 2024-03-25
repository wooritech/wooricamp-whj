# Bundler

## Parcel

번들러란?

- 외부 패키지들을 웹에서 사용 가능하게 만들어 주는 기능

번들러의 종류

- 파슬 번들러
  - 구성이 없는 단순한 자동 번들링
  - 소/중형 프로젝트 적합
- 웹팩
  - 매우 꼼꼼한 구성
  - 중/대형 프로젝트에 적합

### ico converter

- 이미지를 ico으로 변형해주는 사이트

### parcel-plugin-static-files-copy

- package.json에 staticFiles 옵션추가


### 정적 파일 연결

- 터미널에 npm i -D parcel-plugin-static-files-copy
- package.json 하단에 아래 코드 추가
```
"staticFiles": {
    "staticPath": "static"
  }
```
- 개발서버 실행하면 아이콘 추가 된걸 확일 할 수 있음

### autoprefixer

- 표준기준이 적용 되지 않는 구형 브라우저를 사용하는 경우 접두사가 붙은 속성이 적용 된다.
- 접두사는 공급업체가 누구인지를 나타내는 공급 업체 접두사(vender prefix)를 사용한다 예를 들어 마이크로소프트의 경우 ms

- 공급 업체 접두사를 외워서 사용하는 것은 어럽기에 자동으로 붙여줄 패키지를 사용하게 된다.

<h4>패키지의 사용법

1. npm i -D postcss
2. npm i -D autoprefixer
3. package.json에 아래 코드 추가
```json
//현재 npm프로젝트에서 지원할 브라우저의 범위를 병시하는 용도 
"browserslist": [
  // 전세계에 점유율이 1% 이상인 모든 브라우저의 마지막의 두개 버전까지는 지원한다.
  "> 1%",
  "last 2 versions"
]
```
4. .postcssrc.js 파일 생성 (뒤에 rc가 붙은 파일은 구성 파일(복잡한 시스템을 단순하게 만드는 것)을 의미합니다.)
5. .postcssrc.js 코드 작성

- js에서 import나 export를 사용하는 방식을 esm이라고 부른다
- node.js에서는 esm을 지원하지 않고 CommonJS 방식을 지원한다.
- import => require()
- export => module.exports

### babel

- ES6 버전 이상일 경우에 해당하는 코드를 이전 js엔진에서 실행 할 수 있는 이전 버전과 호환되는 js버전으로 변환하는데 사용되는 무료 오픈 소스 js 트랜스 컴파일러
- 즉, 최신 문법(es6~7) 코드를 구형 브라우저에서도 작동하는 es5로 변환하는 도구

<h4>설치방법

- 터미널에 npm i -D @babel/core 과 npm i -D @babel/preset-env
- .babelrc.js 파일 생성
- 내용 작성
```js
module.exports = {
  presets: ['@babel/preset-env']
}
```
- package.json에 아래 코드 작성 (postcss를 설치했다면 패스)
```json
"browserslist": [
    "> 1%",
    "last 2 versions"
  ]
```
- main.js 내용 작성
- npm i -D @babel/plugin-transform-runtime (에러 제거)
- .babelrc.js에 내용 추가
```js
module.exports = {
  presets: ['@babel/preset-env'],
  Plugins: [
    ['@babel/plugin-transform-runtime']
  ]
}
```

### CLI(커맨드 라인 인터페이스)

- parcel 한국어판에서 시작하기 -> 커맨드 라인 인터페이스
- 명령어
1. serve 개발용 서버를 시작합니다. parcel index.html (개발용으로 사용할떄)
2. build 애셋을 한 번에 빌드합니다. parcel build index.html (제품화 할때)
- 옵션
1. 결과물 디렉토리
  - 기본값 "dist"
  - 같이 사용 가능한 명령어: serve, watch, build
  - dist라는 폴더의 이름 변경
    - parcel build entry.js --out-dir (dist를 대신할 폴더 구조 예:build/output)
2. 포트 번호
  - 기본값:1234
  - 같이 사용 가능한 명령어:serve
  - 포트 번호 변경
    - parcel serve entry.js --post 원하는 포트 번호
3. 브라우저에서 열기
  - 기본값:비활성화
  - 같이 사용 가능한 명령어:serve
  - parcel entry.js --open
    - 따로 브라우저에 접속하지 않아도 개발서버를 열면 브라우저가 자동으로 열린다.
4. 빠른 모듈 교체(HMR)의 비활성화
  - 기본값:HMR 활성
  - 같이 사용 가능한 명령어:serve, watch
  - parcel entry.js --no-hmr
5. 파일시스템 캐시 비활성화
  - 기본값:캐시 활성
  - 같이 사용 가능한 명령어:serve, watch, build
  - parcel entry.js --no-cache

### 저장소 업로드

- .gitignore 작성
- git git 연결하기
  1. git init
  2. git status
  3. git add .
  4. git status
  5. git commit -m 'Create project'
  6. 깃허브에서 저장소 생성, 저장소 주소 복사
  7. git remote add origin 주소
  8. git push origin master


 