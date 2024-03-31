//import
const path = require('path')
const HtmlPlugin = require('html-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin')

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
  },
  // 번들링 후 결과물의 처리 방식 등 다양한 플러그인들을 설정
  Plugins: [
    new HtmlPlugin({
      template: './index.html'
    })
  ],

  devServer: {
    host: 'localhost'
  }
}