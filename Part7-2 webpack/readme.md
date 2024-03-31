## webpack

1. npm init -y
2. npm i -D webpack (번들러가 동작하기 위한 중요 패키지)
3. npm i -D webpack-cli (커맨드라인 인터페이스(터미널에서 입력하는 명령어)를 지원해주는 패키지)
4. npm i -D webpack-dev-server@next (dev 명령어로 개발서버를 오픈 할 때 패이지를 개발에 특화되게 만드는 패키지)
5. package.json 내용 확인 및 스크립트 부분 내용 변경
```json
"scripts": {
    "dev": "webpack-dev-server --mode development",
    "build": "webpack --mode production"
  }
```
6. webpack.config.js 내용 참조
```js
//import
const path = require('path')
//export
module.exports = {
  // 파일을 읽어들이기 시작하는 진입점 설정
  // 웹팩은 기본적으로 js를 진입점으로 사용한다
  entry: './js/main.js',

  // entry로 읽어들인 파일의 연결관계를 웹팩이 분석해서 결과(번들)을 반환하는 설정
  // npm run build를 사용하면
  // dist 폴더에 main.js가 생성된다. (기존 main.js와 동일한 내용이 복사된다)(폴더명, 파일명 변경 가능 파일명 기본값 dist)
  output: {
    // 절대 경로 필요
    // resolve는 첫번째 인수와 두번째 인수의 경로를 합쳐주는 역할을 한다.
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js',
    // 구성옵셩을 변경했을때 기존 내용 제거
    clean: true
  }
}
```
7. npm i -D html-webpack-plugin (index.html을 dist 폴더에 연결)
8. webpack.config.js 내용 참조
9. npm run dev를 사용했을때 강의와 다르게 오류가 발생
- Invalid configuration object. Webpack has been initialized using a configuration object that does not match the API schema.
 - configuration has an unknown property 'Plugins'. These properties are valid
10. 웹팩 버전 문제?

### 정적 파일 연결

1. static파일 생성 내부에 images 파일 생성
2. npm i -D copy-webpack-plugin 패키지 설치
3. webpack.config.js에 아래 코드 추가
- import 위치에
```js
const CopyPlugin = require('copy-webpack-plugin')
``` 
- plugins 내부에
```js
new CopyPlugin({
  patterns: [
    { from: 'static' }
  ]
})
```